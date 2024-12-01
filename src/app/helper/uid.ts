const uidCounters: { [key: string]: number } = {};

export function uid(prefix: string = 'uid'): string {
  if (!uidCounters[prefix]) {
    uidCounters[prefix] = 0;
  }
  uidCounters[prefix]++;
  return `${prefix}-${uidCounters[prefix]}`;
}
