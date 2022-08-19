import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface ITextArea {
  Label: string;
  Name: string;
  Id: string;
  Cols: number;
  Rows: number;
  Value: string;
  OnChange: Function;
  Clear: Function | undefined
  TextAreaComponent?: ITextAreaComponent;
};

export interface ITextAreaComponent {
  IconTitle: string;
  ClearGenericInput: Function;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  IconFontSize: 'large';
};