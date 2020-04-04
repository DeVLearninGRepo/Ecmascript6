function User() {
    let name;
    let surname;

    this.setName = function(name){
        this.name = name;
    }

    this.printName = function(){
        console.log(`name: ${this.name}`);
    }
}

let user = new User();
user.setName("Vittorio");
user.printName();

let user2 = new User();
user2.setName("Luca");
user.printName.call(user2);