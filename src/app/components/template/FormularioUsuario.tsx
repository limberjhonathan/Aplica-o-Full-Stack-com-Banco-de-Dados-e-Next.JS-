import { Usuario } from "@/core/model/Usuario"
import InputTexto from "../shared/inputTexto"

export interface FormularioUsuarioProps {
    usuario: Partial<Usuario>
    onChange: (usuario: Partial<Usuario>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    console.log("onChange prop:", props.onChange);

    return (
        <div>
            <InputTexto label="Nome" type="text" value={props.usuario.nome ?? ""} onChange={
                e => props.onChange?.({ ...props.usuario, nome: e.target.value })
            } />
            <InputTexto label="E-mail" type="email" value={props.usuario.email ?? ""} onChange={
                e => props.onChange?.({ ...props.usuario, email: e.target.value })
            } />
            <InputTexto label="Senha" type="password" value={props.usuario.senha ?? ""} onChange={
                e => props.onChange?.({ ...props.usuario, senha: e.target.value })
            } />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.salvar}>Salvar</button>
                    <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancelar}>Cancelar</button>
                </div>
                <button className="bg-red-500 px-4 py-2 rounded-md" onClick={props.excluir}>excluir</button>
            </div>
        </div>
    );
}