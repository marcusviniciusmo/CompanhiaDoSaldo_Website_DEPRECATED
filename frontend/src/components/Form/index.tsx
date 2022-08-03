import { useState } from 'react';
import './styles.css';

type Props = {
  content: string;
};

function Form({ content }: Props) {
  const [urls] = useState<string[]>(content.split(','));
  const [indexActive, setIndexActive] = useState(0);
  const [urlActive, setUrlActive] = useState(urls[0]);

  const getIndexActive = () => indexActive;

  const getUrlActive = () => urlActive;

  const forwardPage = () => {
    if (indexActive + 1 < urls.length) {
      setUrlActive(urls[getIndexActive() + 1]);
      setIndexActive(getIndexActive() + 1);
    }
  };

  return (
    <div id='formContainer'>
      <iframe
        title='iframeForm'
        id='iframeFormContainer'
        src={getUrlActive()}
      />

      <div id="formButtonsContainer">
        <button
          className='formButton rewindButton'
        >
          Voltar
        </button>

        <button
          className='formButton forwardButton'
          onClick={forwardPage}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Form;