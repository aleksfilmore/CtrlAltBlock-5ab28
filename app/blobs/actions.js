'use server';

import { getStore } from '@netlify/blobs';
import { uploadDisabled } from 'utils';

const store = getStore({ name: 'shapes', consistency: 'strong' });

export async function uploadShapeAction({ parameters }) {
  if (uploadDisabled) throw new Error('Sorry, uploads are disabled');

  const key = parameters.name;
  await store.setJSON(key, parameters);

  console.log('Stored shape with parameters:', parameters, 'to key:', key);
}

export async function listShapesAction() {
  const data = await store.list();
  return data.blobs.map(({ key }) => key);
}

export async function getShapeAction({ keyName }) {
  const blob = await store.get(keyName, { type: 'json' });
  return blob ?? null;
}
