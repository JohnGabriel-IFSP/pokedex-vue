<template>
        <div class="container-button">
          <button class="AddTeam" @click.prevent.stop="addTeam">+</button>
          <Toast/>
        </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
export default {
  name: 'Button-Add',
  components: {
    Toast
  },
  data(){
      return{
          team:[]
      }
  },
   methods:{
        addTeam(){
            this.team.push(this.$store.state.pokemon.id)
            this.team.push(this.$store.state.pokemon.nome)
            this.team.push(this.$store.state.pokemon.url)
            this.$store.dispatch('saveTeam', this.team)
            this.trigger()
        },
        trigger(){
                var x = document.getElementById("ComponentToast");
                x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
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