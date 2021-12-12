import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  state: {
    page: 0,
    mail_templates: [
      {
        id: 0,
        headline: "Kira Kontratı Mesajı",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: true,
        frequency: "7 GÜN"
      },
      {
        id: 1,
        headline: "Kira Kontratı Mesajı",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: true,
        frequency: "15 GÜN"
      },
      {
        id: 2,
        headline: "Kira Kontratı Mesajı",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: false,
        frequency: "30 GÜN"
      },
      {
        id: 3,
        headline: "Kira Kontratı Mesajı",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: true,
        frequency: "45 GÜN"
      }
    ],
    token: "",
    currencies: [],
    buildings: [],
    selected_building: { id: 1, name: "16D" },
    customers: []
  },
  mutations: {
    choosePage(state, page) {
      state.page = page;
    },
    toggleActivityMail(state, id) {
      let item = state.mail_templates.filter(x => {
        return x.id === id;
      });
      console.log(item);
      item[0].isActive = !item[0].isActive;
      console.log(item);
    },
    duplicate(state, id) {
      let item = {
        ...state.mail_templates.filter(x => {
          return x.id === id;
        })[0]
      };

      item.id = state.mail_templates[state.mail_templates.length - 1].id + 1;

      state.mail_templates.push(item);
    },
    delete(state, id) {
      state.mail_templates = state.mail_templates.filter(x => {
        return x.id !== id;
      });
    },
    SET_TOKEN(state, token) {
      state.token = `Bearer ${token}`;
    },
    SET_CURRENCIES(state, payload) {
      state.currencies = payload.data?.map(({ name, value }) => ({
        name,
        value
      }));
    },
    SET_BUILDINGS(state, payload) {
      state.buildings = payload.data;
    },
    SET_CUSTOMERS(state, payload) {
      state.customers = payload.data;
    },
    SET_SELECTED_BUILDING(state, payload) {
      state.selected_building = payload;
    }
  },
  actions: {
    login({ commit }, obj) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_URL + "auth/login", {
            email: obj.email,
            password: obj.password
          })
          .then(response => {
            if (response.status === 200) {
              commit("SET_TOKEN", response.data?.access_token);
              resolve();
            } else {
              reject();
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getCurrencies({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_URL + "currencies", {
            headers: { Authorization: state.token }
          })
          .then(response => {
            if (response.status === 200) {
              commit("SET_CURRENCIES", response.data);
              resolve();
            } else {
              reject();
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getBuildings({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_URL + "buildings", {
            headers: { Authorization: state.token }
          })
          .then(response => {
            if (response.status === 200) {
              commit("SET_BUILDINGS", response.data);
              resolve();
            } else {
              reject();
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getCustomers({ commit, state }, type) {
      if (type){ return ""}
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_URL + "customers/?filter[building]=" + this.state.selected_building.id, {
            headers: { Authorization: state.token }
          })
          .then(response => {
            if (response.status === 200) {
              commit("SET_CUSTOMERS", response.data);
              resolve();
            } else {
              reject();
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout({ state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(process.env.VUE_APP_URL + "auth/logout", {
            headers: { Authorization: state.token }
          })
          .then(response => {
            if (response.status === 200) {
              resolve();
              state.token = null;
            } else {
              reject();
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
