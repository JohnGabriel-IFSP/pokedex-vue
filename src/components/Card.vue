<template>
    <div id="Card-Pokemon">
        <img src="https://assets.nintendo.com/image/upload/ar_4:3,c_pad,dpr_2.0,f_auto,q_auto,w_400/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/egdp/pokemon-2"/>
        <div class="container">
            <h4>Rowlet</h4>
            <p>#721</p>
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
        box-shadow: 10px 10px 15px black;
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