export class Coffee {
  constructor(
    private _id: string,
    private _image_url: string,
    private _name: string,
    private _tagline: string,
    private _first_roasted: string,
    private _strength_level: string,
    private _description: string,
    private _contributed_by: string
  ) {}

  public get id(): string {
    return this._id;
  }
  public get image_url(): string {
    return this._image_url;
  }
  public set image_url(value: string) {
    this._image_url = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get tagline(): string {
    return this._tagline;
  }
  public set tagline(value: string) {
    this._tagline = value;
  }
  public get first_roasted(): string {
    return this._first_roasted;
  }
  public set first_roasted(value: string) {
    this._first_roasted = value;
  }
  public get strength_level(): string {
    return this._strength_level;
  }
  public set strength_level(value: string) {
    this._strength_level = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get contributed_by(): string {
    return this._contributed_by;
  }
  public set contributed_by(value: string) {
    this._contributed_by = value;
  }
}
