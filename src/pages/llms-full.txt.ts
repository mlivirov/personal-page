import type { APIRoute } from 'astro';
import { llmsFullTxt } from '../lib/llm';

export const GET: APIRoute = ({ site }) =>
  new Response(llmsFullTxt(site!.toString()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
