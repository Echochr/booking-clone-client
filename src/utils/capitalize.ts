export default function capitalize(str: string | undefined): string {
  if (str === undefined) return '';
  return str[0].toUpperCase() + str.slice(1);
}
