export function getElemanText(name: string, ...args: string[]) {
  const props = args.length > 0 ? ` ${args.join(' ')}` : '';
  return `<${name}${props}><${name}>`;
}
