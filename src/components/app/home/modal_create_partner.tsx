import { ModalBase } from "@/components/global/modal_base";
import Image from "next/image";
import { useState } from "react";

interface ModalCreatePartnerProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function ModalCreatePartner({
  showModal,
  handleCloseModal,
}: ModalCreatePartnerProps) {
  const [isCreatePartnerDone, setIsCreatePartnerDone] = useState(false);

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
      {isCreatePartnerDone ? (
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
                Cadastro Aprovado
              </strong>
              <Image
                src="/Icons/info.svg"
                alt=""
                width={20}
                height={20}
                className="self-start"
              />
            </div>
            <span className="text-zinc-500 text-xl text-center leading-5">
              Clique Aqui para Copiar o Código e Envie para Seu Parceiro se
              Registrar*
            </span>
            <Image
              src="/Icons/approved.svg"
              alt=""
              width={300}
              height={300}
              className="w-full lg:w-1/2"
            />
            <button className="w-2/3 bg-[#0D123C] rounded-lg p-2 text-white text-2xl tracking-widest font-bold">
              4489
            </button>
            <button className="w-full border-2 border-[#0D123C] rounded-lg text-[#0D123C] p-2">
              Retornar a Plataforma
            </button>
          </div>
        </>
      ) : (
        <>
          <Image
            src="/Icons/create.svg"
            alt=""
            width={300}
            height={300}
            className="w-1/3"
          />
          <div className="flex flex-col gap-4 w-full text-center">
            <div className="flex flex-col gap-2">
              <strong className="text-2xl">Cadastre um Parceiro</strong>
              <span className="text-zinc-500">Digite o CNPJ ou CPF</span>
            </div>
            <div className="flex items-center w-full md:w-60 lg:w-80 gap-2 pl-4 pr-2 py-2 rounded bg-zinc-100">
              <Image src="/Icons/search.svg" alt="" width={15} height={15} />
              <input
                placeholder="Adicionar CNPJ ou CPF"
                className="w-full h-full bg-transparent outline-none text-black"
              />
            </div>
            <button className="flex items-center mx-auto gap-2 bg-green-700 text-white px-3 py-2 rounded-lg">
              <Image src="/Icons/add.svg" alt="" width={30} height={30} />
              <span>Cadastrar Parceiro</span>
            </button>
          </div>
        </>
      )}
    </ModalBase>
  );
}
