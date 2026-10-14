<script setup lang="ts">


import type {
Customer
} from '@/types/customer'


defineProps<{

visible:boolean

customer?:Customer


}>()



const emit=defineEmits<{

close:[]

}>()


</script>


<template>


<el-drawer

:model-value="visible"

title="客户详情"

@close="emit('close')"

>


<div v-if="customer">


<el-descriptions

border

:column="1"

>


<el-descriptions-item label="公司">

{{customer.company}}

</el-descriptions-item>



<el-descriptions-item label="联系人">

{{customer.contact}}

</el-descriptions-item>



<el-descriptions-item label="电话">

{{customer.phone}}

</el-descriptions-item>



<el-descriptions-item label="金额">

¥{{customer.amount}}

</el-descriptions-item>



</el-descriptions>



</div>


</el-drawer>


</template>