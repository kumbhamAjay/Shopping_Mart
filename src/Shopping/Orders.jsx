import React, { Fragment, useContext } from "react";
import { cartItems } from "../App";
import { Link } from "react-router-dom";

const Orders = () => {
  const { items, setItems, orders, setOrders,setProduct } = useContext(cartItems);
  // console.log(orders)
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {orders.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {orders.map((each, i) => {
            return (
              <div
                key={i}
                style={{
                  border: "1px solid",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                {each.map((set, ind) => {
                  return (
                    <Fragment key={ind}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr",
                          height: "100px",
                          margin: "10px",
                        }}
                      >
                        <img
                          style={{ height: "80%", width: "80%" }}
                          src={set.image}
                          alt=""
                        />
                        <Link to={"/product"}><h4 onClick={()=>{setProduct(set)}}>{set.title}</h4></Link>
                        <h4>Qty:{set.qty}</h4>
                        <h4>${Math.round(set.price) * set.qty}</h4>
                        <h1 style={{ color: "green" }}>Paid</h1>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h1>No Orders Placed</h1>
        </>
      )}
    </div>
  );
};

export default Orders;
