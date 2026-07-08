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
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
