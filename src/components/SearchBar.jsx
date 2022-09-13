export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button type="submit">Serch</button>
      </form>
    </>
  );
};
