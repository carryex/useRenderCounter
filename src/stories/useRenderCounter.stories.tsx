import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../components/Card.component';
import { RenderCount } from '../components/RenderCount.components';

type Props = {
  show: boolean;
  title: string;
};
const Demo = ({ title, show }: Props) => {
  const bodyText = `Click on the button, change the title or toggle show propperty`;
  return (
    <Card
      title={title}
      bodyText={bodyText}
      children={<RenderCount show={show} label='Card' />}
    />
  );
};

export default {
  title: 'useRenderCounter',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Render Counter',
  show: true,
};
