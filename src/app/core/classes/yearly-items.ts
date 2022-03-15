export class YearlyItems {
  constructor(public title: string,
              public icon: string,
              public yearlyItem: YearlyItem[]) {
  }
}
export class YearlyItem {
  constructor(public from: string,
              public to: string,
              public items: string[]) {
  }
}
