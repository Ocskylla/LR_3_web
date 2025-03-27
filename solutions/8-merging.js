import _ from 'lodash';

// BEGIN
const merging =(object, keys, sourse) =>{
   if(keys.length === 0){
       for(const key in sourse){
           if(Object.hasOwn(sourse, key)){
               object[key] = sourse[key];
           }
       }
   }else {
       const picked = _.pick(sourse, keys);
       for (const key in picked) {
           if (Object.hasOwn(picked, key)) {
               object[key] = picked[key];
           }
       }
   }
return object;
}
export default merging;
// END