// BEGIN
const cloneShallow =(object)=>{
    let result = {};

    for (let key in object) {
        if(Object.hasOwn(object, key)) {
            result[key] = object[key];
        }
    }
    return result;
}
export default cloneShallow;
// END
