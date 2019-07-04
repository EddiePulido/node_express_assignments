var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"}; 
var bees = {character: "Bees"};
var rabbit = {character: "Rabbit"};
var chrisRobin = {character: "Chistopher Robin"};
var gopher = {character: "Gopher"};
var owl = {character: "Owl"};
var kanga = {character: "Kanga"};
var eeyore = {character: "Eeyore"};
var heffalumps = {character: "Heffalumps"};
var player = {
    location: tigger;
}

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
pooh.east = bees;
bees.west = pooh;
piglet.north = owl;
owl.south = piglet;
owl.east = chrisRobin;
chrisRobin.west = owl;
chrisRobin.east = rabbit;
rabbit.west = chrisRobin;
rabbit.south = bees;
bees.north = rabbit;
rabbit.east = gopher;
gopher.west = rabbit;
chrisRobin.north = kanga;
tigger.north.east.north.west.north.south = chrisRobin;
kanga.north = eeyore;
eeyore.south = kanga;
eeyore.east = heffalumps;
heffalumps.west = eeyore;


console.log(kanga.south.character);

