// Interações e animações do site. Tudo leve, sem biblioteca, e desligado para quem prefere menos movimento.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));

/* Entrada dos blocos ao rolar */
const revealables = $$('[data-reveal]');
if (reduce || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  revealables.forEach((el) => io.observe(el));
  // Segurança: nada fica invisível se o observer falhar.
  window.addEventListener('load', () => setTimeout(() => revealables.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in');
  }), 1200));
}

/* Header: fundo depois do topo, some ao descer e volta ao subir */
const header = $('[data-header]');
const mbar = $('[data-mbar]');
let lastY = scrollY;

/* Menu mobile */
const toggle = $<HTMLButtonElement>('[data-menu]');
toggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
$$('#menu a').forEach((a) => a.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

/* Manifesto: palavras acendem conforme a leitura avança */
const words = $$('[data-words] .w');
const wordsBox = $('[data-words]');

/* Linha do passo a passo */
const stepsBox = $('[data-steps]');
const stepsLine = $('.steps__line i', stepsBox ?? document);
const stepItems = $$('[data-step]');

/* Parallax e selo girando */
const parallax = $$('[data-parallax]');
const spin = $$('[data-spin]');

function onScroll() {
  const y = scrollY;
  const vh = innerHeight;

  if (header) {
    header.classList.toggle('is-scrolled', y > 20);
    const goingDown = y > lastY && y > 400;
    header.classList.toggle('is-hidden', goingDown && !document.body.classList.contains('menu-open'));
  }
  mbar?.classList.toggle('is-on', y > vh * 0.7);
  lastY = y;

  if (reduce) return;

  if (wordsBox && words.length) {
    const r = wordsBox.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    const lit = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < lit));
  }

  if (stepsBox && stepsLine) {
    const r = stepsBox.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.2)));
    stepsLine.style.setProperty('--p', p.toFixed(3));
    stepItems.forEach((s, i) => s.classList.toggle('is-on', p >= (i + 0.5) / stepItems.length));
  }

  for (const el of parallax) {
    const k = parseFloat(el.dataset.parallax || '0');
    const r = el.getBoundingClientRect();
    const center = r.top + r.height / 2 - vh / 2;
    el.style.transform = `translate3d(0, ${(center * k).toFixed(1)}px, 0)`;
  }
  for (const el of spin) el.style.transform = `rotate(${(y * 0.12).toFixed(1)}deg)`;
}

let ticking = false;
addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScroll(); ticking = false; });
}, { passive: true });
addEventListener('resize', onScroll, { passive: true });
onScroll();
if (reduce) { words.forEach((w) => w.classList.add('on')); stepItems.forEach((s) => s.classList.add('is-on')); }

/* Filtro de tratamentos */
const chips = $$<HTMLButtonElement>('[data-filter]');
chips.forEach((chip) => chip.addEventListener('click', () => {
  const f = chip.dataset.filter;
  chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
  $$('[data-tlist] .t-row').forEach((row) => {
    const area = row.dataset.area || '';
    row.hidden = !(f === 'todos' || area === f || area === 'Facial e corporal');
    if (!row.hidden) row.classList.add('is-in');
  });
}));

/* Prévia em arco que segue o cursor na lista de tratamentos */
const preview = $('[data-tpreview]');
if (preview && finePointer && !reduce) {
  const art = $('.arch__art', preview);
  const label = $('.t-preview__label', preview);
  let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0, active = false;
  const loop = () => {
    cx += (tx - cx) * 0.16;
    cy += (ty - cy) * 0.16;
    const tilt = Math.max(-10, Math.min(10, (tx - cx) * 0.12));
    preview.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) scale(${active ? 1 : 0.6}) rotate(${tilt}deg)`;
    raf = requestAnimationFrame(loop);
  };
  $$('.t-row').forEach((row) => {
    row.addEventListener('mouseenter', (e) => {
      const ev = e as MouseEvent;
      if (!active) { cx = tx = ev.clientX + 140; cy = ty = ev.clientY; }
      active = true;
      art?.style.setProperty('--h', row.dataset.hue || '340');
      if (label) label.textContent = row.dataset.name || '';
      preview.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(loop);
    });
    row.addEventListener('mousemove', (e) => { tx = (e as MouseEvent).clientX + 140; ty = (e as MouseEvent).clientY; });
    row.addEventListener('mouseleave', () => {
      active = false;
      preview.classList.remove('is-on');
      setTimeout(() => { if (!active) { cancelAnimationFrame(raf); raf = 0; } }, 400);
    });
  });
}

/* Setas do carrossel de avaliações */
const track = $('[data-rtrack]');
const step = () => (track?.firstElementChild as HTMLElement | null)?.offsetWidth ?? 320;
$('[data-rprev]')?.addEventListener('click', () => track?.scrollBy({ left: -(step() + 20), behavior: reduce ? 'auto' : 'smooth' }));
$('[data-rnext]')?.addEventListener('click', () => track?.scrollBy({ left: step() + 20, behavior: reduce ? 'auto' : 'smooth' }));

/* Botões magnéticos (só com mouse) */
if (finePointer && !reduce) {
  $$('.hero .btn, .cta .btn').forEach((b) => {
    b.addEventListener('mousemove', (e) => {
      const r = b.getBoundingClientRect();
      const x = ((e as MouseEvent).clientX - r.left - r.width / 2) * 0.18;
      const y = ((e as MouseEvent).clientY - r.top - r.height / 2) * 0.3;
      b.style.transform = `translate(${x}px, ${y}px)`;
    });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });
}

/* Conversão: cada clique no WhatsApp vira evento no GA4 / GTM / Meta Pixel, se estiverem instalados */
type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void };
document.addEventListener('click', (e) => {
  const a = (e.target as Element).closest<HTMLAnchorElement>('[data-wa]');
  if (!a) return;
  const w = window as W;
  const origem = a.dataset.wa;
  const pagina = location.pathname;
  w.dataLayer?.push({ event: 'whatsapp_click', origem, pagina });
  w.gtag?.('event', 'generate_lead', { method: 'whatsapp', origem, pagina });
  w.fbq?.('track', 'Contact', { origem, pagina });
});
