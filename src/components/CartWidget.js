import { FaOpencart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div>
            <FaOpencart />
            <span className='numCart' class="badge bg-danger">
                1
            </span>
        </div>
    )
}

export default CartWidget;