let text = document.getElementById('evaluatedText')
let count = document.getElementById('wordCount')

text.addEventListener("input", () => {
	let word = text.value.trim()
	if(word.length === 0){
		count.innerText = 0
		return 
	}
	let splitedWord = word.replace(/[^a-zA-Z0-9\s]/g, "").split(/\s+/).filter(Boolean);
	count.innerText = splitedWord.length
})