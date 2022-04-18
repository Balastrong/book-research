import { AbstractControl } from '@angular/forms';

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
