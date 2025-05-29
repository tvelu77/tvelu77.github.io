export class Period {

  constructor(readonly startDate: Date, readonly endDate?: Date) {}

  public formatPeriod(): string {
    return `${this.formatDate(this.startDate)} - ${this.formatDate(this.endDate)}`;
  }

  private formatDate(date?: Date): string {
    if (!date) {
      return "Now";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
    };
    return `${date.toLocaleDateString("en-EN", options)}`;
  }

}
