<template>
        <div class="container-button">
          <button class="AddTeam" @click.prevent.stop="addTeam">+</button>
        </div>
</template>

<script>
export default {
  name: 'Button-Add',
  components: {
  },
  data(){
      return{
          count: 0,
          team:[
              {id:'', nome: '', url: '',},
              {id:'', nome: '', url: '',},
              {id:'', nome: '', url: '',},
              {id:'', nome: '', url: '',},
              {id:'', nome: '', url: '',},
              {id:'', nome: '', url: '',},
          ]
      }
  },
   methods:{
        addTeam(){
            this.team[this.count].id = this.$store.state.pokemon.id
            this.team[this.count].nome = this.$store.state.pokemon.nome
            this.team[this.count].url = this.$store.state.pokemon.url
            this.count++
            if(this.count===6){
                this.$store.dispatch('saveTeam', this.team)
            }
        }
    },
}
</script>

<style scoped>
    .container-button{
      padding: 10px;
      position: absolute;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .AddTeam{
      cursor: pointer;
      width: 40px;
      height: 40px;
      border: none;
      background-color: white;
      font-size: 25px;
      font-weight: bold;
    }
</style>