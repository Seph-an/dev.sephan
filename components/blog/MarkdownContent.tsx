import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="blog-content space-y-6 text-lg leading-relaxed text-white/80">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 className="mb-6 mt-16 text-3xl font-bold text-white">{children}</h2>,
          h3: ({ children }) => <h3 className="mb-4 mt-12 text-2xl font-bold text-white">{children}</h3>,
          p: ({ children }) => <p>{children}</p>,
          ul: ({ children }) => <ul className="list-disc space-y-2 pl-6 marker:text-emerald-400">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-emerald-400">{children}</ol>,
          li: ({ children }) => <li className="pl-1">{children}</li>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-emerald-500/40 pl-5 italic text-white/70">{children}</blockquote>,
          a: ({ href = "", children }) => href.startsWith("/") ? (
            <Link href={href} className="text-emerald-400 underline decoration-emerald-400/30 underline-offset-4 hover:text-emerald-300">{children}</Link>
          ) : (
            <a href={href} target="_blank" rel="noreferrer" className="text-emerald-400 underline decoration-emerald-400/30 underline-offset-4 hover:text-emerald-300">{children}</a>
          ),
          code: ({ children }) => <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-emerald-200">{children}</code>,
          pre: ({ children }) => <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm">{children}</pre>,
          table: ({ children }) => <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-base">{children}</table></div>,
          thead: ({ children }) => <thead className="bg-white/5">{children}</thead>,
          th: ({ children }) => <th className="border-b border-white/20 p-3 font-semibold text-white">{children}</th>,
          td: ({ children }) => <td className="border-b border-white/10 p-3">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
