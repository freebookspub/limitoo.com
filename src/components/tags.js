const tags = [
  "world",
  "us",
  "uk",
	"au",
  "media",
  "politics",
  "nyregion",
  "business",
  "opinion",
  "technology",
  "health",
  "science",
  "sports",
  "sport",
	"national",
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
	"new-zealand",
	"entertainment",
]

const tagsclr = {
  "world": '#7549d1',
  "us": '#688bf2',
  "uk": '#fba212',
	"au": '#10aed2',
  "media": '#374459',
  "politics": '#fba212',
  "nyregion": '#aada58',
  "business": '#688bf2',
	'national': '#805bda',
  "science": '#7ad2cc',
  "sports": '#0404b4',
  "sport": '#0404b4',
	"new-zealand": '#fb9312',
  "health": '#f50',
  "opinion": '#d21089',
  "technology": '#d2b310',
  "arts": '#e72b5e',
  "books": '#acd131',
  "style": '#2e5677',
  "food": '#f6b81f',
  "travel": '#9bade1',
  "magazine": '#4eaae0',
  "t-magazine": '#d5d0a1',
  "realestate": '#e32be7',
  "obituaries": '#9f1ea2',
  "upshot": '#e72b82',
  "world-asia": '#10aed2',
  "moneywatch": '#e74e2b',
	"entertainment": '#930b60',
}


function isTags (item){
  return tags.find((e) => e===item)
}


const lists = {
	tags,
	tagsclr,
	isTags

}

export default lists