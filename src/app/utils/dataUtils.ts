/**
 * Converte le chiavi di un oggetto a camelCase
 */
export function objectKeysToCamelCase(obj: any): any {
  if (obj !== null && typeof obj === 'object') {
    const n: any = {};

    Object.keys(obj).forEach((k) => {
      n[toCamel(k)] = objectKeysToCamelCase(obj[k]);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return objectKeysToCamelCase(i);
    });
  }

  return obj;
}

/**
 * Converte una stringa da kebak-case e snake_case a camelCase
 */
export function toCamel(s: string): string {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}
