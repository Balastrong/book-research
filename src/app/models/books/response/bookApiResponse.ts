export class BookApiResponse<T> {
  status!: string;
  copyright!: string;
  numResults!: number;
  results!: T[];
}
