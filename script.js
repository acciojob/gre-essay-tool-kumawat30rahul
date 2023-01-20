let text = document.getElementById('evaluatedText')
let count = document.getElementById('wordCount')

text.addEventListener("input", () => {
	let word = text.value
	let splitedWord = word.split(/\s+/);
	count.innerText = splitedWord.length
})