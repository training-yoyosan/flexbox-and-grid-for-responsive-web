<template>
  <q-page padding>
    <exercise-header
      label="6. Responsive images"
      :expanded="expanded"
      :instructions="instructions"
      filename="6-responsive-images"
    />

    <!-- visit http://scottjehl.github.io/picturefill/ for picturefill source -->
    <div class="bkgdimg"></div>
    <div>
      <picture>
        <source
          srcset="statics/images/6-responsive-images/peace-pie-original.jpg"
          media="(min-width: 1200px)"
        >
        <source
          srcset="statics/images/6-responsive-images/peace-pie-500.jpg"
          media="(min-width: 800px)"
        >
        <img
          src="statics/images/6-responsive-images/peace-pie-150.jpg"
          alt="My amazing peace pie at the appropriate dimension!"
        >
      </picture>
    </div>
  </q-page>
</template>

<script src="statics/js/picturefill.min.js" />

<script>
export default {
  name: 'ResponsiveImages',

  components: {
    'exercise-header': require('components/ExerciseHeader').default
  },

  data () {
    return {
      expanded: true,
      instructions: `
:::
This exercise takes one image, in three different sizes in the img folder, and displays them on an HTML page using the <picture> tag and the Picturefill polyfill.

We will also examine responsive background images, using tips from Tim Kadlec. In this way, we can have different sizes of background images via media query, with only one image loading, rather than downloading several options and displaying one.

Media query asset downloading results
http://timkadlec.com/2012/04/media-query-asset-downloading-results/
:::
`
    }
  }
}
</script>

<style lang="css">
@media (min-width: 1px) {
  .bkgdimg {
    background: url(/statics/images/6-responsive-images/mom-300.jpg) no-repeat;
    height: 50px;
  }
}
@media (min-width: 500px) {
  .bkgdimg {
    background: url(/statics/images/6-responsive-images/mom-767.jpg) no-repeat;
    height: 128px;
  }
}
@media (min-width: 1000px) {
  .bkgdimg {
    background: url(/statics/images/6-responsive-images/mom-1200.jpg) no-repeat;
    height: 200px;
  }
}
</style>
