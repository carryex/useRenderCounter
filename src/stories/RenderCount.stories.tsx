import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../components/Card/Card.component';
import { RenderCounter } from '../components/RenderCounter/RenderCounter.component';

type Props = {
  show: boolean;
  button: boolean;
  title: string;
  bodyText?: string;
};
const CardDemo = ({ title, show, button, bodyText }: Props) => {
  return (
    <Card
      title={title}
      bodyText={bodyText}
      children={<RenderCounter show={show} label='Card' button={button} />}
    />
  );
};

export default {
  title: 'Render Counter',
  component: RenderCounter,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof RenderCounter> = (args) => (
  <RenderCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  button: true,
};

export const DefaultCard: ComponentStory<typeof CardDemo> = (args) => (
  <CardDemo {...args} />
);

DefaultCard.args = {
  title: 'Render Counter',
  show: true,
  button: true,
  bodyText: 'Click on the button, change the title or toggle show propperty',
};
