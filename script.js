let text = document.getElementById('evaluatedText')
let count = document.getElementById('wordCount')

text.addEventListener("input", () => {
	count.innerText = text.value.length
})