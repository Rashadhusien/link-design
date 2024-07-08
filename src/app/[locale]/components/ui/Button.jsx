function Button({ children, style, ...rest }) {
  return (
    <button
      {...rest}
      className={`${style} hover:bg-btnhover  text-slate bg-primary inline-block font-[600] capitalize z-10 relative transition-all duration-300 rounded-lg tracking-widest`}
    >
      {children}
    </button>
  );
}

export default Button;
