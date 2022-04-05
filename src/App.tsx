import React from 'react';
import { Card } from './components/Card/Card.component';
import { RenderCounter } from './components/RenderCounter/RenderCounter.component';

const App = () => {
  return (
    <div className='container'>
      <Card title={'Test Project with useRerender hook'}>
        <RenderCounter show={true} label='Card' button={true} />
      </Card>
    </div>
  );
};

export default App;
