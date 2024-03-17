import JobCard from "@/app/components/CardComponents/JobCard";
import React from "react";

const ITNew = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col items-center justify-center p-3">
        <h1 className="text-2xl font-bold mb-4 text-center">USEFUL CONTENTS</h1>
        <div className="flex items-center justify-between gap-10">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </section>
    </>
  );
};

export default ITNew;
