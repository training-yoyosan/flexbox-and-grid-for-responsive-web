<template>
  <q-page padding>

    <q-list class="rounded-borders">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="1 Intro to floats"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <div class="wrapper">
      <!-- row 1, 4 individual boxes -->
      <div class="rowf">
        <article class="colf-1-2">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          />
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p>
            <a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a>
          </p>
        </article>
        <article class="colf-1-2">
          <h3>Coconut Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/coconut-cream.jpg"
            alt="Coconut cream pie."
          />
          <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
          <p>
            <a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a>
          </p>
        </article>
        <article class="colf-1-2">
          <h3>Key Lime Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/keylime-pie.jpg"
            alt="Key lime pie."
          />
          <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes.</p>
          <p>
            <a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
            >Read more &gt;&gt;</a>
          </p>
        </article>
        <article class="colf-1-2">
          <h3>Pumpkin Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/pumpkin-pie.jpg"
            alt="Pumpkin pie."
          />
          <p>A staple of every Thanksgiving dinner table, pumpkin pie is delicious any time of year.</p>
          <p>
            <a
              href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
              target="_blank"
            >Read more &gt;&gt;</a>
          </p>
        </article>
      </div>
      <!-- row 2, 2 boxes spanning 2 rows -->
      <div class="rowf">
        <article class="colf-2">
          <h3>Key Lime Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/keylime-pie.jpg"
            alt="Key lime pie."
          />
          <p>Key lime pie is based on the tiny key limes from Florida. These limes are less sour than conventional limes.</p>
          <p>
            <a
              href="https://www.epicurious.com/recipes/food/views/key-lime-pie-108125"
              target="_blank"
            >Read more &gt;&gt;</a>
          </p>
        </article>
        <article class="colf-2">
          <h3>Pumpkin Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/pumpkin-pie.jpg"
            alt="Pumpkin pie."
          />
          <p>A staple of every Thanksgiving dinner table, pumpkin pie is delicious any time of year.</p>
          <p>
            <a
              href="http://www.kingarthurflour.com/recipes/pumpkin-pie-recipe"
              target="_blank"
            >Read more &gt;&gt;</a>
          </p>
        </article>
      </div>

      <!-- row 3: narrow left column, wide right/content column -->
      <div class="rowf">
        <article class="colf-1-4">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          />
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p>
            <a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a>
          </p>
        </article>
        <article class="colf-3">
          <h3>Coconut Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/coconut-cream.jpg"
            alt="Coconut cream pie."
          />
          <p>Coconut cream pie will take you to an island escape. Especially delicious in winter.</p>
          <p>
            <a href="https://www.favfamilyrecipes.com/coconut-cream-pie-2/">Read more &gt;&gt;</a>
          </p>
        </article>
      </div>
      <!-- row 4: one column -->
      <div class="rowf">
        <article class="colf-4">
          <h3>Boston Cream Pie</h3>
          <img
            src="statics/images/1-intro-to-floats/boston-cream.jpg"
            alt="Boston creme pie."
          />
          <p>Boston's famous dessert, a combination of yellow cake, vanilla pudding, and chocolate frosting.</p>
          <p>
            <a href="http://www.foodnetwork.com/recipes/boston-cream-pie-recipe0-1908702">Read more &gt;&gt;</a>
          </p>
        </article>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'IntroToFloats',

  data () {
    return {
      expanded: true,
      instructions: `
:::
Look at the HTML file source. Notice the comments explaining the type of layout desired in a 4-column grid system at desktop dimensions.

Write the appropriate CSS to achieve the layouts specified for desktop.

Go farther:

Write the grid in mobile-first fashion.

* Styles outside the media queries are universal and work to display the site in mobile format.

* Two media queries are provided for "tablet" and "desktop" dimensions. Write styles that override the mobile layouts here.
:::`
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
  margin: 0 auto;
  float: none;
  background-color: #fff;
}

div img {
  width: 100%;
  max-width: 225px;
}

.rowf::after {
  content: "";
  display: table;
  clear: both;
}

[class*="colf-"] {
  margin: 0 4% 4% 4%;
  width: 92%;
  min-height: 1px; /* browser hack for older IE versions */
  float: left;
  padding: 0 15px 0 15px;
}

.colf-1-2,
.colf-1-4 {
  background-color: #ffc;
}

.colf-2 {
  background-color: #fcf;
}

.colf-3 {
  background-color: #cff;
}

.colf-4 {
  background-color: #ccf;
}

/* grid system -- mobile first! */

/* Mobile Landscape Screen Sizes */
@media only screen and (min-width: 480px) {
  [class*="colf-"] {
    margin-right: 0;
  }

  .colf-1-2,
  .colf-2 {
    width: 44%;
  }

  .colf-1-4,
  .colf-4 {
    width: 92%;
  }
}
/* Desktop screen Sizes */
@media only screen and (min-width: 768px) {
  [class*="colf-"] {
    margin-right: 0;
  }

  .colf-1-2,
  .colf-1-4 {
    width: 20%;
  }

  .colf-2 {
    width: 44%;
  }

  .colf-3 {
    width: 68%;
  }

  .colf-4 {
    width: 92%;
  }
}
</style>
