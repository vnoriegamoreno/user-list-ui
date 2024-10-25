const Searchbox = () => {
  return (
    <form className="SearchboxForm" data-testid="SearchboxForm">
      <input className="SearchboxInputField" type="text" placeholder="Users" />
      <button className="SearchboxButton">Search</button>
    </form>
  );
};

export default Searchbox;
