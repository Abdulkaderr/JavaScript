import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a git.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  // TODO complete this function
  const mentorsCanTeach = mentors
.filter(mentor => mentor.canTeach.includes(moduleName))
.map(mentor => mentor.name);
return mentorsCanTeach  };

//check IF the name of module in array 
// call the name
 console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
 const mentors =  possibleMentorsForModule(moduleName);
 const randomIndex = Math.floor(Math.random()*mentors.length);
 const randomMentor = mentors[randomIndex];
return randomMentor;
  // TODO complete this function
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
