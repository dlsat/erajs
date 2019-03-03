
let texts = document.getElementById("texts")
function printelement(e) {
	texts.appendChild(e)
}
function printraw(str) {
	printelement(document.createTextNode(str))
}
function printnewline() {
	printelement(document.createElement("br"))
}
function print(s) {
	printraw(s)
}
function printl(s) {
	printraw(s)
	printnewline()
}

console.log("hoge")
console.log(`hoge${1+2}`)
