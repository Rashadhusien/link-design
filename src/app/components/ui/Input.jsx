function Input({ type, id, style, onChange, ...rest }) {
  return (
    <input
      type={type}
      name={id}
      id={id}
      className={`${style} w-full p-4 h-14 mb-4 border-none outline-none text-[#bababa] bg-inputgray rounded-lg`}
      {...rest}
      onChange={onChange}
    />
  );
}

export default Input;
