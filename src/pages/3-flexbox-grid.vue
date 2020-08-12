<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/3-flexbox-grid.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="3. Flexbox grid"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <div class="wrapper">
      <!-- row 1, 4 individual boxes -->
      <div class="rowf reverse">
        <article class="colf-1-2">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          >
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-1-2">
          <h3>Coconut Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/coconut-cream.jpg"
            alt="Coconut cream pie."
          >
          <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
          <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-1-2">
          <h3>Key Lime Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/keylime-pie.jpg"
            alt="Key lime pie."
          >
          <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes. </p>
          <p><a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
            >Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-1-2">
          <h3>Pumpkin Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/pumpkin-pie.jpg"
            alt="Pumpkin pie."
          >
          <p>A staple of every Thanksgiving dinner table, pumpkin pie is delicious any time of year.</p>
          <p><a
              href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
              target="_blank"
            >Read more &gt;&gt;</a></p>
        </article>
      </div>
      <!-- row 2, 2 boxes spanning 2 rows -->
      <div class="rowf">
        <article class="colf-2">
          <h3>Key Lime Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/keylime-pie.jpg"
            alt="Key lime pie."
          >
          <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes. </p>
          <p><a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
            >Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-2">
          <h3>Pumpkin Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/pumpkin-pie.jpg"
            alt="Pumpkin pie."
          >
          <p>A staple of every Thanksgiving dinner table, pumpkin pie is delicious any time of year.</p>
          <p><a
              href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
              target="_blank"
            >Read more &gt;&gt;</a></p>
        </article>
      </div>

      <!-- row 4: narrow left column, wide right/content column -->
      <div class="rowf">
        <article class="colf-1-4">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          >
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-3">
          <h3>Coconut Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/coconut-cream.jpg"
            alt="Coconut cream pie."
          >
          <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
          <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
        </article>
      </div>
      <!-- row 4: one column -->
      <div class="rowf">
        <article class="colf-4">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          >
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
        </article>
      </div>
      <!-- row 5, 1 2 1 individual boxes -->
      <div class="rowf">
        <article class="colf-1-2">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          >
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p><a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-2-4">
          <h3>Coconut Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/coconut-cream.jpg"
            alt="Coconut cream pie."
          >
          <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
          <p><a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a></p>
        </article>
        <article class="colf-1-2">
          <h3>Key Lime Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/keylime-pie.jpg"
            alt="Key lime pie."
          >
          <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes. </p>
          <p><a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
            >Read more &gt;&gt;</a></p>
        </article>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'FlexboxGrid',

  data () {
    return {
      expanded: false,
      instructions: `
:::
First, we'll examine the Flexbox Grid (www.flexboxgrid.com) and Bootstrap 4's grid system to see their concepts for making
Flexbox work as a grid.

Next, we'll work with the files in the "begin" folder to create a 4-column grid system. The end result will be visually like
the float grid system written earlier, only written with Flexbox.

We'll also write some code for reversing the rows and reordering boxes within a row.

Extra exercise:

* Add another row that displays a 1 2 1 layout.
* On tablet, make it so that the 2 flex item is the first one displayed, followed by the two 1 flex items on the next line.
* Reverse the items in the first row without breaking the layout.
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

div img {
  width: 100%;
  max-width: 225px;
}

/* grid system -- mobile first! */
.rowf {
  display: flex;
  flex-flow: row wrap;
}
[class*="colf"] {
  padding: 10px;
}
.colf-1-2,
.colf-1-4 {
  background-color: #ffc;
}
.colf-2,
.colf-2-4 {
  background-color: #ccf;
}
.colf-3 {
  background-color: #fcf;
}
.colf-4 {
  background-color: #ccf;
}

/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px) {
  [class*="colf"] {
    margin-left: 4%;
    margin-bottom: 10px;
  }
  .colf-1-2,
  .colf-2 {
    flex: 0 0 44%;
  }
  .colf-1-4,
  .colf-2-4,
  .colf-3,
  .colf-4 {
    flex: 0 0 92%;
  }
  .colf-2-4 {
    order: -1;
  }
}
/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
  [class*="colf"] {
    margin-left: 4%;
    margin-bottom: 15px;
  }
  .colf-1-2,
  .colf-1-4 {
    flex: 0 0 20%;
  }
  .colf-2,
  .colf-2-4 {
    flex: 0 0 44%;
  }
  .colf-3 {
    flex: 0 0 68%;
  }
  .colf-4 {
    flex: 0 0 92%;
  }
  .colf-2-4 {
    order: 0;
  }
  .reverse {
    flex-direction: row-reverse;
  }
  .reverse [class*="colf-1"] {
    margin-left: 0;
    margin-right: 4%;
  }
}
</style>
