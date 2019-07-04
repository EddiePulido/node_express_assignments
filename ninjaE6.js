class Ninja{
    constructor(name){
        this.name = name;
        this.strength = 3;
        this.speed = 3;
        this.health = 100;
    }

    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    sayName(){
        console.log("My ninja name is " + this.name);
    }

    drinkSake(){
        this.health += 10;
    }

    punch(ninja){
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    }

    kick(ninja){
        ninja.health -= 15;
        console.log(ninja.name + " was kicked by " + this.name + " and lost 15 Health!");
    }
}   


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Wise Message");
    }

    showStats(){
        super.showStats();
    }
}