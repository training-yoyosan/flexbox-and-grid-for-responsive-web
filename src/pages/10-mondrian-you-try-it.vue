<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/10-mondrian-you-try-it.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="10. Mondrian you try it"
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
      <div class="mon h">h</div>
      <div class="mon i">i</div>
      <div class="mon j">j</div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MondrianYouTryIt',

  data () {
    return {
      expanded: true,
      instructions: `
:::
Now that you've built one Mondrian work of art, try for a second on your own. The broad steps you'll need to follow include:

1. Determine how many rows and columns the painting has.

2. Determine the approximate size of each box, in pixels. (Use a browser measuring tool to do this.)

3. Write the Grid code and get the boxes to the approximate layout desired.

4. Now add the extra code that will call out sizes for each row and column on the page.

5. Add background colors to finish.
:::
`
    }
  }
}
</script>

<style lang="css">
.wrapper {
  width: 633px;
  height: 458px;
  background: url(/statics/images/10-mondrian-you-try-it/mondrian2.png)
    no-repeat;
}
div.mon {
  border: 1px solid black;
  background-color: white;
  opacity: 0.5;
}
div.a {
}
div.b {
}
div.c {
}
div.d {
}
div.e {
}
div.f {
}
div.g {
}
div.h {
}
div.i {
}
div.j {
}
</style>
