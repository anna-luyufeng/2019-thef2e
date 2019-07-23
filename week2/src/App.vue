<script>
import Deck from "./deck";
import BaseButton from "@components/BaseButton";
import KingIcon from "@components/KingIcon";
import Card from "@components/Card";

const totalColumns = 8;

export default {
  name: "App",
  components: { BaseButton, KingIcon, Card },
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
      const cardsPerColumn = Math.floor(getSuffledCards.length / totalColumns);
      const columnsBonus = getSuffledCards.length % totalColumns;

      for (let column = 1; column <= totalColumns; column++) {
        const dealNumber = cardsPerColumn + (column <= columnsBonus ? 1 : 0);
        this.columns.push(Deck.deal(dealNumber));
      }
    }
  }
};
</script>
<template>
  <div id="app">
    <div :class="$style.wrapper">
      <div :class="$style.header">
        <div ref="freeCells" :class="$style.free">
          <div :class="$style.cell"></div>
          <div :class="$style.cell"></div>
          <div :class="$style.cell"></div>
          <div :class="$style.cell"></div>
        </div>
        <div :class="$style.center">
          <KingIcon />
        </div>
        <div ref="homeCells" :class="$style.home">
          <div :class="$style.cell"></div>
          <div :class="$style.cell"></div>
          <div :class="$style.cell"></div>
          <div :class="$style.cell"></div>
        </div>
      </div>
      <div :class="$style.tableau">
        <div v-for="(column, index) in columns" :key="index" :class="$style.column">
          <Card
            v-for="(card, cardIndex) in column"
            :key="`${card.suit}${card.value}`"
            :suit="card.suit"
            :value="card.value"
            :class="$style.card"
            :style="{ top: `${cardIndex * 30}px` }"
          />
        </div>
      </div>

      <div :class="$style.footer">
        <div :class="$style.meta">
          <div>遊戲說明圖示</div>
          <div>TIME 計時</div>
          <div>SCORE 分數</div>
        </div>
        <div :class="$style.buttons">
          <BaseButton>New Game</BaseButton>
          <BaseButton>Restart</BaseButton>
          <BaseButton>Hint</BaseButton>
          <BaseButton>Undo</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "@design";
@import url("https://fonts.googleapis.com/css?family=Lato:700,900&display=swap");

body {
  margin: 0;
  background: $color-background;
  font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
img {
  max-width: 100%;
}
button {
  font-family: inherit;
}
.wrapper {
  margin: 2rem;
}
.tableau {
  display: flex;
  justify-content: space-between;
}
.column {
  position: relative;
  flex-basis: calc(100% / 8 - 10px);
}
.card:not(:first-child) {
  margin-top: -120px;
}
.header,
.free,
.home,
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  margin-bottom: 30px;
  .center {
    margin: 0 10px;
  }
  .free,
  .home {
    width: 100%;
  }
  .cell {
    padding-bottom: calc(100% / 3);
    border: 2px solid #fcfcfc;
    border-radius: 8px;
    flex-basis: calc(100% / 4 - 10px);
  }
}
.footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #cccccc;
  .meta {
    display: flex;
    flex: 1;
    > div {
      margin-right: 20px;
    }
  }
}
</style>
