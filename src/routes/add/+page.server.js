import { addExpense } from "$lib/server/db.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const description = formData.get("description");
    const amount = formData.get("amount");
    const category = formData.get("category");

    // server side validation
    if (!description || !amount) {
      return fail(400, {
        error: "Description and amount are required",
      });
    }

    await addExpense({
      description,
      amount: parseFloat(amount),
      category,
    });

    throw redirect(300, "/");
  },
};
