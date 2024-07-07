'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {store} from "@/redux/store";
import {Provider} from "react-redux";

export default function PortFolioLayout({ children }) {
  return (
      <Provider store={store}>
          <Header/>
            {children}
          <Footer/>
      </Provider>
  );
}
