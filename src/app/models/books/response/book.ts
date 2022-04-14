export class Book {
  author!: string;
  description!: string;
  title!: string;
  ranksHistory!: RanksHistory[];
}

export class RanksHistory {
  publishedDate!: Date;
  listName!: string;
  rank!: number;
  weeksOnList!: number;
}
