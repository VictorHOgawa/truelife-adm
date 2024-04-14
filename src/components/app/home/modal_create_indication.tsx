import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";

interface ModalCreateIndicationProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function ModalCreateIndication({
  showModal,
  handleCloseModal,
}: ModalCreateIndicationProps) {
  const [isCreateIndicationDone, setIsCreateIndicationDone] = useState(true);
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      <Modal.Body>
        <div
          className={`w-full ${
            isCreateIndicationDone && "lg:w-1/2"
          } h-full mx-auto min-h-[30vh] flex flex-col p-4 gap-10 justify-between text-black`}
        >
          <Image
            src="/Icons/x.svg"
            alt=""
            width={20}
            height={20}
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleCloseModal}
          />
          {isCreateIndicationDone ? (
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
              <strong className="text-2xl text-zinc-700 self-start">
                Cadastre uma Indicação
              </strong>
              <div className="flex w-full items-center gap-20">
                <div className="flex flex-col w-1/3 gap-4">
                  <Image
                    src="/Icons/create.svg"
                    alt=""
                    width={300}
                    height={300}
                    className="w-full"
                  />
                  <button className="bg-green-600 text-white px-2 py-1 rounded-lg">
                    Logo ou Foto
                  </button>
                </div>
                <div className="flex flex-col w-full gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-black">
                      Nome da Empresa
                    </label>
                    <input
                      className="w-full border border-black rounded h-12 p-2"
                      placeholder="Digite"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm text-black">
                      Nome do Representante
                    </label>
                    <input
                      className="w-full border border-black rounded h-12 p-2"
                      placeholder="Digite"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between gap-10">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-black">
                    Telefone de Contato
                  </label>
                  <input
                    className="w-full border border-black rounded h-12 p-2"
                    placeholder="Digite"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-sm text-black">CNPJ da Empresa</label>
                  <input
                    className="w-full border border-black rounded h-12 p-2"
                    placeholder="Digite"
                  />
                </div>
              </div>
              <button className="flex items-center mx-auto gap-2 bg-green-700 text-white px-3 py-2 rounded-lg">
                <Image src="/Icons/add.svg" alt="" width={30} height={30} />
                <span>Cadastrar Indicação</span>
              </button>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
