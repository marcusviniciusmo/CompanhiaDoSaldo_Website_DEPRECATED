/* eslint-disable react-hooks/exhaustive-deps */
import { IClientMessage } from 'utils/Types/Message';
import { ClientIdentification } from 'utils/Mocks/Identification';
import { ClientMessage, MessageData } from 'utils/Mocks/Message';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "components/Input";
import TextArea from "components/TextArea";
import './styles.css';

function Message() {
  const urgency = ['Não urgente', 'Pouco urgente', 'Urgente', 'Emergência'];
  const [inputUrgency, setInputUrgency] = useState<string | undefined>('');
  const [inputMessage, setInputMessage] = useState<string | undefined>('');
  const [levelUrgency, setLevelUrgency] = useState<string>('');

  useEffect(() => {
    getLevelUrgency();
  }, [levelUrgency]);

  useEffect(() => {
    getInputUrgency();
  }, [inputUrgency]);

  useEffect(() => {
    const clientStorage = localStorage.getItem('client.Identification');

    if (clientStorage) {
      const client = JSON.parse(clientStorage);

      if (client.Cpf === ClientIdentification.Cpf)
        getMessageByCpf(ClientMessage);
    };
  }, []);

  useEffect(() => {
    switch (inputUrgency!) {
      case '0':
      case '2':
        setLevelUrgency(urgency[0]);
        break;
      case '4':
      case '6':
        setLevelUrgency(urgency[1]);
        break;
      case '8':
        setLevelUrgency(urgency[2]);
        break;
      case '10':
        setLevelUrgency(urgency[3]);
        break;
      default:
        setLevelUrgency(urgency[0]);
        break;
    };
  }, [inputUrgency]);

  const getInputUrgency = () => inputUrgency?.toString();

  const getLevelUrgency = () => levelUrgency;

  const getMessageByCpf = (client: IClientMessage) => {
    setInputUrgency(client.Urgency);
    setInputMessage(client.Message);
  };

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldUrgency')
      setInputUrgency(value);
    else if (id === 'fieldMessage')
      setInputMessage(value);
  };

  const clearMessage = () => setInputMessage('');

  const storageDataClient = () => {
    const clientStorage = localStorage.getItem('client.Identification');

    if (clientStorage) {
      const clientMessage: IClientMessage = {
        Urgency: inputUrgency!,
        Message: inputMessage!
      };

      localStorage.setItem('client.Message', JSON.stringify(clientMessage));
    };
  };

  const goToNextForm = () => {
    storageDataClient();
  };

  return (
    <form className='ordersFormContainer'>
      <fieldset id='message'>
        <legend>{MessageData.Legend}</legend>

        <div id="messageFields">
          <div id="messageFieldUrgency">
            <span>{MessageData.Inputs.Span1}</span>
            <Input
              Label={`${MessageData.Inputs.Inputs[0].Label}
                ${inputUrgency ? `: ${levelUrgency}` : ''}`}
              Type={MessageData.Inputs.Inputs[0].Type}
              Name={MessageData.Inputs.Inputs[0].Name}
              Id={MessageData.Inputs.Inputs[0].Id}
              Min={MessageData.Inputs.Inputs[0].Min}
              Max={MessageData.Inputs.Inputs[0].Max}
              Step={MessageData.Inputs.Inputs[0].Step}
              Value={inputUrgency!}
              OnChange={() => handleInput}
            />
            <span>{MessageData.Inputs.Span2}</span>
          </div>

          <TextArea
            Label={MessageData.TextAreas[0].Label}
            Name={MessageData.TextAreas[0].Name}
            Id={MessageData.TextAreas[0].Id}
            Cols={MessageData.TextAreas[0].Cols}
            Rows={MessageData.TextAreas[0].Rows}
            Value={inputMessage!}
            OnChange={() => handleInput}
            Clear={() => clearMessage}
          />
        </div>

        <div className="formButtonsContainer">
          <Link to='/pedidos/address' onClick={storageDataClient}>
            <button className='formButton rewindButton'>
              {MessageData.PreviousTextButton}
            </button>
          </Link>

          <Link to='/pedidos/product' onClick={goToNextForm}>
            <button className='formButton forwardButton'>
              {MessageData.NextTextButton}
            </button>
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Message;