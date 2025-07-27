import blobshape from 'blobshape';
import { uuid } from '../utils';

/** Generate an SVG path string and metadata for a new blob shape */
export function generateShape({ size = 400, growth = 6, edges = 6, seed = Date.now() } = {}) {
  const { path } = blobshape({ size, growth, edges, seed });
  return { id: uuid(), size, growth, edges, seed, path };
}

// Aliases for legacy imports
export const fixedSize = 400;
export const generateBlob = generateShape;
export default { generateBlob, generateShape, fixedSize };
