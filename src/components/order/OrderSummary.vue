<script setup lang="ts">


const data=[

{
title:'今日订单',
value:128
},

{
title:'成交金额',
value:'¥86000'
},

{
title:'待处理',
value:12
}

]


</script>


<template>


<div class="cards">


<div

v-for="item in data"

class="card"

:key="item.title"

>


<p>
{{item.title}}
</p>


<strong>
{{item.value}}
</strong>


</div>


</div>


</template>



<style scoped>


.cards{

display:grid;

grid-template-columns:
repeat(3,1fr);

gap:20px;

margin:20px 0;

}


.card{

background:white;

padding:20px;

border-radius:12px;

}


p{

color:#94a3b8;

}


strong{

font-size:26px;

}


</style>