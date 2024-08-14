// Part 1: Humble Beginnings
// Define the adventurer object with basic properties
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }
  },
  // Method for rolling a dice
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};

// Log each item in Robin's inventory
adventurer.inventory.forEach(item => console.log(item));

// Test the roll method by calling it a few times
adventurer.roll();
adventurer.roll(2);  // Example with a modifier
adventurer.roll(-1); // Example with a negative modifier

// Part 2: Class Fantasy
// Define the Character class
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
    this.companions = [];
  }

  // Method to simulate a dice roll
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// Create an instance for Robin
const robinCharacter = new Character("Robin");
robinCharacter.inventory = ["sword", "potion", "artifact"];

// Create an instance for Robin's companion Leo
robinCharacter.companion = new Character("Leo");
robinCharacter.companion.type = "Cat";

// Create an instance for Leo's companion Frank
robinCharacter.companion.companion = new Character("Frank");
robinCharacter.companion.companion.type = "Flea";
robinCharacter.companion.companion.inventory = ["small hat", "sunglasses"];

// Test the roll method for Robin and companions
robinCharacter.roll();
robinCharacter.companion.roll();
robinCharacter.companion.companion.roll();

// Part 3: Class Features
// Define the Adventurer class that extends Character
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.experience = 0;
    this.level = 1;
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  gainExperience(points) {
    this.experience += points;
    if (this.experience >= 100) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level += 1;
    this.experience = 0;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }
}

// Define the Companion class that extends Character
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.loyaltyLevel = 100;
  }

  showLoyalty() {
    console.log(`${this.name} the ${this.type} has a loyalty level of ${this.loyaltyLevel}.`);
  }

  assist() {
    console.log(`${this.name} is assisting. Roll for help!`);
    super.roll();
  }
}

// Create Robin as an Adventurer
const robinAdventurer = new Adventurer("Robin", "Scout");
robinAdventurer.inventory.push("sword", "potion", "artifact");

// Create Leo as a Companion
const leo = new Companion("Leo", "Cat");
robinAdventurer.companion = leo;

// Create Frank as Leo's Companion
const frank = new Companion("Frank", "Flea");
leo.companion = frank;
frank.inventory.push("small hat", "sunglasses");

// Test the implementation
robinAdventurer.roll();
leo.showLoyalty();
frank.assist();
robinAdventurer.gainExperience(120);