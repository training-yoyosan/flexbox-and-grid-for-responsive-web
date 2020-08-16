<template>
  <q-page padding>
    <div class="row justify-end">
      <q-btn
        color="primary"
        icon="fab fa-github"
        label="Source code"
        type="a"
        href="https://github.com/training-yoyosan/flexbox-and-grid-for-responsive-web/blob/master/src/pages/12-grid-area.vue"
        target="_blank"
        no-caps
      />
    </div>

    <q-list class="rounded-borders q-my-md">
      <q-expansion-item
        expand-separator
        v-model="expanded"
        label="12. Grid area"
        caption="Instructions"
      >
        <q-markdown :src="instructions">

        </q-markdown>
      </q-expansion-item>

    </q-list>

    <div class="wrapper">
      <header>
        <h1>My Fine Header</h1>
      </header>
      <article>
        <h2>Article Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum, ex tempora esse fuga consequuntur dolores excepturi, eaque quis incidunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum, ex tempora esse fuga consequuntur dolores excepturi, eaque quis incidunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum, ex tempora esse fuga consequuntur dolores excepturi, eaque quis incidunt?</p>
      </article>
      <aside>
        <h3>My Aside</h3>
        <blockquote>
          A fine quote!
        </blockquote>
      </aside>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'GridArea',

  data () {
    return {
      expanded: true,
      instructions: `
:::
The next few exercises are short, quick, and more instructional than real-world.

In this exercise, we'll learn the grid-area syntax. We have been creating grids using grid-columns and grid-rows. Now we'll name an area, then call for a layout using those named areas.
:::
`
    }
  }
}
</script>

<style lang="css">
.wrapper {
  display: grid;
  grid-gap: 10px;
  font-family: Arial, sans-serif;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header"
    "article"
    "sidebar";
}
.wrapper > * {
  padding: 1em;
  border-radius: 1em;
}
header {
  background-color: blue;
  color: white;
  grid-area: header;
}
article {
  background-color: green;
  color: white;
  grid-area: article;
}
aside {
  background-color: yellow;
  grid-area: sidebar;
}
@media (min-width: 650px) {
  .wrapper {
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
      "article sidebar"
      "article sidebar"
      "header sidebar";
  }
}
@media (min-width: 1000px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "sidebar header"
      "sidebar article"
      "sidebar article";
  }
}
</style>
