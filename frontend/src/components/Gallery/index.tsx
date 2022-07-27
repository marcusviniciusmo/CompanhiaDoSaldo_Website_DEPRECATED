/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  GalleryText,
  GallerySpan01,
  GallerySpan02,
  GallerySpan03,
  GallerySpan04,
  GallerySpan05,
  GallerySpan06
} from 'utils/Mocks/Gallery';
function Gallery() {
  return (
    <>
      <h1>GALLERY Component</h1>

      <p>{GalleryText}</p>

      <ul>
        <a href="#">
          <li>
            <span>{GallerySpan01}</span>
          </li>
          </a>
        <a href="#">
          <li>
            <span>{GallerySpan02}</span>
          </li>
          </a>
        <a href="#">
          <li>
            <span>{GallerySpan03}</span>
          </li>
          </a>
        <a href="#">
          <li>
            <span>{GallerySpan04}</span>
          </li>
          </a>
        <a href="#">
          <li>
            <span>{GallerySpan05}</span>
          </li>
          </a>
        <a href="#">
          <li>
            <span>{GallerySpan06}</span>
          </li>
          </a>
      </ul>
    </>
  );
};

export default Gallery;