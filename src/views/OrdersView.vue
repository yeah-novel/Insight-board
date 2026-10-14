<script setup lang="ts">


import {
ref
} from 'vue'


import OrderFilter
from '@/components/order/OrderFilter.vue'


import OrderSummary
from '@/components/order/OrderSummary.vue'


import OrderTable
from '@/components/order/OrderTable.vue'


import OrderDrawer
from '@/components/order/OrderDrawer.vue'


import {
orders
} from '@/mock/order'


import type {
Order
} from '@/types/order'



const list=ref(orders)


const drawer=ref(false)


const current=ref<Order>()



function detail(row:Order){

current.value=row

drawer.value=true

}



function exportData(){

console.log(
'导出订单'
)

}


</script>



<template>


<div>


<div class="header">


<h1>
订单管理
</h1>


<el-button

type="success"

@click="exportData"

>

导出Excel

</el-button>


</div>



<OrderFilter/>

<OrderSummary/>


<OrderTable

:data="list"

@detail="detail"

/>



<OrderDrawer

:visible="drawer"

:order="current"

/>


</div>


</template>



<style scoped>


.header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:20px;

}


</style>