export const photoUrl = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
}