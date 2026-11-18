"use client";

// "The Quiet Maiden, unfolding": one poem from the Shijing as a dark, scrolling experience.
// A fixed canvas of light sits behind pinned scenes; it gathers into the character 愛, rings
// out into the poem's layers, then settles to a faint field while the poem is read.
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const ORIGINAL = [
  "靜女其姝，", "俟我於城隅，", "愛而不見，", "搔首踟躕。",
  "靜女其孌，", "貽我彤管，", "彤管有煒，", "說懌女美。",
  "自牧歸荑，", "洵美且異，", "匪女之為美，", "美人之貽。",
];
const ENGLISH = [
  "The quiet girl is lovely;",
  "she waits for me at the corner of the city wall.",
  "She hides and will not show herself;",
  "I scratch my head and walk up and down.",
  "The quiet girl is fair;",
  "she gives me a red writing brush.",
  "The red brush gleams,",
  "and I delight in how fine you are.",
  "From the pastures she brings me a young shoot,",
  "truly beautiful and rare.",
  "It is not you, little shoot, that are beautiful:",
  "you are the gift of a beautiful girl.",
];

const SCENES = [
  { id: "uf-before", title: "Before the first word" },
  { id: "uf-char", title: "A single character" },
  { id: "uf-voices", title: "One poem, many voices" },
  { id: "uf-poem", title: "The poem" },
  { id: "uf-archive", title: "What a love poem is made of" },
  { id: "uf-about", title: "About" },
];

const LAYERS = [
  ["The girl", "Quiet, lovely, and hiding on purpose."],
  ["The waiting", "A young man pacing at the corner of the wall."],
  ["The gifts", "A red brush, then a shoot from the pastures."],
  ["The commentators", "Two thousand years of reading it as a lesson."],
  ["You", "The newest reader, choosing what it means."],
];

// Stages for the archive. `at` is [line, character] in the poem (both from 0).
const STAGES: { n: number; at: [number, number]; chars: string; title: string; kicker: string; body: string[]; link?: { href: string; label: string } }[] = [
  {
    n: 1, at: [0, 0], chars: "靜女", title: "The quiet girl", kicker: "Line 1 · the song",
    body: [
      "Nobody knows who made this song. It comes from the Airs of Bei, one group of folk songs in the Shijing, or Book of Songs: China’s oldest collection of poetry, gathered between about 1000 and 600 BCE.",
      "靜 means quiet or still; 女 means girl or woman. The song never gives her a name.",
    ],
  },
  {
    n: 2, at: [1, 3], chars: "城隅", title: "The corner of the wall", kicker: "Line 2 · the place",
    body: [
      "She waits at 城隅, the corner of the city wall, and when he comes she hides.",
      "It is a meeting the two of them have arranged for themselves. No parent or go-between appears anywhere in the poem.",
    ],
  },
  {
    n: 3, at: [2, 0], chars: "愛", title: "The word for love", kicker: "Line 3 · the puzzle",
    body: [
      "愛 is the everyday word for love, but here it may not mean love at all. Many commentators read it as standing for a similar character, 薆, meaning to hide or screen. That is the reading this translation follows: she hides and will not show herself.",
      "The modern Chinese word for romantic love, 恋爱 (liàn’ài), is much younger. It was coined in Japan in the late nineteenth century, while translating the Bible, and later passed into Chinese.",
    ],
    link: { href: "/onlove/book/resources/china/", label: "Read more in Love in China" },
  },
  {
    n: 4, at: [3, 2], chars: "踟躕", title: "Walking up and down", kicker: "Line 4 · the waiting",
    body: [
      "搔首 is scratching his head; 踟躕 is pacing to and fro, unable to settle. Both describe a nervous, waiting body more than any stated feeling.",
      "Tradition says Confucius chose the songs of the Shijing, and for two thousand years scholars read even its love songs as moral lessons. Read on its own, this line is simply a young man who cannot keep still.",
    ],
  },
  {
    n: 5, at: [5, 2], chars: "彤管", title: "The red brush", kicker: "Line 6 · the first gift",
    body: [
      "彤管 means, literally, a red tube. The oldest commentary explained it as a red-lacquered writing brush, of the kind educated women at court used to keep records. A brush was made from just such a slim bamboo tube.",
      "Some later readers take it as a red reed or shoot instead. Either way, it gleams: 彤管有煒.",
    ],
  },
  {
    n: 6, at: [8, 3], chars: "荑", title: "A shoot from the pastures", kicker: "Line 9 · the second gift",
    body: [
      "Her second gift is 荑, a young shoot she has brought back from the pastures. It costs nothing, and anyone could have picked it.",
      "That is the point the poem is about to make.",
    ],
  },
  {
    n: 7, at: [11, 0], chars: "美人之貽", title: "The gift of a beautiful girl", kicker: "Line 12 · the turn",
    body: [
      "In the last lines he speaks to the shoot itself: it is not you that are beautiful; you are the gift of a beautiful girl.",
      "The value of a gift lies in the person who gives it. In Eight Billion Ways to Love the poem appears in section two, How do I love?",
    ],
    link: { href: "/onlove/book/", label: "About the book" },
  },
  {
    n: 8, at: [11, 3], chars: "貽", title: "This translation", kicker: "Now · the English",
    body: [
      "The English here is a new translation from the Chinese text on Chinese Wikisource, made with AI assistance and still a draft for editorial review. An older English version from 1909 is not used.",
      "The poem itself is anonymous and nearly three thousand years old, so it belongs to everyone.",
    ],
    link: { href: "https://ctext.org/book-of-poetry/jing-nu/ens", label: "The Chinese text and James Legge’s translation" },
  },
];

const CSS = `
.uf{--ink:#050505;--paper:#F1ECE4;--dim:#8f8a84;--faint:rgba(241,236,228,.14);--sand:#C4AE97;--sand-ink:#1b1714;--blush:#E4B6AA;
  --d:var(--uf-display),Georgia,serif;--b:var(--uf-body),system-ui,sans-serif;--m:var(--uf-mono),ui-monospace,monospace;
  --cjk:"Noto Serif TC","Source Han Serif TC","Songti TC","PMingLiU","MingLiU","SimSun",serif;
  position:fixed;inset:0;z-index:60;background:var(--ink);color:var(--paper);font-family:var(--b);font-size:15px;line-height:1.55;
  overflow-y:auto;overflow-x:hidden;-webkit-font-smoothing:antialiased;color-scheme:dark;scroll-behavior:smooth}
.uf *{box-sizing:border-box}
.uf ::selection{background:var(--blush);color:var(--ink)}
.uf a{color:inherit}
.uf button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;padding:0}
.uf :focus-visible{outline:1px solid var(--blush);outline-offset:3px}
.uf canvas.stage{position:fixed;inset:0;width:100vw;height:100vh;z-index:0;pointer-events:none}
.uf-hdr{position:sticky;top:0;z-index:5;height:58px;background:var(--sand);color:var(--sand-ink);display:flex;align-items:center;justify-content:space-between;gap:20px;padding:0 28px}
.uf-logo{font-family:var(--d);font-size:26px;letter-spacing:-.01em;text-decoration:none;white-space:nowrap}
.uf-nav{display:flex;gap:22px;font-size:10.5px;letter-spacing:.09em;text-transform:uppercase}
.uf-nav a{text-decoration:none;opacity:.8}.uf-nav a:hover{opacity:1}
.uf main{position:relative;z-index:1}
.uf-scene{position:relative}
.uf-pin{position:sticky;top:58px;height:calc(100vh - 58px - 48px);display:flex;flex-direction:column;padding:26px 28px}
.uf-eyebrows{display:flex;justify-content:space-between;gap:16px;font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--dim)}
.uf-mid{flex:1;display:grid;place-items:center;text-align:center}
.uf-lede{font-size:17px;line-height:1.5;color:rgba(241,236,228,.82);max-width:34ch}
.uf-explore{font-size:11px;letter-spacing:.11em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid var(--faint);padding-bottom:5px}
.uf-cue{position:absolute;left:50%;bottom:24px;width:1px;height:22px;background:var(--paper);opacity:.5;animation:ufcue 2.4s ease-in-out infinite}
@keyframes ufcue{0%,100%{transform:scaleY(.3);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}}
.uf-split{flex:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) minmax(0,1fr);gap:28px;align-items:center}
.uf h2{font-family:var(--d);font-weight:400;font-size:clamp(40px,5.4vw,76px);line-height:1;letter-spacing:-.02em;margin:0}
.uf-label{font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--dim);margin:0}
.uf-readout{margin:0;font-family:var(--m);font-size:11.5px;display:grid;gap:9px}
.uf-readout div{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid var(--faint);padding-bottom:7px}
.uf-readout dt{color:var(--dim)}.uf-readout dd{margin:0;text-align:right}
.uf-measure summary{font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--dim);cursor:pointer;margin-bottom:14px;list-style:none}
.uf-measure summary::before{content:"+ "}.uf-measure[open] summary::before{content:"− "}
.uf-layers{list-style:none;margin:0;padding:0;display:grid;gap:14px}
.uf-layers li{display:grid;gap:2px;opacity:.28;transition:opacity .6s}
.uf-layers li.on{opacity:1}
.uf-layers b{font-family:var(--d);font-weight:400;font-size:22px}
.uf-layers span{font-size:13px;color:var(--dim)}
.uf-poem{flex:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:40px;align-items:center}
.uf-lines{list-style:none;margin:0;padding:0;display:grid;gap:6px}
.uf-lines li{display:grid;grid-template-columns:9.5em minmax(0,1fr);gap:22px;align-items:baseline;opacity:0;transform:translateY(8px);transition:opacity .7s,transform .7s}
.uf-lines li.seen{opacity:.42;transform:none}
.uf-lines li.now{opacity:1;transform:none}
.uf-lines .zh{font-family:var(--cjk);font-size:clamp(17px,1.7vw,24px);letter-spacing:.12em}
.uf-lines .en{font-family:var(--d);font-size:clamp(15px,1.35vw,20px);font-style:italic}
.uf-stats{display:flex;gap:26px;margin-top:28px}
.uf-stats strong{display:block;font-family:var(--d);font-weight:400;font-size:34px;line-height:1}
.uf-archive{padding:70px 28px 40px;position:relative}
.uf-archive-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;align-items:end;margin:28px 0 36px}
.uf-scroll{display:grid;place-items:center;background:linear-gradient(180deg,rgba(14,13,12,.85),rgba(5,5,5,.9));border:1px solid var(--faint);padding:28px 10px}
.uf-scroll svg{width:100%;max-width:980px;height:auto}
.uf-cap{display:flex;justify-content:space-between;gap:16px;margin-top:10px;font-family:var(--m);font-size:10.5px;color:var(--dim)}
.uf-stages{list-style:none;margin:34px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1px;background:var(--faint);border:1px solid var(--faint)}
.uf-stages button{width:100%;height:100%;text-align:left;background:var(--ink);padding:18px;display:grid;gap:6px;transition:background .3s}
.uf-stages button:hover{background:#14110f}
.uf-stages .n{font-family:var(--m);font-size:11px;color:var(--blush)}
.uf-stages .t{font-family:var(--d);font-size:21px;line-height:1.15}
.uf-stages .k{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--dim)}
.uf-stages .c{font-family:var(--cjk);font-size:18px;letter-spacing:.1em;color:rgba(241,236,228,.7)}
.uf-about{position:relative;padding:90px 28px 120px;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.4fr);gap:40px;border-top:1px solid var(--faint);background:var(--ink)}
.uf-about p{margin:0 0 14px;color:rgba(241,236,228,.82);max-width:62ch}
.uf-about .uf-links{display:flex;flex-wrap:wrap;gap:18px;margin-top:22px}
.uf-about .uf-links a{font-size:11px;letter-spacing:.11em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid var(--faint);padding-bottom:4px}
.uf-bar{position:sticky;bottom:0;z-index:5;height:48px;background:rgba(5,5,5,.92);border-top:1px solid var(--faint);display:flex;align-items:center;justify-content:space-between;gap:18px;padding:0 28px;font-size:12px}
.uf-where{display:flex;gap:14px;align-items:baseline;min-width:0}.uf-where span{color:var(--dim);font-family:var(--m);font-size:11px}
.uf-where b{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.uf-ticks{display:flex;gap:6px}.uf-ticks a{display:block;width:20px;height:12px;position:relative}
.uf-ticks a::after{content:"";position:absolute;left:0;right:0;top:5px;height:1px;background:var(--dim);transition:background .3s,height .3s}
.uf-ticks a.on::after{background:var(--paper);height:2px}
.uf-right{display:flex;gap:16px;align-items:center}
.uf-tag{font-size:10px;letter-spacing:.09em;text-transform:uppercase;border:1px solid var(--faint);padding:5px 8px;color:var(--dim);white-space:nowrap}
.uf-snd{font-size:11px;letter-spacing:.09em;text-transform:uppercase;display:flex;gap:8px;align-items:center;white-space:nowrap}
.uf-eq{display:inline-flex;gap:2px;align-items:flex-end;height:10px}.uf-eq i{width:2px;height:3px;background:currentColor}
.uf-snd[aria-pressed=true] .uf-eq i{animation:ufeq 1s ease-in-out infinite}.uf-snd[aria-pressed=true] .uf-eq i:nth-child(2){animation-delay:.2s}.uf-snd[aria-pressed=true] .uf-eq i:nth-child(3){animation-delay:.4s}
@keyframes ufeq{0%,100%{height:3px}50%{height:10px}}
.uf-dialog{position:fixed;inset:0;z-index:70;background:rgba(5,5,5,.86);backdrop-filter:blur(6px);display:grid;place-items:center;padding:20px}
.uf-card{width:min(640px,100%);max-height:88vh;overflow:auto;background:#0e0d0c;border:1px solid var(--faint);padding:30px}
.uf-card .big{font-family:var(--cjk);font-size:64px;line-height:1.1;letter-spacing:.08em;margin:10px 0 6px;color:var(--paper)}
.uf-card h3{font-family:var(--d);font-weight:400;font-size:32px;margin:0 0 16px;line-height:1.1}
.uf-card p{color:rgba(241,236,228,.82);margin:0 0 12px}
.uf-card nav{display:flex;justify-content:space-between;margin-top:22px;font-size:11px;letter-spacing:.09em;text-transform:uppercase}
.uf-card .go{display:inline-block;margin-top:6px;font-size:11px;letter-spacing:.11em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid var(--blush);padding-bottom:4px}
@media (max-width:860px){
  .uf-nav{display:none}.uf-tag{display:none}
  .uf-split,.uf-poem,.uf-archive-head,.uf-about{grid-template-columns:1fr}
  .uf-split .space{display:none}
  .uf-pin{padding:20px 16px}.uf-archive,.uf-about{padding-left:16px;padding-right:16px}
  .uf-hdr,.uf-bar{padding:0 16px}.uf-ticks{display:none}
  .uf-lines li{grid-template-columns:1fr;gap:0}
  .uf-poem .intro{display:none}
  .uf-scene{height:auto!important}
  .uf-pin{position:relative;top:0;height:auto;min-height:calc(100svh - 106px);padding-top:28px;padding-bottom:56px}
  .uf-eyebrows span+span{display:none}
  .uf-split,.uf-poem{margin-top:28px;gap:24px}
  .uf-lines li,.uf-layers li{opacity:1!important;transform:none!important}
  .uf-lines li{margin-bottom:8px}
}
@media (prefers-reduced-motion:reduce){.uf{scroll-behavior:auto}.uf-cue,.uf-snd .uf-eq i{animation:none!important}.uf-lines li{transition:none}}
`;

type Pt = { x: number; y: number; tx: number; ty: number; a: number; ta: number; r: number; s: number };

/** Points that make up a character drawn large, for the particles to settle on. */
function glyphPoints(ch: string, size: number): [number, number][] {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  if (!g) return [];
  g.fillStyle = "#fff";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.font = `${Math.round(size * 0.82)}px "Noto Serif TC","Source Han Serif TC","Songti TC","PMingLiU","MingLiU","SimSun",serif`;
  g.fillText(ch, size / 2, size / 2 + size * 0.03);
  const data = g.getImageData(0, 0, size, size).data;
  const pts: [number, number][] = [];
  const step = Math.max(2, Math.round(size / 150));
  for (let y = 0; y < size; y += step)
    for (let x = 0; x < size; x += step) if (data[(y * size + x) * 4 + 3] > 128) pts.push([x / size - 0.5, y / size - 0.5]);
  // shuffle, so any number of particles spreads over the whole character
  for (let i = pts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pts[i], pts[j]] = [pts[j], pts[i]];
  }
  return pts;
}

/** A soft plucked string, synthesised. Not a recording, and not how the song was sung. */
function pluck(ctx: AudioContext, freq: number, when = 0, gain = 0.16) {
  const t = ctx.currentTime + when;
  const out = ctx.createGain();
  out.gain.setValueAtTime(0, t);
  out.gain.linearRampToValueAtTime(gain, t + 0.008);
  out.gain.exponentialRampToValueAtTime(0.0001, t + 3.6);
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.setValueAtTime(freq * 6, t);
  lp.frequency.exponentialRampToValueAtTime(freq * 1.5, t + 1.6);
  out.connect(lp).connect(ctx.destination);
  [1, 2, 3, 4.01].forEach((h, i) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = i === 0 ? "triangle" : "sine";
    o.frequency.value = freq * h;
    g.gain.value = [1, 0.35, 0.18, 0.08][i];
    o.connect(g).connect(out);
    o.start(t);
    o.stop(t + 3.8);
  });
}
// A pentatonic scale (C D E G A), one note per line of the poem.
const SCALE = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0];

export default function Unfolding() {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const audio = useRef<AudioContext | null>(null);
  const state = useRef({ scene: 0, layer: -1, line: -1 });
  const [scene, setScene] = useState(0);
  const [layer, setLayer] = useState(-1);
  const [line, setLine] = useState(-1);
  const [sound, setSound] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const soundRef = useRef(false);

  const play = useCallback((f: number, when = 0, gain?: number) => {
    if (!soundRef.current || !audio.current) return;
    pluck(audio.current, f, when, gain);
  }, []);

  const toggleSound = () => {
    const on = !soundRef.current;
    if (on && !audio.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audio.current = new AC();
    }
    void audio.current?.resume();
    soundRef.current = on;
    setSound(on);
    if (on) play(SCALE[2], 0.05);
  };

  // Track which scene, layer and line the reader has reached.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onScroll = () => {
      const mid = el.scrollTop + el.clientHeight * 0.5;
      let s = 0;
      SCENES.forEach((sc, i) => {
        const node = document.getElementById(sc.id);
        if (node && node.offsetTop <= mid) s = i;
      });
      const prog = (id: string) => {
        const node = document.getElementById(id);
        if (!node) return 0;
        const span = node.offsetHeight - el.clientHeight;
        return Math.max(0, Math.min(1, (el.scrollTop - node.offsetTop + 58) / Math.max(1, span)));
      };
      const l = s === 2 ? Math.min(4, Math.floor(prog("uf-voices") * 5.2)) : s > 2 ? 4 : -1;
      const ln = s === 3 ? Math.min(11, Math.floor(prog("uf-poem") * 12.5)) : s > 3 ? 11 : -1;
      const st = state.current;
      if (s !== st.scene) {
        if (s === 1) play(SCALE[0], 0, 0.2);
        st.scene = s;
        setScene(s);
      }
      if (l !== st.layer) {
        if (l > st.layer && l >= 0) play(SCALE[l + 3]);
        st.layer = l;
        setLayer(l);
      }
      if (ln !== st.line) {
        if (ln > st.line && ln >= 0) play(SCALE[[0, 2, 4, 3, 1, 2, 4, 5, 3, 4, 2, 0][ln]]);
        st.line = ln;
        setLine(ln);
      }
    };
    // In-page links scroll this container to the exact top of their scene.
    const go = (id: string, smooth: boolean) => {
      const node = document.getElementById(id);
      if (!node || !el.contains(node)) return false;
      // the scene's top, measured inside this container, less the sticky header
      const top = node.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop - 58;
      el.scrollTo({ top: Math.max(0, top), behavior: smooth ? "smooth" : "auto" });
      return true;
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (a && go(a.getAttribute("href")!.slice(1), true)) {
        e.preventDefault();
        history.replaceState(null, "", a.getAttribute("href"));
      }
    };
    if (location.hash) requestAnimationFrame(() => go(location.hash.slice(1), false));
    el.addEventListener("click", onClick);
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("click", onClick);
      window.removeEventListener("resize", onScroll);
    };
  }, [play]);

  // The field of light.
  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    const g = cv.getContext("2d");
    if (!g) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = window.innerWidth < 860 ? 1800 : 2800;
    let w = 0, h = 0, dpr = 1, glyph: [number, number][] = [], raf = 0;
    const pts: Pt[] = Array.from({ length: N }, () => ({ x: 0, y: 0, tx: 0, ty: 0, a: 0, ta: 0, r: Math.random(), s: Math.random() }));
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      glyph = glyphPoints("愛", 420);
      pts.forEach((p) => {
        if (!p.x && !p.y) { p.x = w / 2 + (Math.random() - 0.5) * 30; p.y = h * 0.7 + (Math.random() - 0.5) * 30; }
      });
    };
    resize();
    window.addEventListener("resize", resize);

    const targets = (t: number) => {
      const { scene: s, layer: l } = state.current;
      const cx = w / 2, cy = h / 2 + 5;
      const size = Math.min(w * (w < 860 ? 0.9 : 0.42), h * 0.68);
      pts.forEach((p, i) => {
        if (s === 0) {
          // four soft points, like a seal waiting to be pressed
          const k = i % 4;
          const ang = (k / 4) * Math.PI * 2 + t * 0.0004;
          p.tx = cx + Math.cos(ang) * 11 + (p.r - 0.5) * 6;
          p.ty = h * 0.7 + Math.sin(ang) * 11 + (p.s - 0.5) * 6;
          p.ta = 0.5;
        } else if (s === 1 && glyph.length) {
          const q = glyph[i % glyph.length];
          p.tx = cx + q[0] * size + Math.sin(t * 0.001 + i) * 0.6;
          p.ty = cy + q[1] * size + Math.cos(t * 0.0012 + i) * 0.6;
          p.ta = w < 860 ? 0.4 : 0.85;
        } else if (s === 2) {
          // five rings, one per voice in the poem; the reached ones glow
          const ring = i % 5;
          const rad = size * (0.14 + ring * 0.085);
          const ang = p.r * Math.PI * 2 + t * 0.00012 * (ring % 2 ? 1 : -1);
          p.tx = cx + Math.cos(ang) * rad;
          p.ty = cy + Math.sin(ang) * rad * 0.92;
          p.ta = ring <= l ? 0.8 : 0.16;
        } else {
          // a faint field to read against
          p.tx = p.r * w + Math.sin(t * 0.0002 + i) * 8;
          p.ty = p.s * h + Math.cos(t * 0.00025 + i) * 8;
          p.ta = s === 3 ? 0.22 : 0.12;
        }
      });
    };

    const draw = (t: number) => {
      targets(t);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, w, h);
      g.globalCompositeOperation = "lighter";
      const ease = still ? 1 : 0.055;
      for (const p of pts) {
        p.x += (p.tx - p.x) * ease;
        p.y += (p.ty - p.y) * ease;
        p.a += (p.ta - p.a) * 0.05;
        const tw = 0.75 + 0.25 * Math.sin(t * 0.003 + p.r * 40);
        g.fillStyle = p.s > 0.86 ? `rgba(228,182,170,${p.a * tw})` : `rgba(241,236,228,${p.a * tw * 0.8})`;
        const sz = state.current.scene === 1 ? 1 + p.s * 0.8 : 1.1 + p.s * 1.2;
        g.fillRect(p.x - sz / 2, p.y - sz / 2, sz, sz);
      }
      g.globalCompositeOperation = "source-over";
      if (!still) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    // with reduced motion, redraw only when the scene changes
    const iv = still ? window.setInterval(() => draw(performance.now()), 400) : 0;
    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(iv);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (open === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o === null ? o : (o + 1) % STAGES.length));
      if (e.key === "ArrowLeft") setOpen((o) => (o === null ? o : (o + STAGES.length - 1) % STAGES.length));
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);

  useEffect(() => {
    if (open !== null) play(SCALE[(open * 2) % SCALE.length], 0, 0.12);
  }, [open, play]);

  const stage = open === null ? null : STAGES[open];

  // The poem as a scroll: twelve vertical columns read right to left, four characters each.
  const colW = 70, rowH = 74, top = 70;
  const colX = (lineIdx: number) => 1000 - 80 - lineIdx * colW - (lineIdx >= 4 ? 18 : 0) - (lineIdx >= 8 ? 18 : 0);
  const chars = ORIGINAL.map((l) => l.replace(/[，。]/g, "").split(""));

  return (
    <div className="uf" ref={root}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <canvas ref={canvas} className="stage" aria-hidden="true" />

      <header className="uf-hdr">
        <a className="uf-logo" href="#uf-before">The Quiet Maiden</a>
        <nav className="uf-nav" aria-label="This page">
          <a href="#uf-char">The journey</a>
          <a href="#uf-poem">The poem</a>
          <a href="#uf-archive">The archive</a>
          <Link href="/onlove/book/poems/">← More poems</Link>
        </nav>
      </header>

      <main>
        <section className="uf-scene" id="uf-before" style={{ height: "150vh" }}>
          <div className="uf-pin">
            <div className="uf-eyebrows"><span>Eight Billion Ways to Love / a reading experience</span><span>Before the first word / Silence</span></div>
            <div className="uf-mid">
              <div style={{ display: "grid", gap: 18, justifyItems: "center" }}>
                <p className="uf-lede" style={{ opacity: 0.7, fontSize: 14 }}>
                  A love song from China’s oldest book of poems.<br />Twelve lines. Nearly three thousand years.<br />A girl who hides, and a gift.
                </p>
                <a className="uf-explore" href="#uf-char">Begin →</a>
              </div>
            </div>
            <div className="uf-cue" aria-hidden="true" />
          </div>
        </section>

        <section className="uf-scene" id="uf-char" style={{ height: "190vh" }}>
          <div className="uf-pin">
            <div className="uf-eyebrows"><span>Eight Billion Ways to Love / a reading experience</span><span>The first character / Appearance</span></div>
            <div className="uf-split">
              <div>
                <h2>A single<br />character.</h2>
                <p className="uf-lede" style={{ marginTop: 20 }}>
                  愛, ài: the everyday word for love. It appears once in this poem, at the start of line three, where it may
                  not mean love at all.
                </p>
              </div>
              <div className="space" aria-hidden="true" />
              <details className="uf-measure" open>
                <summary>Particulars</summary>
                <dl className="uf-readout">
                  <div><dt>Character</dt><dd>愛</dd></div>
                  <div><dt>Reading today</dt><dd>ài</dd></div>
                  <div><dt>Strokes</dt><dd>13 (simplified 爱: 10)</dd></div>
                  <div><dt>Place in the poem</dt><dd>line 3 · character 10 of 50</dd></div>
                  <div><dt>Usual meaning</dt><dd>to love</dd></div>
                  <div><dt>Meaning here</dt><dd>disputed: to love, or to hide</dd></div>
                  <div><dt>Poem collected</dt><dd>c. 1000–600 BCE</dd></div>
                  <div><dt>Poet</dt><dd>anonymous</dd></div>
                </dl>
              </details>
            </div>
          </div>
        </section>

        <section className="uf-scene" id="uf-voices" style={{ height: "260vh" }}>
          <div className="uf-pin">
            <div className="uf-eyebrows"><span>Eight Billion Ways to Love / a reading experience</span><span>Within the poem / Unfolding</span></div>
            <div className="uf-split">
              <div><h2>One poem.<br />Many voices.</h2></div>
              <div className="space" aria-hidden="true" />
              <div style={{ display: "grid", gap: 22 }}>
                <p className="uf-label">Who is in it</p>
                <ol className="uf-layers">
                  {LAYERS.map(([b, s], i) => (
                    <li key={b} className={i <= layer ? "on" : ""}><b>{b}</b><span>{s}</span></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="uf-scene" id="uf-poem" style={{ height: "420vh" }}>
          <div className="uf-pin">
            <div className="uf-eyebrows"><span>Eight Billion Ways to Love / a reading experience</span><span>The poem / Line {Math.max(1, line + 1)} of 12</span></div>
            <div className="uf-poem">
              <div className="intro">
                <p className="uf-label">Shijing · Airs of Bei</p>
                <h2 style={{ marginTop: 14 }}><span style={{ fontFamily: "var(--cjk)", letterSpacing: ".06em" }}>靜女</span><br />The Quiet<br />Maiden</h2>
                <div className="uf-stats">
                  <div><strong>12</strong><span className="uf-label">lines</span></div>
                  <div><strong>50</strong><span className="uf-label">characters</span></div>
                  <div><strong>3</strong><span className="uf-label">verses</span></div>
                </div>
              </div>
              <ol className="uf-lines" aria-label="The Quiet Maiden, in Chinese and English">
                {ORIGINAL.map((zh, i) => (
                  <li key={i} className={i === line ? "now" : i < line ? "seen" : ""} style={i === 4 || i === 8 ? { marginTop: 14 } : undefined}>
                    <span className="zh" lang="zh-Hant">{zh}</span>
                    <span className="en">{ENGLISH[i]}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="uf-archive" id="uf-archive" style={{ background: "rgba(5,5,5,.6)" }}>
          <div className="uf-eyebrows"><span>The archive / eight stages</span><span>Character to meaning · a close reading</span></div>
          <div className="uf-archive-head">
            <h2>What a love poem<br />is made of.</h2>
            <p className="uf-lede" style={{ maxWidth: "44ch" }}>
              Eight places in the poem, from a girl with no name to the English on this page. Follow the dotted thread,
              or open any part of the song.
            </p>
          </div>

          <div className="uf-scroll">
            <svg viewBox="0 0 1000 420" role="img" aria-label="The poem written in twelve vertical columns, read from right to left, with eight numbered places">
              {chars.map((col, li) =>
                col.map((ch, ci) => (
                  <text key={`${li}-${ci}`} x={colX(li)} y={top + ci * rowH} textAnchor="middle" fontSize="40"
                    fill={STAGES.some((s) => s.at[0] === li && ci >= s.at[1] && ci < s.at[1] + s.chars.length) ? "#F1ECE4" : "rgba(241,236,228,.38)"}
                    style={{ fontFamily: "var(--cjk)" }}>
                    {ch}
                  </text>
                )),
              )}
              <polyline fill="none" stroke="#E4B6AA" strokeOpacity=".55" strokeDasharray="2 6" strokeWidth="1.2"
                points={STAGES.map((s) => `${colX(s.at[0]) - 34},${top + s.at[1] * rowH - 14}`).join(" ")} />
              {STAGES.map((s, i) => (
                <g key={s.n} role="button" tabIndex={0} aria-label={`Open stage ${s.n}: ${s.title}`} style={{ cursor: "pointer" }}
                  onClick={() => setOpen(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(i); } }}>
                  <circle cx={colX(s.at[0]) - 34} cy={top + s.at[1] * rowH - 14} r="12" fill="#050505" stroke="#E4B6AA" />
                  <text x={colX(s.at[0]) - 34} y={top + s.at[1] * rowH - 10} textAnchor="middle" fontSize="11" fill="#E4B6AA" style={{ fontFamily: "var(--m)" }}>{s.n}</text>
                </g>
              ))}
            </svg>
          </div>
          <div className="uf-cap"><span>The poem as it would be written: in columns, read top to bottom, right to left</span><span>Select a number to open a stage</span></div>

          <ol className="uf-stages">
            {STAGES.map((s, i) => (
              <li key={s.n}>
                <button type="button" onClick={() => setOpen(i)}>
                  <span className="n">{String(s.n).padStart(2, "0")}</span>
                  <span className="c" lang="zh-Hant">{s.chars}</span>
                  <span className="t">{s.title}</span>
                  <span className="k">{s.kicker}</span>
                </button>
              </li>
            ))}
          </ol>
        </section>

        <section className="uf-about" id="uf-about" aria-labelledby="uf-about-h">
          <div>
            <p className="uf-label">About</p>
            <h2 id="uf-about-h" style={{ marginTop: 14, fontSize: "clamp(34px,4vw,56px)" }}>The Quiet Maiden</h2>
          </div>
          <div>
            <p className="uf-lede" style={{ maxWidth: "none" }}>
              The oldest poem in Eight Billion Ways to Love, read slowly: one character, then the people in it, then the
              whole song, then what each part is made of.
            </p>
            <p>
              The song is anonymous and comes from the Shijing, or Book of Songs. The Chinese text is from Chinese
              Wikisource. The English is a new translation made with AI assistance, still a draft for editorial review.
            </p>
            <p>
              Every sound on this page is labelled. It is a modelled sound: a plucked string synthesised in your browser,
              one note for each line. It is not a recording, and not a reconstruction of how the song was sung.
            </p>
            <div className="uf-links">
              <Link href="/onlove/book/resources/china/">Love in China →</Link>
              <Link href="/onlove/book/poems/">More poems →</Link>
              <Link href="/onlove/book/">The book →</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="uf-bar">
        <div className="uf-where">
          <span>{String(scene + 1).padStart(2, "0")} / {String(SCENES.length).padStart(2, "0")}</span>
          <b>{SCENES[scene].title}</b>
        </div>
        <div className="uf-ticks">
          {SCENES.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className={i === scene ? "on" : ""} aria-label={s.title} />
          ))}
        </div>
        <div className="uf-right">
          <span className="uf-tag" title="Synthesised in the browser: not a recording">Modelled sound</span>
          <button type="button" className="uf-snd" aria-pressed={sound} onClick={toggleSound}>
            <span className="uf-eq" aria-hidden="true"><i /><i /><i /></span>
            {sound ? "Sound on" : "Sound off"}
          </button>
        </div>
      </footer>

      {stage && (
        <div className="uf-dialog" role="dialog" aria-modal="true" aria-labelledby="uf-stage-title" onClick={() => setOpen(null)}>
          <div className="uf-card" onClick={(e) => e.stopPropagation()}>
            <p className="uf-label">{String(stage.n).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")} · {stage.kicker}</p>
            <p className="big" lang="zh-Hant">{stage.chars}</p>
            <h3 id="uf-stage-title">{stage.title}</h3>
            {stage.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {stage.link &&
              (stage.link.href.startsWith("http") ? (
                <a className="go" href={stage.link.href} target="_blank" rel="noopener noreferrer">{stage.link.label} →</a>
              ) : (
                <Link className="go" href={stage.link.href}>{stage.link.label} →</Link>
              ))}
            <nav>
              <button type="button" onClick={() => setOpen((open! + STAGES.length - 1) % STAGES.length)}>← Previous</button>
              <button type="button" onClick={() => setOpen(null)} autoFocus>Close</button>
              <button type="button" onClick={() => setOpen((open! + 1) % STAGES.length)}>Next →</button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
