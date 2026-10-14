<script setup lang="ts">


import StatCard from '@/components/dashboard/StatCard.vue'

import SalesTrend from '@/components/dashboard/SalesTrend.vue'

import CustomerSource from '@/components/dashboard/CustomerSource.vue'

import ProductRank from '@/components/dashboard/ProductRank.vue'


import RecentOrders from '@/components/dashboard/RecentOrders.vue'

import {
statistics
} from '@/mock/dashboard'

import { ref, onMounted } from 'vue'
const loading = ref(true)
const dateRange=ref([])

onMounted(()=>{


setTimeout(()=>{

loading.value=false


},800)


})
</script>



<template>


<div>


    <div class="header">

        <h1>数据总览</h1>

        <el-date-picker

            v-model="dateRange"

            type="daterange"

            range-separator="至"

            start-placeholder="开始日期"

            end-placeholder="结束日期"

        />

    </div>


    <el-skeleton
        v-if="loading"
        :rows="8"
        animated
    />

    <div  v-else class="stats">


        <StatCard

        v-for="item in statistics"

        :key="item.title"

        :title="item.title"

        :value="item.value"

        :growth="item.growth"

        />


    </div>



    <div class="charts">


        <SalesTrend/>


        <CustomerSource/>


    </div>

    <div class="bottom">


        <ProductRank/>


        <RecentOrders/>


    </div>


</div>



</template>



<style scoped>


.header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:24px;

}


.stats{

display:grid;

grid-template-columns:
repeat(4,1fr);

gap:20px;

}



.charts{

display:grid;

grid-template-columns:
2fr 1fr;

gap:20px;

margin-top:24px;

}


.bottom{

display:grid;

grid-template-columns:
1fr 1fr;

gap:20px;

margin-top:24px;

}



@media(max-width:900px){

.bottom{

grid-template-columns:1fr;

}

}

@media(max-width:900px){

.stats{

grid-template-columns:
repeat(2,1fr);

}


.charts{

grid-template-columns:1fr;

}

}

</style>