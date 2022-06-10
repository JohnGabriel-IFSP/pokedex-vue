<template>
    <div class="Content-Pokedex">
        <Card/>
        <ButtonAddTeam/>
    </div>
</template>

<script>
import Card from './Card';
import ButtonAddTeam from './ButtonAddTeam.vue';
export default {
  name: 'Content-Pokedex',
  components: {
    Card,
    ButtonAddTeam
  }
}
</script>

<style scoped>
    .Content-Pokedex{
        width: 100%;
        padding-top: 50px;
        display: flex;
    }
</style>