<template>
<div>
    <Header />
    <GetBuckets />
</div>
<!-- <h1></h1> -->
</template>

<script>
import Header from '../components/layout/Header.vue'
import GetBuckets from '../components/GetBuckets.vue'

export default {
    name:'BucketList',
    components:{
        Header,
        GetBuckets
    }
}
</script>

<style  scoped>

</style>