type SelectProps = {
  id: string;
  label: string;
  selectWrapperClasses: string;
  labelClasses: string;
  selectClasses: string;
  options: any[];
  handleChange(value: string): void
};

export default function Select({
  id, 
  label,
  selectWrapperClasses = '',
  labelClasses = '',
  selectClasses = '',
  options,
  handleChange,
}: SelectProps) {
  return (
    <div className={selectWrapperClasses}>
      <label
        className={labelClasses}
        htmlFor={id}
      >
        {label}
      </label>
      <select id={id} className={selectClasses} onChange={({ target }) => handleChange(target.value)}>
        {
          options.map(({ id, name }) => (
            <option key={id} value={name}>{name}</option>
          ))
        }
      </select>
    </div >
  );
}
