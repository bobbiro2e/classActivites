function DigitalPal(hungry = true, sleepy = true, bored = true, age = 0) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.board = bored;
    this.age = age;
    this.feed = function () {
        if (this.hungry === true) {
            console.log("mmm yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("no thanks, im full...")
        }
    };
    this.sleep = function () {
        if (this.sleepy === true) {
            console.log("zzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("no way in not sleepy!");
        }
    };
    this.play = function () {
        if (this.bored === true) {
            console.log("YAY LETS PLAY!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("not in the mood... later?");
        }
    };
    this.increaseAge = function () {
        this.age += 1;
        console.log("Happy Birthday to ME! I am " + this.age + " old!")
    };
};

var tommy = new DigitalPal();

tommy.outside = false;
tommy.bark = function () {
    console.log("bow wow wow yippi yo yippy yay");
};
tommy.goOutside = function () {
    if (this.outside === false) {
        console.log("yay i love outside")
        this.outside = true;
        this.bark();
    } else {
        console.log("were already outside silly!")
    }
};
tommy.goInside = function () {
    if (this.outside === true) {
        console.log("aww do we have to... okay... ")
    } else {
        console.log("already inside silly!")
    }
};

var jimmy = new DigitalPal();

jimmy.houseCondition = 100;
jimmy.meow = function () {
    console.log("meow");
};
jimmy.destroyFurniture = function () {
    if (houseCondition > 0) {
        this.houseCondition -= 10;
        console.log("muahahaha take that furniture!");
        this.bored = false;
        this.sleepy = true;
    } else {
        console.log("house already destroyed...");
    }
};
jimmy.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("here we go again!");
};

tommy.feed();
tommy.sleep();
tommy.play();
jimmy.feed();
jimmy.sleep();
jimmy.play();

