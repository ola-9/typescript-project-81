/* eslint-disable import/prefer-default-export */
export class Tag {
  tagName: string;

  attributes: Record<string, string>;

  constructor(tagName: string, attributes: Record<string, string>) {
    this.tagName = tagName;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.tagName} ${Object.keys(this.attributes)
      .map((key) => `${key}="${this.attributes[key]}"`)
      .join(' ')}>`;
  }
}
