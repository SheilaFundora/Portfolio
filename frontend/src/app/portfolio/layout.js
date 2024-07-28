'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, {useEffect} from "react";
import {store} from "@/redux/store";
import {Provider, useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {images_end, user_end} from "@/constants/endpoints";
import {createUserRedux} from "@/redux/features/auth/personSlice";
import Loading from "@/components/Loading";
import {createImagesRedux} from "@/redux/features/auth/imagesSlice";

function InnerLayout({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.person);

  useEffect(() => {
    async function fetchData() {
      const username = process.env.NEXT_PUBLIC_USERNAME

      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_HOST + user_end + '/' + username + '/'
        );
        if (response.data && typeof response.data === 'object' && Object.keys(response.data).length > 0) {
          dispatch(createUserRedux({ user: response.data }));
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_HOST + images_end +  '/user/' + username  + '/'
        );
        if (response.data && typeof response.data === 'object' && Object.keys(response.data).length > 0) {
          dispatch(createImagesRedux({ img: response.data }));
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [dispatch]);

  if (!user) {
    return <Loading infoText={'Loading ...'} />;
  }

  return (
    <>
      {children}
    </>
  );
}



export default function PortFolioLayout({ children }) {
  return (
      <Provider store={store}>
        <InnerLayout>
          <Header/>
          {children}
          <Footer/>
        </InnerLayout>
      </Provider>
  );
}
