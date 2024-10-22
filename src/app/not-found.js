import React from "react";

import PageTitle from "./components/PageTitle";

import Link from "next/link";
import Button from "./components/ui/Button";

const NotFound = () => {
  return (
    <>
      <PageTitle title={"404 - خطأ"} />
      <section className="container mx-auto text-center my-10 ">
        <h2 className="text-9xl font-[1000] text-primary my-10">4 0 4</h2>
        <p className="text-xl font-normal mb-5">
          نأسف ولكن يبدو أننا لا نستطيع العثور على الصفحة التي طلبتها. قد يكون
          السبب هو أنك كتبت عنوان الويب بشكل غير صحيح.
        </p>
        <Link href={"/"}>
          <Button>Back To Home</Button>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
