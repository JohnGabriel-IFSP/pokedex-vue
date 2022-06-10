<template>
    <div class="SearchPage">
        <SearchBox/>
        <Content/>
    </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import Content from '@/components/Content'
export default{
    name:'SearchPage',
    components: {
        SearchBox,
        Content
  }
}

</script>

<style scoped>
    .SearchPage{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
