<template>
  <div class="grid">
    <Card
      v-for="card in this.$store.state.mail_templates"
      :key="card.id"
      :id="card.id"
      :isActive="card.isActive"
      :frequency="card.frequency"
      :headline="card.headline"
      :description="card.description"
    />
    <Card :isEmpty="true" />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Cards",
  components: { Card },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3em;
}
</style>
