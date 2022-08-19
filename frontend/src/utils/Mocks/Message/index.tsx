import { IClientMessage, IMessage } from 'utils/Types/Message';

export const ClientMessage: IClientMessage = {
  Urgency: '6',
  Message: 'Gostaria de fazer um pedido!'
};

export const MessageData: IMessage = {
  Legend: 'Mensagem do Cliente',
  Inputs: {
    Inputs: [
      {
        Label: 'Grau de Urgência',
        Type: 'range',
        Name: 'fieldUrgency',
        Id: 'fieldUrgency',
        Min: 0,
        Max: 10,
        Step: 2,
        DefaultValue: 0
      }
    ],
    Span1: 'Min',
    Span2: 'Máx'
  },
  TextAreas: [
    {
    Label: 'Mensagem',
    Name: 'fieldMessage',
    Id: 'fieldMessage',
    Cols: 30,
    Rows: 5
  }
],
  PreviousTextButton: 'Voltar',
  NextTextButton: 'Próximo'
};