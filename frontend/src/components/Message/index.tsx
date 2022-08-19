/* eslint-disable react-hooks/exhaustive-deps */
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
        <legend>Mensagem do Cliente</legend>

        <div id="messageFields">
          <div id="messageFieldUrgency">
            <span>Min</span>
            <Input
              Label={`Grau de Urgência${inputUrgency ? `: ${levelUrgency}` : ''}`}
              Type='range'
              Name='fieldUrgency'
              Id='fieldUrgency'
              Min={0}
              Max={10}
              Step={2}
              DefaultValue={0}
              Value={inputUrgency}
              OnChange={() => handleInput}
            />
            <span>Máx</span>
          </div>

          <TextArea
            Label='Mensagem'
            Name='fieldMessage'
            Id='fieldMessage'
            Cols={30}
            Rows={5}
            Value={inputMessage!}
            OnChange={() => handleInput}
            Clear={() => clearMessage}
          />
        </div>

        <div className="formButtonsContainer">
          <Link to='/pedidos/address'>
            <button className='formButton rewindButton'>
              Voltar
            </button>
          </Link>

          <Link to='/pedidos/product'>
            <button className='formButton forwardButton'>
              Próximo
            </button>
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Message;