import { IInput } from '../Input';
import { ITextArea } from 'utils/Types/TextArea';

export interface IClientMessage {
  Urgency: string;
  Message: string;
};

export interface IMessage {
  Legend: string;
  Inputs: {
    Inputs: IInput[];
    Span1?: string;
    Span2?: string;
  };
  TextAreas: ITextArea[];
  PreviousTextButton: string;
  NextTextButton: string;
};