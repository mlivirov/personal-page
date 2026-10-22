// Generates the social preview image and PNG icons into /public.
// Run with `npm run images` after changing your name, role or tagline.
import sharp from 'sharp';

const name = 'Max Livirov';
const role = 'Freelance Senior .NET Engineer & Solution Architect';
const tagline = 'High-load backends · Architecture · Kafka · Azure · AI / RAG';
const facts = '15+ years  ·  FinTech  ·  Insurance  ·  Cybersecurity  ·  GovTech';

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const font = "Inter, 'DejaVu Sans', sans-serif";
const mono = "'JetBrains Mono', 'DejaVu Sans Mono', monospace";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="15%" cy="20%" r="60%">
      <stop offset="0" stop-color="#2dd4bf" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#2dd4bf" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="90%" cy="85%" r="55%">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0c0a09"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect x="80" y="86" width="360" height="44" rx="22" fill="#134e4a"/>
  <circle cx="106" cy="108" r="7" fill="#2dd4bf"/>
  <text x="124" y="116" font-family="${font}" font-size="22" font-weight="500" fill="#f5f5f4">Open to freelance projects</text>
  <text x="80" y="250" font-family="${font}" font-size="96" font-weight="700" fill="#f5f5f4" letter-spacing="-2">${esc(name)}</text>
  <text x="80" y="322" font-family="${font}" font-size="34" font-weight="600" fill="#2dd4bf">${esc(role)}</text>
  <text x="80" y="400" font-family="${font}" font-size="30" fill="#d6d3d1">${esc(tagline)}</text>
  <text x="80" y="450" font-family="${font}" font-size="26" fill="#a8a29e">${esc(facts)}</text>
  <text x="80" y="560" font-family="${mono}" font-size="24" fill="#2dd4bf">$ <tspan fill="#a8a29e">hire --role architect --stack dotnet</tspan></text>
</svg>`;

const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0d9488"/>
  <text x="32" y="42" font-family="${font}" font-size="28" font-weight="700" fill="#fff" text-anchor="middle">ML</text>
</svg>`;

const render = (svg, out) => sharp(Buffer.from(svg)).png().toFile(out);

await Promise.all([
  render(og, 'public/og.png'),
  render(icon(32), 'public/favicon-32.png'),
  render(icon(180), 'public/apple-touch-icon.png'),
  render(icon(192), 'public/icon-192.png'),
  render(icon(512), 'public/icon-512.png'),
]);
console.log('Images written to public/');
