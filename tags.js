const tags = [
  "world",
  "us",
  "uk",
  "media",
  "politics",
  "nyregion",
  "business",
  "opinion",
  "technology",
  "health",
  "science",
  "sports",
  "arts",
  "books",
  "style",
  "food",
  "travel",
  "magazine",
  "t-magazine",
  "realestate",
  "obituaries",
  "upshot",
  "world-asia",
  "moneywatch",
]

export function isTags (item){
  return tags.find((e) => e===item)
}

module.exports = tags