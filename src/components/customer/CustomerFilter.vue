<script setup lang="ts">


import {
reactive
} from 'vue'


import type {
CustomerQuery
} from '@/types/customer'


const emit=defineEmits<{

search:[
CustomerQuery
]

}>()


const form=reactive<CustomerQuery>({

keyword:'',

source:'',

status:''

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


<el-input

v-model="form.keyword"

placeholder="搜索公司或联系人"

clearable

/>



<el-select

v-model="form.source"

placeholder="客户来源"

clearable

>

<el-option

label="官网"

value="官网"

/>


<el-option

label="推荐"

value="推荐"

/>


<el-option

label="展会"

value="展会"

/>


</el-select>



<el-select

v-model="form.status"

placeholder="客户状态"

clearable

>


<el-option

label="成交"

value="成交"

/>


<el-option

label="跟进中"

value="跟进中"

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