import { ButtonStyled, InputStyled } from './SearchBarStyled.styled';

export const SearchBar = ({ onSubmit, query }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <InputStyled type="text" name="query" defaultValue={query} />
        <ButtonStyled type="submit">Serch</ButtonStyled>
      </form>
    </>
  );
};
