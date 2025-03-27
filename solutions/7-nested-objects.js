// BEGIN
const get=(object, keys)=>{
    let result = object;
    for (let key of keys){
        if(!Object.hasOwn(result, key)){
            return null;
        }
        result = result[key];
    }
    return result;
}
export default get;
// END