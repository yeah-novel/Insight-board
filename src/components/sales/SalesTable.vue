<script setup lang="ts">


const list=[

{

id:'S001',

customer:'华为',

employee:'张三',

region:'华东',

amount:20000

},

{

id:'S002',

customer:'小米',

employee:'李四',

region:'华南',

amount:15000

}

]


</script>


<template>


<div class="panel">


<h3>
销售明细
</h3>



<el-table

:data="list"

>


<el-table-column

prop="id"

label="编号"

/>


<el-table-column

prop="customer"

label="客户"

/>


<el-table-column

prop="employee"

label="销售"

/>


<el-table-column

prop="amount"

label="金额"

/>



</el-table>


</div>


</template>