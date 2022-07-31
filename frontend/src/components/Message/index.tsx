import Input from "components/Input";

function Message() {
  return (
    <>
      MESSAGE Component

      <h3>Mensagem do Cliente</h3>

      <h4>Grau de Urgência</h4>
      <Input
        type='range'
        name='fieldUrgency'
        id='fieldUrgency'
      />

      <h4>Mensagem:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
    </>
  );
};

export default Message;