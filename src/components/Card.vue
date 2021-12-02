<template>
  <div class="card-container">
    <div v-if="!isEmpty" class="top-container">
      <div class="headline-button">
        <h2 class="headline">{{ headline }}</h2>
        <button class="toggle-activity" @click="toggleActivity">
          <img v-if="isActive" src="@/assets/icons/on-icon.svg" alt="" />
          <img v-else src="@/assets/icons/off-icon.svg" alt="" />
        </button>
      </div>
      <p class="description">{{ description }}</p>
      <div class="frequency">
        <p class="label">Gönderim Aralığı:</p>
        <p class="value">{{ frequency }}</p>
      </div>
    </div>
    <div v-if="!isEmpty" class="bottom-container">
      <button class="edit-button"></button>
      <button class="duplicate-button" @click="duplicateTemplate"></button>
      <button class="delete-button" @click="deleteTemplate"></button>
    </div>
    <button v-else class="add"></button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: Number,
    headline: String,
    description: String,
    isActive: Boolean,
    frequency: String,
    isEmpty: Boolean,
  },
  methods: {
    toggleActivity() {
      this.$store.commit("toggleActivityMail", this.id);
    },
    duplicateTemplate() {
      this.$store.commit("duplicate", this.id);
    },
    deleteTemplate() {
      this.$store.commit("delete", this.id);
    },
  },
};
</script>

<style scoped lang="scss">
.card-container {
  height: 234px;
  width: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid $gray-1;
  font-family: $font-2;
  border-radius: 10px;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }
}
.top-container {
  padding: 1em;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.headline-button {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5em;
}
.headline {
  line-height: 0.9;
  font-size: 20px;
  font-weight: 500;
}
.description {
  color: $gray-5;
  font-size: 12px;
  line-height: 1.1;
  font-weight: 300;
}
.frequency {
  line-height: 1.1;
  margin-top: auto;
  .label {
    color: $gray-4;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 0.2em;
  }
  .value {
    font-family: $font-3;
    font-size: 18px;
  }
}
.bottom-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em 1em;
  border-top: 1px solid $gray-1;
  button {
    width: 37px;
    height: 37px;
    background-size: 37px 37px;
  }
  .edit-button {
    background: url(../assets/icons/edit-icon.png);
    background-size: 37px 37px;
  }
  .duplicate-button {
    background: url(../assets/icons/duplicate-icon.png);
    background-size: 37px 37px;
  }
  .delete-button {
    background: url(../assets/icons/delete-icon.png);
    background-size: 37px 37px;
  }
}
.add {
  background: url(../assets/icons/add-icon.png);
  background-size: 82px 82px;
  width: 82px;
  height: 82px;
  margin: auto;
}
</style>
