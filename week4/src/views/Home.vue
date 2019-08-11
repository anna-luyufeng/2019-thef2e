<script>
import BaseButton from '@components/BaseButton'
import BaseInputNumber from '@components/BaseInputNumber'

export default {
  name: 'Home',
  components: { BaseButton, BaseInputNumber },

  data() {
    return {
      tempValue: 0,
      products: [
        {
          id: 1,
          name: 'Bread and egg',
          ingredients: 'Flour, egg, green onion, soy sauce',
          price: 40,
          image: 'product_1.svg',
        },
        {
          id: 2,
          name: 'Original Quiche',
          ingredients: 'Egg, Flour, Green Onion',
          price: 20,
          image: 'product_2.svg',
        },
        {
          id: 3,
          name: 'Red bean cake',
          ingredients: 'Red Beans, Flour, Milk',
          price: 10,
          image: 'product_3.svg',
        },
        {
          id: 4,
          name: 'Fried meatballs',
          ingredients: 'Pork, Potato Starch, Shiitake, Coriander',
          price: 50,
          image: 'product_4.svg',
        },
        {
          id: 5,
          name: 'Oyster omelette',
          ingredients: 'Oysters, Egg, Potato Starch',
          price: 50,
          image: 'product_5.svg',
        },
      ],
      cart: {
        1: {
          qty: 1,
          price: 40,
        },
        2: {
          qty: 1,
          price: 20,
        },
        3: {
          qty: 4,
          price: 10,
        },
        4: {
          qty: 1,
          price: 50,
        },
      },
      methods: [
        {
          name: 'Card',
          alias: 'card',
          icon: 'card.svg',
        },
        {
          name: 'Transfer',
          alias: 'transfer',
          icon: 'transfer.svg',
        },
        {
          name: 'Line Pay',
          alias: 'line',
          icon: 'line.svg',
        },
      ],
      mode: 'checkout', // checkout -> payment
      selectedMethod: '',
    }
  },
  computed: {
    total() {
      const priceArray = Object.values(this.cart).map(
        (product) => product.price * product.qty
      )
      const cartIsEmpty = priceArray.length === 0
      return cartIsEmpty ? '' : priceArray.reduce((prev, curr) => prev + curr)
    },
  },
  methods: {
    updateMethod(value) {
      this.selectedMethod = value
    },
    changeMode(value) {
      this.mode = value
    },
  },
}
</script>
<template>
  <div>
    <div class="address">Taipei , No. 100, Sec. 1, Chongqi</div>
    <transition-group
      tag="div"
      class="product__list"
      enter-active-class="animated slideInRight slideInRightDelay"
      appear
    >
      <div
        v-for="(product, index) in products"
        :key="product.id"
        :style="{'--index': index}"
        class="product__item"
      >
        <div class="product__image">
          <img :src="require(`@src/assets/${product.image}`)" :alt="product.name" />
        </div>
        <div class="product__info">
          <div>{{ product.name }}</div>
          <div class="product__ingredients">{{ product.ingredients }}</div>
          <div class="product__actions">
            <div class="product__price">{{ product.price }}</div>
            <BaseInputNumber class="product__qty" v-model="tempValue" />
          </div>
        </div>
      </div>
    </transition-group>
    <div class="panel">
      <transition enter-active-class="animated slideInUp" appear>
        <div v-if="mode === 'payment'" class="panel__payment">
          <div>Please choose a payment method</div>
          <div class="methods">
            <div
              v-for="(method, index) in methods"
              :key="index"
              class="methods__item"
              :class="{'methods__item--selected': selectedMethod === method.alias}"
              @click="updateMethod(method.alias)"
            >
              <img :src="require(`@src/assets/${method.icon}`)" :alt="method.name" />
              <div class="methods__name">{{method.name}}</div>
            </div>
          </div>
        </div>
      </transition>
      <div class="panel__total">
        <div>Total ${{total}}</div>
        <BaseButton v-if="mode === 'checkout'" @click="changeMode('payment')">Checkout</BaseButton>
        <BaseButton
          v-else
          @click="$router.push({ name: 'select-card'})"
          :disabled="!selectedMethod"
        >Next</BaseButton>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import '@design';
.address {
  padding: 6px 8px;
  color: white;
  border: 1px solid white;
  border-radius: 6px;
  margin: 20px;
  font-size: 0.85rem;
}
.product {
  &__list {
    position: relative;
    padding-bottom: 60px;
    &:before {
      content: '';
      position: absolute;
      width: calc(100% - 60px);
      height: 100%;
      top: 0;
      left: 60px;
      border-top-left-radius: 160px;
      z-index: -1;
      background: linear-gradient(
        rgba(white, 0.9),
        rgba(white, 0.6),
        rgba(white, 0.4)
      );
      border: 1px solid rgba(white, 0.2);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 0 35px 25px;
  }
  &__image {
    position: relative;
    padding-left: 25px;
    padding-bottom: 15px;
    flex-basis: 100px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 30px;
    img {
      width: 100%;
    }
    &:after {
      content: '';
      background-color: rgba(white, 0.25);
      width: 100px;
      height: 100px;
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      left: 0;
      bottom: 0;
      box-shadow: 10px 10px 35px rgba(#f19040, 0.3);
      backdrop-filter: blur(9px);
    }
  }
  &__info {
    flex-grow: 1;
  }
  &__ingredients {
    color: $color-grey;
    font-size: 0.85rem;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  &__price:before {
    content: '$';
    color: $color-grey;
    font-size: 0.85rem;
    padding-right: 3px;
  }
}
.panel {
  position: fixed;
  bottom: 0;
  width: 100%;

  &__payment {
    padding: 20px;
    text-align: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgba(white, 0.8);
    box-shadow: 10px 10px 35px rgba(#f19040, 0.3);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(white, 0.8);
  }
  &__total {
    padding: 16px 20px;
    background-color: rgba(white, 0.8);
    box-shadow: 10px 10px 35px rgba(#f19040, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.methods {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  &__item {
    border-radius: 50%;
    background-color: rgba(white, 0.7);
    box-shadow: 10px 10px 35px rgba(#f19040, 0.25);
    backdrop-filter: blur(10px);
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    border: 2px solid transparent;
    transition: border-color $duration-transition-base linear;
    &:hover,
    &--selected {
      border-color: $color-primary;
    }
  }
  &__name {
    margin-top: 8px;
  }
}
</style>