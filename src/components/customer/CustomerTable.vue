<script setup lang="ts">


import type {
Customer
} from '@/types/customer'


defineProps<{

data:Customer[]

}>()


const emit=defineEmits<{

detail:[Customer]

edit:[Customer]

}>()


</script>


<template>


<div class="table-box">


<el-table

:data="data"

>


<el-table-column

prop="company"

label="公司"

/>


<el-table-column

prop="contact"

label="联系人"

/>


<el-table-column

prop="source"

label="来源"

/>


<el-table-column

prop="amount"

label="成交金额"

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

width="180"

>


<template #default="{row}">


<el-button

link

type="primary"

@click="emit('detail',row)"

>

详情

</el-button>


<el-button

link

@click="emit('edit',row)"

>

编辑

</el-button>



</template>


</el-table-column>


</el-table>


</div>


</template>


<style scoped>


.table-box{

margin-top:20px;

background:white;

padding:20px;

border-radius:12px;

}

</style>