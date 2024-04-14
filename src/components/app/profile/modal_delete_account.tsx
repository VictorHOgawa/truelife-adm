import { ModalBase } from "@/components/global/modal_base";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-bootstrap";

interface ModalDeleteAccountProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

export function ModalDeleteAccount({
  showModal,
  handleCloseModal,
}: ModalDeleteAccountProps) {
  const [accountAction, setAccountAction] = useState("");
  return (
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
      <Modal.Body>
        <div className="w-full lg:w-2/3 h-full mx-auto min-h-[30vh] flex flex-col p-4 gap-10 items-center justify-between text-black">
          <Image
            src="/Icons/x.svg"
            alt=""
            width={20}
            height={20}
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleCloseModal}
          />
          {accountAction === "" ? (
            <>
              <Image
                src="/Icons/warning_delete_account.svg"
                alt=""
                width={300}
                height={300}
                className="w-full lg:w-1/4"
              />
              <div className="flex flex-col gap-4 w-full text-black">
                <div className="flex flex-col gap-2 text-center">
                  <strong className="text-xl leading-4">
                    Tem certeza que deseja excluir sua conta?
                  </strong>
                  <span className="text-sm">
                    Você pode apenas bloquear para deixar de receber
                    atualizações e mensagens. Com a exclusão, todos seu
                    histórico na plataforma e suas informações e conta serão
                    totalmente apagadas.
                  </span>
                </div>
                <button
                  onClick={() => setAccountAction("block")}
                  className="w-full bg-[#0D123C] rounded-lg p-2 text-white font-semibold"
                >
                  Bloquear Conta
                </button>
                <button
                  onClick={() => setAccountAction("delete")}
                  className="w-full border border-zinc-500 rounded-lg p-2 text-zinc-500 font-semibold"
                >
                  Excluir Conta
                </button>
              </div>
            </>
          ) : accountAction === "delete" ? (
            <>
              <Image
                src="/Icons/delete_account.svg"
                alt=""
                width={300}
                height={300}
                className="w-full lg:w-1/4"
              />
              <div className="flex flex-col gap-4 w-full text-black">
                <div className="flex flex-col gap-2 text-center">
                  <strong className="text-xl leading-4">
                    Confirme a exclusão da sua conta
                  </strong>
                  <span className="text-sm">
                    Ao excluir sua conta você perde automaticamente o acesso a
                    conta, e para acessa a plataforma novamente você deve
                    realizar uma nova assinatura. Tem certeza dessa decisão?
                  </span>
                </div>
                <button className="w-full bg-[#0D123C] rounded-lg p-2 text-white font-semibold">
                  Excluir Conta
                </button>
                <button
                  onClick={() => setAccountAction("")}
                  className="w-full border border-zinc-500 rounded-lg p-2 text-zinc-500 font-semibold"
                >
                  Cancelar
                </button>
              </div>
            </>
          ) : (
            <>
              <Image
                src="/Icons/block_account.svg"
                alt=""
                width={300}
                height={300}
                className="w-full lg:w-1/4"
              />
              <div className="flex flex-col gap-4 w-full text-black">
                <div className="flex flex-col gap-2 text-center">
                  <strong className="text-xl leading-4">
                    Confirme o bloqueio da sua conta
                  </strong>
                  <span className="text-sm">
                    Ao bloquear a conta você perde automaticamento o acesso a
                    conta e para acessar a conta novamente você deve acionar o
                    nosso email suporte@axion.com.br , tem certeza dessa
                    decisão?
                  </span>
                </div>
                <button className="w-full bg-[#0D123C] rounded-lg p-2 text-white font-semibold">
                  Bloquear Conta
                </button>
                <button
                  onClick={() => setAccountAction("")}
                  className="w-full border border-zinc-500 rounded-lg p-2 text-zinc-500 font-semibold"
                >
                  Cancelar
                </button>
              </div>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
