import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./layouts";
import store from "./core/store/store";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Product from "./pages/Products";
import ProductDetal from "./pages/Products/ProductDetail";
import Marketplace from "./pages/Marketplace";
import MarketProducts from "./pages/Marketplace/marketproducts";
import NFTProductDetail from "./pages/Marketplace/NFTProductDetail";
import ProductFilterModal from "./pages/Marketplace/ProductfilterModal";
import Blog from "./pages/Blog";
import Gameplays from "./pages/Gameplay";
import Shoppingcart from "./pages/shopcart";
import StayTuned from "./pages/Upcoming/StayTuned";
import ComingYellow from "./pages/Upcoming/ComingYellow";
import ComingTimer from "./pages/Upcoming/ComingTimer";
import ComingSoon from "./pages/Upcoming/ComingSoon";
import AuthProvider from "./context/AuthProvider";
// const container = document.getElementById('root');
// // Create a root.
// const root = ReactDOM.createRoot(container);
ReactDOM.render(
  <AuthProvider>
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="map" element={<Map />} />
          <Route path="product" element={<Product />} />
          <Route path="product/detail/:id" element={<ProductDetal />} />

          <Route path="marketplace" element={<Marketplace />} />
          <Route path="marketplace/mproduct" element={<MarketProducts />} />
          <Route
            path="marketplace/productdetail/:id"
            element={<NFTProductDetail />}
          />
          <Route
            path="marketplace/ProductFilterModal"
            element={<ProductFilterModal />}
          />
          <Route path="News" element={<Blog />} />
          <Route path="gameplay" element={<Gameplays />} />
          <Route path="shopcart" element={<Shoppingcart />} />
          <Route path="stay" element={<ComingSoon />} />
          <Route path="swap" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Provider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
