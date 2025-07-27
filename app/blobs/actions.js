import { getStore } from '@netlify/blobs';

function safeGetStore() {
  try {
    return getStore({ name: 'submissions', scope: 'site' });
  } catch {
    return {
      async list() { return []; },
      async getJSON() { return null; },
      async setJSON() {},
    };
  }
}

export async function listShapesAction() {
  const ids = await safeGetStore().list();
  return Array.isArray(ids) ? ids : [];
}

export async function getShapeAction(id) {
  if (!id) throw new Error('id required');
  return await safeGetStore().getJSON(id);
}

export async function uploadShapeAction(shape) {
  const id = crypto.randomUUID();
  await safeGetStore().setJSON(id, shape);
  return id;
}
