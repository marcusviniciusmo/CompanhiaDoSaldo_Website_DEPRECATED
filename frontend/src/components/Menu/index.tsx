import { MenuData } from 'utils/Mocks/Menu';
import MenuItem from "components/MenuItem";

function Menu() {
  return (
    <>
      <h1>MENU Component</h1>
      <h1>Menu Principal</h1>

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
    </>
  );
};

export default Menu;