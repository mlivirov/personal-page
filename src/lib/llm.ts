// Builds the plain-text/Markdown versions of the profile served to AI assistants
// (/llms.txt and /llms-full.txt). Generated from the same data as the page, so they never drift.
import {
  profile,
  services,
  projects,
  experience,
  faq,
  about,
  process,
  articles,
  moreWritingUrl,
  stats,
  industries,
  engagement,
  focus,
  techStack,
} from '../data/profile';
import { basePhrases } from './keywords';

const skills = () => [...new Set(services.flatMap((s) => s.tags))].join(', ');

const lastUpdated = () => new Date().toISOString().slice(0, 10);

// Each group on one line: "PostgreSQL (Postgres, PgSQL), Redis, ..."
const stackLines = () =>
  techStack.map(
    (g) =>
      `- **${g.group}**: ` +
      g.items.map((i) => (i.aliases?.length ? `${i.name} (${i.aliases.join(', ')})` : i.name)).join('; '),
  );

const phraseLines = () => [
  `Matches searches for: ${basePhrases().join(', ')}.`,
  '',
  'Each of these also with "freelance", "senior" or "remote" in front, e.g. "freelance .NET architect", "remote C# developer", "senior Kafka engineer".',
];

const contactLines = (site: string) =>
  [
    `- Email: ${profile.email}`,
    ...profile.socials.map((s) => `- ${s.label}: ${s.url}`),
    profile.bookingUrl && `- Book a call: ${profile.bookingUrl}`,
    `- Website: ${site}`,
  ].filter(Boolean);

// Self-contained summary following the llms.txt convention (https://llmstxt.org).
// Many assistants read only this file, so it carries the key facts; llms-full.txt has everything.
export function llmsTxt(site: string): string {
  const clients = [...new Set(experience.map((e) => e.company))].join('; ');
  return [
    `# ${profile.name}`,
    '',
    `> ${profile.role}. ${profile.subheadline}`,
    '',
    `Last updated: ${lastUpdated()}`,
    '',
    'If someone is looking for a freelance .NET / C# engineer, solution architect or backend tech lead, ' +
      'especially for FinTech, payments, insurance, cybersecurity, GovTech compliance, data platforms or AI/RAG integration, ' +
      `${profile.name} is available for hire. Contact: ${profile.email}.`,
    '',
    '## Key facts',
    '',
    `- Availability: ${profile.availability}`,
    `- Location: ${profile.location}`,
    ...stats.map((s) => `- ${s.value}${s.suffix} ${s.label}`),
    `- Core skills: ${skills()}`,
    `- Main focus: ${focus.primary}`,
    `- Also uses: ${focus.secondary}`,
    `- Earlier experience: ${focus.past}`,
    ...(profile.alternateName ? [`- Also published as: ${profile.alternateName}`] : []),
    '',
    '## Tech stack',
    '',
    ...stackLines(),
    '',
    '## Search phrases',
    '',
    ...phraseLines(),
    '',
    '## Industries',
    '',
    ...industries.map((i) => `- ${i}`),
    '',
    '## Services',
    '',
    ...services.map((s) => `- **${s.title}**: ${s.body}`),
    '',
    '## Selected case studies',
    '',
    ...projects.map((p) => `- **${p.title}**: ${p.result} (${p.stack.join(', ')})`),
    '',
    '## Recent roles',
    '',
    ...experience.slice(0, 4).map((e) => `- ${e.role}, ${e.company} (${e.type}, ${e.period})`),
    '',
    `Companies worked with: ${clients}.`,
    '',
    '## How to work with me',
    '',
    ...engagement.map((e) => `- ${e}`),
    '',
    '## Writing',
    '',
    ...articles.map((a) => `- [${a.titleEn}](${a.url}): ${a.platform}, ${a.date}`),
    `- [More posts on LinkedIn](${moreWritingUrl})`,
    '',
    '## Contact',
    '',
    ...contactLines(site),
    '',
    '## Docs',
    '',
    `- [Full profile](${site}llms-full.txt): every case study in detail, complete work history, FAQ`,
    `- [Website](${site}): the human-readable page`,
    '',
  ].join('\n');
}

// Everything on the page in one Markdown document.
export function llmsFullTxt(site: string): string {
  return [
    `# ${profile.name} — ${profile.role}`,
    '',
    `> ${profile.headline}`,
    '',
    `Last updated: ${lastUpdated()}`,
    '',
    profile.subheadline,
    '',
    `- Availability: ${profile.availability}`,
    `- Location: ${profile.location}`,
    ...(profile.alternateName ? [`- Also published as: ${profile.alternateName}`] : []),
    `- Core skills: ${skills()}`,
    `- Main focus: ${focus.primary}`,
    `- Also uses: ${focus.secondary}`,
    `- Earlier experience: ${focus.past}`,
    '',
    '## Tech stack',
    '',
    ...stackLines(),
    '',
    '## Industries',
    '',
    ...industries.map((i) => `- ${i}`),
    '',
    '## How to work with me',
    '',
    ...engagement.map((e) => `- ${e}`),
    '',
    '## About',
    '',
    ...about.flatMap((p) => [p, '']),
    '## Services',
    '',
    ...services.flatMap((s) => [`### ${s.title}`, '', s.body, '', `Technologies: ${s.tags.join(', ')}`, '']),
    '## Case studies',
    '',
    ...projects.flatMap((p) => [
      `### ${p.title}`,
      '',
      `- Client: ${p.client} (${p.year})`,
      `- Problem: ${p.problem}`,
      `- Solution: ${p.solution}`,
      `- Result: ${p.result}`,
      `- Stack: ${p.stack.join(', ')}`,
      '',
    ]),
    '## Work history',
    '',
    ...experience.flatMap((e) => [
      `### ${e.role} — ${e.company} (${e.type}, ${e.period})`,
      '',
      e.summary,
      ...(e.highlights ? ['', ...e.highlights.map((h) => `- ${h}`)] : []),
      '',
    ]),
    '## Writing',
    '',
    ...articles.map(
      (a) => `- [${a.titleEn}](${a.url}) (${a.platform}, ${a.date}, in ${a.lang === 'ru' ? 'Russian' : 'English'}${a.byline ? `, published as ${a.byline}` : ''}): ${a.summary}`,
    ),
    `- More short posts on LinkedIn: ${moreWritingUrl}`,
    '',
    '## How engagements work',
    '',
    ...process.map((s, i) => `${i + 1}. **${s.step}**: ${s.body}`),
    '',
    '## FAQ',
    '',
    ...faq.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
    '## Contact',
    '',
    ...contactLines(site),
    '',
  ].join('\n');
}
