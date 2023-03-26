<script>
  import oyfLogo from './assets/logo256.png'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <h1>Own Your Files - Svelte client</h1>
  <div>
    <a href="https://github.com/SJR-Codes/OwnYourFiles_foto" target="_blank" rel="noreferrer">
      <img src={oyfLogo} class="logo" alt="OYF Logo" />
    </a>
  </div>

  <div class="card">
    <Counter />
    <p>
      Login form comes here...
    </p>
  </div>

  <p>
    ...or here.
  </p>

  <p class="read-the-docs">
    Click clicker to see some svelte magic
  </p>
</main>

<style>
  .logo {
    /*height: 6em;*/
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
