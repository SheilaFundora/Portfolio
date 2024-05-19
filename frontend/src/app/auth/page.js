"use client"
import React, {useEffect, useState} from "react";
import Loading from "@/components/Portfolio/other/Loading";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {routesAuth} from "@/constants/apiRoutesAuth";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  useEffect( () => {
    return router.push('/auth/login');
  }, [])


  return (
    <div className={'pt-5 mx-auto text-center'}>
      <Image
        src={'/img/favorite.jpg'}
        alt={'Logotipo'}
        width={100}
        height={100}
      />
      <Loading infoText={'Cargando ...'}/>
    </div>
  );
}
