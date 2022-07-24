import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export interface IFooter {
  Text: string;
  Icons: {
    Id: number;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    Url: string;
    Title: string;
    Target?: string;
    Rel?: string;
    Color: string;
    FontSize: 'large';
  }[];
};