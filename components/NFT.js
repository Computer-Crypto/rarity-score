import React from "react";
import { formatIpfsUrl, ipfs2http } from "../util";

export const NFT = (nft) => {
  return (
    <>
      <a
        className="text-left w-24
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/${nft.id}+1`}
      >
        <img
          src={formatIpfsUrl(nft.image, nft.id)}
          className="rounded-md h-auto bg-black"
        />
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-600">#{nft.id + 1}</h3>
        </div>
      </a>
    </>
  );
};
