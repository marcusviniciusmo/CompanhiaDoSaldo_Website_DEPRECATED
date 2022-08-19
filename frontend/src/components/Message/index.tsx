/* eslint-disable react-hooks/exhaustive-deps */
import { MessageData } from 'utils/Mocks/Message';
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

  const getLevelUrgency = () => levelUrgency;

  useEffect(() => {
    if (inputUrgency! === '0' || inputUrgency! === '2')
      setLevelUrgency(urgency[0]);
    else if (inputUrgency! === '4' || inputUrgency! === '6')
      setLevelUrgency(urgency[1]);
    else if (inputUrgency! === '8')
      setLevelUrgency(urgency[2]);
    else
      setLevelUrgency(urgency[3]);
  }, [inputUrgency]);

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldUrgency')
      setInputUrgency(value);
    else if (id === 'fieldMessage')
      setInputMessage(value);
  };

  const clearMessage = () => setInputMessage('');

  return (
    <form className='ordersFormContainer'>
      <fieldset id='message'>
        <legend>{MessageData.Legend}</legend>

        <div id="messageFields">
          <div id="messageFieldUrgency">
            <span>{MessageData.Inputs.Span1}</span>
            <Input
              Label={`${MessageData.Inputs.Inputs[0].Label}
                ${inputUrgency && `: ${levelUrgency}`}`}
              Type={MessageData.Inputs.Inputs[0].Type}
              Name={MessageData.Inputs.Inputs[0].Name}
              Id={MessageData.Inputs.Inputs[0].Id}
              Min={MessageData.Inputs.Inputs[0].Min}
              Max={MessageData.Inputs.Inputs[0].Max}
              Step={MessageData.Inputs.Inputs[0].Step}
              DefaultValue={MessageData.Inputs.Inputs[0].DefaultValue}
              Value={inputUrgency}
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
          <Link to='/pedidos/address'>
            <button className='formButton rewindButton'>
              {MessageData.PreviousTextButton}
            </button>
          </Link>

          <Link to='/pedidos/product'>
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