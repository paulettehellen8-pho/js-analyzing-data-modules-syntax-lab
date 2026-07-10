require("datejs");

//Create a function that merges all usernames into one.
function combineUsers(...args) {
   const combinedObject = {
      users: [],
   };

   //Loop through args to isolate each array
   for (const user of args) {
      //Merge arrays together using the spread operator
      combinedObject.users = [...combinedObject.users, ...user];
   }
   //Get today's date using datejs, formatted as M/d/yyyy
   combinedObject.merge_date = Date.today().toString("M/d/yyyy");
   // combinedObject.merge_date = new Date().toISOString("M/d/yyyy");
   return combinedObject;
}

const usersA = [
   { id: 1, name: "Alice" },
   { id: 2, name: "Bob" },
];
const usersB = [{ id: 3, name: "Carol" }];
const usersC = [
   { id: 4, name: "Dave" },
   { id: 5, name: "Eve" },
];

// console.log(combineUsers(usersA, usersB));
// console.log(combineUsers(usersA, usersB, usersC));

module.exports = {
   ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
