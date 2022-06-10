<template>
    <div class="Content-Pokedex">
        <SearchBox/>
        <Card/>
    </div>
</template>

<script>
import Card from './Card';
import SearchBox from '../components/SearchBox'
export default {
  name: 'Content-Pokedex',
  components: {
    SearchBox,
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
        flex-direction: column;
        align-items: center;
    }
</style>