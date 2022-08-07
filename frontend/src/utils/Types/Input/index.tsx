import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IInput {
  Label: string;
  Type: string;
  Name: string;
  Id: string;
  Size?: number;
  MaxLength?: number;
  Min?: number;
  Max?: number;
  Step?: number;
  DefaultValue?: number;
  Placeholder?: string;
  Value?: string | undefined;
  OnChange?: Function;
  Checked?: boolean;
  OnChangeGeneric?: () => '';
  Clear?: Function;
  InputComponent?: IInputComponent;
};

export interface IInputComponent {
  IconTitle: string;
  ClearGenericInput: Function;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  IconFontSize: 'large';
};