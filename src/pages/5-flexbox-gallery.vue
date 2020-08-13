<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/5-flexbox-gallery.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="5. Flexbox gallery"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <ul class="rowf">
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/apple-pie.jpg"
            alt="Apple pie."
          >
          <figcaption>Apple pie, featuring apples from the latest harvest.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/boston-creme.jpg"
            alt="Boston cream pie."
          >
          <figcaption>Boston cream pie is the best!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/cherry-alamode.jpg"
            alt="Cherry pie with ice cream."
          >
          <figcaption>Mmm... cherry pie and ice cream hits the spot!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/cherry-pie.jpg"
            alt="Cherry pie."
          >
          <figcaption>Cherry pie is available for a short season!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/coconut-creme.jpg"
            alt="Coconut creme pie."
          >
          <figcaption>Coconut cream pie will transport you to the islands.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/gone-pie.jpg"
            alt="Pie is all gone."
          >
          <figcaption>Hurry before the pie is all gone!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/keylime-pie.jpg"
            alt="Key lime pie."
          >
          <figcaption>Key lime pie, featuring the smaller, sweeter limes of the Florida Keys.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/lemon-meringue.jpg"
            alt="Lemon meringue pie."
          >
          <figcaption>Lemon meringue pie, best consumed the day it's made.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/mincemeat.jpg"
            alt="Mincemeat pie."
          >
          <figcaption>Mincemeat pie for your traditional Thanksgiving table.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/mini-pies.jpg"
            alt="Mini pies."
          >
          <figcaption>Mini-pies... you can eat more than one!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/mom-pie.jpg"
            alt="Mom pie."
          >
          <figcaption>We make the best pies for Mother's Day!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/peace-pie.jpg"
            alt="Peace pie, made of blueberries and raspberries."
          >
          <figcaption>Our Peace Pie is made of summer's best blueberries and raspberries.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/peach-pie.jpg"
            alt="Peach pie."
          >
          <figcaption>Peach pie, a piece of Southern heaven.</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/pie-coffee.jpg"
            alt="Pie and coffee."
          >
          <figcaption>What could be better than Merilee's pie and a hot cup of coffee?</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/pie-slice-buffet.jpg"
            alt="Buffet of pie slices."
          >
          <figcaption>Heaven includes a buffet of pie options!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/pumpkin-pie.jpg"
            alt="Pumpkin pie."
          >
          <figcaption>Pumpkin pie, a best-seller for Thanksgiving!</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="statics/images/5-flexbox-gallery/whole-pie-buffet.jpg"
            alt="Whole pie buffet."
          >
          <figcaption>When slices aren't enough, offer a buffet of whole pies!</figcaption>
        </figure>
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'FlexboxGallery',

  data () {
    return {
      expanded: true,
      instructions: `
:::
Starting files are a series of images with captions, marked up as figures.

Display these on the page as an image gallery using Flexbox.

Pretend you do not know how many images you will display. This is a real-world problem -- you may have a server sending you many images, or a few images, which must be displayed on a page to look good.

Test your result by adding more images (copy and paste the code present a few times) or removing images (delete some of the images) and make sure the page still looks good.

Hint: this is NOT a grid-based problem. This is how Flexbox was actually meant to be used -- a series of items, displayed on a page.

There are two possible solutions I identified. Both are technically correct. You can choose which you like based on your design preferences. Perhaps you can find other solutions?
:::
`
    }
  }
}
</script>

<style lang="css">
body {
  font-family: Arial, Helvetica, sans-serif;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.rowf {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.rowf li {
  margin: 0 2%;
  flex: 0 0 96%;
}

figure img {
  display: block;
  width: 100%;
}

@media (min-width: 550px) {
  .rowf li {
    flex: 0 0 46%;
  }
}

@media (min-width: 850px) {
  .rowf li {
    flex: 0 0 21%;
  }
}
</style>
