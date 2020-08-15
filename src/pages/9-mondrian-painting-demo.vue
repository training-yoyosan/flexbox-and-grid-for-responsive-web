<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/6-responsive-images.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="6. Responsive images"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <div class="mon wrapper">
      <div class="mon a">a</div>
      <div class="mon b">b</div>
      <div class="mon c">c</div>
      <div class="mon d">d</div>
      <div class="mon e">e</div>
      <div class="mon f">f</div>
      <div class="mon g">g</div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'MondrianPaintingDemo',

  data () {
    return {
      expanded: true,
      instructions: `
:::
Jen will walk through an interactive demo in which you'll reconstruct a painting by Piet Mondrian in CSS Grid. Copy the painting as closely as possible, given what you know about CSS Grid.

Note: You will not be 100% perfect -- the painting isn't 100% perfect! But you will be very close.

If you have more time:

Write a media query so that when the screen is small, you flip the painting upside down.
:::
`
    }
  }
}
</script>

<style lang="css">
.wrapper {
  width: 600px;
  height: 600px;
  background: url(/statics/images/9-mondrian-painting-demo/painting.png)
    no-repeat;
  display: grid;
  gap: 1em 1em;
}
div.mon {
  border: 1px solid black;
  background-color: white;
  opacity: 0.5;
}
.a {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}
.b {
  grid-column: 1 / 2;
  grid-row: 3 / 5;
}
.c {
  grid-column: 2 / 5;
  grid-row: 1 / 5;
}
.d {
  grid-column: 1 / 2;
  grid-row: 5 / 7;
}
.e {
  grid-column: 2 / 4;
  grid-row: 5 / 7;
}
.f {
  grid-column: 4 / 5;
  grid-row: 5 / 6;
}
.g {
  grid-column: 4 / 5;
  grid-row: 6 / 7;
}
</style>
