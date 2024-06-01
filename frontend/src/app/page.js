"use client"
import React, {useEffect, useState} from "react";
import Loading from "@/components/Portfolio/other/Loading";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect( () => {
        return router.push('/portafolio');
    }, [])

    return (
      <Loading infoText={'Loading ...'}/>
    );
}
