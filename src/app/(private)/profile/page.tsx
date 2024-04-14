"use client";

import Image from "next/image";
import MainLayout from "../Layout";
import { ModalUpdatePassword } from "@/components/app/profile/modal_update_password";
import { useState } from "react";
import { ModalDeleteAccount } from "@/components/app/profile/modal_delete_account";

export default function Profile() {
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  return (
    <MainLayout>
      <div className="w-full lg:w-[calc(100%-13rem)] min-h-screen lg:max-h-screen bg-zinc-200 flex flex-col p-4">
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-10">
          <div className="flex w-full items-center justify-between">
            <span className="text-black text-xl font-semibold">Meu Perfil</span>
            <button
              onClick={() => setShowUpdatePasswordModal(true)}
              className="bg-[#0d123c] text-white rounded-lg px-4 py-2"
            >
              Trocar Senha
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="flex flex-col self-center lg:self-auto gap-2">
              <Image
                src="/Icons/user_placeholder.svg"
                alt=""
                width={100}
                height={100}
                className="w-full"
              />
              <div className="flex items-center gap-2">
                <Image src="/Icons/edit.svg" alt="" width={20} height={20} />
                <span className="text-[#2f5cfc]">Substituir</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 justify-between w-full lg:w-3/4 mx-auto p-4 border-b pb-10 border-b-zinc-300">
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">
                    Nome Completo
                  </label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">Seu CPF</label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">Email</label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">
                    Data de Nascimento
                  </label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">Telefone</label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-4 w-1/3 items-start">
                  <label className="text-black font-semibold">Sexo</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input type="radio" className="w-full h-full" />
                      <label className="text-black">Feminino</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" className="w-full h-full" />
                      <label className="text-black">Feminino</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-between lg:w-3/4 mx-auto p-4">
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">
                    Nome Completo
                  </label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">Seu CPF</label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col gap-2 w-full lg:w-1/3">
                  <label className="text-black font-semibold">Email</label>
                  <input className="w-full h-8 p-2 rounded border border-zinc-300 outline-none text-black" />
                </div>
                <div className="flex flex-col w-full lg:w-1/3 mt-8">
                  <button className="w-full h-8 px-2 rounded text-white bg-zinc-300">
                    Atualizar Cadastro
                  </button>
                  <button
                    onClick={() => setShowDeleteAccountModal(true)}
                    className="flex items-center gap-1 self-end text-[#c22222] text-xs mt-1"
                  >
                    <Image
                      src="/Icons/delete.svg"
                      alt=""
                      width={15}
                      height={15}
                    />
                    <span>Excluir cadastro?</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalUpdatePassword
        showModal={showUpdatePasswordModal}
        handleCloseModal={() => setShowUpdatePasswordModal(false)}
      />
      <ModalDeleteAccount
        showModal={showDeleteAccountModal}
        handleCloseModal={() => setShowDeleteAccountModal(false)}
      />
    </MainLayout>
  );
}
