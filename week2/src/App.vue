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
          <div :class="$style.cell">
            <img src="@src/assets/home_spades.png" />
          </div>
          <div :class="$style.cell">
            <img src="@src/assets/home_hearts.png" />
          </div>
          <div :class="$style.cell">
            <img src="@src/assets/home_diamonds.png" />
          </div>
          <div :class="$style.cell">
            <img src="@src/assets/home_clubs.png" />
          </div>
        </div>
      </div>
      <div :class="$style.tableau">
        <div v-for="(column, columnIndex) in columns" :key="columnIndex" :class="$style.column">
          <Card
            v-for="(card, cardIndex) in column"
            :key="`${card.suit}${card.value}`"
            :suit="card.suit"
            :value="card.value"
            :class="$style.card"
          />
        </div>
      </div>

      <div :class="$style.footer">
        <div>
          <div :class="$style.meta">
            <span>遊戲說明圖示</span>
            <span>TIME 00:00</span>
            <span>SCORE 0</span>
          </div>
          <div :class="$style.copyright">
            Made by
            <a
              href="https://github.com/littlegreening/2019-thef2e/tree/master/week2"
              target="_blank"
            >Anna Lu</a>.
            Designed by
            <a
              href="https://challenge.thef2e.com/user/2104"
              target="_blank"
            >Daphne</a>.
          </div>
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
  font-weight: 700;
}
a {
  color: $color-primary;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: darken($color-primary, 10);
  }
}
img {
  max-width: 100%;
}
button {
  font-family: inherit;
}
.wrapper {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 95%;
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
  margin-top: -145px;
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
  .home .cell {
    position: relative;
    background: white;
    opacity: 0.6;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
    }
  }
}
.footer {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #cccccc;
}
.meta span {
  margin-right: 20px;
}
.copyright {
  color: lighten($color-text-primary, 50);
  font-size: 0.75rem;
  margin-top: 10px;
}
</style>
