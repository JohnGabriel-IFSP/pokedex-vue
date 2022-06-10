<template>
    <div class="TeamPage" >
        <div class="Pokemon" v-for="pokemon of teamSize" :key="pokemon">
            <div class="Card">
               <img v-bind:src="$store.state.team[pokemon-1].url"/>
                <div class="container">
                    <h4>{{$store.state.team[pokemon-1].nome}}</h4>
                    <p>#{{$store.state.team[pokemon-1].id}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'TeamPage',
    data(){
        return{
            teamSize: 6,
        }
    }
}
</script>

<style scoped>

.TeamPage{
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
