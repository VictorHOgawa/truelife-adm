import Image from "next/image";

export function HeaderBar() {
  return (
    <div className="lg:hidden w-full h-10 flex items-center py-1 px-4 bg-black">
      <Image src="/Icons/menu.svg" width={30} height={30} alt="" />
      <Image
        src="/Logos/truelife.svg"
        width={300}
        height={80}
        alt=""
        className="h-[90%]"
      />
    </div>
  );
}
