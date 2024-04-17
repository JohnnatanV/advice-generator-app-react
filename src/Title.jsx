const Title = ({ children }) => {
  const formatTitle = (children) => `# ${children}`;
  return (
    <h1 id="cardId" className="card__id">
      {formatTitle(children)}
    </h1>
  );
};

export default Title;
