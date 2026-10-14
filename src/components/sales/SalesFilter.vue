<script setup lang="ts">


import {
reactive
} from 'vue'


import type {
SalesQuery
} from '@/types/sales'


const emit=defineEmits<{

search:[
SalesQuery
]

}>()



const form=reactive<SalesQuery>({

startDate:'',

endDate:'',

region:'',

employee:''

})



function search(){

emit(
'search',
form
)

}


</script>


<template>


<div class="filter">


<el-date-picker

v-model="form.startDate"

placeholder="开始日期"

/>


<el-date-picker

v-model="form.endDate"

placeholder="结束日期"

/>



<el-select

v-model="form.region"

placeholder="地区"

clearable

>

<el-option
label="华东"
value="华东"
/>


<el-option
label="华南"
value="华南"
/>


</el-select>



<el-select

v-model="form.employee"

placeholder="销售人员"

clearable

>

<el-option

label="张三"

value="张三"

/>


<el-option

label="李四"

value="李四"

/>


</el-select>



<el-button

type="primary"

@click="search"

>

查询

</el-button>


</div>


</template>



<style scoped>

.filter{

display:flex;

gap:12px;

padding:20px;

background:white;

border-radius:12px;

}

</style>