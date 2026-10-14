<script setup lang="ts">


import type {
Order
} from '@/types/order'


defineProps<{

data:Order[]

}>()


const emit=defineEmits<{

detail:[Order]

}>()


</script>



<template>


<div class="table">


<el-table

:data="data"

>


<el-table-column

prop="id"

label="订单号"

/>


<el-table-column

prop="customer"

label="客户"

/>


<el-table-column

prop="product"

label="商品"

/>


<el-table-column

prop="amount"

label="金额"

/>


<el-table-column

prop="status"

label="状态"

>


<template #default="{row}">


<el-tag>

{{row.status}}

</el-tag>


</template>


</el-table-column>



<el-table-column

label="操作"

>


<template #default="{row}">


<el-button

link

type="primary"

@click="emit('detail',row)"

>

详情

</el-button>


</template>


</el-table-column>


</el-table>


</div>


</template>



<style scoped>


.table{

background:white;

padding:20px;

border-radius:12px;

}


</style>