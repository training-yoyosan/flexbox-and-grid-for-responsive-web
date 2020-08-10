<template>
  <q-page padding>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
        no-caps
      >
        <q-tab name="day1" label="Day 1" />
        <q-tab name="day2" label="Day 2" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="day1">
          <embed src="statics/day1.pdf" style="width: 100%; height: 85vh" />
        </q-tab-panel>

        <q-tab-panel name="day2">
          <embed src="statics/day2.pdf" style="width: 100%; height: 85vh" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data () {
    return {
      tab: 'day1'
    }
  }
}
</script>
