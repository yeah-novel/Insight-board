<script setup lang="ts">

import VChart from 'vue-echarts'

import {
 use
} from 'echarts/core'


import {
 BarChart
} from 'echarts/charts'


import {
 TooltipComponent,
 GridComponent
} from 'echarts/components'


import {
 CanvasRenderer
} from 'echarts/renderers'


use([
 BarChart,
 TooltipComponent,
 GridComponent,
 CanvasRenderer
])


const option={


tooltip:{
 trigger:'axis'
},


grid:{
 left:80,
 right:20,
 top:20,
 bottom:20
},


xAxis:{
 type:'value'
},


yAxis:{
 type:'category',

data:[
'智能手表',
'无线耳机',
'充电宝',
'智能音箱'
]

},


series:[

{

name:'销量',

type:'bar',

data:[
1200,
980,
760,
520
],

barWidth:20

}

]


}

</script>


<template>

<div class="panel">


<h3>
热销产品排行
</h3>


<v-chart
:option="option"
/>


</div>


</template>



<style scoped>


.panel{

height:360px;

background:white;

padding:20px;

border-radius:12px;

}


.panel h3{

margin:0 0 20px;

}


:deep(.echarts){

height:280px;

}

</style>