import LinhaUsuario from "./LinhaUsuario";
import { Usuario } from "@prisma/client";

export interface ListaUsuarioProps {
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {
    return <div className="flex flex-col gap-4">
        {props.usuarios.map((usuario , i) => {
            return <LinhaUsuario key={i} usuario={usuario} onClick={props.onClick}/>
        })}
    </div>
}