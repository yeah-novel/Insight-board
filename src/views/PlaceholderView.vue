<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="placeholder">
    <el-card shadow="never">
      <el-empty
        :description="`${String(route.meta.title || '当前页面')}功能正在开发中`"
      />
    </el-card>
  </section>
</template>

<style scoped>
.placeholder {
  width: 100%;
}

.placeholder :deep(.el-card) {
  min-height: 300px;
  border-color: #edf0f5;
  border-radius: 12px;
}
</style>