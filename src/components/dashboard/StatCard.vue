<script setup lang="ts">

defineProps<{
 title:string
 value:string
 growth:string
}>()

</script>


<template>

<div class="card">

<div class="title">
{{title}}
</div>


<div class="value">
{{value}}
</div>


<div class="growth">
↑ {{growth}}
</div>


</div>

</template>


<style scoped>

.card{

background:white;
padding:22px;
border-radius:12px;

}

.title{

color:#94a3b8;
font-size:14px;

}


.value{

margin-top:12px;

font-size:28px;

font-weight:700;

color:#172640;

}


.growth{

margin-top:10px;

color:#16a34a;

font-size:13px;

}

</style>