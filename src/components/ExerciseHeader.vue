<template>
  <div>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        :href="repoFile"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expand"
        :label="label"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>
  </div>
</template>

<script>
export default {
  name: 'ExerciseHeader',

  props: {
    label: {
      required: true,
      type: String
    },
    expanded: {
      required: true,
      type: Boolean
    },
    instructions: {
      required: true,
      type: String
    },
    filename: {
      required: true,
      type: String
    }
  },

  mounted () {
    this.expand = this.expanded
  },

  data () {
    return {
      expand: null
    }
  },

  computed: {
    repoFile () {
      return 'https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/' + this.filename + '.vue'
    }
  }

}
</script>
