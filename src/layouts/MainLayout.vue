<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>Flexbox and Grid for Responsive Web</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >Lesson Links</q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: '1. Intro to floats',
          link: '/1-intro-to-floats'
        },
        {
          title: '2. Flexbox intro',
          link: '/2-flexbox-intro'
        },
        {
          title: '3. Flexbox grid',
          link: '/3-flexbox-grid'
        },
        {
          title: '4. Flexbox pie',
          link: '/4-flexbox-pie'
        },
        {
          title: '5. Flexbox gallery',
          link: '/5-flexbox-gallery'
        },
        {
          title: '6. Responsive images',
          link: '/6-responsive-images'
        },
        {
          title: '9. Mondrian painting demo',
          link: '/9-mondrian-painting-demo'
        },
        {
          title: '10. Mondrian you try it',
          link: '/10-mondrian-you-try-it'
        },
        {
          title: '11. Grid grid',
          link: '/11-grid-grid'
        },
        {
          title: '12. Grid area',
          link: '/12-grid-area'
        }
      ]
    }
  }
}
</script>
