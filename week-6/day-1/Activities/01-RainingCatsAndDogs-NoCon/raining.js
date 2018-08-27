var dogs = {
    raining: true,
    noise: "WOOF!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        };
    }
};

var cats = {
    raining: false,
    noise: "MEOW!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        };
    }
};

cats.makeNoise();
dogs.makeNoise();
