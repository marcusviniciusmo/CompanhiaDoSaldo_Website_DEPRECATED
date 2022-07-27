/* eslint-disable jsx-a11y/anchor-is-valid */
import { GalleryData } from 'utils/Mocks/Gallery';
function Gallery() {
  return (
    <>
      <h1>GALLERY Component</h1>

      <p>{GalleryData.Text}</p>

      <ul>
        {
          GalleryData.Image.map((image) => {
            return (
              <a href="#" key={image.Id}>
                <li id={image.Id}>
                  <span>{image.Span}</span>
                </li>
              </a>
            )
          })
        }

      </ul>
    </>
  );
};

export default Gallery;