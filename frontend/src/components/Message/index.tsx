import Input from "components/Input";
import TextArea from "components/TextArea";

function Message() {
  return (
    <>
      MESSAGE Component

      <h3>Mensagem do Cliente</h3>

      <Input
        label='Grau de Urgência'
        type='range'
        name='fieldUrgency'
        id='fieldUrgency'
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