import React from "react";
import style from "./Cart.module.css";
import CartItem from "../Components/Cart/Cartitem";
import { Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Index = () => {
    const [Item, setItem] = React.useState([]);
    const [discount, setDiscount] = React.useState(0);
    const [delivery, setDelivery] = React.useState(0);
    const [subTotal, setSubTotal] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    React.useEffect(() => {
        fetch("http://localhost:8080/kitchen")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data)
                setItem(data);
            });
    }, []);

    return (
        <div
            style={{
                display: "flex",
                padding: "1rem",
                backgroundColor: "var(--color-bg)",
            }}
        >
            <div className={style.mainSkeleton}>
                <div className={style.headCart}>
                    <h1 className={style.headCart1}>Image</h1>
                    <h1 className={style.headCart2}>Description</h1>
                    <h1 className={style.headCart3}>Quantity</h1>
                    <h1 className={style.headCart4}>Remove</h1>
                    <h1 className={style.headCart5}>Price</h1>
                </div>
                <Divider />
                <div className={style.subSkeleton}>
                    {Item.msg?.map((items) => (
                        <div key={items.id}>
                            <CartItem items={items} />
                        </div>
                    ))}
                </div>
                <Divider />
                <div className={style.bottomCart}>
                    <div className={style.box}>Discount: Rs{discount}</div>
                    <div className={style.box}>Delivery: Rs{delivery}</div>
                    <div className={style.box}>Subtotal: Rs{subTotal}</div>
                    <div className={style.box}>Total: Rs{total}</div>
                </div>

                <div className={style.bottomDiscount}>
                    <div>
                        <div style={{ display: "flex", width: "40%" }}>
                            <input
                                className={style.input}
                                placeholder="Please enter promo code"
                            />
                            <button className={style.buttonpromo}>Apply Discount</button>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Link to={"/address"}>
                            <button className={style.checkout}>Checkout</button>
                        </Link>
                        <Link to={"/"}>
                            <button className={style.continue}>Continue Shopping</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;