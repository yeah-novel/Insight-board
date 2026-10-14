<script setup lang="ts">


import SalesFilter 
from '@/components/sales/SalesFilter.vue'


import SalesOverview 
from '@/components/sales/SalesOverview.vue'


import SalesTrendChart 
from '@/components/sales/SalesTrendChart.vue'


import RegionRank 
from '@/components/sales/RegionRank.vue'


import SalesTable 
from '@/components/sales/SalesTable.vue'


import {
ref
} from 'vue'


const summary=ref({

amount:486000,

orders:1256,

growth:18.3

})


function search(){

console.log('查询')

}


</script>



<template>


<div>


<h1>
销售分析
</h1>


<SalesFilter
@search="search"
/>


<SalesOverview
:data="summary"
/>


<SalesTrendChart/>


<div class="middle">


<RegionRank/>


</div>



<SalesTable/>


</div>


</template>


<style scoped>


.middle{

margin:20px 0;

}


h1{

margin-bottom:20px;

}


</style>