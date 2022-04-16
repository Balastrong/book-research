export class Book {
  author!: string;
  description!: string;
  title!: string;
  ranksHistory!: Rank[];
  reviews!: ReviewLinks[];

  constructor(book: Book) {
    Object.assign(this, book);
  }

  /**
   * Restituisce per ciascuna categoria (listName) la miglior posizione
   */
  public getTopRanks(): Rank[] {
    const topRanks = new Map<string, Rank>();

    this.ranksHistory?.forEach((rank) => {
      const current = topRanks.get(rank.listName)?.rank;
      if (!current || current < rank.rank) {
        topRanks.set(rank.listName, rank);
      }
    });

    const topRanksArray = Array.from(topRanks.values());
    topRanksArray.sort((a, b) => a.rank - b.rank);

    return topRanksArray;
  }

  /**
   * Considera due libri uguali se hanno stesso titolo ed autore e restituisce un booleano
   */
  public equals(other: Book): boolean {
    return this.title === other.title && this.author === other.author;
  }
}

export class Rank {
  publishedDate!: Date;
  listName!: string;
  rank!: number;
  weeksOnList!: number;
}

export class ReviewLinks {
  articleChapterLink!: string;
  bookReviewLink!: string;
  firstChapterLink!: string;
  sundayReviewLink!: string;
}
