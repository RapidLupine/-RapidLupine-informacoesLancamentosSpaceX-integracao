import { Banco } from "../Infra/banco";
import { ImportadorServiceBase } from "./importadorService";

export class ImportadorLancamentosFuturos extends ImportadorServiceBase {

    constructor(banco: Banco) {
        super('Importador lançamentos futuros', banco);
    }

    protected _url = '/v4/launches/upcoming';
    protected _colecao = 'lancamentosFuturos';

}
