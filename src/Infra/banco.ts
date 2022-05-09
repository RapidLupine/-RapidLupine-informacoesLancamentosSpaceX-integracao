import { BancoBase } from "./bancoBase";
import admin = require("firebase-admin");

type ResultadoTransacao = ReturnType<admin.database.Reference['transaction']>;

export class Banco extends BancoBase {

    public async salvar(caminho: string, dados: unknown): ResultadoTransacao {
        return await this.database
            .ref(caminho)
            .transaction(() => dados);
    }
}
