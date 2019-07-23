class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
            this.deck = [];
        }
        // 按照順序製造的牌
    createDeck(suits, values) {
            for (let suit of suits) {
                for (let value of values) {
                    this.deck.push(new Card(suit, value));
                }
            }
        }
        // 洗牌
    shuffle() {
            let counter = this.deck.length;
            let randomIndex = "";
            let cacheRandomCard = "";

            while (counter) {
                randomIndex = Math.floor(Math.random() * counter--);
                cacheRandomCard = this.deck[counter];
                this.deck[counter] = this.deck[randomIndex];
                this.deck[randomIndex] = cacheRandomCard;
            }
            return this.deck;
        }
        // 發牌
    deal(number) {
        let hand = [];
        while (hand.length < number) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
}

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const deck = new Deck();
deck.createDeck(suits, values);
export default deck;