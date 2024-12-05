export default function Line() {
    return (
        <>
            <div >
                <div className="w-full flex justify-center py-6" >
                    <div
                        className="flex justify-start max-w-[350px] md:w-full md:min-w-[450px] lg:max-w-[750px]"
                    >
                        <div
                            className="border-l-2 border-gray-300 mx-3 md:mx-0 pb-6 space-y-10"
                        >
                            <div className="relative">
                                <div
                                    className="absolute -left-3 bg-kai-button h-6 w-6 rounded-full border-2"
                                >
                                    <span
                                        className="text-white text-center flex justify-center items-center h-full w-full"
                                    >
                                        1
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <h2 className="text-sans text-xl dark:text-white mb-2">
                                        <b>Experiencia Laboral:</b>
                                    </h2>
                                    <span className="dark:text-white text-md text-serif"
                                    >No tuve Trabajo como Desarrollador en ninguna empresa,  
                                        <b className="text-kai-button"></b>
                                    </span>
                                    <div></div>
                                </div>
                            </div>
                            <div className="relative">
                                <div
                                    className="absolute -left-3 bg-kai-button h-6 w-6 rounded-full border-2"
                                >
                                    <span
                                        className=" text-center text-white flex justify-center items-center h-full w-full"
                                    >
                                        2
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <h2 className="text-sans text-xl  mb-2">
                                        <b>Experiencia Laboral?</b>
                                    </h2>
                                    <span className=" text-md text-serif"
                                    >No tuve Trabajo como Desarrollador en ninguna
                                        empresa, Pero <b className="text-kai-button"
                                        >Trabaje con Negocios</b>
                                        Gracias a mi Experiencia.</span>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}