<script>
  import javascriptLogo from '/javascript.svg'
  import viteLogo from '/vite.svg'
  import svelteLogo from '/svelte.svg'
</script>

<footer>
  <div><p>made with:</p></div>
  <div>
    <p>
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
      <img src="{svelteLogo}" class="logo" alt="Svelte logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img src="{javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
      <img src="{viteLogo}" class="logo" alt="Vite logo" />
    </a>
    </p>
  </div>
</footer>

<style>
  img {margin: 0 1em 0;}
  .logo {
      will-change: filter;
      transition: filter 300ms;
  }
  .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>