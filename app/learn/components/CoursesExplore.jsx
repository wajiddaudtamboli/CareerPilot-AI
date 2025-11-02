"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog.jsx";

const YT_LINKS = [
  "https://youtu.be/4WjtQjPQGIs?si=z_K7HEkDqHtzAgat",
  "https://youtu.be/-WN74rN9OPI?si=5HWUSiRwyAZNuVYU",
  "https://youtu.be/-n2rVJE4vto?si=PidI1QdlOww6Icm5",
  "https://youtu.be/VTLCoHnyACE?si=DplNf4QdlXGt0fUv",
  "https://youtu.be/yBcfzZJ-gS8?si=WZa_UgIhdpoqy0-b",
  "https://youtu.be/-DzowlcaUmE?si=HErFWS1_lcgc0fcj",
];

function toEmbedUrl(url) {
  const idMatch = url.match(/[\/?=]([A-Za-z0-9_-]{11})(?:[&#?]|$)/);
  const id = idMatch ? idMatch[1] : null;
  return id ? `https://www.youtube.com/embed/${id}` : null;
}

export default function CoursesExplore() {
  const { isDarkMode } = useContext(ThemeContext);
  const [meta, setMeta] = useState({}); // url -> {title, thumbnail_url}
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        const results = await Promise.all(
          YT_LINKS.map(async (u) => {
            try {
              const r = await fetch(`/api/youtube/oembed?url=${encodeURIComponent(u)}`);
              if (!r.ok) throw new Error('oEmbed failed');
              const j = await r.json();
              return [u, j];
            } catch {
              return [u, { title: 'YouTube Video', thumbnail_url: `https://i.ytimg.com/vi/${(toEmbedUrl(u)||'').split('/').pop()}/hqdefault.jpg` }];
            }
          })
        );
        if (!cancelled) {
          const map = Object.fromEntries(results);
          setMeta(map);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className={`${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'} min-h-screen`}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Courses Explore</h1>
        <p className="opacity-80 mb-8">Curated video lessons. Click a card to watch.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {YT_LINKS.map((url) => {
            const m = meta[url] || {};
            const embed = toEmbedUrl(url);
            return (
              <Dialog key={url}>
                <DialogTrigger asChild>
                  <button className={`text-left rounded-lg overflow-hidden border ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} shadow-sm hover:shadow-md transition` }>
                    <div className="aspect-video overflow-hidden bg-black/10">
                      {m.thumbnail_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={m.thumbnail_url} alt={m.title || 'Video'} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full animate-pulse" />
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium line-clamp-2">{m.title || 'YouTube Video'}</h3>
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className={`${isDarkMode ? '!bg-gray-950 !text-gray-100' : ''} max-w-3xl w-[95vw]`}>
                  {embed ? (
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full rounded-md"
                        src={`${embed}?autoplay=1`}
                        title={m.title || 'Course video'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <p>Unable to load video.</p>
                  )}
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </div>
  );
}
