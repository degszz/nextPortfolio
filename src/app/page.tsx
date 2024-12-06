import Hero from "@/components/Hero"
import Line from "@/components/Line"
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
      <div className="bg-kai-bgblack w-full h-full text-white">
        <Hero />

        <div>
          <div id="EXP" className="py-6"></div>
          <Line />
        </div>


        <div id="PRO"></div>
        <div  className="w-full " >
          <div className="w-full flex flex-col items-center">
            <div  className="flex md:max-w-[450px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]">
              <h3
                className=" underline text-xl"
              >
                <b>Mis Proyectos:</b>
              </h3>
            </div>
            <div
              className="w-fit flex flex-col md:flex-row lg:flex-row md:max-w-[500px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]"
            >
              <div id="PRO" className=" border-0 my-4 bg-transparent w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110 hover:bg-slate-950">
                <a target="_blank" className="flex flex-col bg-transparent text-lg w-full items-center lg:items-start md:items-start  hover:underline text-white" href="https://helpful-basbousa-eca252.netlify.app/">
                  <img src="/designsystem.png" className="h-[130px] w-fit rounded-xl z-10 hover:rounded-b-none" alt="" />
                  Design System
                </a>
              </div>
            </div>
          </div>
        </div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus saepe ad voluptatem tempora fugiat nam cumque sapiente obcaecati tenetur. Neque, quaerat libero quo temporibus nesciunt excepturi voluptate inventore quidem!</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus saepe ad voluptatem tempora fugiat nam cumque sapiente obcaecati tenetur. Neque, quaerat libero quo temporibus nesciunt excepturi voluptate inventore quidem!</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus saepe ad voluptatem tempora fugiat nam cumque sapiente obcaecati tenetur. Neque, quaerat libero quo temporibus nesciunt excepturi voluptate inventore quidem!</span>
      </div>
    </>
  );
}
