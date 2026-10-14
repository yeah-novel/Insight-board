<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  Search,
  Bell,
  ArrowDown,
  Fold,
} from '@element-plus/icons-vue'

defineProps<{
  collapsed: boolean
}>()

defineEmits<{
  toggle: []
}>()

const route = useRoute()

const pageTitle = computed(
  () => String(route.meta.title || '首页总览'),
)
</script>

<template>
  <header class="topbar">
    <div class="topbar-left">
      <button
        class="mobile-menu"
        @click="$emit('toggle')"
        aria-label="切换侧边栏"
      >
        <el-icon><Fold /></el-icon>
      </button>

      <div class="breadcrumb">
        <span class="breadcrumb-root">工作空间</span>
        <span class="separator">/</span>
        <span class="breadcrumb-current">{{ pageTitle }}</span>
      </div>
    </div>

    <div class="topbar-right">
      <el-input
        class="search-input"
        placeholder="搜索页面、客户或订单..."
        :prefix-icon="Search"
        clearable
      />

      <el-badge :value="3" class="notification">
        <el-button text circle aria-label="通知">
          <el-icon :size="20"><Bell /></el-icon>
        </el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <div class="user-profile">
          <el-avatar :size="34">张</el-avatar>
          <span class="user-name">管理员</span>
          <el-icon><ArrowDown /></el-icon>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 72px;
  padding: 0 28px;
  background: #fff;
  border-bottom: 1px solid #e9edf4;
}

.topbar-left,
.topbar-right,
.breadcrumb,
.user-profile {
  display: flex;
  align-items: center;
}

.breadcrumb {
  gap: 12px;
  white-space: nowrap;
}

.breadcrumb-root,
.separator {
  color: #94a3b8;
}

.breadcrumb-current {
  color: #1e293b;
  font-weight: 600;
}

.topbar-right {
  gap: 22px;
}

.search-input {
  width: 280px;
}

.user-profile {
  gap: 10px;
  color: #334155;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
}

.mobile-menu {
  display: none;
  border: 0;
  background: transparent;
  cursor: pointer;
}

@media (max-width: 768px) {
  .topbar {
    height: 60px;
    padding: 0 14px;
  }

  .mobile-menu {
    display: inline-flex;
    margin-right: 10px;
  }

  .search-input {
    width: 36px;
  }

  .search-input :deep(.el-input__wrapper) {
    padding: 0 8px;
  }

  .search-input :deep(.el-input__inner) {
    width: 0;
  }

  .topbar-right {
    gap: 8px;
  }

  .user-name,
  .breadcrumb-root,
  .separator {
    display: none;
  }
}

@media (max-width: 420px) {
  .breadcrumb {
    gap: 4px;
  }

  .notification {
    display: none;
  }
}
</style>