import { getExpenses, deleteExpense } from "$lib/server/db.js";

export async function load() {
  const expenses = await getExpenses();
  return { expenses };
}

export const actions = {
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get("id");

    if (!id) {
      return fail(400, { error: "Missing expense id" });
    }

    await deleteExpense(Number(id));
    return { success: true };
  },
};
