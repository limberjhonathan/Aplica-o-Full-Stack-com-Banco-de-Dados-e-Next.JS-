"use client"

import FormularioUsuario from "@/app/components/template/FormularioUsuario";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import useUsuarios from "@/app/data/hooks/useUsuarios";
// import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import { IconPlus, IconUser } from "@tabler/icons-react";


export default function Page() {
    const { usuarios, usuario, salvar, excluir, alterarUsuario } = useUsuarios()

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de usuário" />

            {/* <ListaUsuario/> */}
            {usuario ? (
                <FormularioUsuario usuario={usuario} onChange={alterarUsuario} cancelar={() => alterarUsuario(null)} salvar={salvar} excluir={excluir}/>
            ) : (
                <>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => alterarUsuario({})}>
                            <IconPlus />
                            <span>Novo Usuário</span>
                        </button>
                    </div>
                    <ListaUsuario usuarios={usuarios} onClick={alterarUsuario} />
                </>
            )}
        </Pagina>
    )
}