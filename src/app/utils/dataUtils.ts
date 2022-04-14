/**
 * Converte le chiavi di un oggetto a camelCase
 */
export function objectKeysToCamelCase<T>(obj: T): T | any {
  if (isObject(obj)) {
    const n: any = {};

    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = objectKeysToCamelCase(obj[k as keyof T]);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map(objectKeysToCamelCase);
  }

  return obj;
}

/**
 * Converte una stringa da snake_case a camelCase
 */
export function toCamel(s: string): string {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}

export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}
