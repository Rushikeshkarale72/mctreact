import { createContext, useState, useEffect } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Users from "./Components/User/Users";
import Contact from "./Components/ContactUs/Contact";
import ProductDetails from "./Components/Product Details/ProductDetails";

export const Global = createContext();

function App() {
  const [showPage, setShowPage] = useState(false);
  const [leftData, setLeftData] = useState("");
  const [rightData, setRightData] = useState("");
  const [listData,setListData] = useState("");
  const[item,setItem] = useState("");
  const [target,setTarget] = useState("");
  const [userData,setUserData] = useState("");


  useEffect(() => {
    leftPanel();
    showData();
    userDataFn()
  }, []);

  const leftPanel = async () => {
    const api = await fetch("https://fakestoreapi.com/products/categories");
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setLeftData(jsonData);
    console.log(leftData, jsonData);
  };

  const showData = async (ele) => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${ele ? ele : "electronics"}`
    );
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setRightData(jsonData);
  };


  const userDataFn = async () => {
    const api = await fetch(
      `https://randomuser.me/api/?gender=all&results=500`
    );
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setUserData(jsonData);
    console.log("hello");
  }

  const obj = {
    leftData: leftData,
    setLeftData: setLeftData,
    rightData: rightData,
    setRightData: setRightData,
    listData:listData,
    setListData:setListData,
    item:item,
    setItem:setItem,
    showData:showData,
    target:target,
    setTarget:setTarget,
    userData:userData,
    setUserData:setUserData,
  };

  return (
    <div className="App">
      <Global.Provider value={obj}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login showPage={showPage} setShowPage={setShowPage} />}
          />
          <Route
            path="/login"
            element={<Login showPage={showPage} setShowPage={setShowPage} />}
          />

          {showPage && <Route path="/home" element={<Home />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </Router>
      </Global.Provider>
    </div>
  );
}

export default App;