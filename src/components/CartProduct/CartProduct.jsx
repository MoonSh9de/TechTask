import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import './CartProduct.css'

import plusImage from "../../images/cart_main/plus.svg"
import minusImage from "../../images/cart_main/minus.svg"
import deleteImage from "../../images/cart_main/delete.svg"

import { increaseItem, decreaseItem, removeItemFromCart } from "../../features/CartSlice";

const CartProduct = ({cartProduct}) => {

    const dispatch = useDispatch();
    const amount = useSelector(state => state.cart.items).find((el)=> el.id === cartProduct.id).amount;
    const [count, setCount] = useState(amount);

    const increment = () => {
        setCount(count+1);
        dispatch(increaseItem(cartProduct.id))
    }

    const decrement = () => {
        setCount(count-1);
        if(count !== -1) {
            dispatch(decreaseItem(cartProduct.id));
        }
    }

    function ProductDelete() {
        dispatch(removeItemFromCart(cartProduct.id))
    }
    return (
        <div className="product">
        <div className="product__column--first">
            <div className="product__info">
                <img className="product__image" src={cartProduct.img} alt="" />
                <div className="quantity">
                    <button className="btn__decrement" onClick={decrement} disabled={count===1}>
                        <img src={minusImage} alt="" />
                    </button>
                    <span className="quantity__number">{count}</span>
                    <button className="btn__increment" onClick={increment}>
                        <img src={plusImage} alt="" />
                    </button>
                </div>
            </div>
            <div className="product__about">
                <h3 className="product__name">{cartProduct.title}</h3>
                <p className="product__price">{cartProduct.price} ₽</p>
            </div>
        </div>
        <div className="product__column product__column--second">
            <div className="product__delete" >
                <button className="btn__delete" onClick={ProductDelete}>
                    <img src={deleteImage} alt="" />
                </button>
            </div>
            <p className="product__result">{cartProduct.price * amount} ₽</p>
        </div>
    </div>

    )
};

export default CartProduct;