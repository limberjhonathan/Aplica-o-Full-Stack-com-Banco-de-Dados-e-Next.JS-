"use client"

import FormularioUsuario from "@/app/components/template/FormularioUsuario";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
// import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import usuarios from "@/app/data/constants/usuario";
import { Usuario } from "@prisma/client";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page(){
    const [usuario, setUsuario] = useState<Usuario>(usuarios[0])
    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de usuário"/>
            {/* <ListaUsuario/> */}
            <FormularioUsuario usuario={usuario} onChange={setUsuario}/>
        </Pagina>
    )
}