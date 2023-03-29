<script>
  import photoStore from './store/photos.js';
  let allPhotos = photoStore.getAllPhotos();

  function getBaseImg(data) {
    let img = "data:image/jpeg;base64," + data;

    return img;
  }
</script>

<div class="photoList">
  {#await allPhotos}
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