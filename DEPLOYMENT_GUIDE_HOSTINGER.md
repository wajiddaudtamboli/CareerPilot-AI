# Hostinger Deployment Guide for CareerPilot-AI

## Prerequisites
- Hostinger VPS or Cloud Hosting account
- SSH access enabled
- Domain name configured (optional)

## Step-by-Step Deployment

### 1. Server Setup

```bash
# SSH into your Hostinger server
ssh username@your-server-ip

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 22.x (required by package.json)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v22.x.x
npm --version

# Install PM2 for process management (optional but recommended)
sudo npm install -g pm2
```

### 2. Clone and Setup Project

```bash
# Navigate to web root (adjust path based on your Hostinger setup)
cd /home/username/domains/your-domain.com/public_html
# OR for VPS
cd /var/www/html

# Clone your repository
git clone https://github.com/your-username/CareerPilot-AI.git
cd CareerPilot-AI

# Install dependencies
npm install
```

### 3. Environment Configuration

```bash
# Create production environment file
nano .env.local
```

Add the following (replace with your actual keys):

```env
# Gemini AI API
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Optional: YouTube API (if using)
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key

# Optional: Database (if using)
DATABASE_URL=your_database_connection_string

# Port (Hostinger might assign specific port)
PORT=3000
```

Save and exit (Ctrl+X, Y, Enter)

### 4. Build the Project

```bash
# Build for production
npm run build

# Verify build completed successfully
ls -la .next/
```

### 5. Start the Application

#### Option A: Using PM2 (Recommended for Production)

```bash
# Start with PM2
pm2 start npm --name "careerpilot" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
# Follow the command it outputs (usually requires sudo)

# Check status
pm2 status
pm2 logs careerpilot

# Useful PM2 commands:
# pm2 restart careerpilot  # Restart app
# pm2 stop careerpilot     # Stop app
# pm2 delete careerpilot   # Remove from PM2
# pm2 monit                # Monitor in real-time
```

#### Option B: Using Direct Node (Simple)

```bash
# Run in foreground (for testing)
npm start

# Run in background (not recommended for production)
nohup npm start > app.log 2>&1 &
```

### 6. Configure Nginx Reverse Proxy (Recommended)

If using Nginx as reverse proxy:

```bash
# Edit Nginx configuration
sudo nano /etc/nginx/sites-available/careerpilot
```

Add:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/careerpilot /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

### 7. SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal should be configured automatically
# Test renewal:
sudo certbot renew --dry-run
```

### 8. Firewall Configuration

```bash
# Allow necessary ports
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw allow 3000  # Next.js (if not using reverse proxy)
sudo ufw enable
sudo ufw status
```

## Updates and Maintenance

### Deploying Updates

```bash
# SSH into server
ssh username@your-server-ip
cd /path/to/CareerPilot-AI

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Rebuild application
npm run build

# Restart with PM2
pm2 restart careerpilot

# OR restart manually if not using PM2
pkill -f "node.*next"
npm start &
```

### Monitoring

```bash
# View PM2 logs
pm2 logs careerpilot

# View PM2 dashboard
pm2 monit

# Check application health
curl http://localhost:3000

# Check disk space
df -h

# Check memory usage
free -m
```

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000
# OR
netstat -tulpn | grep 3000

# Kill the process
kill -9 <PID>
```

### Application Won't Start

```bash
# Check logs
pm2 logs careerpilot --lines 100

# Check if port is available
nc -zv localhost 3000

# Verify Node.js version
node --version  # Must be v22.x.x

# Check environment variables
cat .env.local
```

### High Memory Usage

```bash
# Restart application
pm2 restart careerpilot

# Check memory
pm2 show careerpilot

# If needed, increase server resources or optimize Next.js build
```

## Performance Optimization

### 1. Enable Gzip Compression (Nginx)

Already enabled in `next.config.mjs`, but verify in Nginx:

```nginx
gzip on;
gzip_vary on;
gzip_types text/plain text/css application/json application/javascript text/xml;
```

### 2. CDN Setup (Optional)

Consider using Cloudflare as CDN:
1. Point your domain to Cloudflare
2. Configure Cloudflare proxy
3. Enable auto-minification
4. Enable Brotli compression

### 3. Database Optimization

If using a database:
- Use connection pooling
- Enable query caching
- Optimize indexes
- Regular maintenance

### 4. Monitoring Setup

```bash
# Install monitoring tools
pm2 install pm2-logrotate  # Log rotation
pm2 set pm2-logrotate:max_size 10M

# Consider installing:
# - New Relic for APM
# - Datadog for infrastructure monitoring
# - Sentry for error tracking
```

## Security Best Practices

1. **Keep secrets secure**: Never commit `.env.local` to Git
2. **Regular updates**: 
   ```bash
   npm audit
   npm audit fix
   ```
3. **Firewall**: Only open necessary ports
4. **SSH**: Use key-based authentication instead of passwords
5. **Backups**: Regular database and file backups
6. **Rate limiting**: Consider implementing rate limiting for APIs

## Backup Strategy

```bash
# Create backup script
nano ~/backup-careerpilot.sh
```

Add:

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/username/backups"
APP_DIR="/path/to/CareerPilot-AI"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup application files
tar -czf $BACKUP_DIR/app_$DATE.tar.gz $APP_DIR

# Backup environment variables (encrypt this!)
cp $APP_DIR/.env.local $BACKUP_DIR/env_$DATE.bak

# Remove old backups (keep last 7 days)
find $BACKUP_DIR -name "app_*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "env_*.bak" -mtime +7 -delete

echo "Backup completed: $DATE"
```

Make executable and schedule:

```bash
chmod +x ~/backup-careerpilot.sh

# Add to crontab (daily at 2 AM)
crontab -e
# Add: 0 2 * * * /home/username/backup-careerpilot.sh
```

## Cost Optimization

1. **Choose right plan**: Start with VPS if traffic is moderate
2. **CDN**: Reduce bandwidth costs with Cloudflare (free tier)
3. **Image optimization**: Already configured in Next.js
4. **API caching**: Implement caching for API responses
5. **Database**: Use connection pooling to reduce overhead

## Support and Resources

- Hostinger Documentation: https://www.hostinger.com/tutorials/
- Next.js Deployment: https://nextjs.org/docs/deployment
- PM2 Documentation: https://pm2.keymetrics.io/docs/

---

**Last Updated**: 2024  
**For Support**: Create an issue on GitHub or contact the development team
