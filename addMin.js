function addMin(date , min){
    date.setMinutes(min)
    return date;
}
let date = new Date(1996, 05, 11);

console.log(addMin(date,330));
