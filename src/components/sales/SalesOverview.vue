<script setup lang="ts">


defineProps<{

data:any

}>()


</script>


<template>


<div class="cards">


<div class="card">

<p>销售金额</p>

<strong>
¥{{data.amount}}
</strong>

</div>


<div class="card">

<p>订单数量</p>

<strong>
{{data.orders}}
</strong>

</div>



<div class="card">

<p>增长率</p>

<strong>

{{data.growth}}%

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

margin-top:20px;

}


.card{

background:white;

padding:24px;

border-radius:12px;

}


p{

color:#94a3b8;

}


strong{

font-size:28px;

}

</style>