<template>
  <div class="container">
    <div class="headline-container">
      <div class="headline-selector">
        <p class="headline">Selam, Atilla</p>
        <button class="selector">
          {{selected_building.name}}
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.01652 7.17949L0 0H2.70965L5.01652 3.54188L7.34169 0H10.0513L5.01652 7.17949Z"
              fill="#F26B6E"
            />
          </svg>

        </button>
        <div class="option-container">
          <button v-for="building in buildings" :key="building.id" @click="$store.commit('SET_SELECTED_BUILDING',{id:building.id,name:building.name})" class="option">{{building.name}}</button>
        </div>
      </div>
      <img
        src="@/assets/images/profile.png"
        alt="profile picture"
        class="profile"
      />
    </div>

    <div class="statistics-container">
      <div class="statistics">
        <img src="@/assets/icons/time-icon.svg" alt="" />
        <div class="info">
          <p class="label">SON ÖDEME TARİHİ GEÇEN MÜŞTERİ SAYISI</p>
          <p class="value">37</p>
        </div>
      </div>
      <div class="statistics">
        <img src="@/assets/icons/deadline-icon.svg" alt="" />
        <div class="info">
          <p class="label">SON ÖDEME TARİHİ YAKLAŞAN MÜŞTERİ SAYISI</p>
          <p class="value">45</p>
        </div>
      </div>
      <button class="show-detail" @click="deleteNotification">Detaylı İncele</button>
    </div>
    <div class="numbers-container">
      <div class="numbers">
        <img src="@/assets/icons/inflation-icon.svg" alt="" />
        <p class="value">%15</p>
      </div>
      <div class="numbers">
        <img src="@/assets/icons/dollar-icon.svg" alt="" />
        <p class="value">{{dollarValue}}</p>
      </div>
      <div class="numbers">
        <img src="@/assets/icons/euro-icon.svg" alt="" />
        <p class="value">10.5₺</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Summary",
  methods: {
    deleteNotification(){
      this.$confirm("Are you sure?").then(() => {
        //do something...
      });
    }
  },
  data(){
    return{
    }
  },
  computed: mapState({

    // to access local state with `this`, a normal function must be used
    dollarValue (state) {
      return `${state.currencies?.filter(currency => currency.name === "USD")[0].value}₺`
    },
    buildings (state) {
      return state.buildings
    },
    selected_building (state) {
      return state.selected_building
    },
  })
};
</script>

<style scoped lang="scss">
.container {
  padding: 1.5rem;
  padding-block: 5rem;
  background-color: $bg-color;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 267px;
  border-left: 2px solid $gray-3;
  font-family: $font-2;
}
.headline-container {
  display: flex;
  justify-content: space-between;
  position:relative;
  .headline {
    font-size: 20px;
    font-weight: 500;
  }
  .selector {
    border: 3px solid $salmon;
    background-color: transparent;
    color: $salmon;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 500;
    padding: 0 0.25rem;
    height: 31px;
    svg {
      vertical-align: middle;
    }
  }

  .option-container {
    position: absolute;
    background-color: #F26B6E;
    padding: 5px;
    border-radius: 4px;
    margin-top: 1px;
    display:none;
  }
  .option{
    width: 100%;
    outline: none;
    border: none;
    background: white;
    color: #F26B6E;
    &:not(:last-child){
      margin-bottom: 3px;
    }
  }
  .selector:hover~.option-container,.option-container:hover{
      display:block;

  }

}
.statistics-container {
  .statistics {
    display: flex;

    img {
      margin-right: 1em;
    }
    .label {
      font-size: 13px;
      color: $gray-4;
      line-height: 1.1;
    }
    .value {
      font-family: $font-3;
      font-size: 45px;
      line-height: 1.1;
      margin-bottom: -1em;
    }
    &:first-child {
      margin-bottom: 3em;
    }
  }

  .show-detail {
    margin: 4rem auto;
    display: block;
    color: white;
    background-color: $salmon;
    border: none;
    padding: 0.5em 1.7em;
    border-radius: 5px;
    font-size: 20px;
  }
}
.numbers-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .numbers {
    display: flex;
    .value {
      font-size: 13px;
      font-family: $font-3;
      align-self: flex-end;
    }
  }
}
button {
  cursor: pointer;
}
</style>
