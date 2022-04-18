import * as S from './styles';
import {
  NavLink,
  Redirect,
} from 'react-router-dom';
import Button from '@mui/material/Button';

type Props = {
  open: boolean;
};

function RightNav(props: Props) {
  return (
    <>
      <Button variant="outlined" href="/enter">eeee</Button>
      <li>teste</li>
    </>
  );
}

export default RightNav;