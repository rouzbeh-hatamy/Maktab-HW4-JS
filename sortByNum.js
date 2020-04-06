function sortByNum(array){
    let result = array.sort((a,b)=>{
        if (a.id>b.id) return -1
        if(b.id >a.id) return 1
        return 0
    })
    return result;
}

let arr=[{
    name:"roozbeh",
    surname:"hatamy",
    age:"24",
    id: 454
},{
    name:"ali",
    surname:"rahmati",
    age:"29",
    id: 456
},{
    name:"mehdi",
    surname:"rezaee",
    age:"40",
    id: 782
}]

console.log(sortByNum(arr));
