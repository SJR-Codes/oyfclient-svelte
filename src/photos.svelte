<script>
  import CategorySelect from './categories.svelte';
  import photoStore from './store/photos.js';

  let selCategory = "";
  let listPhotos;

  //$: makes line reactive -> if value changes it reacts
  $: listPhotos = photoStore.getAllPhotos(selCategory);

  function getBaseImg(data) {
    let img = "data:image/jpeg;base64," + data;

    return img;
  }
</script>
<div>
  <CategorySelect bind:category={selCategory}/>
</div>
<div class="photoList">
  {#await listPhotos}
      <p>Loading......</p>
  {:then photos}
    {#each photos as { id, thumbnail }}
    <slot>
      <img src="{getBaseImg(thumbnail)}" alt="{id} photo">
    </slot>
    {/each}
  {:catch error}
      <p style="color: red">Error! {JSON.stringify(error)} </p>
  {/await}
</div>