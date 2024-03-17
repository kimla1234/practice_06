import ITCard from "@/app/components/CardComponents/ITCard";
import React from "react";

const ITNew = () => {
  return (
    <>
    
    <section className="container mx-auto flex flex-col items-center justify-center p-3">
    <h1 className="text-2xl font-bold mb-4">USEFUL CONTENTS</h1>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
        <ITCard />
      </div>
      </section>
    </>
  );
};

export default ITNew;
