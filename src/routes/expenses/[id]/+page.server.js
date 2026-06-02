import { getExpense, updateExpense } from "$lib/server/db.js";
import { error, fail, redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const expense = await getExpense(Number(params.id));

  if (!expense) {
    throw error(404, "Expense not found");
  }

  return { expense };
}

export const actions = {
  default: async ({ request, params }) => {
    const formData = await request.formData();
    const description = formData.get("description");
    const amount = formData.get("amount");
    const category = formData.get("category");

    if (!description || !amount) {
      return fail(400, {
        error: "Description and amount are required",
        description,
        amount,
        category,
      });
    }

    await updateExpense(Number(params.id), {
      description,
      amount: parseFloat(amount),
      category,
    });

    throw redirect(303, "/");
  },
};
