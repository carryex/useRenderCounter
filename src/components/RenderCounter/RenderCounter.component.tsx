import React from 'react';
import useRenderCounter from '../../hooks/useRenderCounter';
import { Button } from '../Button/Button';

type Props = {
  label?: string;
  show?: boolean;
  button?: boolean;
};

const RenderCounter = ({ show = false, label = '', button = false }: Props) => {
  const count = useRenderCounter(label);
  const [buttonClick, setButtonClick] = React.useState(0);
  const onButtonClick = () => setButtonClick(buttonClick + 1);
  return (
    <>
      {button && <Button label='click me' onClick={onButtonClick} />}
      {show && (
        <p>
          {label} rendered {count} times
        </p>
      )}
    </>
  );
};

export { RenderCounter };
