function stringSplit(string){
    let arr=[];
    for (let i = 0; i <= string.length; i++) {
      for (let k =0 ;k <=string.length; k++) {
        let s = string.slice(i,k)
        arr.push(s)
        
      }
        
    }
    let array = arr.filter(function(str) {
        return /\S/.test(str);
    });
    console.log(array);

}



stringSplit("roozbeh");