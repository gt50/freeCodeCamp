var Person = function(firstAndLast) {
    this.getFullName =  function(){
        return firstAndLast;
    };
    this.getFirstName = function(){
        return firstAndLast.split(" ")[0];
    };
    this.getLastName = function(){
        return firstAndLast.split(" ")[1];
    };
    this.setFullName = function(fullName){
        firstAndLast = fullName;
    };
    this.setFirstName = function(firstName){
        firstAndLast = firstName + " " + this.getLastName();
    };
    this.setLastName = function(lastName){
        firstAndLast = this.getFirstName() + " " + lastName;
    };
};

var bob = new Person('Bob Ross');
console.log(bob.setLastName("Jackson"));
console.log(bob.getFullName());