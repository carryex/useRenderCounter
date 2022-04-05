import React, { useRef } from 'react';

const useRenderCounter = (label: string) => {
  const renderCount = useRef(0);
  renderCount.current++;
  console.log(`${label} rendered ${renderCount.current} times`);
  return renderCount.current;
};

export default useRenderCounter;
