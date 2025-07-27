'use server';

import { createBlob, getBlob, listBlobs } from '@netlify/blobs';
import { uploadDisabled } from 'utils';

const BLOB_BUCKET = 'shapes';

export async function uploadShapeAction({ parameters }) {
  if (uploadDisabled) throw new Error('Sorry, uploads are disabled');

  const key = parameters.name;
  await createBlob({
    bucket: BLOB_BUCKET,
    key,
    value: JSON.stringify(parameters),
    encoding: 'utf-8',
    contentType: 'application/json',
  });

  console.log('Stored shape with parameters:', parameters, 'to key:', key);
}

export async function listShapesAction() {
  const result = await listBlobs({ bucket: BLOB_BUCKET });
  const keys = result.blobs.map(({ key }) => key);
  return keys;
}

export async function getShapeAction({ keyName }) {
  const blob = await getBlob({ bucket: BLOB_BUCKET, key: keyName });
  if (!blob || !blob.body) return null;

  const json = await blob.body.text();
  return JSON.parse(json);
}
