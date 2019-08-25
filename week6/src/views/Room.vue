<script>
import { format } from "date-fns";
import Request from "@src/utils/request";
import BaseButton from "@components/BaseButton";
import BaseModal from "@components/BaseModal";

const getDatesFromDateRange = (startDate, endDate) => {
  let dates = [],
    currentDate = startDate,
    workingdays = 0,
    holidays = 0;
  const addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  // 不包含退房日期
  while (currentDate < endDate) {
    const weekDay = currentDate.getDay();
    // 平日、假日天數計算
    weekDay === 0 || weekDay === 5 || weekDay === 6
      ? holidays++
      : workingdays++;

    dates.push(format(currentDate, "yyyy-MM-dd"));
    currentDate = addDays.call(currentDate, 1);
  }
  return {
    dates,
    workingdays,
    holidays
  };
};
export default {
  components: {
    BaseButton,
    BaseModal
  },
  filters: {
    price: function(value) {
      return `NT$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    disabledDates: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tryingBooking: false,
      bookingModalVisible: false,
      bookingModalMode: "form",
      bookingMessage: "",
      selectedDate: new Date(),
      calendarAttrs: [
        {
          key: "today",
          dot: {
            class: "is-today"
          },
          dates: new Date()
        },
        {
          key: "booked",
          content: {
            class: "is-booked"
          },
          dates: this.disabledDates
        }
      ],
      submitData: {
        name: "",
        tel: ""
      },
      dateRange: {}
    };
  },
  computed: {
    maxDate() {
      const today = new Date();
      today.setDate(today.getDate() + 90);

      return today;
    },
    datesWithinRange() {
      const { start, end } = this.dateRange;
      return getDatesFromDateRange(start, end);
    }
  },
  methods: {
    tryToBook() {
      this.tryingBooking = true;
      Request.post(`room/${this.data.id}`, {
        ...this.submitData,
        date: this.datesWithinRange.dates
      })
        .then(response => {
          this.bookingModalMode = "success";
          this.bookingMessage = response;
        })
        .catch(error => {
          this.bookingModalMode = "failed";
          this.bookingMessage = error.response.data.message;
        })
        .finally(() => {
          this.tryingBooking = false;
        });
    },
    onCloseModal() {
      this.bookingModalVisible = false;
      this.bookingModalMode = "form";
    }
  }
};
</script>
<template>
  <article>
    <header :class="$style.logo__container">
      <router-link :to="{name: 'home'}" :class="$style.logo__link">
        <h1 :class="$style.logo">White Space</h1>
      </router-link>
    </header>
    <section :class="$style.gallery">
      <div
        v-for="(image, imageIndex) in data.imageUrl"
        :key="imageIndex"
        :class="$style.gallery__item"
        :style="{backgroundImage: `url(${image})`}"
      ></div>
    </section>
    <div :class="$style.container">
      <div :class="$style.content">
        <h1>{{data.name}}</h1>
        <section>
          <ul>
            <li>Guests: {{data.descriptionShort.GuestMax}}</li>
            <li>Bedroom: {{data.descriptionShort.Bed.join(', ')}}</li>
            <li>Bathroom: {{data.descriptionShort['Private-Bath']}}</li>
            <li>Room size: {{data.descriptionShort.Footage}}m²</li>
          </ul>
        </section>
        <p>{{data.description}}</p>
        <p>\\\</p>
        <section :class="$style.checkins">
          <div :class="$style.checkins__item">
            <div>Check In</div>
            <div
              :class="$style.checkins__time"
            >{{data.checkInAndOut.checkInEarly}} - {{data.checkInAndOut.checkInLate}}</div>
          </div>
          <div :class="$style.checkins__item">
            <div>Check Out</div>
            <div :class="$style.checkins__time">{{data.checkInAndOut.checkOut}}</div>
          </div>
        </section>
        <section :class="$style.amenities">
          <div
            v-for="(value , amenity) in data.amenities"
            :key="amenity"
            :class="[$style.amenities__item,{   [$style['amenities__item--inactive']]: value} ]"
          >{{ amenity }}</div>
        </section>
      </div>

      <aside :class="$style.sidebar">
        <div :class="$style.price">
          <div :class="$style.price__title">{{ data.normalDayPrice | price}}</div>
          <div :class="$style.price__meta">Monday to Thursday</div>
          <div :class="$style.price__title">{{ data.holidayPrice | price }}</div>
          <div :class="$style.price__meta">Friday to Sunday and Holiday</div>
        </div>
        <div :class="$style.calendar__container">
          <v-calendar
            v-model="selectedDate"
            :attributes="calendarAttrs"
            :min-date="new Date()"
            :max-date="maxDate"
            is-expanded
            :class="$style.calendar"
            color="gray"
          />
          <BaseButton @click="bookingModalVisible = true" fancy type="primary">Book Now</BaseButton>
        </div>
      </aside>
    </div>
    <BaseModal v-if="bookingModalVisible" @close="onCloseModal">
      <transition-group enter-active-class="animated fadeInUp">
        <div v-if="bookingModalMode === 'form'" key="form">
          <h3 slot="header">Complete Your Booking: {{ data.name }}</h3>
          <p>\\\</p>
          <form :class="$style.form" @submit.prevent="tryToBook">
            <div :class="$style.form__item">
              <label for="fullName">Full Name</label>
              <input v-model="submitData.name" type="text" id="fullName" />
            </div>
            <div :class="$style.form__item">
              <label for="phoneNumber">Phone Number</label>
              <input v-model="submitData.tel" type="number" id="phoneNumber" />
            </div>
            <div :class="$style.form__item">
              <label for="dates">Arrival/Departure Date</label>
              <v-date-picker
                v-model="dateRange"
                :min-date="new Date()"
                :max-date="maxDate"
                :disabled-dates="disabledDates"
                color="gray"
                mode="range"
                :class="$style.form__datepicker"
                id="dates"
              ></v-date-picker>
            </div>
          </form>
          <template v-if="datesWithinRange.workingdays > 0 || datesWithinRange.holidays  > 0">
            <div :class="$style.summary">
              <template v-if="datesWithinRange.workingdays > 0">
                <span>Monday to Thursday</span>
                <span>{{datesWithinRange.workingdays}} Nights</span>
              </template>
              <template v-if="datesWithinRange.holidays  > 0">
                <span>Friday to Sunday and Holiday</span>
                <span>{{datesWithinRange.holidays}} Nights</span>
              </template>
            </div>
            <div
              :class="$style.total"
            >{{ datesWithinRange.workingdays*data.normalDayPrice + datesWithinRange.holidays*data.holidayPrice | price }}</div>
          </template>

          <div :class="$style.form__buttons">
            <BaseButton @click="bookingModalVisible = false">Cancel</BaseButton>
            <BaseButton @click="tryToBook" :loading="tryingBooking" type="primary">Book Now</BaseButton>
          </div>
        </div>
        <div v-else-if="bookingModalMode === 'success'" key="succes">
          <h3 slot="header">You successfully created your booking.</h3>
          <div :class="$style.form__buttons">
            <BaseButton @click="onCloseModal" type="primary">Close</BaseButton>
          </div>
        </div>
        <div v-else key="error">
          <h3 slot="header">{{bookingMessage}}</h3>
          <div :class="$style.form__buttons">
            <BaseButton @click="onCloseModal" type="primary">Close</BaseButton>
          </div>
        </div>
      </transition-group>
    </BaseModal>
  </article>
</template>
<style lang="scss" module>
@import "@design";
$spacing: 4rem;

.logo {
  border: 2px solid $color-primary;
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.25rem;
  margin: 0;
  position: relative;
  font-size: 1rem;
  &__container {
    position: absolute;
    z-index: 0;
    left: $spacing;
    top: $spacing;
  }
  &__link {
    &:before {
      position: absolute;
      content: "";
      background-size: auto auto;
      background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 3px,
        $color-primary 3px,
        $color-primary 4px
      );
      z-index: -1;
      top: -10px;
      left: -10px;
      width: 100%;
      height: 100%;

      clip-path: polygon(
        0% 0%,
        0% 100%,
        10px 100%,
        10px 10px,
        100% 10px,
        100% 100%,
        100% 0%
      );
    }
  }
}
.container {
  padding: $spacing * 0.5 $spacing;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);

  &__item {
    min-height: 25vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &:first-child {
      grid-row-start: 1;
      grid-row-end: span 2;
    }
  }
}
.checkins {
  display: flex;
  margin-bottom: 2rem;
  &__item {
    flex: 1;
  }
  &__time {
    font-size: 1.25rem;
  }
}
.amenities {
  background-color: #f0f0f0;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  &__item {
    width: calc(25% - 5px);
    margin: 0.5rem 0;
    font-size: 0.8rem;
    &--inactive {
      color: $color-text-secondary;
    }
  }
}
.sidebar {
  display: flex;
  justify-content: space-between;
}
.price {
  text-align: right;
  padding-right: 1rem;

  &__title:first-child {
    font-size: 1.5rem;
  }
  &__meta {
    font-size: 0.75rem;
    color: $color-text-secondary;
    margin-bottom: 0.75rem;
  }
}
.calendar {
  margin-bottom: 2rem;
  border: none;
  background-color: #f7f7f7;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  font-family: $system-default-font-family;
  &__container {
    flex-basis: 60%;
  }
}

.form {
  label {
    line-height: 40px;
    flex-basis: 50%;
    flex-shrink: 0;
    font-size: 0.9rem;
  }
  &__item {
    display: flex;
    margin-bottom: 15px;
  }
  &__datepicker {
    width: 100%;
    input {
      box-shadow: none;
      border-color: $color-border-base;
      &:focus {
        box-shadow: none;
        border-color: $color-primary;
      }
    }
  }
  &__buttons {
    text-align: right;
    margin-top: 2.5rem;
  }
}
.summary {
  background: #ededed;
  margin: 0 -30px;
  padding: 10px 30px;
  display: flex;
  flex-wrap: wrap;
  color: lighten($color-primary, 40);
  font-size: 0.75rem;
  > span {
    flex: 50%;
    &:nth-child(even) {
      text-align: right;
    }
  }
}
.total {
  margin: 15px 0;
  text-align: right;
  color: $color-accent;
  font-size: 1.5rem;
}
</style>