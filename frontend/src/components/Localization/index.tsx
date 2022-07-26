import { LocalizationData } from 'utils/Mocks/Localization';
import Map from "components/Map";

function Localization() {
  return (
    <>
      <h1>LOCALIZATION Component</h1>

      <h2>{LocalizationData.Title}</h2>
      <p>
        {LocalizationData.AddressLine1}
        {LocalizationData.AddressLine2}
        {LocalizationData.AddressLine3}
        {LocalizationData.Reference}
      </p>

      <Map />
    </>
  );
};

export default Localization;