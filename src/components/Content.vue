<template>
    <div class="Content-Pokedex">
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
        padding-top: 50px;
        display: flex;
        justify-content: center;
      
      /* criar midia querie para desktop */
    }
</style>