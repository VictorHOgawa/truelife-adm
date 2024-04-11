import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  fadeOut: any;
}

export function Sidebar({ fadeOut }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="hidden lg:flex flex-col w-52 gap-20 bg-black">
      <Image
        src="/Logos/truelife.svg"
        alt=""
        width={300}
        height={150}
        className="w-3/4 mx-auto mt-10"
      />
      <div className="flex flex-col gap-10 text-xl text-white font-semibold">
        <div
          className={`w-full flex items-center cursor-pointer gap-4 py-2 pl-4 ${
            pathname === "/" ? "bg-zinc-800" : "bg-transparent opacity-40"
          } hover:bg-zinc-700`}
          onClick={() => router.push("/")}
        >
          <Image src="/Icons/home.svg" alt="" width={30} height={30} />
          <span>Home</span>
        </div>
        <div
          className={`w-full flex items-center cursor-pointer gap-4 py-2 pl-4 ${
            pathname === "/financial"
              ? "bg-zinc-800"
              : "bg-transparent opacity-40"
          } hover:bg-zinc-700`}
          onClick={() => router.push("/financial")}
        >
          <Image src="/Icons/home.svg" alt="" width={30} height={30} />
          <span>Financeiro</span>
        </div>
        <div
          className={`w-full flex items-center cursor-pointer gap-4 py-2 pl-4 ${
            pathname === "/news" ? "bg-zinc-800" : "bg-transparent opacity-40"
          } hover:bg-zinc-700`}
          onClick={() => router.push("/news")}
        >
          <Image src="/Icons/home.svg" alt="" width={30} height={30} />
          <span>Novidades</span>
        </div>
        <div
          className={`w-full flex items-center cursor-pointer gap-4 py-2 pl-4 ${
            pathname === "/profile"
              ? "bg-zinc-800"
              : "bg-transparent opacity-40"
          } hover:bg-zinc-700`}
          onClick={() => router.push("/profile")}
        >
          <Image src="/Icons/home.svg" alt="" width={30} height={30} />
          <span>Perfil</span>
        </div>
      </div>
      {/* <LinkComponent
          fadeOut={() => fadeOut()}
          name="Financeiro"
          imgSrc={<FinancialSVG />}
          href="/financeiro"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Novidades"
          imgSrc={<NotificationSVG />}
          href="/news-central"
        />
        <LinkComponent
          fadeOut={() => fadeOut()}
          name="Meu Perfil"
          imgSrc={<ProfileSVG />}
          href="/profile"
        /> */}
    </div>
  );
}
