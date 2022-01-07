export class Article {
  constructor(
    private _id: number,
    private _title: string,
    private _content: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }
}
