<script setup lang="ts">


import type {
Order
} from '@/types/order'


defineProps<{

visible:boolean

order?:Order


}>()


defineEmits<{

close:[]

}>()


</script>


<template>


<el-drawer

:model-value="visible"

title="订单详情"

>


<div v-if="order">


<el-descriptions

border

:column="1"

>


<el-descriptions-item label="订单号">

{{order.id}}

</el-descriptions-item>


<el-descriptions-item label="客户">

{{order.customer}}

</el-descriptions-item>



<el-descriptions-item label="商品">

{{order.product}}

</el-descriptions-item>



<el-descriptions-item label="金额">

¥{{order.amount}}

</el-descriptions-item>



<el-descriptions-item label="状态">

<el-tag>

{{order.status}}

</el-tag>

</el-descriptions-item>


</el-descriptions>


</div>


</el-drawer>


</template>