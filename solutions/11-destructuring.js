// BEGIN
const usersNames = (list)=>{
    let result = [];
    for (let {name} of list){
        result.push(name);
    }
    return result.sort();
}
export default usersNames;
// END