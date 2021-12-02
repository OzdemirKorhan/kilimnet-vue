import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

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
        frequency: "7 GÜN",
      },
      {
        id: 1,
        headline: "Kira Kontratı Mesajı",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: true,
        frequency: "15 GÜN",
      },
      {
        id: 2,
        headline: "Kira Kontratı Mesajı",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: false,
        frequency: "30 GÜN",
      },
      {
        id: 3,
        headline: "Kira Kontratı Mesajı",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        isActive: true,
        frequency: "45 GÜN",
      },
    ],
    token:"",
  },
  mutations: {
    choosePage(state, page) {
      state.page = page;
    },
    toggleActivityMail(state, id) {
      let item = state.mail_templates.filter((x) => {
        return x.id === id;
      });
      console.log(item);
      item[0].isActive = !item[0].isActive;
      console.log(item);
    },
    duplicate(state, id) {
      let item = {
        ...state.mail_templates.filter((x) => {
          return x.id === id;
        })[0],
      };

      item.id = state.mail_templates[state.mail_templates.length - 1].id + 1;

      state.mail_templates.push(item);
    },
    delete(state, id) {
      state.mail_templates = state.mail_templates.filter((x) => {
        return x.id !== id;
      });
    },

  },
  actions: {
    login({ commit }, email, password) {
      axios.post('https://jsonplaceholder.typicode.com/users',{})
          .then(response => {
            commit('setToken', response.data)
          })
    }
  },
  modules: {
  }
})
