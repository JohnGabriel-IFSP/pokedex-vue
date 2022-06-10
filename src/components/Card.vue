<template>
    <div id="Card-Pokemon">
        <img v-bind:src="$store.state.pokemon.url"/>
        <div class="container">
            <h4>{{$store.state.pokemon.nome}}</h4>
            <p>#{{$store.state.pokemon.id}}</p>
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

    img{
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