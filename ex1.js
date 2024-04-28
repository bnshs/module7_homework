function getProps(){

    const obj = {
      firstProp : "WOW",
      secProp : 24,
      thirdProp : true
    }
    
    
    
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        console.log(key+ ' = ' +obj[key])
      }
    }
    }
    getProps()