import { useAppSelector } from '../../app/hooks';
import classNames from 'classnames';

import './Button.scss';

interface IButtonProps  {
  text: string,
  onClick: () => void,
}

export const Button = ({ text, onClick }: IButtonProps) => {
  const isChosen = useAppSelector(store => store.isChosen.isChosen);

  return (
    <button
      className={classNames('button', {
        'button--disabled': !isChosen,
        'button--valid': isChosen,
      })}
      onClick={onClick}
      disabled={!isChosen}
    >{text}</button>
  );
}
