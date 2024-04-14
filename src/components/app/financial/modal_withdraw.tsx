import { ModalBase } from "@/components/global/modal_base";
import Image from "next/image";
import { useState } from "react";

interface ModalWithdrawProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function ModalWithdraw({
  showModal,
  handleCloseModal,
}: ModalWithdrawProps) {
  const [isWithdrawDone, setIsWithdrawDone] = useState(false);

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
      {isWithdrawDone ? (
        <>
          <Image
            src="/Logos/truelife_light.svg"
            alt=""
            width={300}
            height={80}
            className="w-full"
          />
          <div className="flex flex-col gap-4 items-center">
            <div className="w-full flex justify-center">
              <strong className="text-3xl text-zinc-700">
                Retirada Aprovada
              </strong>
              <Image
                src="/Icons/info.svg"
                alt=""
                width={20}
                height={20}
                className="self-start"
              />
            </div>
            <Image
              src="/Icons/approved.svg"
              alt=""
              width={300}
              height={300}
              className="w-full lg:w-1/2"
            />

            <button className="w-full border-2 border-[#0D123C] rounded-lg text-[#0D123C] p-2">
              Retornar a Plataforma
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full items-center gap-4">
            <Image
              src="/Icons/income_green.svg"
              alt=""
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-1 px-2 py-1 rounded-lg bg-green-700 text-white">
              <span className="text-sm">Seu Saldo:</span>
              <strong className="text-lg">R$ 17.357,19</strong>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full text-black">
            <div className="flex flex-col gap-2 text-center">
              <strong className="text-xl leading-3">Fazer Retirada</strong>
              <span className="text-sm">
                Digite o PIX ou Busque pelos Salvos:
              </span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-black">Seu PIX</label>
              <input
                className="w-full border border-zinc-500 rounded h-12 p-2"
                placeholder="Digite"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-black">Insira seu CPF</label>
              <input
                className="w-full border border-zinc-500 rounded h-12 p-2"
                placeholder="Digite"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm text-black">Insira a Data</label>
              <input
                className="w-full border border-zinc-500 rounded h-12 p-2"
                placeholder="Digite"
              />
            </div>
            <button className="w-full bg-[#0D123C] rounded-lg p-2 text-white font-semibold">
              Fazer Retirada
            </button>
          </div>
        </>
      )}
    </ModalBase>
  );
}
