class Visitor {
    constructor(name, surname, age, willFeed) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.willFeed = willFeed;
    }
}

class Animal {
    constructor(name, minAge, canFeed) {
        this.name = name;
        this.minAge = minAge;
        this.canFeed = canFeed;
    }

    isAccessible(visitor) {
        return visitor.age >= this.minAge && (this.canFeed ? visitor.willFeed : true);
    }
}

const zoo = {
    birds: {
        exotic: [
            new Animal("Волнистый попугай", 11, true),
            new Animal("Корелла", 13, true)
        ],
        domestic: [
            new Animal("Утка", 10, true),
            new Animal("Гусь", 10, true)
        ]
    },
    wildAnimals: {
        reptiles: [
            new Animal("Ящерица", 16, false),
            new Animal("Змея", 19, true)
        ],
        amphibians: [
            new Animal("Лягушка", 13, false),
            new Animal("Аксолотль", 13, false)
        ]
    },
    fish: {
        big: [
            new Animal("Акула", 17, false)
        ],
        small: [
            new Animal("Карась", 12, true),
            new Animal("Окунь", 14, true)
        ]
    }
};

function registerVisitor() {
    const name = prompt("Введите ваше имя:");
    const surname = prompt("Введите вашу фамилию:");
    const age = parseInt(prompt("Введите ваш возраст:"), 10);
    const willFeed = confirm("Вы хотите покормить животных?");
    const visitor = new Visitor(name, surname, age, willFeed);
    const accessibleAnimals = [];
    for (const birdType in zoo.birds) {
        for (const animal of zoo.birds[birdType]) {
            if (animal.isAccessible(visitor)) {
                accessibleAnimals.push(animal.name);
            }
        }
    }
    for (const wildType in zoo.wildAnimals) {
        for (const animal of zoo.wildAnimals[wildType]) {
            if (animal.isAccessible(visitor)) {
                accessibleAnimals.push(animal.name);
            }
        }
    }
    for (const fishType in zoo.fish) {
        for (const animal of zoo.fish[fishType]) {
            if (animal.isAccessible(visitor)) {
                accessibleAnimals.push(animal.name);
            }
        }
    }
    return accessibleAnimals;
}
const accessibleAnimals = registerVisitor();
if (accessibleAnimals.length > 0) {
    document.write("Доступные животные для вас: " + accessibleAnimals.join(", "));
} else {
    document.write("К сожалению, у вас нет доступа к животным.");
}