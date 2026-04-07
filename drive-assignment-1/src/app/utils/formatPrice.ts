export function formatPrice(price?: number) {
  if (!price) return "POA";
  return `$${price.toLocaleString()}`;
}