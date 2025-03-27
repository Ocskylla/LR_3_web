import crc32 from 'crc-32';

// BEGIN
const make = ()=>{
    return [];
}

const set = (map, key, value)=>{
let hash = crc32.str(key);
if(map[hash]===undefined){
    map[hash] = [key, value];
    return true;
}else {
    let [exist]= map[hash];
    if(exist===key){
        map[hash] = [key, value];
    return true;
    }
}
return false;
}

const get = (map,key, defaultValue=null)=>{
let hash = crc32.str(key);
if(map[hash]===undefined){
    return defaultValue;
}else {
    let [exist,value] = map[hash];
    if(exist===key){
        return value;
    }
    return defaultValue;
}
}

export {make,set, get};
// END