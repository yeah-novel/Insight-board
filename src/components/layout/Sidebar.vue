<script setup lang="ts">
import {
  House,
  DataAnalysis,
  User,
  TrendCharts,
  ShoppingCart,
  Document,
  Setting,
  Fold,
} from '@element-plus/icons-vue'

defineProps<{
  collapsed: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

const menus = [
  { title: '首页总览', path: '/dashboard', icon: House },
  { title: '销售分析', path: '/sales', icon: TrendCharts },
  { title: '客户管理', path: '/customers', icon: User },
  { title: '订单管理', path: '/orders', icon: ShoppingCart },
  { title: '数据报表', path: '/reports', icon: DataAnalysis },
  { title: '系统设置', path: '/settings', icon: Setting },
]
</script>

<template>
  <aside class="sidebar" :class="{ 'is-collapsed': collapsed }">
    <div class="brand">
      <div class="brand-logo">I</div>
      <span v-if="!collapsed" class="brand-name">
        InsightBoard
      </span>
    </div>

    <div class="menu-label" v-if="!collapsed">
      工作空间
    </div>

    <nav class="menu-list">
      <RouterLink
        v-for="menu in menus"
        :key="menu.path"
        :to="menu.path"
        class="menu-item"
        :title="collapsed ? menu.title : undefined"
      >
        <el-icon :size="19">
          <component :is="menu.icon" />
        </el-icon>
        <span v-if="!collapsed">{{ menu.title }}</span>
      </RouterLink>
    </nav>

    <div class="sidebar-bottom">
      <button
        class="collapse-btn"
        @click="emit('toggle')"
        :title="collapsed ? '展开菜单' : '折叠菜单'"
      >
        <el-icon :size="18">
          <Fold />
        </el-icon>
        <span v-if="!collapsed">收起菜单</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  flex-shrink: 0;
  background: #172640;
  color: #c6d0e0;
  transition: width 0.2s ease;
}

.sidebar.is-collapsed {
  width: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 72px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(255 255 255 / 8%);
  overflow: hidden;
  white-space: nowrap;
}

.is-collapsed .brand {
  justify-content: center;
  padding: 0;
}

.brand-logo {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #4f7cff;
  color: white;
  font-weight: 800;
  font-size: 19px;
}

.brand-name {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}

.menu-label {
  padding: 24px 20px 10px;
  color: #8594ab;
  font-size: 12px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 14px;
  height: 46px;
  padding: 0 14px;
  border-radius: 9px;
  color: #bdc9dc;
  white-space: nowrap;
  overflow: hidden;
  transition: background 0.2s, color 0.2s;
}

.is-collapsed .menu-item {
  justify-content: center;
  padding: 0;
}

.menu-item:hover {
  color: #fff;
  background: rgb(255 255 255 / 7%);
}

.menu-item.router-link-active {
  color: #fff;
  background: #3567db;
}

.sidebar-bottom {
  margin-top: auto;
  padding: 12px;
  border-top: 1px solid rgb(255 255 255 / 8%);
}

.collapse-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 42px;
  border: 0;
  border-radius: 8px;
  color: #bdc9dc;
  background: transparent;
  cursor: pointer;
}

.collapse-btn:hover {
  color: white;
  background: rgb(255 255 255 / 7%);
}

.is-collapsed .collapse-btn span {
  display: none;
}
</style>