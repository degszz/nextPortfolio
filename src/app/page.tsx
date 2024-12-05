import Hero from "@/components/Hero"
import Line from "@/components/Line"
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="bg-kai-bgblack w-full h-full text-white">
        <Hero />

        <div>
          <div id="EXP"></div>
          <Line />
        </div>

        <div className="w-full ">
          <div className="w-full flex flex-col items-center">
            <div className="flex md:max-w-[450px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]">
              <h3
                className=" underline text-xl"
              >
                <b>Mis Proyectos:</b>
              </h3>
            </div>
            <div
              className="w-fit flex flex-col md:flex-row lg:flex-row md:max-w-[500px] md:min-w-[450px]  lg:min-w-[750px] lg:max-w-[750px]"
            >
              <Card className="shadow-lg my-4   w-fit h-full rounded-xl hover:cursor-pointer transition-all duration-200 ease-in-out scale-90 hover:shadow-2xl  hover:opacity-100 hover:scale-110">
                <a target="_blank" className="flex flex-col" href="https://lively-zabaione-6127f6.netlify.app/">
                  <img src="/designsystem.png" className="h-[130px] w-fit rounded-xl z-10 " alt="" />

                </a>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
