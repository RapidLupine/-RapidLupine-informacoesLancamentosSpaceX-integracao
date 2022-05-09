import { Banco } from "./Infra/banco";
import { ImportadorLancamentosFuturos } from "./Services/importadorLancamentosFuturos";
import { ImportadorLancamentosPassados } from "./Services/importadorLancamentosPassados";
import { ImportadorProximoLancamento } from "./Services/importadorProximoLancamento";
import { ImportadorUltimoLancamento } from "./Services/importadorUltimoLancamento";


const banco = new Banco();
// eslint-disable-next-line @typescript-eslint/no-floating-promises
async function importar() {
  try {
      const importadorLancamentosPassados = new ImportadorLancamentosPassados(banco);
      const importadorLancamentosFuturos = new ImportadorLancamentosFuturos(banco);
      const importadorUltimoLancamento = new ImportadorUltimoLancamento(banco);
      const importadorProximoLancamento = new ImportadorProximoLancamento(banco);

      await importadorLancamentosPassados.obterDados();
      await importadorLancamentosFuturos.obterDados();
      await importadorUltimoLancamento.obterDados();
      await importadorProximoLancamento.obterDados();

  } catch (error) {
    console.log(error);
  }
}

setInterval(() => void importar(), 60_000);