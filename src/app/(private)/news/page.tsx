"use client";

import MainLayout from "../Layout";

export default function News() {
  const newsData = [
    {
      title: "Como Usar a Plataforma da Truelife?",
      description:
        "Assista o vídeo ao lado para que possa ter o conhecimento mais direto e claro sobre como usar a plataforma da Truelife.",
    },
    {
      title: "Baixar Material de Divulgação Truelife",
      description:
        "Assista o vídeo ao lado para que possa ter o conhecimento necessário da plataforma e absorver 100% do que precisar.",
    },
    {
      title: "Como Usar a Plataforma da Truelife?",
      description:
        "Assista o vídeo ao lado para que possa ter o conhecimento mais direto e claro sobre como usar a plataforma da Truelife.",
    },
    {
      title: "Baixar Material de Divulgação Truelife",
      description:
        "Assista o vídeo ao lado para que possa ter o conhecimento necessário da plataforma e absorver 100% do que precisar.",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full lg:w-[calc(100%-13rem)] min-h-screen max-h-screen bg-zinc-200 flex flex-col p-4">
        <div className="w-full bg-white rounded-lg p-4 flex flex-col gap-10">
          <span className="text-black text-xl font-semibold">
            Central de Informações
          </span>
          <div className="flex flex-col w-full max-h-[45rem] gap-10 overflow-y-scroll">
            {newsData.map((item, index) => (
              <div className="flex flex-col w-3/4 mx-auto border-b border-b-zinc-300 pb-4">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="w-full md:w-80 h-40 rounded bg-zinc-300" />
                  <div className="flex flex-col h-full justify-between text-black">
                    <div className="flex flex-col gap-4">
                      <strong className="text-lg">
                        Como Usar a Plataforma da Truelife?
                      </strong>
                      <span>
                        Assista o vídeo ao lado para que possa ter o
                        conhecimento necessário da plataforma e absorver 100% do
                        que precisar.
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <div className="w-1/3 md:w-40 h-10 lg:h-16 rounded-lg bg-zinc-300" />
                      <div className="w-1/3 md:w-40 h-10 lg:h-16 rounded-lg bg-zinc-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
