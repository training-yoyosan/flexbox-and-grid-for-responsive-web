<template>
  <q-page padding>
    <exercise-header
      label="10. Mondrian you try it"
      :expanded="expanded"
      :instructions="instructions"
      filename="10-mondrian-you-try-it"
    />

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

  components: {
    'exercise-header': require('components/ExerciseHeader').default
  },

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
/* 7 rows, 5 columns */
.wrapper {
  width: 633px;
  height: 458px;
  background: url(/statics/images/10-mondrian-you-try-it/mondrian2.png)
    no-repeat;
  display: grid;
  gap: 7px 8px;
  grid-template-rows: 70px 14px 58px 53px 81px;
  grid-template-columns: 302px 87px 151px 69px;
}
div.mon {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 2em;
  font-weight: bold;
  /* opacity: 0.5; */
}
div.a {
  grid-row: 1/6;
  grid-column: 1/2;
  background-color: red;
  color: white;
}
div.b {
  grid-row: 1/3;
  grid-column: 2/3;
  background-color: #ffd401;
  color: white;
}
div.c {
  grid-row: 1/4;
  grid-column: 3/4;
}
div.d {
  grid-row: 1/2;
  grid-column: 4/5;
  background-color: red;
  color: white;
}
div.e {
  grid-row: 3/6;
  grid-column: 2/3;
}
div.f {
  grid-row: 4/5;
  grid-column: 3/4;
  background-color: #33477c;
  color: white;
}
div.g {
  grid-row: 2/5;
  grid-column: 4/5;
}
div.h {
  grid-row: 6/7;
  grid-column: 1/2;
}
div.i {
  grid-row: 6/7;
  grid-column: 2/3;
  background-color: #33477c;
  color: white;
}
div.j {
  grid-row: 5/7;
  grid-column: 3/5;
}
</style>
