import { getStore } from '@netlify/blobs';

function safeGetStore() {
  try {
    return getStore({ name: 'shapes', scope: 'app' });
  } catch (err) {
    // Return a fake in‑memory store to avoid build‑time crashes
    return {
      async list() { return { keys: [] }; },
      async getJSON() { return null; },
      async setJSON() { /* noop */ },
    };
  }
}

/** List all shape IDs available in the store */
export async function listShapesAction() {
  const store = safeGetStore();
  const { keys } = await store.list();
  return keys;
}

/** Fetch a single shape JSON by id */
export async function getShapeAction(id) {
  if (!id) throw new Error('Shape id required');
  const store = safeGetStore();
  return await store.getJSON(id);
}

/** Upload a new shape JSON and return its generated id */
export async function uploadShapeAction(shape) {
  if (!shape) throw new Error('Shape data required');
  const store = safeGetStore();
  const id = crypto.randomUUID();
  await store.setJSON(id, shape);
  return id;
}
