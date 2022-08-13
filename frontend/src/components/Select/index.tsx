import { ISelect } from 'utils/Types/Select';
import { SelectData } from 'utils/Mocks/Select';
import './styles.css';

// type Props = {
//   label: string;
//   name: string;
//   id: string;
//   inputValue: string;
//   categoriesList?: any[];
//   mainList: any[];
//   handleInput: Function;
// };

function Select({
  Label,
  Name,
  Id,
  InputValue,
  CategoriesList,
  MainList,
  HandleInput
}: ISelect) {
  const handleInputComponent = HandleInput;
  return (
    <div className='selectContainer'>
      <select
        name={Name}
        id={Id}
        className='selectForm'
        value={InputValue}
        onChange={handleInputComponent()}
      >
        {
          CategoriesList
            ? CategoriesList.map((category) => {
              return (
                <optgroup key={category.id} label={category.nome}>
                  {
                    MainList &&
                    MainList.filter(s => s.regiao.nome === category.nome)
                      .map((item) => {
                        return (
                          <option
                            key={item.id}
                            value={item.sigla}
                          >
                            {item.nome}
                          </option>
                        )
                      })
                  }
                </optgroup>
              )
            })
            : <optgroup label={`${MainList.length} ${SelectData.Label}`}>
              {
                MainList &&
                MainList.map((item) => {
                  return (
                    <option
                      key={item.id}
                      value={item.nome}
                    >
                      {item.nome}
                    </option>
                  )
                })
              }
            </optgroup>
        }
      </select>

      <label
        className={(InputValue || MainList) && 'filled'}
      >
        {Label}
      </label>
    </div>
  );
};

export default Select;