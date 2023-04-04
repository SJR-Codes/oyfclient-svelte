<script>
  sessionStorage.removeItem("in");
  import { loggedIn } from './store/misc.js';

  import Header from './header.svelte';
  import Login from './login.svelte';
  import Photos from './photos.svelte';
  import Footer from './footer.svelte';
  import Navi from './navi.svelte';

</script>

<Header />
<main>
{#if !$loggedIn }
  <Login />
{:else}
  <Photos />
{/if}
</main>
{#if !$loggedIn }
  <Footer />
{:else}
  <Navi />
{/if}
