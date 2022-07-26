import { AboutData } from 'utils/Mocks/About';
import './styles.css';

function About() {
  return (
    <article id='aboutContainer'>
      <h2 className='titleArticle'>{AboutData.Title}</h2>
      <p>{AboutData.Text}</p>

      <figure id="photoAbout">
        <img src={AboutData.Image.Url} alt={AboutData.Image.Description} />

        <figcaption>
          <h3>{AboutData.FigcaptionTitle}</h3>
          <p>{AboutData.FigcaptionText}</p>
        </figcaption>
      </figure>
    </article>
  );
};

export default About;