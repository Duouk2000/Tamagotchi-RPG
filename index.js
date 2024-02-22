// Constructor function for creating Tamagotchi instances
function Tamagotchi(name, age, strength, hitPoints) {
    this.name = name;           // Tamagotchi's name
    this.age = age;             // Tamagotchi's age
    this.strength = strength;   // Tamagotchi's strength
    this.hitPoints = hitPoints; // Tamagotchi's hit points
}

// Method to print all stats for a character
Tamagotchi.prototype.printStats = function() {
    console.log(
        `Name: ${this.name}\nAge: ${this.age}\nStrength: ${this.strength}\nHit Points: ${this.hitPoints}\n`
    );
}

// Constructor function for creating Enemy instances
function Enemy(name, strength, hitPoints) {
    this.name = name;             // Enemy's name
    this.strength = strength;     // Enemy's strength
    this.hitPoints = hitPoints;   // Enemy's hit points
}

// Method to print all stats for an enemy character
Enemy.prototype.printStats = function() {
    console.log(
        `Name: ${this.name}\nStrength: ${this.strength}\nHit Points: ${this.hitPoints}`
    );
};

// Character and Enemy Initialisation
const newChar = new Tamagotchi('Max', 15, 6, 10);
const rattata = new Enemy('Rattata', 5, 12);

// Checking strength stats and updating enemy hit points
if (newChar.strength > rattata.strength) {
    rattata.hitPoints = (rattata.hitPoints - newChar.strength);
}

// Logging stats after the encounter
console.log("Enemy stats after the encounter:");
rattata.printStats();