<script>
  import categoryStore from './store/categories.js';
  let allCategories = categoryStore.getAllCategories();

  export let category;
</script>

<div class="categorySelect">
  {#await allCategories}
      <p>Loading......</p>
  {:then categories}

  <select bind:value={category}>
    <option value="">Select category</option>
    {#each categories as { id, title }}
      <option value={id}>{title}</option>
    {/each}
  </select>

  {:catch error}
      <p style="color: red">{error}</p>
  {/await}
</div>

<style>
  div{margin-bottom: 1em;}
</style>