import { createStore } from "vuex";

export default createStore({
  state: {
    pokemon: {
      id: 1,
      nome: "bulbasaur",
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    },
    team: [
      {
        id: "132",
        nome: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      },
      {
        id: "132",
        nome: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      },
      {
        id: "132",
        nome: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      },
      {
        id: "132",
        nome: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      },
      {
        id: "132",
        nome: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      },
      {
        id: "132",
        nome: "ditto",
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
      },
    ],
  },
  getters: {},
  mutations: {
    saveResponse(state, payload) {
      state.pokemon.id = payload.id;
      state.pokemon.nome = payload.name;
      state.pokemon.url = payload.sprites.other.dream_world.front_default;
    },
    saveTeam(state, payload) {
      for (var i = 0; i <= 5; i++) {
        state.team[i].id = payload[i].id;
        state.team[i].nome = payload[i].nome;
        state.team[i].url = payload[i].url;
      }
      alert("Time salvo");
    },
  },
  actions: {
    saveResponse(context, payload) {
      context.commit("saveResponse", payload);
    },
    saveTeam(context, payload) {
      context.commit("saveTeam", payload);
    },
  },
  modules: {},
});
