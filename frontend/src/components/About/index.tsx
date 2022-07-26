import {
  AboutTitle,
  AboutText,
  AboutImageUrl,
  AboutImageDescription,
  AboutFigcaptionTitle,
  AboutFigcaptionText
} from 'utils/Mocks/About';

function About() {
  return (
    <>
      <h1>ABOUT Component</h1>
      <h2>{AboutTitle}</h2>
      <p>{AboutText}</p>

      <img src={AboutImageUrl} alt={AboutImageDescription} />

      <h3>{AboutFigcaptionTitle}</h3>
      <p>{AboutFigcaptionText}</p>
    </>
  );
};

export default About;