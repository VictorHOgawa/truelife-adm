"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import MainLayout from "./Layout";
import Image from "next/image";
import "swiper/css";
import { ModalBase } from "@/components/global/modal_base";
import { useState } from "react";
import { ModalWelcome } from "@/components/app/home/modal_welcome";
import { ModalCreatePartner } from "@/components/app/home/modal_create_partner";
import { ModalCreateIndication } from "@/components/app/home/modal_create_indication";

export default function Home() {
  const dashboardCardsData = [
    {
      icon: "/Icons/partners.svg",
      text: "Sua Rede de Parceiros Conta Com:",
      value: "49",
      description: "Integrantes",
      color: "bg-[#ccb200]",
    },
    {
      icon: "/Icons/deals.svg",
      text: "Negócios em Andamento:",
      value: "18",
      description: "Ainda não finalizado(s)",
      color: "bg-[#5c71d6]",
    },
    {
      icon: "/Icons/income.svg",
      text: "Total de sua Receita:",
      value: "R$17.357,19",
      description: "Disponível para Saque",
      color: "bg-[#1f932d]",
    },
  ];

  const dashboardPartnersData = [
    {
      place: "Sinop - MT",
      name: "João Stel",
      phone: "(66) 99935-0566",
    },
    {
      place: "Sinop - MT",
      name: "Victor Ogawa",
      phone: "(66) 99935-0566",
    },
    {
      place: "Sinop - MT",
      name: "Gabriel Antônio",
      phone: "(66) 99935-0566",
    },
    {
      place: "Sinop - MT",
      name: "Maycon Vasconcelos",
      phone: "(66) 99935-0566",
    },
    {
      place: "Sinop - MT",
      name: "Nome 1",
      phone: "(66) 99935-0566",
    },
  ];

  const dashboardIndicationsData = [
    {
      logo: "/Logos/indication.svg",
      name: "Inviolável",
      place: "Sinop - MT",
      representative: "Nome do Representante",
    },
    {
      logo: "/Logos/indication.svg",
      name: "Inviolável",
      place: "Sinop - MT",
      representative: "Nome do Representante",
    },
    {
      logo: "/Logos/indication.svg",
      name: "Inviolável",
      place: "Sinop - MT",
      representative: "Nome do Representante",
    },
    {
      logo: "/Logos/indication.svg",
      name: "Inviolável",
      place: "Sinop - MT",
      representative: "Nome do Representante",
    },
    {
      logo: "/Logos/indication.svg",
      name: "Inviolável",
      place: "Sinop - MT",
      representative: "Nome do Representante",
    },
    {
      logo: "/Logos/indication.svg",
      name: "Inviolável",
      place: "Sinop - MT",
      representative: "Nome do Representante",
    },
  ];

  const dashboardNewsData = [
    {
      logo: "/Logos/news.svg",
      title: "Nova Funcionalidade de Rede Neural Disponível",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      date: "24/10",
    },
    {
      logo: "/Logos/news.svg",
      title: "Nova Funcionalidade de Rede Neural Disponível",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      date: "24/10",
    },
    {
      logo: "/Logos/news.svg",
      title: "Nova Funcionalidade de Rede Neural Disponível",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      date: "24/10",
    },
    {
      logo: "/Logos/news.svg",
      title: "Nova Funcionalidade de Rede Neural Disponível",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      date: "24/10",
    },
    {
      logo: "/Logos/news.svg",
      title: "Nova Funcionalidade de Rede Neural Disponível",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      date: "24/10",
    },
    {
      logo: "/Logos/news.svg",
      title: "Nova Funcionalidade de Rede Neural Disponível",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      date: "24/10",
    },
  ];

  const [showCreatePartnerModal, setShowCreatePartnerModal] = useState(false);
  const [showCreateIndicationModal, setShowCreateIndicationModal] =
    useState(false);

  return (
    <MainLayout>
      <div className="w-full lg:w-[calc(100%-13rem)] min-h-screen bg-zinc-200 flex flex-col p-4">
        <div className="w-full flex flex-col gap-2">
          <span className="text-black text-xl font-semibold">
            Seu Dashboard
          </span>
          <div className="w-full xl:w-3/4 self-center py-4">
            <Swiper
              slidesPerView={1.5}
              spaceBetween={0}
              breakpoints={{
                400: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {dashboardCardsData.map((card, index) => (
                <SwiperSlide key={index} className="p-2 lg:p-4">
                  <div
                    className={`flex flex-row h-32 gap-2 p-4 rounded-lg shadow-[5px_5px_5px_rgba(0,0,0,0.25)] shadow-zinc-600 text-white text-center items-center justify-between ${card.color}`}
                  >
                    <Image src={card.icon} alt="" width={50} height={50} />
                    <div className="flex flex-col items-center gap-2 justify-center h-full">
                      <span className="font-semibold leading-4">
                        {card.text}
                      </span>
                      <strong className="text-xl">{card.value}</strong>
                      <span className="text-sm">{card.description}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-black text-xl font-semibold">
              Parceiros Cadastrados
            </span>
            <button
              onClick={() => setShowCreatePartnerModal(true)}
              className="bg-[#1f932d] text-white rounded-lg px-2 py-1 flex items-center gap-2 text-sm lg:text-base"
            >
              <Image src="/Icons/add.svg" alt="" width={15} height={15} />
              Cadastrar Parceiro
            </button>
          </div>
          <div className="flex items-center w-full md:w-60 lg:w-80 gap-2 pl-4  pr-2 py-2 rounded bg-zinc-100">
            <Image src="/Icons/search.svg" alt="" width={15} height={15} />
            <input
              placeholder="Pesquisar seus parceiros"
              className="w-full h-full bg-transparent outline-none text-black"
            />
          </div>
          <div className="w-full lg:w-3/4 relative self-center py-4">
            <Swiper
              slidesPerView={1.3}
              breakpoints={{
                400: {
                  slidesPerView: 1.8,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView:
                    dashboardPartnersData.length < 3
                      ? dashboardPartnersData.length
                      : 3,
                },
              }}
            >
              {dashboardPartnersData.map((partner, index) => (
                <SwiperSlide key={index} className="p-2 lg:p-4">
                  <div className="w-40 h-52 bg-zinc-100 border border-black shadow-[0px_5px_5px_rgba(0,0,0,0.25)] rounded-xl p-2 text-black flex flex-col justify-between items-center text-center">
                    <Image
                      src="/Icons/truepartner.svg"
                      width={200}
                      height={200}
                      alt=""
                      className="w-3/4"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm leading-4">{partner.place}</span>
                      <strong className="text-lg font-semibold leading-4">
                        {partner.name}
                      </strong>
                      <span className="leading-4">{partner.phone}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between mt-4">
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <span className="w-1/2 border-b border-b-black font-semibold text-black text-xl leading-loose">
                Indicações
              </span>
              <button
                onClick={() => setShowCreateIndicationModal(true)}
                className="bg-[#1f932d] text-white rounded-lg px-2 py-1 flex items-center gap-2 text-sm lg:text-base"
              >
                <Image src="/Icons/add.svg" alt="" width={15} height={15} />
                Nova Indicação
              </button>
            </div>
            <div className="flex flex-wrap justify-items-center justify-between gap-4 lg:gap-2 max-h-80 overflow-y-scroll">
              {dashboardIndicationsData.map((indication, index) => (
                <div className="w-full md:w-[45%] lg:w-full xl:w-[49%] h-32 rounded border border-black flex items-center">
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <Image
                      src={indication.logo}
                      alt=""
                      width={200}
                      height={80}
                      className="w-3/4 m-auto"
                    />
                  </div>
                  <div className="flex flex-col mx-auto py-2 items-center justify-between h-full text-black">
                    <div className="flex flex-col">
                      <strong className="text-lg">{indication.name}</strong>
                      <span className="text-sm">{indication.place}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">
                        {indication.representative}
                      </span>
                      <button className="bg-[#2f5cfc] text-white rounded-lg px-2 py-1 m-auto text-sm">
                        Detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 flex flex-col gap-2">
            <span className="font-semibold text-black text-xl leading-loose">
              Central de Novidades
            </span>
            <div className="flex flex-wrap justify-items-center justify-between gap-2 max-h-80 overflow-y-scroll">
              {dashboardNewsData.map((news, index) => (
                <div className="w-full p-2 rounded-lg bg-zinc-400 flex gap-2">
                  <Image
                    src={news.logo}
                    alt=""
                    width={80}
                    height={80}
                    className="h-full"
                  />
                  <div className="flex flex-col w-full text-white text-justify">
                    <strong>{news.title}</strong>
                    <span className="text-sm">{news.body}</span>
                  </div>
                  <span className="text-sm text-black self-end">
                    {news.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <ModalWelcome
        showModal={showModal}
        handleCloseModal={() => setShowModal(false)}
      /> */}
      <ModalCreatePartner
        showModal={showCreatePartnerModal}
        handleCloseModal={() => setShowCreatePartnerModal(false)}
      />
      <ModalCreateIndication
        showModal={showCreateIndicationModal}
        handleCloseModal={() => setShowCreateIndicationModal(false)}
      />
    </MainLayout>
  );
}
