export const Button = ({ id, classes, dataToggle, type, text }) => {
  return (
    <button className={classes} id={id} dataToggle={dataToggle} type={type}>
      {text}
    </button>
  );
};
