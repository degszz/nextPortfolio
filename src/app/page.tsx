import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col  items-center  h-fit text-white">

        <div className="max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]">

          {/* HERO */}
          <div className="flex justify-center h-full pt-[51px] lg:pt-[60px]">
            
            <div className=" py-8 flex flex-col justify-center sm:justify-center items-center"
            >
              <div className="flex justify-start w-full">
                <img src="/yo.png" className="w-[60px] h-[60px] rounded-full shadow-xl" alt="yo" />
              </div>
              <div className="h-fit w-full mx-4 text-start dark:text-white flex-col">
                <div className="my-2.5">
                  <h1 className="text-3xl underline">
                    <b>Hey! soy Maximo </b>
                  </h1>
                  <p
                    className="text-xl "
                  >
                    +2 años de experiencia. <b className="text-kai-button"
                    >Developer ux/ui Front-end
                    </b> de Buenos Aires, Argentina. Especializado en el desarrollo
                    de aplicaciones web únicas.
                  </p>
                </div>
                <div className="flex maw-w-[400px] md: lg: ">

                  <button
                    className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 text-white font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-kai-hover hover:text-white hover:opacity-100 hover:bg-black-600 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                  >
                    <a href="https://www.linkedin.com/in/maximo-figuera-531231323/" target="_blank" className="flex text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                      ><path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"></path><path
                          d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                        ></path><path d="M8 11l0 5"></path><path
                          d="M8 8l0 .01"></path><path d="M12 16l0 -5"
                          ></path><path d="M16 16v-3a2 2 0 0 0 -4 0"
                          ></path></svg>
                      <div className="flex items-center"><span className="">Linkedin</span></div>
                    </a>
                  </button>
                  <button
                    className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 text-white font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-kai-hover hover:text-white hover:opacity-100 hover:bg-black-600 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                  >
                    <a href="https://github.com/degszz" className="flex text-sm" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                      <div className="flex items-center"><span className="">Github</span></div>
                    </a>
                  </button>
                  <button
                    className="bg-transparent mr-2 mb-2 px-2.5 py-1.5 text-white font-medium text-center justify-center inline-flex items-center flex-row rounded-lg border gap-x-2 opacity-90 cursor-pointer hover:bg-kai-hover hover:text-white hover:opacity-100 hover:bg-black-600 hover:scale-110 hover:shadow-lg dark:focus:ring-black-300 focus:ring-2 focus:outline-none focus:ring-black-30 transition-all duration-200 ease-in-out scale-90"
                  >
                    <a href="https://www.instagram.com/z3maxi/" className="flex text-sm" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                      <div className="flex items-center"><span className="flex ">Instagram</span></div>
                    </a>
                  </button>

                </div>
              </div>
            </div>

          </div>

          {/* LINETIME */}
          <div>
            <div id="EXP" className="pt-6"></div>
            <div >
              <div className="w-full flex justify-center py-4" >

                <div className="flex justify-start "
                >
                  <div
                    className="border-l-2 border-gray-300 mx-3 md:mx-0 pb-6 space-y-10"
                  >
                    {/* 1 */}
                    <div className="relative">
                      <div
                        className="absolute -left-3 bg-kai-button h-6 w-6 rounded-full border-2"
                      >
                        <span
                          className="text-white text-center flex justify-center items-center h-full w-full"
                        >
                          <b>1</b>
                        </span>
                      </div>
                      <div className="pl-6">
                        <h2 className="text-sans text-xl dark:text-white mb-2">
                          <b>Experiencia Laboral</b>
                        </h2>
                        <span className="dark:text-white text-md text-serif"
                        >No tuve Trabajo como Desarrollador en ninguna empresa, Pero forme parte en Proyectos Gracias a mi <b className="text-kai-button">Experiencia como Desarrollador Web</b>
                        </span>
                        <div></div>
                      </div>
                    </div>
                    {/*2*/}
                    <div className="relative">
                      <div
                        className="absolute -left-3 bg-kai-button h-6 w-6 rounded-full border-2"
                      >
                        <span
                          className=" text-center text-white flex justify-center items-center h-full w-full"
                        >
                          <b>2</b>
                        </span>
                      </div>
                      <div className="pl-6">
                        <h2 className="text-sans text-xl  mb-2">
                          <b>Ruta de Aprendizaje</b>
                        </h2>
                        <span className=" text-md text-serif"
                        >Soy un Desarrollador Web Autodidacta, Con experiencia en lenguajes como <b className="text-kai-button">Javascript y Typescript, </b> y Frameworks como <b className="text-kai-button">React, Next, Astro, Tailwind, Shadcn, y mas.</b> </span>
                        <div></div>
                      </div>
                    </div>
                    {/*3*/}
                    <div className="relative">
                      <div
                        className="absolute -left-3 bg-kai-button h-6 w-6 rounded-full border-2"
                      >
                        <span
                          className=" text-center text-white flex justify-center items-center h-full w-full"
                        >
                          <b>3</b>
                        </span>
                      </div>
                      <div className="pl-6">
                        <h2 className="text-sans text-xl  mb-2">
                          <b>Proyectos</b>
                        </h2>
                        <span className=" text-md text-serif"
                        > Aprendiendo <b className="text-kai-button">Python y Java</b> con Frameworks como <b className="text-kai-button">Django y Spring</b>, y Seguir practicando <b className="text-kai-button">Javascript y Typescript.</b></span>
                        <div></div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="flex justify-center">

            <div className="py-6 ">
              <span className="text-white text-xl underline flex justify-center md:justify-start"><b>Tecnologias Aprendidas</b></span>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px] lg:min-w-[750px]"
              >
                <CarouselContent>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/typescript.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Typescript</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/javascript.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Javascript</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="border-0 bg-transparent shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/tailwind.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Tailwind</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/next.svg" alt="" />
                          <span className="text-white text-sm font-semibold">NextJS</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/astro.svg" alt="" />
                          <span className="text-white text-sm font-semibold">Astro</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="basis-1/3 md:basis-1/4 lg:basis-1/4">
                    <div className="p-1">
                      <Card className="bg-transparent border-0 shadow-none max-h-[100px]">
                        <CardContent className="max-h-[100px] flex flex-col aspect-square items-center justify-center p-6">
                          <img src="/react.svg" alt="" />
                          <span className="text-white text-sm font-semibold">React</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>


                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

          </div>

          {/* PROYECTOS */}
          <div className="w-full " id="PRO" >
            <div className="w-full flex flex-col pb-6">
              
              <div className="flex justify-center md:justify-start">
                <h3
                  className="underline text-xl"
                >
                  <b>Mis Proyectos:</b>
                </h3>
              </div>

              <div className="w-fit flex flex-col md:flex-row lg:flex-row"
              >
                <div className=" border-0 my-4 md:mr-[15px] bg-transparent w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-slate-950">
                  <a target="_blank" className="flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                    <img src="/designsystem.png" className="h-[130px] w-fit rounded-xl z-10 hover:rounded-b-none" alt="" />
                    System Design with Tailwind
                  </a>
                </div>

                <div className=" border-0 my-4 md:mr-[15px] bg-transparent w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-slate-950">
                  <a target="_blank" className="flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://restaurant-web-azure-tau.vercel.app/">
                    <img src="/Screenshot_1.png" className="h-[130px] w-fit rounded-xl z-10 hover:rounded-b-none" alt="" />
                    Web Restaurant
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </>
  );
}