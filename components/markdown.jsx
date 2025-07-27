'use client';
import Markdown from 'markdown-to-jsx';

export default function MarkdownRenderer({ children }) {
  return <Markdown options={{ forceBlock: true }}>{children}</Markdown>;
}
