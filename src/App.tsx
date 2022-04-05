import React from 'react';
import { Card } from './components/Card.component';
import { RenderCount } from './components/RenderCount.components';
import { Button } from './stories/Button';

const App = () => {
  const [buttonClick, setButtonClick] = React.useState(0);
  const onButtonClick = () => setButtonClick(buttonClick + 1);
  return (
    <div className='container'>
      <Card
        title={'Test Project with useRerender hook'}
        bodyText={`buttons clicked: ${buttonClick}`}
      >
        <Button label='click me' onClick={onButtonClick} />
        <RenderCount show={true} label='Card' />
      </Card>
    </div>
  );
};

export default App;
