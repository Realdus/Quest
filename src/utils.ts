export function formatQuery(q: string): string {
  return q.trim().replace(/\s+/g, ' ');
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}
