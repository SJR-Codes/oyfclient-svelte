<script>
  import photoStore from './store/photo.js';
  let photo;

export let showModal; // boolean
export let photoId; // str

let dialog; // HTMLDialogElement

  $: if (photoId) {
    console.debug("Modal photo: " + photoId);
    photo = photoStore.getPhoto(photoId)
  }


function getBaseImg(data) {
  //console.debug("Base64: " + data);
  let img;
  if (data) {
    img = "data:image/jpeg;base64," + data.image;
  }

  return img;
}

$: if (showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
    {#await photo}
        <p>Loading......</p>
    {:then data}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="{getBaseImg(data)}" alt="photo" on:click={() => dialog.close()}>
    {:catch error}
        <p style="color: red">Error! {JSON.stringify(error)} </p>
    {/await}
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}>close</button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 100%;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
