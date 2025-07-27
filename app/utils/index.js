// Generic utility helpers used across CTRL+ALT+BLOCK
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function randomInt(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function uuid() {
  return crypto.randomUUID();
}

// Default export with all utils
export default {
  clamp,
  randomInt,
  uuid,
};

export function uploadDisabled() {
  return false; // placeholder
}

export function getResourceSize(resource) {
  if (!resource) return 0;
  if (typeof resource === 'string') return resource.length;
  if (Array.isArray(resource) || typeof resource === 'object') return JSON.stringify(resource).length;
  return 0;
}

export function getNetlifyContext() {
  return {
    site: process.env.SITE_NAME || 'ctrlaltblock',
    deployId: process.env.DEPLOY_ID || '',
    prod: process.env.CONTEXT === 'production',
  };
}
