import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { cartItems } from "../App";
import "./shop.css";
// import { FaShoppingCart } from "react-icons/fa";
// import NavBar from "./NavBar";

const Shopping = () => {
  const [data, setData] = useState([]);
  const { items, setItems, loginData, product, setProduct } =
    useContext(cartItems);
  const [count, setCount] = useState(0);
  // console.log(loginData.name)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status == 200) {
      setData(
        response.data.map((e) => {
          return { ...e, qty: 1, price: e.price * 10 };
        })
      );
      // console.log(response.data)
    }
  };
  const addItems = (each) => {
    setCount(count + 1);
    let c = 0;
    if (items.length > 0) {
      let i = items.map((e) => {
        if (e.id == each.id) {
          c++;
          return { ...e, qty: e.qty + 1 };
        } else {
          return e;
        }
      });
      if (c == 0) {
        setItems([...items, each]);
      } else {
        setItems([...i]);
      }
    } else {
      setItems([...items, each]);
    }
  };
  const filterItems = async (type) => {
    if (type != "All") {
      let p = await axios.get(
        `https://fakestoreapi.com/products/category/${type}`
      );
      if (p.status == 200) {
        setData(
          p.data.map((e) => {
            return { ...e, qty: 1, price: e.price * 10 };
          })
        );
      }
    } else {
      //   let p=await axios.get(`https://fakestoreapi.com/products`);
      // setData(p.data)
      fetchData();
    }
  };
  return (
    <>
      {/* <NavBar count={count} /> */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          backgroundColor: "white",
          top: "0",
          height: "100px",
          width: "100%",
          boxShadow:"10px 0 10px grey"
        }}
      >
        <h1>Online Shopping Website</h1>
        
        
      </div> */}
      <br />
      <br />
      {/* <br /> */}
      {/* <br />
        <br /> */}
      <div
        style={{
          display: "flex",
          backgroundColor: "#a94ebf",
          height: "50px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <marquee direction="left">
          <div
            style={{
              display: "flex",
              backgroundColor: "#a94ebf",
              height: "50px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <li style={{ fontSize: "20px" }}>Offers&nbsp;&nbsp;</li>
            <li style={{ fontSize: "20px" }}>
              5% off Below Rs.500&nbsp;&nbsp;
            </li>
            <li style={{ fontSize: "20px" }}>
              7% off Rs.501-Rs.1500&nbsp;&nbsp;
            </li>
            <li style={{ fontSize: "20px" }}>
              10% off Rs.1501-Rs.5000&nbsp;&nbsp;
            </li>
            <li style={{ fontSize: "20px" }}>
              15% off Rs.5001-Rs.10000&nbsp;&nbsp;
            </li>
            <li style={{ fontSize: "20px" }}>
              20% off Above 10000&nbsp;&nbsp;
            </li>
          </div>
        </marquee>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ marginLeft: "30px" }}>Online Shopping Website</h1>
        <h1 style={{ marginRight: "30px" }}>Welcome {loginData.name}</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>filter-</h4>
        <p
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={() => filterItems("All")}
        >
          All
        </p>
        <p
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={() => filterItems("jewelery")}
        >
          Jewellery
        </p>
        <p
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={() => filterItems("electronics")}
        >
          Electronics
        </p>
        <p
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={() => filterItems("men's clothing")}
        >
          Men Cloths
        </p>
        <p
          style={{
            backgroundColor: "blue",
            borderRadius: "5px",
            color: "white",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={() => filterItems("women's clothing")}
        >
          WoMen Cloths
        </p>
      </div>
      {data.length > 0 ? (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {data.map((each, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "400px",
                    // width:"300px",
                    border: "1px solid",
                    boxShadow: "0px 0px 10px grey",
                    borderRadius: "10px",
                    padding: "10px",
                    textDecoration: "none",
                  }}
                >
                  <Link to={"/product/"}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        // height: "400px",
                        // border: "1px solid",
                        // boxShadow: "0px 0px 10px grey",
                        borderRadius: "10px",
                        padding: "10px",
                        textDecoration: "none",
                      }}
                      onClick={() => setProduct(each)}
                    >
                      <h4
                        style={{
                          height: "20px",
                          textDecoration: "none",
                          textAlign: "center",
                        }}
                      >
                        {each.title}
                      </h4>
                      <img src={each.image} height={200} width={200} alt="" />
                      {/* <p>description:{each.description}</p> */}
                      <h5
                        style={{ textDecoration: "none", textAlign: "center" }}
                      >
                        Price:Rs.{Math.round(each.price)}
                      </h5>
                    </div>
                  </Link>
                  <button
                    className="cartButton"
                    onClick={() => addItems(each)}
                    style={{
                      width: "50%",
                      height: "40px",
                      backgroundColor: "yellowgreen",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Loading....</h1>
      )}
    </>
  );
};

export default Shopping;
