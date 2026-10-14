<script setup lang="ts">


const orders=[

{
id:'ORD20261001',
customer:'华为科技',
amount:'¥12800',
status:'已支付'
},


{
id:'ORD20261002',
customer:'星辰贸易',
amount:'¥8600',
status:'待发货'
},


{
id:'ORD20261003',
customer:'未来科技',
amount:'¥5200',
status:'已完成'
}

]


</script>


<template>


<div class="panel">


<h3>
最新订单
</h3>



<el-table
:data="orders"
style="width:100%"
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
prop="amount"
label="金额"
/>



<el-table-column
prop="status"
label="状态"
>


<template #default="{row}">


<el-tag
:type="
row.status==='已支付'
?'success'
:'warning'
"
>

{{row.status}}

</el-tag>


</template>


</el-table-column>


</el-table>


</div>


</template>



<style scoped>


.panel{

height:360px;

background:white;

padding:20px;

border-radius:12px;

}


h3{

margin:0 0 20px;

}


</style>