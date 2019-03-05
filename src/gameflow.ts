import * as print from "./corejs/print"

    console.log("ss")
export async function main() {
    console.log("ss")
    await print.l("hoge2222sssssssssss")
    await print.l("hoge2222sssssssssssss")
    await print.l("hoge2222sssssssssss")
    await print.l("hoge2222sssssssssss")
    await print.l("hoge2222sssssssssss")
}


class Hoge {

}
var h = new Hoge()
var o1 = Object.create(Hoge)
console.log(o1)
console.log(Hoge)
console.log((<any>h).constructor)
console.log(h)
