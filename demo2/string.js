let username="Suraj Angad tawale";

// console.log(username);
// console.log(username.charAt(1));
// console.log(username.indexOf("a"));
// console.log(username.lastIndexOfindexOf("e"));

username.trim();
username.toLowerCase();
username.toUpperCase();


let name="Suraj Angad Tawale";
let fname;
let lname;

fname=username.slice(0,5);
lname=username.slice(5);
console.log(fname);
console.log(lname);


fname=username.slice(0,username.indexOf(" "));
lname=username.slice(username.indexOf(" ")+1);
console.log(fname);
console.log(lname);