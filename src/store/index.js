import { createStore } from "vuex";

export default createStore({
  state: {
    pokemon: {
      id: 0,
      nome: "",
      url: "",
    },
  },
  getters: {},
  mutations: {
    saveResponse(state, payload) {
      state.pokemon.id = payload.id;
      state.pokemon.nome = payload.name;
      state.pokemon.url = payload.sprites.other.dream_world.front_default;
    },
  },
  actions: {
    saveResponse(context, payload) {
      context.commit("saveResponse", payload);
    },
  },
  modules: {},
});
