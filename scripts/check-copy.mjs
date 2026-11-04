// Varre o texto visível do site gerado (dist/) atrás de hífen e travessão na copy.
// Telefone e CEP (dígito-hífen-dígito) são dados e ficam de fora.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) walk(p);
  else if (p.endsWith('.html')) files.push(p);
});
walk('dist');

let problems = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<head[\s\S]*?<\/head>/g, ' ');
  const text = html.replace(/<[^>]+>/g, '\n').replace(/&[a-z]+;/g, ' ');
  text.split('\n').map((l) => l.trim()).filter(Boolean).forEach((line) => {
    const clean = line.replace(/\d[-‑]\d/g, '');
    if (/[-–—‑]/.test(clean)) { problems++; console.log(`${f}: ${line}`); }
  });
}
console.log(problems ? `\n${problems} trecho(s) com hífen ou travessão.` : `OK: ${files.length} páginas sem hífen ou travessão na copy.`);
process.exit(problems ? 1 : 0);
