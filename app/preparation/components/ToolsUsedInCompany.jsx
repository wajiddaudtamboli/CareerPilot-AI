"use client";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { ThemeContext } from "../../components/ThemeContext";
import QuestionLoader from "../../components/Loader";
import { Code, GitBranch, Github, Boxes, Hammer, Wrench, Server, Terminal, Cpu, Database, Globe, Cloud, Figma, Chrome } from "lucide-react";

const iconForTool = (name = "") => {
  const n = name.toLowerCase();
  if (n.includes("github")) return Github;
  if (n.includes("git")) return GitBranch;
  if (n.includes("vscode") || n.includes("visual studio")) return Code;
  if (n.includes("jira")) return Boxes;
  if (n.includes("slack")) return Boxes;
  if (n.includes("docker")) return Server;
  if (n.includes("kubernetes") || n.includes("k8")) return Server;
  if (n.includes("postman")) return Terminal;
  if (n.includes("figma")) return Figma;
  if (n.includes("chrome") || n.includes("browser")) return Chrome;
  if (n.includes("aws") || n.includes("azure") || n.includes("gcp") || n.includes("cloud")) return Cloud;
  if (n.includes("jira") || n.includes("trello") || n.includes("notion")) return Boxes;
  if (n.includes("mysql") || n.includes("postgres") || n.includes("mongodb") || n.includes("db")) return Database;
  if (n.includes("ci") || n.includes("cd") || n.includes("pipeline")) return Hammer;
  if (n.includes("build") || n.includes("compile")) return Cpu;
  return Wrench;
};

const storageKey = (profession) => `tools-cache:v1:${(profession||'').trim().toLowerCase()}`;

export default function ToolsUsedInCompany() {
  const { isDarkMode } = useContext(ThemeContext);
  const [profession, setProfession] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const inMemory = useRef(new Map());

  // Load from cache on mount if query param exists (optional)
  useEffect(() => {
    // no-op for now
  }, []);

  const fetchTools = async (q) => {
    const key = storageKey(q);
    setError(null);

    // In-memory cache
    if (inMemory.current.has(key)) {
      setData(inMemory.current.get(key));
      return;
    }

    // localStorage cache
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(key);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setData(parsed);
          inMemory.current.set(key, parsed);
          return;
        } catch {}
      }
    }

    setLoading(true);
    try {
      const prompt = `Return ONLY strict JSON with this schema (no markdown, no extra text): {\n  \"profession\": string,\n  \"tools\": Array<{ \"name\": string, \"category\": string }>\n}\nProfession: ${q}.\nList practical, commonly used tools for this role (5-12 items).`;

      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const json = await res.json();
      const text = json?.response || '';

      // Extract JSON from plain text or fenced code
      const extracted = extractJson(text);
      const parsed = JSON.parse(extracted);

      // Normalize
      const normalized = {
        profession: parsed.profession || q,
        tools: Array.isArray(parsed.tools) ? parsed.tools.map(t => ({
          name: String(t.name || '').trim(),
          category: t.category ? String(t.category).trim() : 'General'
        })) : []
      };

      setData(normalized);
      inMemory.current.set(key, normalized);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(normalized));
      }
    } catch (e) {
      console.error('Tools fetch error', e);
      setError('Unable to fetch tools. Please try again.');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const onSearch = (e) => {
    e?.preventDefault();
    const q = profession.trim();
    if (!q) {
      setError('Please enter a profession to search');
      return;
    }
    fetchTools(q);
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-gray-100' : 'bg-white text-gray-800'} min-h-screen`}> 
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Tools Used in Company</h1>
        <p className="mb-6 text-sm opacity-80">Search by profession (e.g., Frontend Developer, Data Analyst) to see commonly used tools.</p>

        <form onSubmit={onSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            className={`flex-1 px-4 py-3 rounded-md border ${isDarkMode ? 'bg-gray-900 border-gray-700 placeholder-gray-500' : 'bg-white border-gray-300 placeholder-gray-400'}`}
            placeholder="e.g., Frontend Developer"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <button type="submit" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Search</button>
        </form>

        {loading && (
          <div className="py-10 flex justify-center"><QuestionLoader /></div>
        )}

        {error && (
          <div className={`mb-4 p-3 rounded-md ${isDarkMode ? 'bg-red-900/30 text-red-300 border border-red-800' : 'bg-red-50 text-red-700 border border-red-200'}`}>{error}</div>
        )}

        {data && Array.isArray(data.tools) && data.tools.length === 0 && (
          <div className={`mb-4 p-3 rounded-md ${isDarkMode ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-800' : 'bg-yellow-50 text-yellow-800 border border-yellow-200'}`}>
            No tools found for this profession.
          </div>
        )}

        {data && Array.isArray(data.tools) && data.tools.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{data.profession}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.tools.map((t, idx) => {
                const Icon = iconForTool(t.name);
                return (
                  <li key={`${t.name}-${idx}`} className={`flex items-center gap-3 p-4 rounded-lg border ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                      <Icon className={`${isDarkMode ? 'text-gray-200' : 'text-blue-600'}`} size={20} />
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{t.name}</p>
                      <p className="text-sm opacity-70">{t.category || 'General'}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function extractJson(text) {
  if (!text) return '{}';
  // If it already looks like JSON
  const trimmed = text.trim();
  if (trimmed.startsWith('{') && trimmed.endsWith('}')) return trimmed;
  // Remove code fences
  const fenceMatch = trimmed.match(/```(?:json)?\n([\s\S]*?)```/i);
  if (fenceMatch) return fenceMatch[1];
  // Fallback: find first { ... } block
  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');
  if (start !== -1 && end !== -1 && end > start) return trimmed.slice(start, end + 1);
  return '{}';
}
