export class Game {
  constructor(
    public id: number,
    public title: string,
    public url: string,
    public type?: string,
    public note?: string
  ) {}
}