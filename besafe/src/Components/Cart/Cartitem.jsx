import React from "react";
import { Button, Divider, Icon, Image, Text } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import style from "./Cartitem.module.css";

const CartItem = ({ items }) => {
  const [count, setCount] = React.useState(1);
  const [price, setPrice] = React.useState(items.price);

  const handleRemove = () => {
    
  };

  const inc = () => {
    const inc=parseFloat((price + items.price).toFixed(2))
    setPrice(inc);
    setCount(count + 1);
  };

  const dec = () => {
    const dec=parseFloat((price - items.price).toFixed(2))
    setPrice(dec);
    setCount(count - 1);
  };
  return (
    <div className={style.item}>
      <div key={items._id} className={style.subitem}>
        <div style={{ width: "10%", margin: "auto", textAlign: "center" }}>
          <Image src={items.img[0].subImage} height={120} margin={"auto"} alt="" />
        </div>
        <div className={style.subitemText}>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            {items.name}
          </h1>
          <Text noOfLines={2}>{items.desc}</Text>
        </div>
        <div className={style.quantity}>
          <div className={style.quantityInner}>
            <Button isDisabled={count === 1} onClick={() => dec()}>
              -
            </Button>
            <Button isDisabled fontSize={20}>
              {count}
            </Button>
            <Button isDisabled={count === 5} onClick={() => inc()}>
              +
            </Button>
          </div>
        </div>
        <div className={style.remove}>
          <Button onClick={handleRemove}>
            <Icon as={RxCross2} />
          </Button>
        </div>
        <div
          style={{
            width: "10%",
            margin: "auto",
            textAlign: "center",
            paddingTop: "0.5rem",
          }}
        >
          <h1>{price}</h1>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default CartItem;