<script>
  let { data } = $props();

  let total = $derived(data.expenses.reduce((sum, e) => sum + e.amount, 0));

  const categoryColors = {
    Food: "#c4622d",
    Transport: "#3d7068",
    Fun: "#a8527d",
    Bills: "#4a5a8a",
    Other: "#7a6f5d",
  };
</script>

<section class="summary">
  <p class="label">Total spent</p>
  <p class="total">₹{total.toFixed(2)}</p>
  <p class="count">
    {data.expenses.length}
    {data.expenses.length === 1 ? "entry" : "entries"}
  </p>
</section>

{#if data.expenses.length === 0}
  <div class="empty">
    <p>No expenses yet.</p>
    <a href="/add" class="empty-cta">Add your first one →</a>
  </div>
{:else}
  <ul class="ledger">
    {#each data.expenses as expense (expense.id)}
      <li>
        <span
          class="dot"
          style="background: {categoryColors[expense.category] ?? '#7a6f5d'}"
        ></span>
        <div class="info">
          <span class="desc">{expense.description}</span>
          <span class="cat">{expense.category}</span>
        </div>
        <span class="amt">₹{expense.amount.toFixed(2)}</span>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .summary {
    text-align: center;
    padding: 2rem 0 2.5rem;
  }

  .label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #9a8f7e;
    margin: 0 0 0.5rem;
  }

  .total {
    font-family: "Fraunces", serif;
    font-size: 3.5rem;
    font-weight: 600;
    margin: 0;
    letter-spacing: -0.03em;
    color: #2b2722;
  }

  .count {
    font-size: 0.9rem;
    color: #9a8f7e;
    margin: 0.5rem 0 0;
  }

  .ledger {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .ledger li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.1rem 1.25rem;
    background: #fbf8f2;
    border: 1px solid #e8e0d1;
    border-radius: 14px;
    margin-bottom: 0.6rem;
    transition:
      transform 0.18s ease,
      box-shadow 0.18s ease;
  }

  .ledger li:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -8px rgba(43, 39, 34, 0.18);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    flex: 1;
  }

  .desc {
    font-weight: 500;
    font-size: 1.02rem;
  }

  .cat {
    font-size: 0.78rem;
    color: #9a8f7e;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .amt {
    font-family: "Fraunces", serif;
    font-weight: 600;
    font-size: 1.15rem;
    color: #2b2722;
  }

  .empty {
    text-align: center;
    padding: 3rem 0;
    color: #9a8f7e;
  }

  .empty-cta {
    color: #c4622d;
    text-decoration: none;
    font-weight: 500;
  }
</style>
