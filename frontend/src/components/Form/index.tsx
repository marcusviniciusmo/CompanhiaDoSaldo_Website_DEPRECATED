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
    setUrlActive(urls[getIndexActive() + 1]);
    setIndexActive(getIndexActive() + 1);
  };

  const rewindPage = () => {
    setUrlActive(urls[getIndexActive() - 1]);
    setIndexActive(getIndexActive() - 1);
  };

  return (
    <div id='formContainer'>
      <iframe
        title='iframeForm'
        id='iframeFormContainer'
        src={getUrlActive()}
      />

      <div id="formButtonsContainer">
        {
          indexActive > 0 &&
          <button
            className='formButton rewindButton'
            onClick={rewindPage}
          >
            Voltar
          </button>
        }

        {
          indexActive + 1 < urls.length &&
          <button
            className='formButton forwardButton'
            onClick={forwardPage}
          >
            Próximo
          </button>
        }
      </div>
    </div>
  );
};

export default Form;