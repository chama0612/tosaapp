const cafes = [
  { name: "Mephistopheles", tags: ["coffee","quiet","stylish"] },
  { name: "Cocochi Coffee", tags: ["coffee","wifi"] },
  { name: "botanical cafe Konoha", tags: ["stylish","quiet","sweets"] },
  { name: "GRAYGE COFFEE ROASTER", tags: ["coffee","stylish"] },
  { name: "Hidamarikōji Tosa-cha Cafe", tags: ["quiet","stylish","sweets"] },
  { name: "Coffee House Histoire", tags: ["coffee","quiet"] },
  { name: "Cafe de LA PAIX", tags: ["coffee","stylish"] },
  { name: "Spoon", tags: ["stylish","sweets","lunch"] },
  { name: "cafe&gallery TOSACOYA", tags: ["quiet","stylish"] },
  { name: "Kissaco", tags: ["coffee","quiet"] },
  { name: "NICO CAFE", tags: ["stylish","sweets"] },
  { name: "ecocca", tags: ["stylish","coffee","wifi"] },
  { name: "Garden of Anne", tags: ["quiet","stylish","sweets"] },
  { name: "を菓子と。Coffee and Bake", tags: ["sweets","coffee"] },
  { name: "Pasta Cafe Hachinomori", tags: ["lunch","stylish"] },
  { name: "DEWATA BALI CAFE", tags: ["lively","lunch"] },
  { name: "Jazz & Coffee Peat", tags: ["coffee","quiet"] },
  { name: "喫茶 ブイヤベース", tags: ["quiet","coffee"] },
  { name: "喫茶まるきゅう", tags: ["quiet","lunch"] },
  { name: "烏兎匆々", tags: ["stylish","quiet"] },
  { name: "marjametsä", tags: ["stylish","sweets"] },
  { name: "タルトデトルタ", tags: ["sweets","stylish"] },
  { name: "Komeda’s Coffee 高知", tags: ["coffee","wifi","lunch"] },
  { name: "Shimanto Ochakuri Cafe", tags: ["sweets","stylish"] },
  { name: "Ikegawa Chaen Cafe", tags: ["quiet","sweets"] },
  { name: "Depot Kyocho Ten", tags: ["coffee","lively"] },
  { name: "Cerberus coffee", tags: ["coffee","stylish"] },
  { name: "kawakubo coffee", tags: ["coffee","quiet"] },
  { name: "Yashinomi Cafe", tags: ["quiet","stylish"] },
  { name: "Coffee Stand 88", tags: ["coffee","lively"] }
];

function filterCafes() {
  const checked = [...document.querySelectorAll("input:checked")].map(i => i.value);
  const list = document.getElementById("cafeList");
  list.innerHTML = "";

  const results = cafes.filter(cafe =>
    checked.every(tag => cafe.tags.includes(tag))
  );

  if (results.length === 0) {
    list.innerHTML = "<p>条件に合うカフェが見つかりませんでした。</p>";
    return;
  }

  results.forEach(cafe => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${cafe.name}</h3>
      <div class="tags">${cafe.tags.join(" / ")}</div>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.name + " 高知市")}" target="_blank">
        Google Mapで見る
      </a>
    `;
    list.appendChild(div);
  });
}
