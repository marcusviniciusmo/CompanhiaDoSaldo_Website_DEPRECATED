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

      <button
        className={'formButton'}
        onClick={forwardPage}
      >
        Próximo
      </button>
    </div>
  );
};

export default Form;