const ItemListContainer = ({ greeting }) => {
  const greetingStyles = {
    fontSize: "3rem",
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  };
  return <div style={greetingStyles}>{greeting}</div>;
};

export default ItemListContainer;
