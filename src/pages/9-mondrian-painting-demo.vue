<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/9-mondrian-demo.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="9. Mondrian demo"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <div class="wrapper">
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
div.wrapper {
  width: 600px;
  height: 600px;
  /* background: url(/statics/images/9-mondrian-painting-demo/painting.png)
    no-repeat; */
  display: grid;
  gap: 33px 16px;
  grid-template-rows: 180px 220px 50px 50px;
  grid-template-columns: 128px 398px 40px;
  background-color: black;
}
div.mon {
  border: 1px solid black;
  background-color: white;
  /* opacity: 0.5; */
}
div.a {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
div.b {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
div.c {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
  background-color: red;
}
div.d {
  grid-column: 1 / 2;
  grid-row: 3 / 5;
  background-color: blue;
  color: white;
}
div.e {
  grid-column: 2 / 3;
  grid-row: 3 / 5;
}
div.f {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}
div.g {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  background-color: yellow;
}
</style>
