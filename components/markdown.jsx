'use client';
import MarkdownToJSX from 'markdown-to-jsx';

export function Markdown({ children }) {
  return <MarkdownToJSX options={{ forceBlock: true }}>{children}</MarkdownToJSX>;
}

export default Markdown;
