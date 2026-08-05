"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import PromoSlider from "@/components/home/PromoSlider";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Benefits from "@/components/home/Benefits";
import Footer from "@/components/layout/Footer";

import CartButton from "@/components/cart/CartButton";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Home() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <Navbar />

      <main className="bg-white">

        <Hero />

        <PromoSlider />

        <Categories />

        <FeaturedProducts />

        <Benefits />

      </main>

      <Footer />

      <CartButton
        onClick={() => setOpenCart(true)}
      />

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
      />

    </>
  );
}