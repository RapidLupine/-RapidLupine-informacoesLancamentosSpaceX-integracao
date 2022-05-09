import { Banco } from "../Infra/banco";
import { ImportadorServiceBase } from "./importadorService";

export class ImportadorUltimoLancamento extends ImportadorServiceBase {

    constructor(banco: Banco) {
        super('Importador ultimo lançamento', banco);
    }

    protected _url = '/v4/launches/latest';
    protected _colecao = 'ultimoLancamento';
}
