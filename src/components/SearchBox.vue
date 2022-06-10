<template>
    <div class="Search-Box">
        <input v-model="parametro" type="text"/>
        <button @click.prevent.stop="search">Search Pokemon</button>
    </div>
</template>

<script>
import api from '@/services/api.js';
    export default{
        name:'Search-Box',
        components:{
        },
        data(){
            return{
                parametro: ''
            }
        },
        methods:{
            search(){
                api.get(`/${this.parametro.toLowerCase()}`).then(response => {
                    this.$store.dispatch('saveResponse', response.data)
                })
            }
        },
    }
    
</script>

<style scoped>
    .Search-Box{
        width: 75%;
        height: 50px;
        padding-top: 30px;
        display: flex;
        flex-direction: row;
        gap: 15px;
    }
    .Search-Box input{
        width: 100%;
        height: 40px;
        box-shadow: 5px 5px 10px black;
        border-radius: 10px;
    }
    .Search-Box button{
        cursor: pointer;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: #F6CF57;
        box-shadow: 5px 5px 10px black;
        font-weight: bold;
    }
   
</style>