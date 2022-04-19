import { AbstractControl } from '@angular/forms';

/**
 * Controlla che la lunghezza del codice ISBN sia 0 (vuoto) oppure uno dei due valori accettati, 10 o 13
 * In caso di errore viene restituito dopo un timeout (1200ms) per dare tempo all'utente di scrivere
 */
export function ISBNLengthTimeout(control: AbstractControl): any {
  const allowedLengths = [0, 10, 13];

  return new Promise((resolve) => {
    const length = (control.value as string)?.length;

    if (allowedLengths.includes(length)) {
      resolve(null);
    } else {
      setTimeout(() => resolve({ invalidISBNLength: { value: length } }), 1200);
    }
  });
}
