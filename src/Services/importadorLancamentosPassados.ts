import { Banco } from "../Infra/banco";
import { ImportadorServiceBase } from "./importadorService";

export class ImportadorLancamentosPassados extends ImportadorServiceBase{

    constructor(banco: Banco){
        super('Importador lançamentos passados', banco);
    }

    protected _url = '/v4/launches/past';
    protected _colecao = 'lancamentosPassados';
}
