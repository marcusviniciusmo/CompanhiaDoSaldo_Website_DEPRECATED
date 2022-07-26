import { AboutData } from 'utils/Mocks/About';

function About() {
  return (
    <>
      <h1>ABOUT Component</h1>
      <h2>{AboutData.Title}</h2>
      <p>{AboutData.Text}</p>

      <img src={AboutData.Image.Url} alt={AboutData.Image.Description} />

      <h3>{AboutData.FigcaptionTitle}</h3>
      <p>{AboutData.FigcaptionText}</p>
    </>
  );
};

export default About;