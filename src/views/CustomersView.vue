<script setup lang="ts">


import {
ref
} from 'vue'


import CustomerFilter
from '@/components/customer/CustomerFilter.vue'


import CustomerTable
from '@/components/customer/CustomerTable.vue'


import CustomerDrawer
from '@/components/customer/CustomerDrawer.vue'


import {
customers
} from '@/mock/customer'


import type {
Customer
} from '@/types/customer'



const list=ref(customers)


const drawerVisible=ref(false)


const currentCustomer=ref<Customer>()



function detail(row:Customer){

currentCustomer.value=row

drawerVisible.value=true

}



function search(){

console.log('搜索客户')

}


</script>



<template>


<div>


<div class="header">


<h1>
客户管理
</h1>


<el-button

type="primary"

>

新增客户

</el-button>


</div>



<CustomerFilter

@search="search"

/>



<CustomerTable

:data="list"

@detail="detail"

/>



<CustomerDrawer

:visible="drawerVisible"

:customer="currentCustomer"

@close="drawerVisible=false"

/>


</div>


</template>


<style scoped>


.header{

display:flex;

justify-content:space-between;

margin-bottom:20px;

}


</style>