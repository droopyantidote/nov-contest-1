const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(person => {
      if (person.profession === "developer") {
        console.log(person);
      }
    });
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
    
    const newData = { name, age, profession };
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: "dummy1", age: 30, profession: "developer" },
      { name: "dummy2", age: 35, profession: "admin" },
    ];
  
    const resultArray = data.concat(dummyArray);
    console.log(resultArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const avgAge = totalAge / data.length;
    console.log(avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);
    console.log(isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = new Set(data.map(person => person.profession));
    console.log([...professions]);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find(person => person.name === "john");
    if (john) {
      john.profession = "manager";
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === "developer").length;
    const adminCount = data.filter(person => person.profession === "admin").length;
    console.log(`Developers: ${developerCount}, Admins: ${adminCount}`);
  }
  