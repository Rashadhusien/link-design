import Image from "next/image";

function Test() {
  return (
    <div className="bg-primary w-full h-full fixed top-0 left-0 z-50 ">
      <div className="w-[200] h-[200] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
        <div className="border-2 border-whitep rounded-full animate-bounce">
          <Image
            src={"/preloader.png"}
            alt="preload"
            width={100}
            height={100}
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
