export function toCapitalCase(str: string): string {
  const word = str.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}
