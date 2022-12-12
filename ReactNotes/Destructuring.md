https://www.w3schools.com/react/react_es6_destructuring.asp

You can even destructor an object in the arguments of a function. Example:

const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

const displaySummary = ( { name, scores: {maths, english, science} } ) => {
  console.log(name);
  console.log(maths);
  console.log(english);
  console.log(science);
};

displaySummary(student);