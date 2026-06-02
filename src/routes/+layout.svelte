<script>
  import { page } from "$app/state";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="shell">
  <header>
    <a class="brand" href="/">
      <span class="mark">₹</span> Ledger
    </a>
    <nav>
      <a href="/" class:active={page.url.pathname === "/"}>Dashboard</a>
      <a href="/add" class:active={page.url.pathname === "/add"}>Add</a>
    </nav>
  </header>

  <main>
    {@render children()}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    background: #f4efe6;
    color: #2b2722;
  }

  .shell {
    min-height: 100vh;
    max-width: 720px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    font-family: "Outfit", sans-serif;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 0;
    border-bottom: 1px solid #e0d7c7;
    margin-bottom: 2.5rem;
  }

  .brand {
    font-family: "Fraunces", serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #2b2722;
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .mark {
    color: #c4622d;
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  nav a {
    text-decoration: none;
    color: #6b6256;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    transition: all 0.2s ease;
  }

  nav a:hover {
    color: #2b2722;
    background: #ebe3d5;
  }

  nav a.active {
    color: #fff;
    background: #2b2722;
  }
</style>
