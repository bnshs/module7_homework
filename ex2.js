function checkValues(){

  const obj = {
    firstProp : "WOW",
    secondProp : true
  }
  
  
  for(let key in obj){
    if(obj.hasOwnProperty('firstProp')){
      return true;
    } else{
      return false;
    }
  }
  }
  const result = console.log(checkValues())
  