
<script>
import BaseButton from '@components/BaseButton'

export default {
  name: 'SelectCard',
  components: { BaseButton },
  filters: {
    numberMask: function(value) {
      const regx = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm
      const mask = `**** **** **** `
      return value.replace(regx, mask)
    },
  },
  data() {
    return {
      addCardFormVisible: false,
      paying: false,
      cards: [
        {
          name: 'Koko',
          number: '7777777777777777',
          expired: '02/29',
          bank: 'Cathay United Bank',
        },
        {
          name: 'U bear',
          number: '7777777777777777',
          expired: '02/29',
          bank: 'E.SUN Commercial Bank',
        },
        {
          name: '@GoGo',
          number: '7777777777777777',
          expired: '02/29',
          bank: 'Taishin International Bank',
        },
      ],
      selected: '',
    }
  },
  computed: {
    nextDisabled() {
      return this.selected === ''
    },
  },
  methods: {
    handleToPay() {
      this.paying = true
      setTimeout(() => {
        this.paying = false
        this.$router.push({ name: 'payment-success' })
      }, 2000)
    },
  },
}
</script>
<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="navbar__back" @click="$router.push({name: 'home'})"></div>
      <div class="navbar__title">Please select a card</div>
    </div>
    <transition-group
      tag="div"
      class="card__list"
      enter-active-class="animated  slideInRight slideInRightDelay"
      appear
    >
      <div
        v-for="(card, index) in cards"
        :key="card.name"
        class="card__item"
        :style="{'--index': index}"
        @click="selected = card.name"
      >
        <img :src="require(`@src/assets/card_bg${(index+1)%3}.svg`)" :alt="card.name" />
        <div class="card__info">
          <div>
            <input
              class="card__radio"
              v-model="selected"
              :value="card.name"
              :id="card.name"
              type="radio"
            />
            <label class="card__label" :for="card.name">{{ card.name }}</label>
          </div>
          <div class="card__number">{{ card.number | numberMask}}</div>

          <div class="card__footer">
            <div>{{ card.bank }}</div>
            <div>{{ card.expired }}</div>
          </div>
        </div>
      </div>
    </transition-group>
    <BaseButton
      class="button--add"
      type="outline"
      @click="addCardFormVisible = !addCardFormVisible"
    >Add ＋</BaseButton>

    <BaseButton
      class="button--pay"
      @click="handleToPay"
      :disabled="nextDisabled"
      :loading="paying"
    >Pay</BaseButton>

    <transition
      enter-active-class="animated  slideInUp"
      leave-active-class="animated  slideOutDown"
      appear
    >
      <div v-if="addCardFormVisible" class="add-card">
        <div>Add a card</div>
        <form class="form">
          <div class="form__item">
            <label for>Card Number</label>
            <input type="text" placeholder="Enter here" />
          </div>
          <div class="form__split">
            <div class="form__item">
              <label for>Expiration Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div class="form__item">
              <label for>CVC</label>
              <input type="text" placeholder="3-4 digits" />
            </div>
          </div>

          <div class="form__item">
            <label for>First Name</label>
            <input type="text" placeholder="Enter here" />
          </div>
          <div class="form__item">
            <label for>Last Name</label>
            <input type="text" placeholder="Enter here" />
          </div>
          <div class="form__item">
            <label for>Card Nickname</label>
            <input type="text" placeholder="Enter here" />
          </div>
        </form>
        <BaseButton
          class="button--add"
          @click="addCardFormVisible = !addCardFormVisible"
        >Add & Select</BaseButton>
      </div>
    </transition>
  </div>
</template>
<style lang="scss">
@import '@design';

.navbar {
  color: white;
  margin-bottom: 25px;
  position: relative;
  text-align: center;
  &__back {
    position: absolute;
    left: 0;
    top: 50%;
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    border-radius: 2px;
    padding: 5px;
    transform: translateY(-50%) rotate(135deg);
    box-shadow: 10px 10px 35px rgba(#f19040, 0.3);
  }
}
.card {
  &__item {
    position: relative;
    text-align: left;
    &:not(:first-child) {
      margin-top: -100px;
    }
  }
  &__info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    padding: 20px;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__radio {
    position: absolute;
    opacity: 0;
    &:checked + .card__label {
      &:before {
        background-color: $color-primary;
      }
      &:after {
        transform: scale(1) rotate(45deg);
      }
    }
  }
  &__label {
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      margin-right: 10px;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid white;
      border-radius: 50%;
      vertical-align: middle;
      box-sizing: border-box;
    }
    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 50%;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
        4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: scale(0) rotate(45deg);
      transition: transform 0.25s linear;
    }
  }
}

.add-card {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 80%;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background-color: rgba(white, 0.8);
  box-shadow: 10px 10px 35px rgba(#f19040, 0.3);
  backdrop-filter: blur(10px);
  text-align: center;
  padding: 25px 40px;
  box-sizing: border-box;
}
.button--add {
  margin-top: 25px;
}
.button--pay {
  position: fixed;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
}
.form {
  text-align: left;
  &__item {
    padding: 15px 0;
    border-bottom: 1px solid #979797;
    label {
      display: block;
      margin-bottom: 10px;
      color: #4a4a4a;
    }
  }
  &__split {
    display: flex;
    .form__item:last-child {
      border-left: 1px solid #979797;
      padding-left: 15px;
    }
  }
}

input {
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  &::placeholder {
    color: rgba(74, 74, 74, 0.3);
  }
}
</style>