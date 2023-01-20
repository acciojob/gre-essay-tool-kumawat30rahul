let text = document.getElementById('evaluatedText')
let count = document.getElementById('wordCount')

text.addEventListener("input", () => {
	let word = text.value
	let splitedWord = word.replace(/[^a-zA-Z0-9\s]/g, "").split(/\s+/);
	count.innerText = splitedWord.length
})