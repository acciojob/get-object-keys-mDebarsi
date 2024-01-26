//your JS code here. If required.
// Create an object called student
const student = {
  name: 'John',
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Example usage
const keys = student.getKeys();
console.log(keys); // Output: ['name']
