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
        id: "",
        nome: "Escolha um pokemon",
        url: "https://i.pinimg.com/564x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg",
      },
      {
        id: "",
        nome: "Escolha um pokemon",
        url: "https://i.pinimg.com/564x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg",
      },
      {
        id: "",
        nome: "Escolha um pokemon",
        url: "https://i.pinimg.com/564x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg",
      },
      {
        id: "",
        nome: "Escolha um pokemon",
        url: "https://i.pinimg.com/564x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg",
      },
      {
        id: "",
        nome: "Escolha um pokemon",
        url: "https://i.pinimg.com/564x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg",
      },
      {
        id: "",
        nome: "Escolha um pokemon",
        url: "https://i.pinimg.com/564x/4a/6a/03/4a6a0369f01ffa115020f833e4a07ada.jpg",
      },
    ],
    cont: 0,
  },
  getters: {},
  mutations: {
    saveResponse(state, payload) {
      state.pokemon.id = payload.id;
      state.pokemon.nome = payload.name;
      state.pokemon.url = payload.sprites.other.dream_world.front_default;
    },
    saveTeam(state, payload) {
      if (this.state.cont <= 5) {
        state.team[this.state.cont].id = payload[0];
        state.team[this.state.cont].url = payload[2];
        state.team[this.state.cont].nome = payload[1];
        this.state.cont++;
        if (this.state.cont === 6) {
          alert("Time Completo");
        }
      }
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
