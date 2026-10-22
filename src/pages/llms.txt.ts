import type { APIRoute } from 'astro';
import { llmsTxt } from '../lib/llm';

export const GET: APIRoute = ({ site }) =>
  new Response(llmsTxt(site!.toString()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
