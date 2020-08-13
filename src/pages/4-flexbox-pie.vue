<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/4-flexbox-pie.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="4. Flexbox pie"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <div class="wrapper">
      <header class="rowf">
        <a href="/"><img
            src="statics/images/4-flexbox-pie/logo.png"
            alt="Pie in the Sky Bakery, Springdale, VT. Click for home."
          ></a>
      </header>
      <nav class="rowf">
        <ul>
          <li><a href="/4-flexbox-pie">Home</a></li>
          <li><a href="/4-flexbox-pie">Menu</a></li>
          <li><a href="/4-flexbox-pie">Catering</a></li>
          <li><a href="/4-flexbox-pie">Pie Gallery</a></li>
          <li><a href="/4-flexbox-pie">About</a></li>
          <li><a href="/4-flexbox-pie">Contact</a></li>
        </ul>
      </nav>
      <div class="rowf">
        <article class="colf-3">
          <h2>History</h2>
          <p><img
              src="statics/images/4-flexbox-pie/merilee.jpg"
              alt="Merilee Wilbur, with her favorite rolling pin."
              class="rounded floatright"
            >
            <span>
              Sometimes great things come from humble beginnings. For Merilee Wilbur, that beginning came in the form of a request from
              her 8-year-old son, Jake, who needed a snack to take to his chess club meeting. Merilee flipped through her recipe box and
              pulled out her grandmother's recipe for Chess Pie. Perfect!
            </span>
          </p>

          <p>The pie was such a hit with the kids - and their coach - that Merilee started getting requests to bake pies for other
            occasions: school events, birthdays, even a Pi Day celebration at the local library. Pie in the Sky Bakery was born.
          </p>

          <p>She got so many orders that her fledgling business soon outgrew her family's kitchen. In 2006, she rented her current
            location at 34 Main Street, where she and her team of bakers have served up fresh, delicious pies ever since.
          </p>
        </article>
        <div class="colf-1">
          <aside class="sidebar-primary">
            <h3>Testimonials</h3>
            <blockquote>
              <p>Merilee sure knows how to bake! Not a week goes by that I don't stop in for a slice of her cherry pie. They truly are just like Mother used to make.</p>
              <cite>Elton Higbee (age 94)</cite>
            </blockquote>
          </aside>
          <aside class="sidebar-secondary">
            <h3>Pie of the Month</h3>
            <img
              src="statics/images/4-flexbox-pie/pi-day.jpg"
              alt="Pi Day Pie with Strawberry filling."
            >
          </aside>
        </div>
      </div>
      <footer class="rowf">
        <p>Copyright 2015, Pie in the Sky Bakery &#183; 34 Main Street &#183; Springdale, VT &#183; <a href="tel:802-555-7437">(802) 555-PIES</a></p>
        <p>
          <a
            href="http://www.twitter.com"
            target="_blank"
          ><img
              src="statics/images/4-flexbox-pie/twitter1.png"
              alt="Twitter."
            ></a>
          <a
            href="http://www.pinterest.com"
            target="_blank"
          ><img
              src="statics/images/4-flexbox-pie/pin2.png"
              alt="Pinterest."
            ></a>
          <a
            href="http://www.tumblr.com"
            target="_blank"
          ><img
              src="statics/images/4-flexbox-pie/tumblr3.png"
              alt="Tumblr."
            ></a>
          <a
            href="http://www.instagram.com"
            target="_blank"
          ><img
              src="statics/images/4-flexbox-pie/insta4.png"
              alt="Instagram."
            ></a>
          <a
            href="http://www.facebook.com"
            target="_blank"
          ><img
              src="statics/images/4-flexbox-pie/fb5.png"
              alt="Facebook."
            ></a>
        </p>
      </footer>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'FlexboxExercises',

  data () {
    return {
      expanded: false,
      instructions: `
:::
Provided is the History page of the Pie in the Sky Bakery website. This page was laid out using a 4-column floated grid system.

Recreate this page using a Flexbox-based grid system. Use the system developed in 3-flexbox-grid and apply it to this design.

Change any HTML and CSS as required. Feel free to tweak styling as you see fit.

If you have extra time:

Code more pages in the Pie in the Sky website. Look in the "branding" folder for colors, images, and copy.
:::
`
    }
  }
}
</script>

<style lang="css">
@import url("http://fonts.googleapis.com/css?family=Cabin|Niconne");

body {
  font-family: "Cabin", Arial, Geneva, sans-serif;
  background-image: url(/statics/images/4-flexbox-pie/clouds.png);
  margin: 0px;
  padding: 0px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Niconne", cursive;
  font-weight: normal;
  color: #c80060;
}
.wrapper {
  margin: 0 auto;
}
.floatright {
  float: right;
  margin: 0 0 1em 1em;
}
article img {
  border-radius: 10px;
  width: 100%;
  max-width: 250px;
}
nav {
  background: url(/statics/images/4-flexbox-pie/scallop.png) repeat-x;
}
nav ul {
  list-style-type: none;
  background-color: #e6bf98;
  padding: 0.75em;
  margin: 12px 0 0 0;
  border-bottom: 3px solid #cc8850;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
}
/* splits nav into 2 columns
http://stackoverflow.com/questions/13104818/simple-2-column-navigation-with-css-and-a-single-list */
nav li:nth-child(even) {
  flex: 0 0 50%;
  padding: 0.5em;
}
nav li:nth-child(odd) {
  flex: 0 0 50%;
  padding: 0.5em;
}
nav a {
  color: #c80060;
  text-decoration: none;
  display: block;
  padding-left: 3.333333%;
}
nav a:hover {
  color: #00c4c7;
}

.rowf:before,
.rowf:after {
  content: "";
  display: table;
  clear: both;
}
div.rowf {
  background-color: #fff6e0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
}
[class*="sidebar"] {
  border: 1px solid #00c4c7;
  border-radius: 10px;
  margin-bottom: 1em;
  margin-top: 2.5em;
}
[class*="sidebar"] h3 {
  margin: 0;
  color: white;
  background-color: #00c4c7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 0.5em;
}
[class*="sidebar"] img {
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  max-width: 250px;
  /* without this, there is a gap between the image and border -- space for descenders in text, for inline elements */
  display: block;
}
.sidebar-secondary {
  border-color: #c80060;
}
.sidebar-secondary h3 {
  background-color: #c80060;
}
blockquote {
  padding: 0em;
  margin: 0;
}
blockquote p,
blockquote cite {
  padding: 0.5em 1em;
}
blockquote cite {
  text-transform: uppercase;
  font-style: normal;
  padding-bottom: 1em;
  display: block;
}
footer {
  background-color: #00cdd1;
  color: white;
  clear: both;
  margin: 0 0.5em 3em 0.5em;
}
footer p {
  text-align: center;
}
footer img {
  width: 52px;
}
footer a {
  color: white;
  text-decoration: none;
}

[class*="colf"] {
  margin-left: 0;
}
.colf-1,
.colf-2,
.colf-3,
.colf-4,
.colf-1-2,
.colf-1-4 {
  flex: 0 0 96.66666%;
}
h2 {
  font-size: 2.5em;
}
h3 {
  font-size: 1.5em;
}
/* .colf-3 p:first-of-type {
  display: flex;
  flex-flow: row-reverse wrap;
}

.colf-3 p:first-of-type img {
  flex: 0 0 30%;
}
.colf-3 p:first-of-type span {
  flex: 0 0 60%;
}
 */
/* Small devices (tablets, 768px and up) */
@media (min-width: 550px) and (max-width: 849px) {
  .wrapper {
    width: 97%;
    max-width: 767px;
  }
  .colf-1,
  .colf-2,
  .colf-1-2,
  .colf-3,
  .colf-4,
  .colf-1-4 {
    flex: 0 0 96.66666%;
  }
  div.rowf {
    display: flex;
    flex-flow: row wrap;
    padding: 0 2em;
  }
  .colf-1 {
    display: flex;
    flex-flow: row wrap;
  }
  aside[class*="sidebar"] {
    flex: 0 0 47%;
    margin-right: 3%;
  }
  nav li,
  nav li:nth-child(even),
  nav li:nth-child(odd) {
    flex: 0 0 auto;
    padding: 0;
  }
  nav a {
    padding: 0em 1em 0em 1em;
  }
}
/* Large devices (large desktops, 1200px and up) */
@media (min-width: 850px) {
  .wrapper {
    width: 97%;
    max-width: 1200px;
  }

  [class*="colf-"] {
    margin-left: 3.33333%;
    min-height: 1px;
  }
  .colf-1,
  .colf-1-2,
  .colf-1-4 {
    flex: 0 0 20.83333%;
  }
  .colf-2 {
    flex: 0 0 44.99999%;
  }
  .colf-3 {
    flex: 0 0 69.16665%;
  }
  .colf-4 {
    flex: 0 0 96.66666%;
  }
  h2 {
    font-size: 3em;
    border-bottom: 2px dotted #c80060;
  }
  h3 {
    font-size: 2em;
  }
  div.rowf {
    padding: 0;
  }
  nav li,
  nav li:nth-child(even),
  nav li:nth-child(odd) {
    flex: 0 0 auto;
    padding: 0;
  }
  nav a {
    padding: 0em 1em 0em 1em;
  }
}
</style>
