// ====== 高知市カフェ（検索リンク方式でGoogleMapへ） ======
const cafes = [
  // ★あなたの推しカフェ追加済み！
  {
    name: "紅茶と月の香りTea café Lune",
    area: "高知市",
    tags: ["tea", "sweets", "quiet", "stylish"]
  },

  { name: "メフィストフェレス", area: "帯屋町", tags: ["coffee", "retro", "quiet"] },
  { name: "喫茶まるきゅう", area: "高知市内", tags: ["coffee", "retro", "quiet"] },
  { name: "ジャズ喫茶 ピート", area: "高知市内", tags: ["coffee", "retro", "quiet"] },
  { name: "くろしお珈琲", area: "高知市内", tags: ["coffee", "quiet"] },
  { name: "b.coffee", area: "高知市内", tags: ["coffee", "stylish"] },
  { name: "D TIGER COFFEE", area: "高知市内", tags: ["coffee", "stylish"] },
  { name: "THAT DEPENDS", area: "高知市内", tags: ["lunch", "stylish"] },
  { name: "GREEN GREEN CAFE", area: "高知市内", tags: ["sweets", "stylish"] },
  { name: "103Cafe", area: "高知市内", tags: ["sweets", "stylish"] },
  { name: "Cafe le lien", area: "高知市内", tags: ["lunch", "quiet"] },
  { name: "サンマルクカフェ 高知帯屋町店", area: "帯屋町", tags: ["coffee", "sweets", "wifi"] },

  // チェーン系（確実にヒットしやすい）
  { name: "スターバックス コーヒー 高知 蔦屋書店", area: "高知市", tags: ["coffee", "work", "wifi", "outlet", "stylish"] },
  { name: "スターバックス コーヒー 高知潮江店", area: "潮江", tags: ["coffee", "work", "wifi", "outlet"] },
  { name: "ドトールコーヒーショップ 高知帯屋町店", area: "帯屋町", tags: ["coffee", "work", "wifi"] },
  { name: "コメダ珈琲店 高知インター店", area: "高知IC", tags: ["coffee", "work", "wifi", "parking"] },
  { name: "コメダ珈琲店 高知土佐道路店", area: "土佐道路", tags: ["coffee", "work", "wifi", "parking"] },

  { name: "珈琲館 高知店", area: "高知市", tags: ["coffee", "retro"] },
  { name: "タリーズコーヒー 高知県庁前店", area: "県庁前", tags: ["coffee", "work", "wifi"] },

  // 追加候補（条件ヒット率を上げる）
  { name: "ミスタードーナツ 高知帯屋町ショップ", area: "帯屋町", tags: ["sweets", "casual", "takeout"] },
  { name: "マクドナルド 高知帯屋町店", area: "帯屋町", tags: ["casual", "takeout", "work"] },
  { name: "モスバーガー 高知土佐道路店", area: "土佐道路", tags: ["casual", "takeout", "parking"] },
  { name: "ガスト 高知北金田店", area: "北金田", tags: ["lunch", "casual", "parking", "work"] },
  { name: "ジョイフル 高知インター店", area: "高知IC", tags: ["lunch", "casual", "parking", "work"] },
];

// タグ表示名
const TAG_LABEL = {
  coffee: "コーヒー",
  tea: "紅茶",
  sweets: "スイーツ",
  lunch: "ランチ",
  work: "作業向き",
  wifi: "Wi-Fi",
  outlet: "コンセント",
  parking: "駐車場",
  takeout: "テイクアウト",
  quiet: "静か",
  stylish: "おしゃれ",
  retro: "レトロ",
  casual: "カジュアル",
};

const $ = (q) => document.querySelector(q);

const els = {
  keyword: $("#keyword"),
  mood: $("#mood"),
  purpose: $("#purpose"),
  facility: $("#facility"),
  sort: $("#sort"),
  cards: $("#cards"),
  empty: $("#empty"),
  matchCount: $("#matchCount"),
  resetBtn: $("#resetBtn"),
  chips: document.querySelectorAll(".chip"),
};

function normalize(s) {
  return (s || "").toString().trim().toLowerCase();
}

function makeMapUrl(name) {
  const q = encodeURIComponent(`${name} 高知`);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function scoreCafe(cafe, mood, purpose, facility, keyword) {
  let score = 0;

  if (mood && cafe.tags.includes(mood)) score += 3;
  if (purpose && cafe.tags.includes(purpose)) score += 3;
  if (facility && cafe.tags.includes(facility)) score += 2;

  if (keyword) {
    const k = normalize(keyword);
    const hay = normalize(`${cafe.name} ${cafe.area} ${cafe.tags.join(" ")}`);
    if (hay.includes(k)) score += 4;
  }

  // 推しカフェをほんの少し優先（好み仕様）
  if (cafe.name.includes("Tea café Lune")) score += 1.2;

  score += Math.min(cafe.tags.length, 6) * 0.1;

  return score;
}

function filterCafes() {
  const keyword = els.keyword.value.trim();
  const mood = els.mood.value;
  const purpose = els.purpose.value;
  const facility = els.facility.value;
  const sort = els.sort.value;

  let list = cafes
    .map(c => ({
      ...c,
      _score: scoreCafe(c, mood, purpose, facility, keyword),
    }))
    .filter(c => {
      if (!mood && !purpose && !facility && !keyword) return true;

      if (mood && !c.tags.includes(mood)) return false;
      if (purpose && !c.tags.includes(purpose)) return false;
      if (facility && !c.tags.includes(facility)) return false;

      if (keyword) {
        const k = normalize(keyword);
        const hay = normalize(`${c.name} ${c.area} ${c.tags.join(" ")}`);
        if (!hay.includes(k)) return false;
      }
      return true;
    });

  if (sort === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name, "ja"));
  } else {
    list.sort((a, b) => b._score - a._score);
  }

  render(list);
}

function render(list) {
  els.cards.innerHTML = "";
  els.matchCount.textContent = `${list.length}件`;

  if (list.length === 0) {
    els.empty.classList.remove("hidden");
    return;
  }
  els.empty.classList.add("hidden");

  const frag = document.createDocumentFragment();

  list.forEach(cafe => {
    const card = document.createElement("article");
    card.className = "card";

    const tagsHtml = cafe.tags
      .slice(0, 6)
      .map(t => `<span class="tag">${TAG_LABEL[t] ?? t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card__top">
        <div>
          <h3 class="card__name">${escapeHtml(cafe.name)}</h3>
          <div class="card__area">📍 ${escapeHtml(cafe.area)}</div>
        </div>
        <span class="badge">おすすめ</span>
      </div>

      <div class="tags">${tagsHtml}</div>

      <div class="actions">
        <a class="btn btn--primary" href="${makeMapUrl(cafe.name)}" target="_blank" rel="noopener">
          GoogleMapで見る
        </a>
      </div>
    `;

    frag.appendChild(card);
  });

  els.cards.appendChild(frag);
}

function escapeHtml(str) {
  return (str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function resetAll() {
  els.keyword.value = "";
  els.mood.value = "";
  els.purpose.value = "";
  els.facility.value = "";
  els.sort.value = "recommended";
  filterCafes();
}

function applyChip(tag) {
  const moodTags = ["quiet", "stylish", "retro", "casual"];
  const purposeTags = ["work", "sweets", "lunch", "coffee", "tea"];
  const facilityTags = ["wifi", "outlet", "parking", "takeout"];

  if (moodTags.includes(tag)) els.mood.value = tag;
  if (purposeTags.includes(tag)) els.purpose.value = tag;
  if (facilityTags.includes(tag)) els.facility.value = tag;

  filterCafes();
}

["input", "change"].forEach(evt => {
  els.keyword.addEventListener(evt, filterCafes);
  els.mood.addEventListener(evt, filterCafes);
  els.purpose.addEventListener(evt, filterCafes);
  els.facility.addEventListener(evt, filterCafes);
  els.sort.addEventListener(evt, filterCafes);
});

els.resetBtn.addEventListener("click", resetAll);

els.chips.forEach(btn => {
  btn.addEventListener("click", () => applyChip(btn.dataset.chip));
});

// 初期描画
filterCafes();
