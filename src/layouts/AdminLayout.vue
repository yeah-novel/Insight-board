<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'
import Topbar from '@/components/layout/Topbar.vue'

const collapsed = ref(false)
const mobileMenuOpen = ref(false)

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    mobileMenuOpen.value = !mobileMenuOpen.value
  } else {
    collapsed.value = !collapsed.value
  }
}
</script>

<template>
  <div class="admin-layout">
    <Sidebar
      class="desktop-sidebar"
      :collapsed="collapsed"
      @toggle="toggleSidebar"
    />

    <div
      v-if="mobileMenuOpen"
      class="mobile-mask"
      @click="mobileMenuOpen = false"
    />

    <Sidebar
      v-if="mobileMenuOpen"
      class="mobile-sidebar"
      :collapsed="false"
      @toggle="mobileMenuOpen = false"
    />

    <div class="main-container">
      <Topbar
        :collapsed="collapsed"
        @toggle="toggleSidebar"
      />

      <main class="page-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
}

.desktop-sidebar {
  position: sticky;
  top: 0;
  height: 100vh;
}

.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 100vh;
}

.page-content {
  flex: 1;
  min-width: 0;
  padding: 28px;
  background: #f5f7fb;
}

.mobile-sidebar,
.mobile-mask {
  display: none;
}

@media (max-width: 768px) {
  .desktop-sidebar {
    display: none;
  }

  .page-content {
    padding: 16px;
  }

  .mobile-sidebar {
    display: flex;
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    height: 100vh;
    box-shadow: 8px 0 30px rgb(15 23 42 / 15%);
  }

  .mobile-mask {
    display: block;
    position: fixed;
    z-index: 1000;
    inset: 0;
    background: rgb(15 23 42 / 45%);
  }
}
</style>