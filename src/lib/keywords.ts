// Keyword lists derived from the tech stack, shared by the page head, structured data and llms.txt.
import { techStack, searchRoles, coreTech, seo } from '../data/profile';

const unique = (items: string[]) => [...new Map(items.map((i) => [i.toLowerCase(), i])).values()];

// Earlier-career groups stay visible on the page but aren't used as search signals,
// so the site isn't matched to work you no longer take.
const current = () => techStack.filter((g) => !g.group.startsWith('Earlier'));

// Main names only, e.g. "PostgreSQL".
export const techNames = () => unique(current().flatMap((g) => g.items.map((i) => i.name)));

// Main names plus every alias, e.g. "PostgreSQL", "Postgres", "PgSQL".
export const techTerms = () => unique(current().flatMap((g) => g.items.flatMap((i) => [i.name, ...(i.aliases ?? [])])));

// Role × technology phrases people type into search, e.g. "C# developer", "freelance Kafka architect".
export const basePhrases = () => coreTech.flatMap((t) => searchRoles.map((r) => `${t} ${r}`));

export const searchPhrases = () =>
  unique(basePhrases().flatMap((p) => [p, `freelance ${p}`, `senior ${p}`, `remote ${p}`]));

// Everything, for <meta name="keywords"> and schema `keywords`.
export const allKeywords = () => unique([...seo.keywords, ...techTerms(), ...searchPhrases()]);
