const BASE_URL = "https://raw.githubusercontent.com/iceefruit/pincdn/main";
let indexCache = null;

async function getIndex() {
  if (!indexCache) {
    // Uses native fetch (requires Node 18+)
    const res = await fetch(`${BASE_URL}/index.json`);
    indexCache = await res.json();
  }
  return indexCache;
}

async function random(category) {
  const index = await getIndex();
  if (!index.categories[category]) {
    throw new Error(`Category "${category}" not found`);
  }
  const n = Math.floor(Math.random() * index.categories[category]);
  return `${index.base_url}/${category}/${n}.jpg`;
}

function url(category, n) {
  return `${BASE_URL}/${category}/${n}.jpg`;
}

module.exports = {
  random,
  url
};
