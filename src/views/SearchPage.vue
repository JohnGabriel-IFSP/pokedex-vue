<template>
    <div class="SearchPage">
        <SearchBox/>
        <div class="container-content">
            <Content/>
        </div>
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

    .container-content{
        display: flex;
        align-items: center;
    }
</style>
