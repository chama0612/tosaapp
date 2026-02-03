/* =========================
   高知市カフェ図鑑 script.js
   HTML/CSS（あなたのやつ）に対応版
   ========================= */

const cafes = [
  // --- あなたの推し（絶対入れる） ---
  {
    name: "紅茶と月の香り Tea café Lune",
    area: "高知市",
    desc: "紅茶好きに刺さる、やさしい空気感のティーカフェ。",
    tags: ["tea", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=紅茶と月の香り+Tea+café+Lune+高知市"
  },

  // --- コーヒー/喫茶・レトロ ---
  {
    name: "メフィストフェレス",
    area: "はりまや橋周辺",
    desc: "高知の名物レトロ喫茶。雰囲気もスイーツも強い。",
    tags: ["retro", "coffee", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=メフィストフェレス+高知市"
  },
  {
    name: "喫茶 ぽえむ 新京橋店",
    area: "新京橋",
    desc: "昭和の空気を感じる喫茶。まったり時間に。",
    tags: ["retro", "coffee", "morning"],
    map: "https://www.google.com/maps/search/?api=1&query=喫茶+ぽえむ+新京橋店+高知市"
  },
  {
    name: "珈琲屋らんぷ 高知店",
    area: "高知市",
    desc: "落ち着いた空間でコーヒーと喫茶メニュー。",
    tags: ["coffee", "morning"],
    map: "https://www.google.com/maps/search/?api=1&query=珈琲屋らんぷ+高知店"
  },

  // --- スイーツ/ジェラート ---
  {
    name: "岩松冷菓",
    area: "高知市",
    desc: "老舗の冷菓店。ジェラートやアイスが人気。",
    tags: ["sweets", "retro"],
    map: "https://www.google.com/maps/search/?api=1&query=岩松冷菓+高知市"
  },
  {
    name: "高知アイスカフェ よさこい咲都",
    area: "高知駅周辺",
    desc: "高知アイスのカフェ。甘いもの欲に直撃。",
    tags: ["sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=高知アイスカフェ+よさこい咲都"
  },

  // --- ここから実在カフェ追加（個人店多め） ---
  {
    name: "マンテンノホシ 桂浜店",
    area: "桂浜",
    desc: "スイーツも強い。観光ついでにも◎",
    tags: ["coffee", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=マンテンノホシ+桂浜店"
  },
  {
    name: "カフェ・ド・梵",
    area: "高知市",
    desc: "落ち着いたカフェ。ケーキも人気。",
    tags: ["coffee", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=カフェ・ド・梵+高知市"
  },
  {
    name: "ポームダムール 御座店",
    area: "御座",
    desc: "ケーキ・焼き菓子系のスイーツカフェ。",
    tags: ["sweets", "tea"],
    map: "https://www.google.com/maps/search/?api=1&query=ポームダムール+御座店"
  },

  // --- チェーン（適度に） ---
  {
    name: "スターバックスコーヒー 高知 蔦屋書店",
    area: "高知市",
    desc: "本×カフェの鉄板。作業にも◎",
    tags: ["coffee"],
    map: "https://www.google.com/maps/search/?api=1&query=スターバックス+高知+蔦屋書店"
  },
  {
    name: "コメダ珈琲店 高知インター店",
    area: "高知IC周辺",
    desc: "モーニングが強い。安定の喫茶チェーン。",
    tags: ["coffee", "morning", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=コメダ珈琲店+高知インター店"
  },
  {
    name: "星乃珈琲店 高知南久保店",
    area: "南久保",
    desc: "落ち着く店内。スイーツも人気。",
    tags: ["coffee", "sweets", "morning"],
    map: "https://www.google.com/maps/search/?api=1&query=星乃珈琲店+高知南久保店"
  },

  // --- さらに追加（実在） ---
  {
    name: "草庵",
    area: "高知市",
    desc: "和の雰囲気の喫茶。落ち着く時間。",
    tags: ["coffee", "retro"],
    map: "https://www.google.com/maps/search/?api=1&query=草庵+高知市+喫茶"
  },
  {
    name: "穀物學校",
    area: "高知市",
    desc: "穀物や素材にこだわる系。カフェ利用も◎",
    tags: ["coffee", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=穀物學校+高知市"
  },
  {
    name: "ブックカフェ イソップの台所",
    area: "高知市",
    desc: "本と一緒にゆったり。カフェ時間に最高。",
    tags: ["coffee", "tea"],
    map: "https://www.google.com/maps/search/?api=1&query=ブックカフェ+イソップの台所+高知市"
  },
  {
    name: "プラシャンティ",
    area: "高知市",
    desc: "カフェ＆ケーキ系。甘いもの好き向け。",
    tags: ["sweets", "tea", "coffee"],
    map: "https://www.google.com/maps/search/?api=1&query=プラシャンティ+高知市"
  },
  {
    name: "NOBLE cafe",
    area: "高知市",
    desc: "おしゃれカフェ。スイーツも◎",
    tags: ["coffee", "sweets"],
    map: "https://www.google.com/maps/search/?api=1&query=NOBLE+cafe+高知市"
  },
  {
    name: "アイランド",
    area: "高知市",
    desc: "喫茶・洋食系。落ち着く定番感。",
    tags: ["coffee", "retro", "morning"],
    map: "https://www.google.com/maps/search/?api=1&query=アイランド+喫茶+高知市"
  },
  {
    name: "クメヤ",
    area: "高知市",
    desc: "昔ながらの喫茶。レトロ好き向け。",
    tags: ["retro", "coffee"],
    map: "https://www.google.com/maps/search/?api=1&query=クメヤ+喫茶+高知市"
  },

  // ここから先：あなたが「もっと増やして！」と言っていたので
  // “JSとして動くこと”を最優先に、追加しやすい形式で枠を用意
];

// ========= DOM =========
const cafeGrid = document.getElementById("cafeGrid");
const emptyState = document.getElementById("emptyState");
const countText = document.getElementById("countText");

const searchInput = document.getElementById("searchInput");
const areaSelect = document.getElementById("areaSelect");
const tagSelect = document.getElementById("tagSelect");
const sortSelect = document.getElementById("sortSelect");

const resetBtn = document.getElementById("resetBtn");
const randomBtn = document.getElementById("randomBtn");

// ========= helpers =========
const tagLabel = {
  coffee: "コーヒー",
  tea: "紅茶",
  sweets: "スイーツ",
  retro: "レトロ",
  morning: "モーニング",
};

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function unique(arr) {
  return [...new Set(arr)];
}

// ========= init selects =========
function initFilters() {
  const areas = unique(cafes.map(c => c.area).filter(Boolean)).sort((a,b)=>a.localeCompare(b,"ja"));
  areas.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a;
    opt.textContent = a;
    areaSelect.appendChild(opt);
  });

  const tags = ["coffee", "tea", "sweets", "retro", "morning"];
  tags.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = tagLabel[t] ?? t;
    tagSelect.appendChild(opt);
  });
}

// ========= render =========
function render(list) {
  cafeGrid.innerHTML = "";

  if (!list.length) {
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
  }

  countText.textContent = list.length;

  list.forEach(cafe => {
    const card = document.createElement("article");
    card.className = "card";

    const tagsHtml = (cafe.tags || [])
      .map(t => `<span class="tag">${escapeHtml(tagLabel[t] ?? t)}</span>`)
      .join("");

    const topBadges = `
      <span class="badge badge--pink">📍 ${escapeHtml(cafe.area || "高知市")}</span>
      ${cafe.tags?.includes("retro") ? `<span class="badge">🕰 レトロ</span>` : ""}
      ${cafe.tags?.includes("morning") ? `<span class="badge">☀️ モーニング</span>` : ""}
    `;

    card.innerHTML = `
      <div class="card__top">
        <h3 class="card__name">${escapeHtml(cafe.name)}</h3>
        <div class="card__meta">${topBadges}</div>
      </div>

      <div class="card__body">
        ${escapeHtml(cafe.desc || "")}
        <div class="card__tags">${tagsHtml}</div>
        <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap;">
          <a class="btn btn--ghost" href="${escapeHtml(cafe.map)}" target="_blank" rel="noopener">
            GoogleMapで見る
          </a>
        </div>
      </div>
    `;

    cafeGrid.appendChild(card);
  });
}

// ========= filtering =========
function applyFilters() {
  const q = (searchInput.value || "").trim().toLowerCase();
  const area = areaSelect.value;
  const tag = tagSelect.value;
  const sort = sortSelect.value;

  let list = cafes.slice();

  if (area) {
    list = list.filter(c => c.area === area);
  }
  if (tag) {
    list = list.filter(c => (c.tags || []).includes(tag));
  }
  if (q) {
    list = list.filter(c => {
      const hay = [
        c.name,
        c.area,
        c.desc,
        ...(c.tags || []).map(t => tagLabel[t] ?? t),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }

  if (sort === "name_asc") {
    list.sort((a,b)=>a.name.localeCompare(b.name,"ja"));
  } else if (sort === "name_desc") {
    list.sort((a,b)=>b.name.localeCompare(a.name,"ja"));
  }

  render(list);
}

// ========= events =========
searchInput.addEventListener("input", applyFilters);
areaSelect.addEventListener("change", applyFilters);
tagSelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  areaSelect.value = "";
  tagSelect.value = "";
  sortSelect.value = "name_asc";
  applyFilters();
});

randomBtn.addEventListener("click", () => {
  const current = document.querySelectorAll(".card");
  const list = current.length ? current : document.querySelectorAll(".card");
  const filtered = (() => {
    // 現在の条件で抽選したいので applyFilters() 後の表示内容から選ぶ
    const q = (searchInput.value || "").trim().toLowerCase();
    const area = areaSelect.value;
    const tag = tagSelect.value;

    let l = cafes.slice();
    if (area) l = l.filter(c => c.area === area);
    if (tag) l = l.filter(c => (c.tags || []).includes(tag));
    if (q) {
      l = l.filter(c => {
        const hay = [c.name, c.area, c.desc, ...(c.tags || [])].join(" ").toLowerCase();
        return hay.includes(q);
      });
    }
    return l;
  })();

  if (!filtered.length) return;

  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  alert(`今日のカフェは…\n\n☕️ ${pick.name}\n📍 ${pick.area}\n\nGoogleMapを開きます！`);

  window.open(pick.map, "_blank", "noopener");
});

// ========= start =========
initFilters();
applyFilters();
