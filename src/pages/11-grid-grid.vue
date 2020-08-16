<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/11-grid-grid.vue"
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
      <!-- row 1, 4 individual boxes -->
      <article class="col-1-2">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <article class="col-1-2">
        <h3>Coconut Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/coconut-cream.jpg"
          alt="Coconut cream pie."
        >
        <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
        <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
      </article>
      <article class="col-1-2">
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
      <article class="col-1-2">
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
      <article class="col-2">
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
      <article class="col-2">
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
      <article class="col-3 order-second">
        <h3>Coconut Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/coconut-cream.jpg"
          alt="Coconut cream pie."
        >
        <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
        <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
      </article>
      <article class="col-1-4 order-first">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <!-- row 4: one column -->
      <article class="col-4">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <!-- row 5, 1-2-1 boxes -->
      <article class="col-2-4 order-second">
        <h3>Coconut Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/coconut-cream.jpg"
          alt="Coconut cream pie."
        >
        <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
        <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
      </article>
      <article class="col-1-2 order-first">
        <h3>Boston Cream Pie</h3>
        <img
          src="/statics/images/1-intro-to-floats/boston-cream.jpg"
          alt="Boston creme pie."
        >
        <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
        <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
      </article>
      <article class="col-1-2 order-third">
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
}
/* hack to make images flexible in our prototype */
div img {
  width: 100%;
  max-width: 250px;
}

/* grid system */

/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px) {
}

/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
}
</style>
