interface IOptionProps {
  name: string,
}

export const Option = ({ name }: IOptionProps) => {
  return (
    <option
      value={name}
    >
      {name}
    </option>
  );
}