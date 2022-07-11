interface InputRangeProps {
  name: string;
  min: number;
  max: number;
  defaultValue?: number;
  step?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputRange: React.FC<InputRangeProps> = ({
  onChange,
  defaultValue,
  name,
  min,
  max,
  step,
}) => {
  return (
    <input
      style={{ fontWeight: "bold" }}
      name={name}
      onChange={onChange}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      type="range"
    />
  );
};

export { InputRange };
