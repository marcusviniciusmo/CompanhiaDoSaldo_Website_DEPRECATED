import { LocalizationData } from 'utils/Mocks/Localization';
import Map from "components/Map";
import './styles.css';

function Localization() {
  return (
    <article id='localizationContainer'>
      <h2 className='titleArticle'>{LocalizationData.Title}</h2>

      <p>
        {LocalizationData.AddressLine1}<br />
        {LocalizationData.AddressLine2}<br />
        {LocalizationData.AddressLine3}<br />
        <em>{LocalizationData.Reference}</em>
      </p>

      <Map />
    </article>
  );
};

export default Localization;