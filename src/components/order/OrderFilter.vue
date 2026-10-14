<script setup lang="ts">


import {
reactive
} from 'vue'


const emit=defineEmits<{

search:[any]

}>()


const form=reactive({

keyword:'',

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

placeholder="订单号/客户"

clearable

/>



<el-select

v-model="form.status"

placeholder="订单状态"

clearable

>


<el-option

label="待支付"

value="待支付"

/>


<el-option

label="已支付"

value="已支付"

/>


<el-option

label="已完成"

value="已完成"

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

background:white;

padding:20px;

border-radius:12px;

}

</style>