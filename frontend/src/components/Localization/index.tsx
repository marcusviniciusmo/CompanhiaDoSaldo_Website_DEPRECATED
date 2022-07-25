import {
  LocalizationTitle,
  LocalizationAddressLine1,
  LocalizationAddressLine2,
  LocalizationAddressLine3,
  LocalizationReference
} from 'utils/Mocks/Localization';
import Map from "components/Map";

function Localization() {
  return (
    <>
      <h1>LOCALIZATION Component</h1>

      <h2>{LocalizationTitle}</h2>
      <p>
        {LocalizationAddressLine1}
        {LocalizationAddressLine2}
        {LocalizationAddressLine3}
        {LocalizationReference}
      </p>

      <Map />
    </>
  );
};

export default Localization;