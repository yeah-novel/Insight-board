<script setup lang="ts">


const data=[

{
name:'华东',
value:320000
},

{
name:'华南',
value:240000
},

{
name:'华北',
value:180000
}


]


</script>



<template>


<div class="panel">

<h3>
地区销售排行
</h3>


<div

v-for="item in data"

:key="item.name"

class="row"

>


<span>
{{item.name}}
</span>


<el-progress

:percentage="
item.value/4000
"

/>


</div>


</div>


</template>