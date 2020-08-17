<template>
  <q-page padding>
    <exercise-header
      label="13. Grid nesting"
      :expanded="expanded"
      :instructions="instructions"
      filename="13-grid-nesting"
    />

    <div class="wrapper">
      <header>
        <h1>My Fine Header</h1>
      </header>
      <article>
        <h2>Article Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum, ex tempora esse fuga consequuntur dolores excepturi, eaque quis incidunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum, ex tempora esse fuga consequuntur dolores excepturi, eaque quis incidunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci laborum, ex tempora esse fuga consequuntur dolores excepturi, eaque quis incidunt?</p>
        <div class="nested">
          <aside>
            <h3>Aside #1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id hic iure saepe natus, suscipit repudiandae in aliquid quod tenetur dolore!</p>
          </aside>
          <aside>
            <h3>Aside #2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id hic iure saepe natus, suscipit repudiandae in aliquid quod tenetur dolore!</p>
          </aside>
          <aside>
            <h3>Aside #3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id hic iure saepe natus, suscipit repudiandae in aliquid quod tenetur dolore!</p>
          </aside>
        </div>
      </article>
      <aside class="sidebar">
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
  name: 'GridNesting',

  components: {
    'exercise-header': require('components/ExerciseHeader').default
  },

  data () {
    return {
      expanded: true,
      instructions: `
:::
In this exercise, I've added a series of articles inside of the main article. Write a nested grid to display these on the page at different media queries.
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
}
.wrapper > * {
  padding: 1em;
  border-radius: 1em;
}
header {
  background-color: blue;
  color: white;
}
article {
  background-color: green;
  color: white;
}
.sidebar {
  background-color: yellow;
}
article aside {
  background-color: white;
  color: black;
  padding: 0.5em;
  border-radius: 0.5em;
}
.nested {
  display: grid;
  gap: 1em;
  grid-template-columns: auto;
}
@media (min-width: 650px) {
  header {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  article {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .sidebar {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  .nested {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1000px) {
  header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  article {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  .sidebar {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .nested {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
