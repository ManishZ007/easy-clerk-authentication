import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-center">
        <SignIn />
      </div>
    </section>
  );
};

export default Page;
