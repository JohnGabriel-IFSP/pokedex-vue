<template>
    <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/SearchPage">Buscar Pokemon</router-link> |
        <router-link to="/TeamPage">Meu Time</router-link>
    </div>
</template>

<script>
export default{
    name: 'NavBar',
}
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 70px;
        box-shadow: 5px 5px 10px black;
        background-color: #F6CF57;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        font-weight: bold;
    }
</style>