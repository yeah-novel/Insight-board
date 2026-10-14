<script setup lang="ts">

import VChart from 'vue-echarts'


const option={


tooltip:{
trigger:'axis'
},


xAxis:{

type:'category',

data:[

'1月',
'2月',
'3月',
'4月',
'5月',
'6月'

]

},


yAxis:{

type:'value'

},


series:[

{

name:'销售额',

type:'line',

smooth:true,

data:[

30000,
42000,
38000,
60000,
72000,
90000

]

}

]


}


</script>



<template>


<div class="chart">


<h3>
销售趋势
</h3>


<v-chart

:option="option"

/>


</div>


</template>


<style scoped>

.chart{

height:360px;

background:white;

padding:20px;

border-radius:12px;

}


:deep(.echarts){

height:280px;

}

</style>