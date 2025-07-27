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
