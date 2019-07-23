<script>
import Deck from "./deck";

const deckColumns = 8;

export default {
  name: "App",
  components: {},
  data() {
    return {
      columns: []
    };
  },
  mounted() {
    this.dealCardsToColumns();
  },
  methods: {
    dealCardsToColumns() {
      // TODO: need to copy this suffle result to restart the game
      const getSuffledCards = Deck.shuffle();
      const cardsPerColumn = Math.floor(getSuffledCards.length / deckColumns);
      const columnsBonus = getSuffledCards.length % deckColumns;

      for (let column = 1; column <= deckColumns; column++) {
        const dealNumber = cardsPerColumn + (column <= columnsBonus ? 1 : 0);
        this.columns.push(Deck.deal(dealNumber));
      }
    }
  }
};
</script>
<template>
  <div id="app">
    <ul>
      <li v-for="(column, index) in columns" :key="index">
        <div v-for="card in column" :key="`${card.suit}${card.value}`">{{card.suit}}{{card.value}}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
</style>
