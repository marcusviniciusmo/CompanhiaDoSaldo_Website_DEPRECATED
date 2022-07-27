/* eslint-disable jsx-a11y/anchor-is-valid */
import { GalleryData } from 'utils/Mocks/Gallery';
import './styles.css';

function Gallery() {
  return (
    <div id='galleryContainer'>
      <p className='viewHeaderText'>{GalleryData.Text}</p>

      <ul id='galleryList'>
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
    </div>
  );
};

export default Gallery;