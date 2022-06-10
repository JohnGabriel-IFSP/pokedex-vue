<template>
    <div id="Card-Pokemon">
        <!-- <img src={{pokemon.sprites.other.dream_world.front_default}}/>
        <div class="container">
            <h4>{{pokemon.nome}}</h4>
            <p>#{{pokemon.id}}</p>
        </div> -->

        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg"/>
        <div class="container">
            <h4>Gengar</h4>
            <p>#094</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card-Pokemon',
}
</script>

<style scoped>
    #Card-Pokemon{
        max-width: 380px;
        max-height: 250px;
        background-color: white;
        box-shadow: 5px 5px 10px black;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    img{
        max-width: 100%;
        max-height: 60%;
    }
    .container{
        background-color: lightgray;
        min-width: 100%;
        min-height: 40%;
        border-radius: 0px 0px 10px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>