export function getWindowWidth(): number {
  if (typeof window !== 'undefined') {
    return window.innerWidth;
  }
  return 1; // evitar divisão por zero
}