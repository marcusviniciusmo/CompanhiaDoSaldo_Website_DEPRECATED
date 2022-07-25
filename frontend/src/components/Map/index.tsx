import { MapData } from 'utils/Mocks/Map';
import './styles.css';

function Map() {
  return (
    <iframe
      id='mapCompanhiaDoSaldo'
      title={MapData.Title}
      src={MapData.Url}
      allowFullScreen={MapData.FullScreen}
      loading={MapData.Loading}
      referrerPolicy={MapData.ReferrerPolicy}
    />
  );
};

export default Map;