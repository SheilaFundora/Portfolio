"use client"
import React, {useEffect, useState} from "react";
import Loading from "@/components/Loading";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect( () => {
    return router.push('/auth/login');
  }, [])


  return (
      <Loading infoText={'Cargando ...'}/>
  );
}
