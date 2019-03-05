
import { serializer, savedata, saveclass } from './savedata'



@saveclass
class ExpTable {
    @savedata Ｖ性交: number
}

var e = new ExpTable()
e.Ｖ性交 = 10
e.Ｖ性交 = 1

console.log("tbl")
console.log(serializer.serialize(e))
console.log(serializer.deserialize(serializer.serialize(e)))
console.log(e)
console.log((<any>e).prototype)
console.log((<any>e).constructor)

class Character {
    経験 = new ExpTable()
}

export default Character;
