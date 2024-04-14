import { ModalBase } from "@/components/global/modal_base";
import Image from "next/image";

interface ModalWelcomeProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function ModalWelcome({
  showModal,
  handleCloseModal,
}: ModalWelcomeProps) {
  return (
    <ModalBase showModal={showModal} handleCloseModal={handleCloseModal}>
      <Image
        src="/Logos/truepartner.svg"
        alt=""
        width={300}
        height={80}
        className="w-full"
      />
      <div className="flex flex-col gap-4">
        <strong className="text-2xl text-center">
          Seja Bem Vindo Novamente
        </strong>
        <span className="text-zinc-500 text-lg leading-4 font-semibold">
          Existem Novidades da Truelife que faz sentido você estar por dentro:
        </span>
        <ul className="text-zinc-500 self-start">
          <li>Sua Receita Aumentou</li>
          <li>Sua Receita Aumentou</li>
          <li>Sua Receita Aumentou</li>
        </ul>
      </div>
      <button className="flex items-center gap-2 bg-green-700 text-white px-3 py-2 rounded-lg">
        <Image src="/Icons/add.svg" alt="" width={30} height={30} />
        <strong>Para Ficar por Dentro: {""}</strong>
        <span>Clique Aqui</span>
      </button>
    </ModalBase>
  );
}
