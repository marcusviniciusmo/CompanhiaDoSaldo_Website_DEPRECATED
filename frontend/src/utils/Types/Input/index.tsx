import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface IInputComponent {
  IconTitle: string;
  ClearGenericInput: Function;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
  IconFontSize: 'large';
};