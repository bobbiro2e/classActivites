function Character(name, profession, gender, age, strength, HitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HitPoints = HitPoints;
    this.PrintStats = function () {
        console.log(JSON.stringify(this));
    };
    this.isAlive = function () {
        if (this.HitPoints > 0) {
            console.log(this.name + " is alive!")
        } else {
            console.log(this.name + " is dead. sorry.")
        }
    };
};

var bobbi = new Character("Bobbi", "wd", "f", 22, 100, 50);
var harryP = new Character("Harry", "wizard,", "m", 17, 100, 75);

bobbi.PrintStats();
harryP.PrintStats();

harryP.HitPoints = 0;

bobbi.isAlive();
harryP.isAlive();