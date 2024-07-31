export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCount = weakMap.get(endpoint);
  const newCount = currentCount + 1;

  if (newCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, newCount);
}
