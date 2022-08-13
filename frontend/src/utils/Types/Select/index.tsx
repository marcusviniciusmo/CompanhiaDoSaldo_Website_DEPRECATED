export interface ISelect {
  Label: string;
  Name: string;
  Id: string;
  InputValue: string;
  CategoriesList?: any[];
  MainList: any[];
  HandleInput: Function;
  Search?: ISelectComponent;
};

export interface ISelectComponent {
  Label: string;
}