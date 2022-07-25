import { MapData } from 'utils/Mocks/Map';

function Map() {
  return (
    <>
      <h1>MAP Component</h1>

      <iframe
        title={MapData.Title}
        src={MapData.Url}
        allowFullScreen={MapData.FullScreen}
        loading={MapData.Loading}
        referrerPolicy={MapData.ReferrerPolicy}
      />
    </>
  );
};

export default Map;