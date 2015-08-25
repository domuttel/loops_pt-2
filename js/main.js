var students = ['joe', 'carl', 'rachel', 'derek', 'lily'];

// for(var i=0; i < students.length; i++) {
// }
//  console.log(students[i]);

// # 1 Working
for (i=0; i<students.length -1; i++){
console.log(students[i]);
}

// # 2 Working
for (i=0; i<students.length; i = i + 2){
console.log(students[i]);
}

// # 3 Working
for (i=0; i < 1; i++){
console.log(students.reverse());
}

// # 4 incomplete
for (i=0; i < students.length; i++){
  students[i] += students[i];
console.log(students[i]);
}