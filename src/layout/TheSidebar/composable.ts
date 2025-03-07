import { ref } from 'vue'
export function useSidebarFn() {
  const items = ref<any[]>([
    {
      label: 'Dashboard',
      route: '/',
      active: false,
      icon: 'dashboard',
    },
    {
      label: 'Organization',
      route: '/organization',
      active: false,
      icon: 'organization',
    },
    {
      label: 'Department',
      route: '/department',
      active: false,
      icon: 'department',
    },
    {
      label: 'Faculty',
      route: '/faculty',
      active: false,
      icon: 'faculty',
    },
    {
      label: 'Division',
      route: '/division',
      active: false,
      icon: 'division',
    },
  ])

  return {
    items,
  }
}
