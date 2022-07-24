import { FooterData } from 'utils/Mocks/Footer';
import './styles.css';

function Footer() {
  return (
    <footer id='footerContainer'>
      <span>
        {FooterData.Text}
      </span>

      <div id="footerIcons">
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
      </div>
    </footer>
  );
};

export default Footer;