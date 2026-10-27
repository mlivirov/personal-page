// Generates the social preview image and PNG icons into /public, matching the site's look.
// Run with `npm run images` after changing the headline or the portfolio tiles.
import sharp from 'sharp';

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const font = "'PT Sans', 'Liberation Sans', Arial, 'DejaVu Sans', sans-serif";
const headline = ['Designs and builds .NET backends', 'that keep working when', 'nobody is looking.'];
const subline = 'Freelance senior .NET engineer & solution architect · 15+ years';
const tiles = [
  { bg: '#ebe6dc', fg: '#111', mark: 'GRC' },
  { bg: '#d7263d', fg: '#fff', mark: '↻' },
  { bg: '#111111', fg: '#fff', mark: '10×' },
  { bg: '#ffd400', fg: '#111', mark: 'TB' },
  { bg: '#1b4dff', fg: '#fff', mark: 'T−0' },
];

const tileW = 192;
const tileH = 120;
const tileGap = 20;
const tilesSvg = tiles
  .map((t, i) => {
    const x = 80 + i * (tileW + tileGap);
    return `<rect x="${x}" y="450" width="${tileW}" height="${tileH}" fill="${t.bg}"/>
  <text x="${x + tileW / 2}" y="${450 + tileH / 2 + 14}" font-family="${font}" font-size="40" font-weight="700" fill="${t.fg}" text-anchor="middle">${esc(t.mark)}</text>`;
  })
  .join('\n  ');

const lastLine = headline.length - 1;
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <text x="80" y="88" font-family="${font}" font-size="28" font-weight="700" fill="#000">max livirov</text>
  <text x="1120" y="88" font-family="${font}" font-size="22" fill="#d7263d" text-anchor="end">Hire me</text>
  ${headline
    .map(
      (line, i) =>
        `<text x="80" y="${190 + i * 64}" font-family="${font}" font-size="56" fill="#000">${esc(line)}${
          i === lastLine ? '<tspan font-size="28" dy="-24" fill="#d7263d">1</tspan>' : ''
        }</text>`,
    )
    .join('\n  ')}
  <text x="80" y="400" font-family="${font}" font-size="24" fill="#8a8a8a">${esc(subline)}</text>
  ${tilesSvg}
</svg>`;

const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#000"/>
  <text x="32" y="43" font-family="${font}" font-size="30" font-weight="700" fill="#fff" text-anchor="middle">ml</text>
  <rect x="48" y="10" width="6" height="6" fill="#d7263d"/>
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
