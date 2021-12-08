<template>
  <div class="home">
    <div class="left-menu">
      <Menu @logout="logout" />
    </div>
    <div class="center">
      <Datatable v-if="this.$store.state.page === 0" />
      <Cards v-if="this.$store.state.page === 1" />
    </div>
    <div class="right-menu">
      <Summary />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Summary from "@/components/Summary.vue";
import Cards from "@/components/Cards.vue";
import Datatable from "@/components/Datatable";
 import {mapActions} from "vuex"
export default {
  name: "Home",
  components: {
    Menu,
    Summary,
    Cards,
    Datatable,
  },
  methods: {
    ...mapActions([
      'getCurrencies',
      'getCustomers',
      'getBuildings',
        'logout'
    ])
  },
  created(){
    this.getCurrencies();
    this.getBuildings();
    this.getCustomers();
  }
};
</script>
<style scoped lang="scss">
.home {
  display: flex;
  justify-content: space-between;
}
.left-menu {
  width: 150px;

  flex-shrink: 0;
}
.center {
  padding-block: 9rem;
  padding-inline: 2em;
  height: 100vh;
  overflow: scroll;
}
.right-menu {
  width: max(17vw, 320px);
}
</style>
