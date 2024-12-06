import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenuBar() {
    return (
        <>
            <div>
                <Menubar className="shadow-lg">
                    <MenubarMenu>
                        <MenubarTrigger className="text-sm text-black hover:cursor-pointer">Contacto</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <div className="flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
                                    <a href="https://www.linkedin.com/in/maximo-figuera-531231323/" className="ml-2">Linkedin</a>
                                </div>

                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                <div className="flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                                    <a href="https://www.instagram.com/z3maxi/" className="ml-2">Instagram</a>
                                </div>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                <div className="flex ">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                                    <a href="" className="ml-2">Gmail</a>
                                </div>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="text-sm text-black hover:cursor-pointer">
                            <a href="#EXP">Experiencia</a>
                        </MenubarTrigger>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger className="text-sm text-black hover:cursor-pointer">
                            <a href="#PRO">Proyectos</a>
                        </MenubarTrigger>
                        
                    </MenubarMenu>
                </Menubar>
            </div>
        </>
    )
}