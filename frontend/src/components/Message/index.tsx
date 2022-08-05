import { useState } from "react";
import Input from "components/Input";
import TextArea from "components/TextArea";

function Message() {
  const [inputUrgency, setInputUrgency] = useState<string | undefined>('');

  const handleInput = (event: any) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === 'fieldUrgency')
      setInputUrgency(value);
  };

  return (
    <>
      MESSAGE Component

      <h3>Mensagem do Cliente</h3>

      <Input
        Label='Grau de Urgência'
        Type='range'
        Name='fieldUrgency'
        Id='fieldUrgency'
        Value={inputUrgency}
        OnChange={() => handleInput}
      />

      <h4>Mensagem</h4>
      <TextArea
        name='fieldMessage'
        id='fieldMessage'
        cols={30}
        rows={5}
      />
    </>
  );
};

export default Message;