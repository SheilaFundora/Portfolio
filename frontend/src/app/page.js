"use client"
import React, {useEffect, useState} from "react";
import Loading from "@/components/Loading";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect( () => {
        return router.push('/portfolio');
    }, [])

    return (
      <Loading infoText={'Loading ...'}/>
    );
}
