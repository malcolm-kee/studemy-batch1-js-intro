function getStudents() {
  return ['Rainier', 'Eric', 'Aly', 'Nica'];
}

function logStudents() {
  const students = getStudents();
  const [firstStudent, ...otherStudents] = students;

  // const firstStudent = students[0];
  // const secondStudent = students[1];
  // const thirdStudent = students[2];
  // const fourthStudent = students[3];

  console.log({ firstStudent, otherStudents });

  // console.log(
  //   `Students are ${firstStudent}, ${secondStudent}, ${thirdStudent}, and ${fourthStudent}`
  // );
}

logStudents();

function getPerson() {
  return {
    name: {
      firstName: 'Malcolm',
      lastName: 'Swift'
    },
    age: 31,
    friends: ['Mickey', 'Mouse'],
    location: 'Malaysia'
  };
}

// function logPersonDetails() {
//   const person = getPerson();

//   // const personAge = person.age;
//   // const { age: personAge } = person;

//   // const personLocation = person.location;
//   // const { location: personLocation } = person;
//   const { age: personAge, location: personLocation } = person;

//   console.log(`Person aged ${personAge} is at ${personLocation}`);
// }

// logPersonDetails();

function logPersonDetailsV2() {
  const person = getPerson();
  // const age = person.age;
  // const location = person.location;
  const { age, location } = person;
  console.log(`Person aged ${age} is at ${location}`);
}

logPersonDetailsV2();
