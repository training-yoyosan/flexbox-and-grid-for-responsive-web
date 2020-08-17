<template>
  <q-page padding>
    <exercise-header
      label="11. Grid grid"
      :expanded="expanded"
      :instructions="instructions"
      filename="11-grid-grid"
    />

    <div class="wrapper">
      <!-- row 1, 4 individual boxes -->
      <article class="r1c1">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <article class="r1c2">
        <h3>Coconut Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/coconut-cream.jpg"
          alt="Coconut cream pie."
        >
        <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
        <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
      </article>
      <article class="r1c3">
        <h3>Key Lime Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/keylime-pie.jpg"
          alt="Key lime pie."
        >
        <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes. </p>
        <p><a
            href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
            target="_blank"
          >Read more &gt;&gt;</a></p>
      </article>
      <article class="r1c4">
        <h3>Pumpkin Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/pumpkin-pie.jpg"
          alt="Pumpkin pie."
        >
        <p>A staple of every Thanksgiving dinner table, pumpkin pie is delicious any time of year.</p>
        <p><a
            href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
            target="_blank"
          >Read more &gt;&gt;</a></p>
      </article>
      <!-- row 2, 2 boxes spanning 2 rows -->
      <article class="r2c1">
        <h3>Key Lime Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/keylime-pie.jpg"
          alt="Key lime pie."
        >
        <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes. </p>
        <p><a
            href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
            target="_blank"
          >Read more &gt;&gt;</a></p>
      </article>
      <article class="r2c2">
        <h3>Pumpkin Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/pumpkin-pie.jpg"
          alt="Pumpkin pie."
        >
        <p>A staple of every Thanksgiving dinner table, pumpkin pie is delicious any time of year.</p>
        <p><a
            href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
            target="_blank"
          >Read more &gt;&gt;</a></p>
      </article>
      <!-- row 3: narrow left column, wide right/content column -->
      <article class="r3c1">
        <h3>Coconut Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/coconut-cream.jpg"
          alt="Coconut cream pie."
        >
        <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
        <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
      </article>
      <article class="r3c2">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <!-- row 4: one column -->
      <article class="r4c1">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <!-- row 5, 1-2-1 boxes -->
      <article class="r5c1">
        <h3>Coconut Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/coconut-cream.jpg"
          alt="Coconut cream pie."
        >
        <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
        <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
      </article>
      <article class="r5c2">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <article class="r5c3">
        <h3>Key Lime Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/keylime-pie.jpg"
          alt="Key lime pie."
        >
        <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes. </p>
        <p><a
            href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
            target="_blank"
          >Read more &gt;&gt;</a></p>
      </article>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'GridGrid',

  components: {
    'exercise-header': require('components/ExerciseHeader').default
  },

  data () {
    return {
      expanded: true,
      instructions: `
:::
Let's revisit the pie grid page for a third time, building it with CSS Grid this time.

Follow instructions in the HTML for layouts, or look back at floats or Flexbox to see our results previously.
:::
      `
    }
  }
}
</script>

<style lang="css">
body {
  font-family: Arial, Geneva, sans-serif;
}
a {
  color: #2772b0;
}
.wrapper {
  width: 97%;
  max-width: 1200px;
  margin: 0 auto;
  float: none;
  background-color: #fff;
  display: grid;
  gap: 1%;
}
/* hack to make images flexible in our prototype */
div img {
  width: 100%;
  max-width: 250px;
}

/* grid system */
[class*="r1"] {
  background-color: #ffc;
}
[class*="r2"] {
  background-color: #ccf;
}
[class*="r3"] {
  background-color: #fcf;
}
[class*="r4"] {
  background-color: #cff;
}
[class*="r5"] {
  background-color: #fcc;
}

/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px) {
  .wrapper {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, auto);
  }

  .r1c1 {
    grid-column: 1/3;
    grid-row: 1/2;
  }
  .r1c2 {
    grid-column: 3/5;
    grid-row: 1/2;
  }
  .r1c3 {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .r1c4 {
    grid-column: 3/5;
    grid-row: 2/3;
  }
  .r2c1 {
    grid-column: 1/3;
    grid-row: 3/4;
  }
  .r2c2 {
    grid-column: 3/5;
    grid-row: 3/4;
  }
  .r3c1 {
    grid-column: 1/5;
    grid-row: 4/5;
  }
  .r3c2 {
    grid-column: 1/5;
    grid-row: 5/6;
  }
  .r4c1 {
    grid-column: 1/5;
    grid-row: 6/7;
  }
  .r5c1 {
    grid-column: 1/3;
    grid-row: 8/9;
  }
  .r5c2 {
    grid-column: 1/5;
    grid-row: 7/8;
  }
  .r5c3 {
    grid-column: 3/5;
    grid-row: 8/9;
  }
}

/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
  .r1c1 {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .r1c2 {
    grid-column: 2/3;
    grid-row: 1/2;
  }
  .r1c3 {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  .r1c4 {
    grid-column: 4/5;
    grid-row: 1/2;
  }
  .r2c1 {
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .r2c2 {
    grid-column: 3/5;
    grid-row: 2/3;
  }
  .r3c1 {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  .r3c2 {
    grid-column: 2/5;
    grid-row: 3/4;
  }
  .r4c1 {
    grid-column: 1/5;
    grid-row: 4/5;
  }
  .r5c1 {
    grid-column: 1/2;
    grid-row: 5/6;
  }
  .r5c2 {
    grid-column: 2/4;
    grid-row: 5/6;
  }
  .r5c3 {
    grid-column: 4/5;
    grid-row: 5/6;
  }
}
</style>
