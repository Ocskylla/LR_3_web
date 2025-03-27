import _ from 'lodash';

// BEGIN
const normalize=(lesson)=>{
    lesson.name =_.capitalize(lesson.name);
    lesson.description = lesson.description.toLowerCase();
    return lesson;
}
export default normalize;
  // END