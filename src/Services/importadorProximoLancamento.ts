import { Banco } from "../Infra/banco";
import { ImportadorServiceBase } from "./importadorService";

export class ImportadorProximoLancamento extends ImportadorServiceBase {

    constructor(banco: Banco) {
        super('Importador proximo lançamento', banco);
    }

    protected _url = '/v4/launches/next';
    protected _colecao = 'proximoLancamento';
}

