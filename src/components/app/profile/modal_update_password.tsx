import { ModalBase } from "@/components/global/modal_base";
import Image from "next/image";
import { useState } from "react";

interface ModalUpdatePasswordProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function ModalUpdatePassword({
  showModal,
  handleCloseModal,
}: ModalUpdatePasswordProps) {
  const [isUpdatePasswordDone, setIsUpdatePasswordDone] = useState(false);

  return (
    <ModalBase showModal={showModal} handleCloseModal={handleCloseModal}>
      <Image
        src="/Icons/x.svg"
        alt=""
        width={20}
        height={20}
        className="absolute right-4 top-4 cursor-pointer"
        onClick={handleCloseModal}
      />
      {isUpdatePasswordDone ? (
        <>
          <Image
            src="/Icons/approved.svg"
            alt=""
            width={300}
            height={300}
            className="w-full lg:w-1/3"
          />
          <div className="flex flex-col gap-4 w-full text-black">
            <div className="flex flex-col gap-2 text-center">
              <strong className="text-xl leading-3">Senha Alterada!</strong>
              <span className="text-sm">
                Sua senha foi alterada com sucesso, parabéns!
              </span>
            </div>
            <button className="w-full bg-[#0D123C] rounded-lg p-2 text-white font-semibold">
              Finalizar
            </button>
          </div>
        </>
      ) : (
        <>
          <Image
            src="/Icons/update_password.svg"
            alt=""
            width={300}
            height={300}
            className="w-1/3"
          />
          <div className="flex flex-col gap-4 w-full text-black">
            <div className="flex flex-col gap-2 text-center">
              <strong className="text-xl leading-3">Atualizar Senha</strong>
              <span className="text-sm">
                Digite o CNPJ ou Busque pelo nome.
              </span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-black">Senha Atual</label>
              <input
                className="w-full border border-zinc-500 rounded h-12 p-2"
                placeholder="Digite"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-black">Nova Senha</label>
              <input
                className="w-full border border-zinc-500 rounded h-12 p-2"
                placeholder="Digite"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-black">Repetir Senha</label>
              <input
                className="w-full border border-zinc-500 rounded h-12 p-2"
                placeholder="Digite"
              />
            </div>
            <button className="w-full bg-[#0D123C] rounded-lg p-2 text-white font-semibold">
              Atualizar Senha
            </button>
          </div>
        </>
      )}
    </ModalBase>
  );
}
