"use client";

import Image from "next/image";
import MainLayout from "../Layout";

export default function Financial() {
  const financialData = [
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
    {
      date: "05 Nov, 2023",
      description: "Saque via PIX",
      value: "R$ 1.550,00",
      status: "PAGO",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full lg:w-[calc(100%-13rem)] min-h-screen lg:max-h-screen bg-zinc-200 flex flex-col p-4">
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-2">
          <span className="lg:hidden text-black text-xl font-semibold">
            Financeiro
          </span>
          <div className="flex flex-col-reverse lg:flex-row w-full gap-4 items-center justify-between border-b border-b-zinc-300 pb-10">
            <div className="flex flex-col gap-10">
              <span className="hidden lg:block text-black text-xl font-semibold">
                Financeiro
              </span>
              <div className="flex">
                <div className="flex justify-between items-center border border-zinc-300 rounded-l-lg py-4 px-8 text-black">
                  <div className="flex flex-col gap-2 text-center">
                    <span>Disponível para Retirada:</span>
                    <strong className="text-xl">05 Dez, 2023</strong>
                  </div>
                </div>
                <div className="flex justify-between items-center border border-zinc-300 rounded-r-lg py-4 px-8 text-black">
                  <button className="bg-green-700 px-6 py-2 rounded text-white">
                    Fazer Retirada
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-32 gap-2 p-4 rounded-lg shadow-[5px_5px_5px_rgba(0,0,0,0.25)] shadow-zinc-600 text-white text-center items-center justify-between bg-[#1f932d] lg:mr-10">
              <Image src="/Icons/income.svg" alt="" width={50} height={50} />
              <div className="flex flex-col items-center gap-2 justify-center h-full">
                <span className="font-semibold leading-4">
                  Total de sua Receita:
                </span>
                <strong className="text-xl">R$17.357,19</strong>
                <span className="text-sm">Disponível para Saque</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <span className="text-black text-xl font-semibold">
              Seu Extrato
            </span>
            <div className="flex flex-col w-full max-h-[30rem] overflow-y-scroll">
              <div className="flex w-full md:w-3/4 text-black font-semibold mx-auto items-center justify-between">
                <span>Data</span>
                <span>Descrição</span>
                <span>Valor</span>
                <span>Status</span>
              </div>
              {financialData.map((financial, index) => (
                <div className="w-full border-b border-b-zinc-300">
                  <div className="flex w-full md:w-4/5 mx-auto items-center justify-between text-black py-4 text-xs md:text-base">
                    <span>{financial.date}</span>
                    <span>{financial.description}</span>
                    <span>{financial.value}</span>
                    <span className="bg-green-700 px-4 py-0.5 rounded text-white">
                      {financial.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
