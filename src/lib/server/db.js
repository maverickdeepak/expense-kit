import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const DB_PATH = "expenses.json";

export async function getExpenses() {
  if (!existsSync(DB_PATH)) return [];
  const data = await readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

export async function saveExpenses(expenses) {
  await writeFile(DB_PATH, JSON.stringify(expenses, null, 2));
}

export async function addExpense(expense) {
  const expenses = await getExpenses();
  expenses.push({
    id: Date.now(),
    createdAt: new Date().toISOString(),
    ...expense,
  });
  await saveExpenses(expenses);
}

export async function deleteExpense(id) {
  const expenses = await getExpenses();
  await saveExpenses(expenses.filter((e) => e.id !== id));
}

export async function getExpense(id) {
  const expenses = await getExpenses();
  return expenses.find((e) => e.id === id);
}

export async function updateExpense(id, updates) {
  const expenses = await getExpenses();
  const index = expenses.findIndex((e) => e.id === id);
  if (index === -1) return false;
  expenses[index] = { ...expenses[index], ...updates };
  await saveExpenses(expenses);
  return true;
}
