<script>
  import { enhance } from "$app/forms";
  let { form } = $props();

  const categories = ["Food", "Transport", "Fun", "Bills", "Other"];
</script>

<section class="form-wrap">
  <h1>New entry</h1>
  <p class="sub">Record an expense in your ledger.</p>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  <form method="POST" use:enhance>
    <label>
      <span>Description</span>
      <input
        type="text"
        name="description"
        placeholder="What did you spend on?"
        value={form?.description ?? ""}
      />
    </label>

    <label>
      <span>Amount</span>
      <div class="amount-field">
        <span class="prefix">₹</span>
        <input
          type="number"
          name="amount"
          placeholder="0.00"
          step="0.01"
          value={form?.amount ?? ""}
        />
      </div>
    </label>

    <label>
      <span>Category</span>
      <select name="category">
        {#each categories as cat}
          <option>{cat}</option>
        {/each}
      </select>
    </label>

    <button type="submit">Add to ledger</button>
  </form>
</section>

<style>
  .form-wrap {
    max-width: 420px;
    margin: 1rem auto 0;
  }

  h1 {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: 2.2rem;
    margin: 0;
    letter-spacing: -0.02em;
  }

  .sub {
    color: #9a8f7e;
    margin: 0.4rem 0 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  label span {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #6b6256;
    font-weight: 500;
  }

  input,
  select {
    padding: 0.8rem 0.9rem;
    border: 1px solid #e0d7c7;
    border-radius: 12px;
    background: #fbf8f2;
    font-size: 1rem;
    font-family: "Outfit", sans-serif;
    color: #2b2722;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  input:focus,
  select:focus {
    outline: none;
    border-color: #c4622d;
    box-shadow: 0 0 0 3px rgba(196, 98, 45, 0.12);
  }

  .amount-field {
    display: flex;
    align-items: center;
    border: 1px solid #e0d7c7;
    border-radius: 12px;
    background: #fbf8f2;
    overflow: hidden;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .amount-field:focus-within {
    border-color: #c4622d;
    box-shadow: 0 0 0 3px rgba(196, 98, 45, 0.12);
  }

  .amount-field .prefix {
    padding: 0 0.4rem 0 0.9rem;
    color: #9a8f7e;
    font-size: 1rem;
  }

  .amount-field input {
    border: none;
    background: transparent;
    box-shadow: none;
    flex: 1;
  }

  .amount-field input:focus {
    box-shadow: none;
  }

  button {
    margin-top: 0.5rem;
    padding: 0.9rem;
    background: #2b2722;
    color: #fbf8f2;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Outfit", sans-serif;
    cursor: pointer;
    transition:
      background 0.2s ease,
      transform 0.12s ease;
  }

  button:hover {
    background: #1a1714;
  }

  button:active {
    transform: scale(0.985);
  }
</style>
