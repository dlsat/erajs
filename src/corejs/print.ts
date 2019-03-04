
let texts = document.getElementById("texts")
function div() {
	texts = texts || document.getElementById("texts")
	return texts
}

export function element(e: Node) {
	div().appendChild(e)
}
export function raw(str: string) {
	element(document.createTextNode(str))
}
export function newline() {
	element(document.createElement("br"))
}
export function s(s: string) {
	raw(s)
}
export function l(s: string) {
	raw(s)
	newline()
}


