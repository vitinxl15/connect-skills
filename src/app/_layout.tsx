/*Stack: container de navegação (baseado em empilhamento de telas ) => push
/replace/back
router.push("/rota") => empilha uma nova tela por cima da atual => usuario navega para a próxima tela,
mas ainda deve poder voltar para a tela anterior
router.replace("/rota") => substitui a tela atual (nao empilha) => quando voce nao quer permitir
voltar,como apos o login (apos se autenticar)
router.back() => volta para a tela anterior*/ 
import { Slot } from "expo-router";


export default function RootLayout() {
  return <Slot />;
}
