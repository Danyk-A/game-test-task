import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Option } from '../Option/Option';
import './Selection.scss';
import { setCurrentMode } from '../../features/currentMode';
import { setIsChosen } from '../../features/isChosen';
import { Square } from '../../types/Square';

interface ISelectionProps  {
  setHoveredSquares: Dispatch<SetStateAction<Square[]>>;
  setResetField: Dispatch<SetStateAction<boolean>>;
}

export const Selection = ({ setHoveredSquares, setResetField }: ISelectionProps) => {
  const modes = useAppSelector(store => store.modes);
  const dispatch = useAppDispatch();

  const handleModeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMode = event.target.value;
    setHoveredSquares([]);
    setResetField(true);

    dispatch(setCurrentMode(selectedMode));
    dispatch(setIsChosen(!!selectedMode));
  };

  return (
    <div className="selection">
      <label
        className="selection__mode
        selection__mode--text"
      >
        Modes:
        <select
          onChange={handleModeChange}
          className="selection__mode--item select"
          defaultValue=""
        >
          <option value="" disabled>
            Pick the mode
          </option>
          {modes.map((mode, index) => (
            <Option
              key={`${mode.id}-${index}`}
              name={mode.name}
            />
          ))}
        </select>
      </label>
    </div>
  );
}