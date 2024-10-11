import Footer from "@/components/(Landing)/Footer";
import { NavBar } from "@/components/NavBar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
