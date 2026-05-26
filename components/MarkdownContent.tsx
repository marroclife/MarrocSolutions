import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert max-w-none 
      prose-headings:text-green-400 prose-headings:font-bold 
      prose-p:text-gray-300 prose-p:leading-relaxed 
      prose-strong:text-green-400 prose-strong:font-semibold 
      prose-a:text-green-400 prose-a:underline hover:prose-a:text-green-300 
      prose-li:text-gray-300 prose-ul:list-disc prose-ol:list-decimal 
      prose-code:text-green-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded 
      prose-pre:bg-gray-900 prose-pre:border prose-pre:border-green-900/50 prose-pre:text-gray-200 
      prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:italic prose-blockquote:text-gray-400 
      prose-hr:border-gray-700 
      bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 shadow-2xl"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
