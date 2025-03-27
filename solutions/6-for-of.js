// BEGIN
const pick=(object, keys)=>{
    let result = {};
    for (let key of keys){
        if(object[key]!==undefined){
            result[key] = object[key];
        }
    }
    return result;
}
export default pick;
// END