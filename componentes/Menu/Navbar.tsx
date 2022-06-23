import * as S from './styles';
import Burger from './Burger';
import SearchBar from './SearchBar';

type Props = {
  children?: ChildNode;
};

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <S.Logo src='/logo.svg' alt="cibeli" />
      </S.Nav>
      <SearchBar/>
      <Burger />
      {props.children}
    </>
  );
}