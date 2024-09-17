import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const productCard = () => {
  return (
    <div className="container flex flex-col md:flex-row">
      <Image
        src="/images/image-product-desktop.jpg"
        alt="card pic"
        width={300}
        height={600}
        className="rounded-l-lg "
      />
      <div className="bg-white w-[300px] rounded-r-lg pl-6">
        <h6 className="text-zinc-400 mt-6 tracking-widest">PURFUME</h6>
        <h2 className="font-bold text-4xl mt-2 font-Montserrat">
          Gabrielle Essence Eau De Parfum
        </h2>

        <p className="text-zinc-400 mt-6 text-sm w-[80%] text-left">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex justify-start mt-6 items-center">
          <span className="text-green-800 font-bold text-4xl mr-4">
            $149.99
          </span>
          <span className="line-through">$169.99</span>
        </div>
        <button className=" flex justify-center items-center py-2 mt-4 bg-green-700 rounded-lg text-white w-[80%] text-center">
          <span>
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default productCard;
