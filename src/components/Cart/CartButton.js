import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-cart';
import classes from './CartButton.module.css';


const CartButton = () => {
  const dispatch=useDispatch();
  const cartQuantity=useSelector(state=>state.cart.totalQuantity);

  const toggleHandler=(event)=>{
    dispatch(uiActions.toggle());

  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
