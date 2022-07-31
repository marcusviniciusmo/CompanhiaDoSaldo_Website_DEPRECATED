import './styles.css';

type Props = {
  content: any[];
};

function Form({ content }: Props) {
  return (
    <div id='formContainer'>
      <iframe
        title='iframeForm'
        id='iframeFormContainer'
        src=''
      />

      <button className='formButton'>Próximo</button>
    </div>
  );
};

export default Form;