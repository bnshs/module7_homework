function emptyObj(){
    const empt = Object.create(null)
    console.log(Object.getPrototypeOf(empt))
    }
    emptyObj()
    