import _ from 'lodash';

// BEGIN
const countWords=(text)=>{
let words = _.words(text.toLowerCase());
let result={};
for(let word of words){
    if(result[word]){
        result[word]+=1;
    }
    else {
        result[word]=1;
    }
}
return result;
}
export default countWords;
// END