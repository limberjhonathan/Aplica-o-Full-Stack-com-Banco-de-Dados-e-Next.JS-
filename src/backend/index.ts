import obterTodos from "./usuario/obterTodos";
import salvarUsuario from "./usuario/salvarUsuario";

//Padrão Facade
export default class Backend {
    static readonly usuarios = {
        salvarUsuario,
        obterTodos
    }
}