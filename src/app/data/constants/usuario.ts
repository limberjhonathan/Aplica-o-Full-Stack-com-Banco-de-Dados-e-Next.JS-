import { Usuario } from "@/core/model/Usuario";

const usuarios: Usuario[] = [
    {
        id: "1",
        email: "ana@empresa.com.br",
        nome: "Ana",
        senha: "123456"
    },
    {
        id: "2",
        email: "pedro@empresa.com.br",
        nome: "Pedro",
        senha: "123456"
    },
    {
        id: "3",
        email: "guilherme@empresa.com.br",
        nome: "Guilherme",  // Corrigido o nome para "Guilherme"
        senha: "123456"
    },
    {
        id: "4",
        email: "gustavo@empresa.com.br",
        nome: "Gustavo",
        senha: "123456"
    },
    {
        id: "5",
        email: "jenny@empresa.com.br",
        nome: "Jenny",
        senha: "123456"
    },
    {
        id: "6",  // Adicionado o id "6" que estava faltando
        email: "matheus@empresa.com.br",
        nome: "Matheus",
        senha: "123456"
    },
];

export default usuarios;
