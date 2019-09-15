<script>
import Deck from "./deck";
import BaseButton from "@components/BaseButton";
import BaseModal from "@components/BaseModal";
import KingIcon from "@components/KingIcon";
import Card from "@components/Card";

const totalColumns = 8;

export default {
  name: "App",
  components: { BaseModal, BaseButton, KingIcon, Card },
  data() {
    return {
      columns: [],
      ruleModalVisible: false,
      cardPositionBeforeDrag: ""
    };
  },
  mounted() {
    this.dealCardsToColumns();
  },
  methods: {
    calcDraggingPosition(pageX, pageY) {
      const {
        left,
        top,
        scrollLeft,
        maxCriticalX,
        maxCriticalY
      } = this.cardPositionBeforeDrag;
      let x = pageX - left;
      let y = pageY - top;

      if (x <= scrollLeft) {
        x = scrollLeft;
      }

      if (x >= maxCriticalX) {
        x = maxCriticalX;
      }

      if (y >= maxCriticalY) {
        y = maxCriticalY;
      }

      if (y <= 0 || maxCriticalY < 0) {
        y = 0;
      }

      return {
        left: x,
        top: y
      };
    },
    getCardPosition(target) {
      const { left, top, width, height } = target.getBoundingClientRect();
      const { scrollLeft, scrollTop } = document.body;
      const maxCriticalX = scrollLeft + innerWidth - width;
      const maxCriticalY = scrollTop + innerHeight - height;

      return {
        left,
        top,
        scrollLeft,
        maxCriticalX,
        maxCriticalY
      };
    },
    onMouseUp() {
      document.removeEventListener("mousemove", this.onMouseMove);
    },
    onMouseMove(event) {
      const { pageX, pageY } = event;
      const { left, top } = this.calcDraggingPosition(pageX, pageY);
      event.target.style.cssText = `left:${left}px;top:${top}px;`;
    },

    tableauMouseDown(event) {
      this.cardPositionBeforeDrag = this.getCardPosition(event.target);

      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    createNewDeck() {
      this.columns = [];
      this.dealCardsToColumns();
    },
    dealCardsToColumns() {
      // TODO: need to copy this suffle result to restart the game
      Deck.create();
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
          <div>FREECELL</div>
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
      <div :class="$style.tableau" @mousedown.prevent="tableauMouseDown">
        <div v-for="(column, columnIndex) in columns" :key="columnIndex" :class="$style.column">
          <Card
            v-for="card in column"
            :key="`${card.suit}${card.value}`"
            :suit="card.suit"
            :value="card.value"
            :class="$style.card"
          />
        </div>
      </div>

      <div :class="$style.footer">
        <div :class="$style.meta">
          <div @click="ruleModalVisible = true">
            <img :class="$style['rule-icon']" src="@src/assets/icon_rule.png" />
          </div>
          <div>TIME 00:00</div>
          <div>SCORE 0</div>
        </div>

        <div :class="$style.buttons">
          <BaseButton @click="createNewDeck">New Game</BaseButton>
          <BaseButton>Restart</BaseButton>
          <BaseButton>Hint</BaseButton>
          <BaseButton>Undo</BaseButton>
        </div>
      </div>
    </div>
    <BaseModal v-if="ruleModalVisible" @close="ruleModalVisible = false">
      <div slot="header">
        <KingIcon />
        <div>FREECELL RULE</div>
      </div>

      <p>The object of the game is to build up all cards on foundations from Ace to King by following suit. You win when all 52 cards are moved there, 13 to a pile.</p>
      <p>Top cards of tableau piles and cards from Cells are available to play. You can build tableau piles down by alternating color. Only one card at a time can be moved. The top card of any tableau pile can also be moved to any Cell. Each Cell (or Reserve space) may contain only one card. Cards in the cells can be moved to the foundation piles or back to the tableau piles, if possible.</p>
      <p>The rules state that you can move only one card at a time, but you can move group of cards in the proper sequence if you have enough free (empty) Cells and/or tableau piles.</p>
      <div slot="footer" :class="$style.copyright">
        Made by
        <a
          href="https://github.com/littlegreening/2019-thef2e/tree/master/week2"
          target="_blank"
        >Anna Lu</a>.
        Designed by
        <a
          href="https://challenge.thef2e.com/user/2104?schedule=2826#works-2826"
          target="_blank"
        >Daphne</a>.
      </div>
    </BaseModal>
  </div>
</template>

<style lang="scss" module>
@import "@design";
@import url("https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap");

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
.footer,
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  margin-bottom: 30px;
  .center {
    margin: 0 10px;
    text-align: center;
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
.meta div {
  margin-right: 20px;
}
.copyright {
  color: lighten($color-text-primary, 50);
  font-size: 0.75rem;
  margin-top: 10px;
}

.rule-icon {
  border-radius: 50%;
  border: 2px solid $color-text-primary;
  width: 40px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0, 0.785, 0, 1);
  &:hover {
    border-color: $color-primary;
  }
}
</style>
