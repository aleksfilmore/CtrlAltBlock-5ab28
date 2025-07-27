'use server';

import { set, get, list } from '@netlify/blobs';
import { uploadDisabled } from 'utils';

const BLOB_BUCKET = 'shapes';

export async function uploadShapeAction({ parameters }) {
  if (uploadDisabled) throw new Error('Sorry, uploads are disabled');

  const key = parameters.name;
  await set(BLOB_BUCKET, key, JSON.stringify(parameters), {
    metadata: { type: 'shape' },
  });

  console.log('Stored shape with parameters:', parameters, 'to key:', key);
}

export async function listShapesAction() {
  const result = await list(BLOB_BUCKET);
  const keys = result.blobs.map(({ key }) => key);
  return keys;
}

export async function getShapeAction({ keyName }) {
  const blob = await get(BLOB_BUCKET, keyName, { type: 'json' });
  return blob;
}
