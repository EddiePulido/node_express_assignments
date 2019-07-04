class Card{
    constructor(suit, numVal, strVal){
        this.suit = suit;
        this.numVal = numVal;
        this.strVal = strVal;
    }

    show(){
        console.log(this.strVal + " of " + this.suit);
    }
}

class Deck{
    constructor(){
        this.cards = [];
        this.suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        this.strVals = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
        for (var i = 0; i < this.suits.length; i++) {
            for(var j=0;j<this.strVals.length;j++){
                let card = new Card(this.suits[i],(j+1), this.strVals[j]);
                this.cards.push(card);
            }
        }
    }
}