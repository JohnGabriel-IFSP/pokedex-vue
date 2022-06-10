<template>
    <div class="Search-Box">
        <input type="text"/>
        <button>Search Pokemon</button>
    </div>
</template>

<script>
    export default{
        name:'Search-Box',
    }

</script>

<style scoped>
    .Search-Box{
        width: 75%;
        height: 100px;
        display: flex;
        flex-direction: row;
        gap: 15px;
        margin-bottom: 10px;
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