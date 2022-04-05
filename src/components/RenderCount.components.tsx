import useRenderCounter from '../useRenderCounter';

type Props = {
  show: boolean;
  label: string;
};

const RenderCount = ({ show, label }: Props) => {
  const count = useRenderCounter(label);
  return show ? (
    <p>
      {label} rendered {count} times
    </p>
  ) : null;
};

export { RenderCount };
