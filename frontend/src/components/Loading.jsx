import React from 'react'
import { CircularProgress } from '@mui/material'
import Image from "next/image";

const Loading = ({ infoText }) => {
    return (
      <div className='container mt-5 pt-5 mx-auto text-center'>
        <Image
          src={'/img/favorite.jpg'}
          alt={'Logotype'}
          width={100}
          height={100}
          priority
        />
        <div
          className='d-flex gap-4 flex-column mt-5 mx-auto align-content-center align-items-center justify-content-center'>
          <h4>{infoText}...</h4>
          <CircularProgress/>
        </div>
      </div>
    )
}

export default Loading
