import { FooterData } from 'utils/Mocks/Footer';

function Footer() {
  return (
    <>
      <h1>FOOTER Component</h1>
      <p>
        {FooterData.Text}

        {
          FooterData.Icons.map((icon) => {
            return (
              <a
                key={icon.Id}
                href={icon.Url}
                title={icon.Title}
                target={icon.Target}
                rel={icon.Rel}
              >
                <icon.Icon
                  style={{ color: icon.Color }}
                  fontSize={icon.FontSize}
                />
              </a>
            )
          })
        }
      </p>
    </>
  );
};

export default Footer;