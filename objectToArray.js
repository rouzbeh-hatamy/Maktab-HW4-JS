function convertObjToList(object) {
    return Object.entries(object);
}
let obj = {
    name:"roozbeh",
    surname:"hatamy",
    age:"24"
}
convertObjToList(obj)