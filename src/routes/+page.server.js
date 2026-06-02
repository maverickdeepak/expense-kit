import { getExpenses } from "$lib/server/db.js";

export async function load() {
  const expenses = await getExpenses();
  return { expenses };
}
