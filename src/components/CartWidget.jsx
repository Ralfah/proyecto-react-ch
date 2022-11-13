import { Badge } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

const CartWidget = () => {
    return (
        <Badge badgeContent={10} color="secondary">
            <ShoppingBasket />
        </Badge>
    );
}

export default CartWidget;