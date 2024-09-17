import Image from "next/image";
import ProductCard from "@/components/product-card";
import { Montserrat } from "next/font/google";
import next from "next";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-neutral-300 h-screen">
      <ProductCard />
    </div>
  );
}
