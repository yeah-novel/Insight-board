<script setup lang="ts">

import VChart from 'vue-echarts'
import {use} from 'echarts/core'

import {
 LineChart
} from 'echarts/charts'


import {
 GridComponent,
 TooltipComponent,
 TitleComponent
} from 'echarts/components'


import {
 CanvasRenderer
} from 'echarts/renderers'


use([
 LineChart,
 GridComponent,
 TooltipComponent,
 TitleComponent,
 CanvasRenderer
])


const option={

tooltip:{
 trigger:'axis'
},


xAxis:{
 type:'category',

data:[
'10-06',
'10-07',
'10-08',
'10-09',
'10-10',
'10-11',
'10-12'
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
12000,
18000,
23000,
20000,
31000,
38000,
45000
]

}

]


}

</script>


<template>

<div class="chart-box">

<h3>
销售趋势
</h3>


<v-chart
:option="option"
/>


</div>


</template>


<style scoped>

.chart-box{

height:360px;

background:white;

padding:20px;

border-radius:12px;

}


.chart-box h3{

margin:0 0 20px;

}


.v-chart{

height:280px;

}

</style>