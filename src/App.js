import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "./App";
import BaseLayout from "./componentsa/BaseLayout/BaseLayout";
import AllProducts from "./componentsa/individualComponents/AllProducts/AllProduct";
import Cart from "./componentsa/individualComponents/Cart/Cart";
import Clothes from "./componentsa/individualComponents/Clothes/Clothes";
import MenProducts from "./componentsa/individualComponents/MenProducts/MenProducts";
import WomenProducts from "./componentsa/individualComponents/WomenProducts/WomenProducts";
import Accessories from "./componentsa/individualComponents/Accessories/Accessories";

function App() {
  return (
    <>
      {/*       <p>hi</p>
       */}{" "}
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/women" element={<WomenProducts />} />
            <Route path="/men" element={<MenProducts />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/accessories" element={<Accessories />} />
          </Routes>
        </BaseLayout>
      </BrowserRouter>{" "}
      {/*} <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route exact path="/" component={<AllProducts />} />
{/*             <Route path="/cart" component={<Cart />} />
            <Route path="/women" component={<WomenProducts />} />
            <Route path="/men" component={<MenProducts />} />
            <Route path="/clothes" component={<Clothes />} />
            <Route path="/accessories" component={<Accessories />} /> */}
      {/*           </Routes>
        </BaseLayout>
      </BrowserRouter> */}
      {/*<BaseLayout>
       <p>base Layout</p>
       <div style={{backgroundColor:"red"}}>
       <h1>All products</h1>
       <AllProducts/>
       </div>
       <div style={{backgroundColor:"yellow"}}>
       <h1>Men products</h1>
       <MenProducts/>
       </div>
       <div style={{backgroundColor:"yellowgreen"}}>
       <h1>Women products</h1>
       <WomenProducts/>
       </div>
       <div style={{backgroundColor:"pink"}}>
       <h1>Accessories</h1>
       <Accessories/>
       </div>
       <div style={{backgroundColor:"violet"}}>
       <h1>Clothes</h1>
       <Clothes/>
       </div>
       </BaseLayout>
      {/*     <BrowserRouter>
        <BaseLayout>
        <Routes>
        <Route exact path="/" component={<AllProducts/>} />
        <Route exact path="/" component={<AllProducts/>} />
        <Route exact path="/" component={<AllProducts/>} />

          <p>hello baseLayout</p>
          </Routes>
        </BaseLayout>
      </BrowserRouter> */}
      {/*       <BrowserRouter>
      <BaseLayout>
      <
      </BaseLayout>
      </BrowserRouter>
 */}{" "}
      {/*  <BrowserRouter>
      <BaseLayout>
      <Routes>
        <Route exact path="/" component={Home/}/>
      </Routes>
      </BaseLayout>
      </BrowserRouter> */}
    </>
  );
}

export default App;
