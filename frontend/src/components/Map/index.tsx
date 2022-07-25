import {
  MapTitle,
  MapUrl,
  MapWidth,
  MapHeight,
  MapAllowFullScreen,
  MapLoading,
  MapReferrerPolicy
} from 'utils/Mocks/Map';

function Map() {
  return (
    <>
      <h1>MAP Component</h1>

      <iframe
        title={MapTitle}
        src={MapUrl}
        width={MapWidth}
        height={MapHeight}
        allowFullScreen={MapAllowFullScreen}
        loading={MapLoading}
        referrerPolicy={MapReferrerPolicy}
      />
    </>
  );
};

export default Map;