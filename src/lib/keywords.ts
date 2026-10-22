// Keyword lists derived from the tech stack, shared by the page head, structured data and llms.txt.
import { techStack, searchRoles, coreTech, seo } from '../data/profile';

const unique = (items: string[]) => [...new Map(items.map((i) => [i.toLowerCase(), i])).values()];

// Main names only, e.g. "PostgreSQL".
export const techNames = () => unique(techStack.flatMap((g) => g.items.map((i) => i.name)));

// Main names plus every alias, e.g. "PostgreSQL", "Postgres", "PgSQL".
export const techTerms = () => unique(techStack.flatMap((g) => g.items.flatMap((i) => [i.name, ...(i.aliases ?? [])])));

// Role × technology phrases people type into search, e.g. "C# developer", "freelance Kafka architect".
export const basePhrases = () => coreTech.flatMap((t) => searchRoles.map((r) => `${t} ${r}`));

export const searchPhrases = () =>
  unique(basePhrases().flatMap((p) => [p, `freelance ${p}`, `senior ${p}`, `remote ${p}`]));

// Everything, for <meta name="keywords"> and schema `keywords`.
export const allKeywords = () => unique([...seo.keywords, ...techTerms(), ...searchPhrases()]);
