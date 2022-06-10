<template>
    <div class="HomePage">
        <div class="Pokemon"  v-for="pokemon of pokemonList.slice(0,151)" :key='getID(pokemon)'>
            <div class="Card">
                <img v-bind:src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getID(pokemon)}.svg`"/>
                <div class="container">
                    <h4>{{pokemon.name}}</h4>
                    <p>#{{getID(pokemon)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api.js'; 

export default{
    name:'HomePage',
    components:{
    },
    data(){
        return{
            pokemonList: [],
        }
    },
    mounted(){
        api.get("?limit=151").then(response => {
            this.pokemonList = response.data.results
        })
    },
    methods: {
        getID(pokemon){
            return Number(pokemon.url.split('/')[6])
        },
    }
}

</script>

<style scoped>
    .HomePage{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .Pokemon{
        width: 380px;
    }

    .Card{
        width: 380px;
        height: 230px;
        background-color: white;
        box-shadow: 5px 5px 10px black;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .Card img{
        max-width: 100%;
        min-height: 75%;
    }
    .container{
        background-color: lightgray;
        min-width: 100%;
        min-height: 25%;
        font-weight: bold;
        border-radius: 0px 0px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>