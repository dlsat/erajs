
import * as lz from 'lz-string'

class SaveManager {
    classes = new Map<string, Function>()
    classNames = new Map<Function, string>()
    map = new Map<any, string[]>()

    registerClass(cls: any, name: string) {
        this.classes.set(name, cls)
        this.classNames.set(cls, name)
    }
    registerMember(cls: any, key: string) {
        let a = this.map.get(cls)
        if (a === void 0) {
            a = []
            this.map.set(cls, a)
        }
        a.push(key)
    }

    saveStorage(slotKey: string, value: string) {
        window.localStorage.setItem(slotKey, value)
    }
    loadStorage(slotKey: string, value: string): string {
        return window.localStorage.getItem(slotKey) || ""
    }
    removeStorage(slotKey: string) {
        window.localStorage.removeItem(slotKey)
    }

    serialize(obj: any): string {
        let d = this.convertToSerializableData(obj)
        let str = JSON.stringify(d)
        str = lz.compressToBase64(str)
        return str
    }
    deserialize(str: string): any {
        let json = lz.decompressFromBase64(str)
        let obj = JSON.parse(json)
        let d = this.makeFromSerializableData(obj)
        return d
    }

    makeFromSerializableData(obj: any): any {
        if (obj === null)
            return null
        else if (obj === void 0)
            return void 0
        else if (typeof (obj) === "symbol")
            return void 0
        else if (typeof (obj) === "function")
            return void 0
        else if (typeof (obj) === "object") {
            let clsName = obj.__class__
            let cls = this.classes.get(clsName)
            let data = obj.__data__
            if (cls && data) {
                var o = new (<any>cls)()
                Object.assign(o, data)
                return o
            }
            else {
                return obj
            }
        }
        else {
            return obj
        }
    }

    convertToSerializableData(obj: any): any {
        if (obj === null)
            return null
        else if (obj === void 0)
            return void 0
        else if (typeof (obj) === "symbol")
            return void 0
        else if (typeof (obj) === "function")
            return void 0
        else if (typeof (obj) === "object") {
            let c = obj.constructor
            let name = this.classNames.get(c)
            let keys = this.map.get(c)
            if (name && keys) {
                var t = Object.create(null)
                for (var k of keys) {
                    var val = this.convertToSerializableData(obj[k])
                    if (val !== void 0)
                        t[k] = val
                }
                return {
                    __class__: name,
                    __data__: t
                }
            }
            else {
                return void 0
            }
        }
        else {
            return obj
        }
    }
}
export let serializer = new SaveManager()

export function savedata(target: any, key: string) {
    console.log("@save")
    console.log(target)
    console.log(key)
    serializer.registerMember(target.constructor, key)
}

export function saveclass(cls: any) {
    console.log("@saveObject")
    console.log(cls)
    serializer.registerClass(cls, cls.name)
}
