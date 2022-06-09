<template>
    <div id="Content-Pokedex">
        <Card/>
    </div>
</template>

<script>
import Card from './Card';
export default {
  name: 'Content-Pokedex',
  components: {
    Card
  }
}
</script>

<style scoped>
    div{
        width: 100%;
        height: 100vh;
        padding-top: 50px;
        display: flex;
        justify-content: center;
    }
</style>