class Character {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }
    attack(target) {
        target.health -= this.attackPower;
        console.log(`${this.name} attacks ${target.name}, health left: ${target.health}`);
    }
    isAlive() {
        return this.health > 0;
    }
}

class Player extends Character {
    constructor(name, health, attackPower, specialMove) {
        super(name, health, attackPower); 
        this.specialMove = specialMove;   
    }
    attack(target) {
        super.attack(target); 
        if (this.specialMove) {
            target.health -= 10;
            console.log(`${this.name} uses Special Move ${this.specialMove}, ${target.name} health left: ${target.health}`);
        }
    }
}

class Enemy extends Character {
    constructor(name, health, attackPower, type) {
        super(name, health, attackPower);
        this.type = type;
    }
    attack(target) {
        console.log(`${this.name} (${this.type}) prepares to attack!`);
        super.attack(target); 
    }
}

function battle(player, enemy) {
    console.log(` Battle Start: ${player.name} vs ${enemy.name}\n`);

    let round = 1;
    while (player.isAlive() && enemy.isAlive()) {
        console.log(`--- Round ${round} ---`);

        player.attack(enemy);
        if (!enemy.isAlive()) {
            console.log(`${enemy.name} has been defeated!`);
            break;
        }

        enemy.attack(player);
        if (!player.isAlive()) {
            console.log(`${player.name} has been defeated!`);
            break;
        }

        round++;
    }

    console.log(`\nBattle Ended`);
}


let hero = new Player("Knight", 100, 20, "Power Slash");
let monster = new Enemy("Orc", 120, 15, "Brute");

battle(hero, monster);

