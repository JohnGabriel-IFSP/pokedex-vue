<template>
    <div class="HomePage">
        <div class="PokemonList" v-for="pkm of pokemon" :key='pkm.id'>
            <Content/>
        </div>
    </div>
</template>

<script>
import api from '@/services/api.js'; 
import Content from '@/components/Content.vue';

export default{
    name:'HomePage',
    components:{
        Content,
},
    data(){
        return {
            pokemon:[]
        }
    },
    mounted(){
      api.get('/?offset=0&limit=151').then(response => {
          this.pokemon = response.data.results
      })
  }
}

</script>

<style>

</style>