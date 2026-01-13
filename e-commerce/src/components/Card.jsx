const Card = ({ children, name }) => {
  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export { Card };
