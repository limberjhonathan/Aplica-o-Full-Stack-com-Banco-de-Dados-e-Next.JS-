import usuarios from "@/app/data/constants/usuario";
import LinhaUsuario from "./LinhaUsuario";
import { Usuario } from "@/core/model/Usuario";

export interface ListaUsuarioProps {
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {
    return <div className="flex flex-col gap-4">
        {usuarios.map((usuario , i) => {
            return <LinhaUsuario key={i} usuario={usuario} onClick={props.onClick}/>
        })}
    </div>
}