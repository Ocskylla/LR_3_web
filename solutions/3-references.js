// BEGIN
const compare =(c1, c2)=> {
    if ((c1.name === c2.name) && (c1.state === c2.state) && (c1.website === c2.website)) {
        return true;
    } else {
        return false;
    }
}
export default compare;
// END