import { MenuData } from 'utils/Mocks/Menu';
import MenuItem from "components/MenuItem";
import './styles.css';

function Menu() {
  return (
    <nav id='menuContainer'>
      <h1>Menu Principal</h1>

      <ul id="menuList">
        {
          MenuData.Buttons.map((button) => {
            return (
              <MenuItem
                key={button.Id}
                Id={button.Id}
                To={button.To}
                Text={button.Text}
              />
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Menu;