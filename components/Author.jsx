/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        alt={author.name}
        unoptimized
        width={100}
        height={100}
        className="align-middle rounded-full mx-auto"
        style={{ position: "relative", top: "-50%" }}
        src={author.photo.url}
      />

    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);
}

export default Author