import React from "react";
import Navbar from "../navigation/Navbar";
export default function MainLayout({ children }) {
  return (
    <>
      <main className="flex-shrink-0">
        <Navbar />
       {children}
      </main>
    </>
  );
}
