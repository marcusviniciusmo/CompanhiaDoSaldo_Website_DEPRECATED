import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "components/Input";
import TextArea from "components/TextArea";
import './styles.css';

function Message() {
  const [inputUrgency, setInputUrgency] = useState<string | undefined>('');

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldUrgency')
      setInputUrgency(value);
  };

  return (
    <form className='ordersFormContainer'>
      <fieldset id='message'>
        <legend>Mensagem do Cliente</legend>

        <div id="messageFields">
          <div id="messageFieldUrgency">
            <span>Min</span>
            <Input
              Label='Grau de Urgência'
              Type='range'
              Name='fieldUrgency'
              Id='fieldUrgency'
              Value={inputUrgency}
              OnChange={() => handleInput}
            />
            <span>Máx</span>
          </div>

          <h4>Mensagem</h4>
          <TextArea
            name='fieldMessage'
            id='fieldMessage'
            cols={30}
            rows={5}
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