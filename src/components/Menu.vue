<template>
  <div class="container">
    <div class="logo">
      <img alt="admin logo" src="../assets/logo.png" />
    </div>
    <div class="menu-items">
      <div
        id="database"
        class="menu-item"
        @click="choose"
        :class="{ chosen: chosen_item === 0 }"
      >
        <img src="@/assets/icons/database-icon.svg" alt="" />
        <p>Veritabanı</p>
      </div>
      <div
        id="messages"
        class="menu-item"
        @click="choose"
        :class="{ chosen: chosen_item === 1 }"
      >
        <img src="@/assets/icons/mail-icon.svg" alt="" />
        <p>Uyarı Mesajları</p>
      </div>
      <div
        id="reports"
        class="menu-item"
        @click="choose"
        :class="{ chosen: chosen_item === 2 }"
      >
        <img src="@/assets/icons/report-icon.svg" alt="" />
        <p>Raporlar</p>
      </div>
      <div
        id="settings"
        class="menu-item"
        @click="choose"
        :class="{ chosen: chosen_item === 3 }"
      >
        <img src="@/assets/icons/settings-icon.svg" alt="" />
        <p>Ayarlar</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Menu",
  data() {
    return {
      chosen_item: 0,
    };
  },
  methods: {
    choose(e) {
      if (e.currentTarget.id === "database") {
        this.chosen_item = 0;
      }
      if (e.currentTarget.id === "messages") {
        this.chosen_item = 1;
      }
      if (e.currentTarget.id === "reports") {
        this.chosen_item = 2;
      }
      if (e.currentTarget.id === "settings") {
        this.chosen_item = 3;
      }
    },
  },
  watch: {
    chosen_item: (val) => {
      store.commit("choosePage", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-inline: 2rem;
  padding-block: 5rem;
  background-color: $bg-color;
  text-align: center;
  font-size: 12px;
  height: 100vh;
  color: $gray-1;
  border-right: 2px solid $gray-3;
  user-select: none;
  font-family: $font-1;
  font-weight: 500;
  line-height: 14px;
}
.logo {
  img {
    width: 45px;
  }
  margin-inline: auto;
  margin-bottom: 7em;
}
.menu-items {
  display: flex;
  flex-direction: column;
  gap: 3em;
}
.menu-item {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  img {
    width: 2rem;
  }
  cursor: pointer;
}
.chosen {
  color: $gray-2;
  img {
    filter: invert(41%) sepia(0%) saturate(1824%) hue-rotate(292deg)
      brightness(95%) contrast(83%);
  }
}
.menu-item:hover {
  color: $gray-2;
  img {
    filter: invert(41%) sepia(0%) saturate(1824%) hue-rotate(292deg)
      brightness(95%) contrast(83%);
  }
}
</style>
