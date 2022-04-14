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

/**
 * Restituisce true se il valore in input è un oggetto
 */
export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

/**
 * Converte un oggetto (flat) in formato queryString key1=value1&key2=value2
 */
export function flatObjectToQueryString<T>(obj: T): string {
  return isObject(obj)
    ? Object.keys(obj)
        .map((key) => `${key}=${obj[key as keyof T]}`)
        .join('&')
    : '';
}

/**
 * Restituisce un nuovo oggetto rimuovendo tutti i campi con valore falsey
 */
export function removeEmptyFields<T>(obj: T): T {
  return <T>Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
}
