import { Badge } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);
    
    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
            <ShoppingBasket />
        </Badge>
    );
}

export default CartWidget;