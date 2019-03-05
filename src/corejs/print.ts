
let texts: HTMLElement
function div() {
    if (!texts) {
        texts = document.createElement('div')
        document.body.appendChild(texts)
    }
	return texts
}

export async function element(e: Node) {
	div().appendChild(e)
}
export async function raw(str: string) {
    await element(document.createTextNode(str))
}
export async function newline() {
    await element(document.createElement("br"))
}
export async function s(s: string) {
    await raw(s)
}
export async function l(s: string) {
    await raw(s)
    await newline()
}


