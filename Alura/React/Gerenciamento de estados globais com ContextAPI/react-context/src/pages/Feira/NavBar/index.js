import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCheckoutContext } from 'common/context/Checkout';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { productCounter } = useCheckoutContext();
  const navigate = useNavigate();
  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={productCounter === 0}
        onClick={() => navigate('/carrinho')}
      >
        <Badge color="primary" badgeContent={productCounter}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  );
};

export default NavBar;
