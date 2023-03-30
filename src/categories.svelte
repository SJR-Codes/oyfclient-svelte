<script>
  import categoryStore from './store/categories.js';
  let allCategories = categoryStore.getAllCategories();

  export let category;

  function getPhotos() {
    console.debug("Now we should somehow fetch new list of photos and update view...: " + category);
  }
</script>

<div class="categorySelect">
  {#await allCategories}
      <p>Loading......</p>
  {:then categories}

  <select bind:value={category} on:change="{getPhotos}">
    <option value="">Select category</option>
    {#each categories as { id, title }}
      <option value={id}>{title}</option>
    {/each}
  </select>

  {:catch error}
      <p style="color: red">Error! {JSON.stringify(error)} </p>
  {/await}
</div>