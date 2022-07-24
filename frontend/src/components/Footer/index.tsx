import {
  FooterText,
  FacebookIcon,
  FacebookUrl,
  FacebookTitle,
  FacebookTarget,
  FacebookRel,
  FacebookColor,
  FacebookFontSize,
  InstagramIcon,
  InstagramUrl,
  InstagramTitle,
  InstagramTarget,
  InstagramRel,
  InstagramColor,
  InstagramFontSize,
  HomeIcon,
  HomeUrl,
  HomeTitle,
  HomeColor,
  HomeFontSize,
  ContactIcon,
  ContactUrl,
  ContactTitle,
  ContactColor,
  ContactFontSize
} from 'utils/Mocks/Footer';

function Footer() {
  return (
    <>
      <h1>FOOTER Component</h1>
      <p>
        {FooterText}
        <a
          href={FacebookUrl}
          title={FacebookTitle}
          target={FacebookTarget}
          rel={FacebookRel}
        >
          <FacebookIcon
            style={{ color: FacebookColor }}
            fontSize={FacebookFontSize}
          />
        </a>
        <a
          href={InstagramUrl}
          title={InstagramTitle}
          target={InstagramTarget}
          rel={InstagramRel}
        >
          <InstagramIcon
            style={{ color: InstagramColor }}
            fontSize={InstagramFontSize}
          />
        </a>
        <a
          href={HomeUrl}
          title={HomeTitle}
        >
          <HomeIcon
            style={{ color: HomeColor }}
            fontSize={HomeFontSize}
          />
        </a>
        <a
          href={ContactUrl}
          title={ContactTitle}
        >
          <ContactIcon
            style={{ color: ContactColor }}
            fontSize={ContactFontSize}
          />
        </a>
      </p>
    </>
  );
};

export default Footer;