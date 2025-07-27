import { getStore } from '@netlify/blobs';

// Shared store for blob shapes
const store = getStore({ name: 'shapes', scope: 'app' });

/** List all shape IDs available in the store */
export async function listShapesAction() {
  const { keys } = await store.list();
  return keys;
}

/** Fetch a single shape JSON by id */
export async function getShapeAction(id) {
  if (!id) throw new Error('Shape id required');
  return await store.getJSON(id);
}

/** Upload a new shape JSON and return its generated id */
export async function uploadShapeAction(shape) {
  if (!shape) throw new Error('Shape data required');
  const id = crypto.randomUUID();
  await store.setJSON(id, shape);
  return id;
}
