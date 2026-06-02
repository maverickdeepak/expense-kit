import { addExpense } from "$lib/server/db.js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const description = formData.get("description");
    const amount = formData.get("amount");
    const category = formData.get("category");
    const date = formData.get("date");

    // server side validation
    if (!description || !amount) {
      return fail(400, {
        error: "Description and amount are required",
      });
    }

    // Combine the chosen date with the current time of day
    const createdAt = date
      ? new Date(
          `${date}T${new Date().toTimeString().slice(0, 8)}`,
        ).toISOString()
      : new Date().toISOString();

    await addExpense({
      description,
      amount: parseFloat(amount),
      category,
      createdAt,
    });

    throw redirect(300, "/");
  },
};
