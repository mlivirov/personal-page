import type { APIRoute } from 'astro';
import { llmsFullTxt } from '../lib/llm';

// Markdown twin of the home page; some AI agents request /index.md or follow rel="alternate" text/markdown.
export const GET: APIRoute = ({ site }) =>
  new Response(llmsFullTxt(site!.toString()), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
