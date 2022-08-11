/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { IRegions, IStates } from 'utils/Types/Address';
import './styles.css';

type Props = {
  label: string;
  name: string;
  id: string;
  content: string;
  regions?: IRegions[];
  states?: IStates[];
};

function Select({ label, name, id, content, regions, states }: Props) {
  const [selectedState, setSelectedState] = useState();

  const handleState = (event: any) => {
    setSelectedState(event.target.value)
  };

  return (
    <div className='selectContainer'>
      <select
        name={name}
        id={id}
        className='selectForm'
        value={selectedState ? selectedState : content}
        onChange={handleState}
      >
        {
          regions &&
          regions.map((region) => {
            return (
              <optgroup key={region.id} label={region.nome}>
                {
                  states &&
                  states.filter(s => s.regiao.nome === region.nome)
                    .map((state) => {
                      return (
                        <option
                          key={state.id}
                          value={state.sigla}
                        >{state.nome}
                        </option>
                      )
                    })
                }
              </optgroup>
            )
          })
        }
      </select>

      <label
        className={(content || states) && 'filled'}
      >{label}</label>
    </div>
  );
};

export default Select;