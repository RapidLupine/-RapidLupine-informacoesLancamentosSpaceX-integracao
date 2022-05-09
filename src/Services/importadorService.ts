import { Banco } from "../Infra/banco";
import obter from "../obter";

// TODO: Configurar no enviroment;
const urlBase = 'https://api.spacexdata.com';

export abstract class ImportadorServiceBase {
    protected abstract _url: string;
    protected abstract _colecao: string;
    
    constructor(
        private _nomeservico: string
        , private _banco: Banco
    ){
        console.log('Iniciando Serviço: ', this._nomeservico);
    }
    
    public async obterDados() {
        console.log(`${this._nomeservico}: Iniciando importação;`);
        const urlLancamentosPassados = urlBase + this._url;

        const response = await obter(urlLancamentosPassados);
        const data = await response.json();
        console.log(`${this._nomeservico}: Obtido: ${this._quantidadeObjetos(data)} objetos;`);

        await this._banco.salvar(this._colecao, data);
    }

    private _quantidadeObjetos(data: unknown): number {
        if(Array.isArray(data)){
            return (data as []).length;
        }
        return data ? 1 : 0;
    }
}