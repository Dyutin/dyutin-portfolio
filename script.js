const L = (t, l) => ({ t, l });
const DATA = [
  {
    t: "Experience",
    o: 1,
    k: [
      {
        t: "Zynga Inc.",
        m: "Jun – Nov 2023",
        s: "Software Engineering Mentee · C#, Unity, Protocol Buffers",
        o: 1,
        k: [
          {
            t: "Chosen for a mentorship programme with senior engineers after winning 1st place at the Zynga India Hackathon.",
          },
          {
            t: "Built a standalone tool that turns design configs into engine-ready formats, cutting manual data entry.",
          },
          {
            t: "Used Protocol Buffers for type-safe validation between the toolkit and the game engine.",
          },
        ],
      },
      {
        t: "SmartInternz",
        m: "May – Jul 2023",
        s: "Android Developer Intern · Kotlin, Jetpack Compose",
        k: [
          {
            t: "Shipped a production-grade news aggregator on Google Developers Program externship.",
          },
          {
            t: "MVVM architecture to separate business logic from UI; Coroutines for async loading.",
          },
          {
            t: "Retrofit network layer over REST APIs; Firebase Authentication for sessions.",
          },
        ],
      },
    ],
  },
  {
    t: "Projects",
    o: 1,
    k: [
      {
        t: "Clinical AI Platform",
        m: "React · FastAPI · PyTorch",
        s: "Middle ear disease diagnosis, end to end",
        k: [
          {
            t: "FastAPI + React with async inference queues so heavy model work never blocks the UI.",
          },
          {
            t: "Custom Vision Transformer (SupCon ViT, 22M params) reached 97.3% accuracy, ahead of ResNet-50 baselines.",
          },
          {
            t: "LRP visual explanations for clinicians, plus a LangChain RAG layer that checks outputs against guidelines.",
          },
        ],
      },
      {
        t: "Emotionally Intelligent Virtual Companion",
        m: "Python · C# · Unity",
        s: "An avatar that adapts to how you feel",
        k: [
          {
            t: "Bridged a Unity (C#) frontend and a Python backend over asynchronous sockets to keep latency low.",
          },
          {
            t: "Orchestrated five ML models, including BERT and Wav2Vec, working in unison in real time.",
          },
        ],
      },
      {
        t: "LLM Fine-Tuning Pipeline",
        m: "Unsloth · QLoRA · W&B",
        s: "Mistral-7B on modest hardware",
        k: [
          { t: "4-bit QLoRA cut VRAM use by about 70% and sped up training." },
          {
            t: "Data ingestion scripts and W&B logging for stable runs on constrained GPUs.",
          },
        ],
      },
    ],
  },
  {
    t: "Games",
    m: "itch.io",
    k: [
      L("MATHLORE", "https://reflexbyte.itch.io/m4thl0re"),
      L("Undiscover Gravity", "https://reflexbyte.itch.io/undiscover-gravity"),
      L("Against All Odds", "https://dyu-things.itch.io/against-all-odds"),
      L("A Pirate’s Luck", "https://reflexbyte.itch.io/a-pirates-luck"),
    ],
  },
  {
    t: "Design",
    m: "external",
    k: [L("Design and video work", "https://dyuthings.wixsite.com/portfolio")],
  },
  {
    t: "Awards",
    k: [
      {
        t: "1st place, Zynga India Hackathon",
        s: "A complete game, built from scratch in 24 hours",
      },
      { t: "1st place, Pune iDEATHON", s: "Winner among 750+ participants" },
    ],
  },
  {
    t: "Stack",
    k: [
      {
        t: "Languages",
        chips: "Python,Java,C++,C#,TypeScript,SQL,Kotlin,HTML5,CSS3",
      },
      {
        t: "Frameworks",
        chips:
          "React,FastAPI,Flask,Jetpack Compose,LangChain,PyTorch,TensorFlow",
      },
      { t: "Tools", chips: "Microservices,REST,Git,Docker,Linux,MVVM" },
      { t: "Data", chips: "PostgreSQL,SQLite,Spark,ChromaDB,Protocol Buffers" },
    ],
  },
  {
    t: "Education",
    k: [
      {
        t: "MSc Artificial Intelligence, Distinction",
        m: "2024 – 2025",
        s: "University of Edinburgh · NLP, Deep Learning, Computer Vision, Probabilistic Modelling",
      },
      {
        t: "B.Tech Computer Science, First Class Honours",
        m: "2020 – 2024",
        s: "VIT Bhopal University · CGPA 9.15/10",
      },
    ],
  },
  {
    t: "Contact",
    o: 1,
    k: [
      L("dyutin333@gmail.com", "mailto:dyutin333@gmail.com"),
      L("github.com/Dyutin", "https://github.com/Dyutin"),
      L("linkedin.com/in/dyutin", "https://linkedin.com/in/dyutin"),
    ],
  },
];
const tree = document.getElementById("tree"),
  crumb = document.getElementById("crumb"),
  zt = document.getElementById("zt"),
  hero = document.getElementById("hero"),
  ramp = document.getElementById("ramp");
let stack = [];
function mk(n, d) {
  const kids = n.k && n.k.length,
    el = document.createElement("div");
  el.className =
    "n d" +
    Math.min(d, 2) +
    (kids ? " has" : " leaf") +
    (kids && !(n.o || (stack.length && d === 0)) ? " c" : "");
  const r = document.createElement("div");
  r.className = "r";
  r.tabIndex = 0;
  const h = document.createElement("button");
  h.className = "h";
  h.tabIndex = -1;
  h.title = "Focus on this";
  h.setAttribute("aria-label", "Focus on " + n.t);
  const t = document.createElement("span");
  t.className = "t";
  if (n.l) {
    const a = document.createElement("a");
    a.href = n.l;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = n.t;
    a.onclick = (e) => e.stopPropagation();
    t.append(a);
  } else t.textContent = n.t;
  if (n.s) {
    const s = document.createElement("span");
    s.className = "s";
    s.textContent = n.s;
    t.append(s);
  }
  if (n.chips) {
    const c = document.createElement("div");
    c.className = "chips";
    n.chips.split(",").forEach((x) => {
      const s = document.createElement("span");
      s.textContent = x;
      c.append(s);
    });
    t.append(c);
  }
  r.append(h, t);
  if (n.m) {
    const m = document.createElement("span");
    m.className = "m";
    m.textContent = n.m;
    r.append(m);
  }
  el.append(r);
  if (kids) {
    const b = document.createElement("div");
    b.className = "b";
    const bi = document.createElement("div");
    bi.className = "bi";
    n.k.forEach((k) => bi.append(mk(k, d + 1)));
    b.append(bi);
    el.append(b);
    r.onclick = () => el.classList.toggle("c");
    h.onclick = (e) => {
      e.stopPropagation();
      zoom(n);
    };
  }
  r._n = n;
  return el;
}
function render() {
  tree.innerHTML = "";
  crumb.innerHTML = "";
  const root = stack[stack.length - 1],
    z = stack.length > 0;
  hero.style.display = ramp.style.display = z ? "none" : "";
  zt.style.display = z ? "block" : "none";
  if (z) {
    const home = document.createElement("a");
    home.textContent = "Home";
    home.onclick = () => {
      stack = [];
      render();
    };
    crumb.append(home);
    stack.forEach((s, i) => {
      crumb.append(" / ");
      const a = document.createElement("a");
      a.textContent = s.t;
      a.onclick = () => {
        stack = stack.slice(0, i + 1);
        render();
      };
      crumb.append(a);
    });
    zt.textContent = root.t;
    root.k
      ? root.k.forEach((k) => tree.append(mk(k, 0)))
      : tree.append(mk(root, 0));
  } else {
    DATA.forEach((n) => tree.append(mk(n, 0)));
    drawAll();
  }
  window.scrollTo({ top: 0 });
}
function zoom(n) {
  stack.push(n);
  render();
  const f = tree.querySelector(".r");
  f && f.focus();
}
function out() {
  if (stack.length) {
    stack.pop();
    render();
  }
}
const B8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];
const ss = (a, b, x) => {
  x = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return x * x * (3 - 2 * x);
};
function paint(cv, w, h, f) {
  cv.width = w;
  cv.height = h;
  const c = cv.getContext("2d");
  c.clearRect(0, 0, w, h);
  c.fillStyle = "#0b0b0b";
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const v = f(x, y);
      if (v * 64 > B8[y % 8][x % 8] + 0.5) c.fillRect(x, y, 1, 1);
    }
}
function drawRamp() {
  const px = 2,
    w = Math.max(1, Math.floor(ramp.parentElement.clientWidth / px)),
    h = 10;
  ramp.style.height = h * px + "px";
  paint(ramp, w, h, (x, y) =>
    y === 0
      ? x % 2 === 0
        ? 1
        : 0
      : 0.38 * (1 - y / h) ** 1.5 * ss(0.3, 0.9, x / w),
  );
}
function drawHalo() {
  const ph = document.querySelector(".ph"),
    hl = document.getElementById("halo"),
    px = 1;
  const P = ph.clientWidth / px,
    Hh = ph.clientHeight / px,
    w = Math.max(1, Math.floor(1.22 * P)),
    h = Math.max(1, Math.floor(1.16 * Hh));
  const cx = 0.59 * P,
    cy = 0.5 * Hh,
    R = 0.42 * P;
  paint(
    hl,
    w,
    h,
    (x, y) =>
      Math.pow(Math.max(0, 1 - Math.hypot(x - cx, y - cy) / R), 1.4) * 0.3,
  );
}
function fitPhoto() {
  const ph = document.querySelector(".ph");
  const img = ph.querySelector("img");
  const ramp = document.getElementById("ramp");

  ph.style.marginTop = "";

  if (!matchMedia("(max-width: 700px)").matches) {
    img.style.maxHeight = "";
    return;
  }

  const base = parseFloat(getComputedStyle(ph).marginTop) || 0;
  const top = ph.getBoundingClientRect().top + scrollY;

  // Reserve space for the ramp
  const rampSpace =
    ramp.getBoundingClientRect().height +
    parseFloat(getComputedStyle(ramp).marginBottom || 0);

  const room = Math.max(
    120,
    Math.floor(innerHeight - top - rampSpace)
  );

  img.style.maxHeight = room + "px";

  if (!img.complete || !img.naturalHeight) return;

  const slack = room - img.getBoundingClientRect().height;

  if (slack > 1) {
    ph.style.marginTop = base + Math.floor(slack) + "px";
  }
}
function drawAll() {
  if (!stack.length) {
    fitPhoto();
    drawRamp();
    drawHalo();
  }
}
if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawAll);
addEventListener("orientationchange", () => setTimeout(drawAll, 200));
let lastW = innerWidth;
addEventListener("resize", () => {
  if (innerWidth !== lastW) {
    lastW = innerWidth;
    drawAll();
  }
});
addEventListener("load", drawAll);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    out();
    return;
  }
  const a = document.activeElement;
  const rows = [...tree.querySelectorAll(".r")].filter(
    (r) => !r.closest(".c>.b"),
  );
  if (!a || !a.classList.contains("r")) {
    if (["ArrowDown", "ArrowUp"].includes(e.key) && rows[0]) {
      e.preventDefault();
      rows[0].focus();
    }
    return;
  }
  const i = rows.indexOf(a),
    n = a.parentElement;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    (rows[i + 1] || a).focus();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    (rows[i - 1] || a).focus();
  } else if (e.key === "ArrowRight" && n.classList.contains("has")) {
    e.preventDefault();
    if (n.classList.contains("c")) n.classList.remove("c");
    else rows[i + 1] && rows[i + 1].focus();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    if (n.classList.contains("has") && !n.classList.contains("c"))
      n.classList.add("c");
    else {
      const p = n.parentElement.closest(".n");
      p && p.querySelector(":scope>.r").focus();
    }
  } else if (e.key === "Enter" && a._n.k) {
    e.preventDefault();
    zoom(a._n);
  } else if (e.key === " " && n.classList.contains("has")) {
    e.preventDefault();
    n.classList.toggle("c");
  }
});
render();