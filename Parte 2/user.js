class User {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
   
    printFullName() {
      console.log(`fullName: ${this.name} ${this.surname}`);
    }
  }
  
  let user = new User('Vittorio', 'Conte');
  user.printFullName();