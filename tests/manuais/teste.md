# Teste de Software | Shortz-app

**Versão:** 1

**Data:** 30 de Março de 2026

**Autor:** Caue Yohan Plachi, Elias Schroeder de Souza, Lucas Juliano de Oliveira, Mateus Isidoro

**Projeto:** ShortzApp - Plataforma de Vídeos Curtos 

## 1. Introdução

Este documento específica o planejamento das atividades de teste da plataforma **ShortzApp**, Um sistema de vídeos curtos onde os usuários poderão publicar, curtir e interagir com vídeos postados pelos mesmos. O objetivo deste planejamento é assegurar que as funcionalidades do software, como o upload de vídeos, moderação de usuarios  operem de acordo com os requisitos estabelecidos, tendo em vista garantir uma experiência de usuário robusta e segura. Através de uma abordagem sistemática, buscaremos mitigar os riscos de seguração, usabilidade e desempenho identificados nas fases inicias do projeto.


## 2. Escopo de Testes

### 2.1. Em Escopo

#### As seguintes funcionalidades serão o foco das atividades de teste nesta fase do projeto:

* **Gestão de Playlist:**
    * Criação e condição para criar a playlist (Criar e verificar se todos os requisitos de nome foram cumpridos).

* **Interações Sociais:**
    * Adicionar Comentário em Vídeo (Permitir usuários autenticados adicionarem comentários e validar o sistema de filtro de palavras ofensivas/tamanho).

* **Moderação:**
    * Remoção de vídeos denunciados através do menu administrativo (Remove o vídeo do feed de todos).
    * Bloquear usuário (Impedir acesso do usuário ao sistema).
    * Acesso ao menu Administrador por usuário indevido (Impedir acesso indevido às URLs administrativas).

* **Upload de vídeo:**
    * Realizar upload de Vídeos (se cumprir os requisitos estritos de formato MP4/WebM e duração máxima de 60 segundos).


### 2.2. Fora do Escopo

#### As seguintes funcionalidades não serão abordadas neste ciclo de testes, sendo planejadas para fases ou tratadas por outras equipes:

* **Gestão de Usuários e Perfil:** Cadastrar usuário, login, logout, visualizar outro perfil, visualizar perfil próprio e editar perfil (foto, bio, nome).
* **Gestão de Vídeos:** Visualizar vídeos, excluir vídeos, editar título/capa de vídeos já postados e acessar a tela "Meus Vídeos".
* **Gestão de Feed e Descoberta:** Visualização de Feed (Global e Priorizado), acessar Landing Page (não logados), busca de vídeos/usuários (com filtros e ordenação) e visualizar a tela de "Vídeos Curtidos".
* **Gestão de Playlist:** Interações com a playlist (adicionar, remover vídeos e mudar o nome), visualizar a tela "Minhas Playlists" e excluir playlists.
* **Interações Sociais:** Curtir e descurtir vídeos (atualização gráfica e de contadores) e sistema de seguir/deixar de seguir usuários.
* **Notificações:** Receber, visualizar e marcar notificações in-app como lidas.


## 3. Estratégias de Testes

Nossa estratégia de testes é guiada pelo conceito de Shift-Left Testing. Isso significa trazer as atividades de teste para as etapas iniciais do desenvolvimento, em vez de deixá-las apenas para o final. Com essa abordagem preventiva, conseguimos encontrar e corrigir falhas rapidamente, reduzindo muito o custo e o tempo de retrabalho.

1. **Testes Unitários:** Focam em validar os menores pedaços do código de forma isolada (como funções e métodos). Eles garantem que funções  específicas — como os limites de tamanho de um arquivo — funcionem perfeitamente.

2. **Testes de Integração:** Verificam se as diferentes partes do sistema "conversam" bem entre si. No nosso contexto, garantem que a aplicação se comunique corretamente com o banco de dados para salvar informações vitais, como vídeos, fotos de perfil e comentários.

3. **Testes Black-Box (Sistema/E2E):** Avaliam a aplicação completa sob a perspectiva do usuário final. Aplicando técnicas como Tabelas de Decisão e Valores-Limite, testamos os fluxos inteiros para garantir que tudo funcione na prática, testando como se fosse o propio usuário final.

## 4. Riscos e metigação

A identificação e gestão de riscos são cruciais para priorizar os esforços de teste. Abaixo, apresentamos uma análise dos riscos de qualidade mais relevantes para o ShortzApp, juntamente com suas estratégias de mitigação:


| ID | Descrição do risco | Categoria | Prob. | Impacto | Prioridade | Estratégia de Mitigação (Testes) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | Usuário não ADM conseguir deletar vídeo dos outros | Funcional | Baixa | Crítico | Alto | Testes de segurança e integração focados em validar o acesso dos usuarios. Testes de requisição de API (método DELETE)  |
| **R-02** | Visualização de vídeos não sincronizadas com os usuários | Funcional | Média | Baixo | Baixo | Testes de integração no serviço que sincroniza as views. Testes com varias telas simulando vários usuarios. |
| **R-03** | Sistema não enviar notificação | Funcional | Média | Baixo | Baixo | Testes de integração nos  serviços de envio. |
| **R-04** | Servidor ficar sem espaço para vídeos | Não Funcional | Média | Crítico | Crítico | Testes de infraestrutura validando as regras de limite de tamanho de upload (Análise de Valores-Limite).|
| **R-05** | Sistema não salvar a mudança de apelido | Funcional | Baixa | Médio | Baixo | Testes funcionais e unitários no endpoint de atualização de usuário. Validar restrições de caracteres e tamanho do apelido. Testes de ponta a ponta (E2E) na interface. |
| **R-06** | Sistema lento por conta de sobrecarga de usuários | Não Funcional | Média | Crítico | Crítico | Testes de Carga e Testes de Estresses simulando diversos usuarios para verificar limite do sistema. |
| **R-07** | Usuário do perfil não consegue remover seu próprio vídeo | Funcional | Média | Crítico | Crítico | Testes unitários e de integração validando o fluxo de exclusão bem-sucedido. Verificar diretamente o banco de dados para confirmar exclução. |


## 5. Caso de Teste Planejados (Black-Box)

Esta seção detalha a aplicação das técnicas de teste black-box para modelar casos de teste manuais para funcionalidades críticas do ShortzApp. Serão apresentados exemplos de Particionamento de Equivalência, Análise de Valores-Limite e Tabelas de Decisão.

### 5.1.1. Técnica: Particionamento de Equivalência e Análise de Valores-Limite

#### Funcionalidade: Criação de playlist - Campo nome

#### Regra: O nome da playlist deve ser único e não pode ser vazio.

|  Campo  |  Classe Válida  |  Classes inválidas |
| ---------- |:------------:|:------------:|
|  **Validação do Nome**  |  Nome único para a playlist  |  Formulário vazio e nome Duplicado  |  

### 5.1.2 Técnica: Tabela de Decisão

#### Funcionalidade: Criação de playlist

#### Regra: O nome da playlist deve ser único e não pode ser vazio.

|  Condições / Ações  |  R1  |  R2  |  R3  |
| ---------- |:------------:|:------------:|:------------:|
|  Usuário Logado?  |  Sim  |  Sim |  Sim  |
|  Nome único da playlist?  |  Sim  |  Não  |  Sim  |
|  Playlist tem um nome?  |  Sim  |  Sim  |  Não  |
|  **Ação: Criar Playlist**  |  Sim  |  Não  |  Não  |
|  **Ação: Exibir Erro**  |  Não  |  Sim  |  Sim  |
|  Mensagem: "Faça Login"  | Não  |  Não  |  Não  |
|  Mensagem: "Já existe uma playlist com este nome, tente outro"  | Não  |  Sim  |  Não  |
|  Mensagem: "A playlist deve ter um nome"  | Não  |  Não  |  Sim  |


**Caso de Teste Resultante (Amostra):**

* **CT-PLA-001: Criação de playlist com nome válido**
    * **Prioridade:** Alta
    * **Pré-condições:** Usuário logado, nome único da playlist, acesso à tela da lista de playlist.
    * **Passos:** 1. Preencher o campo "nome da playlist" com dados válidos ; 2. Nome: NomePlaylist ; 3. Clicar em "Criar".
    * **Resultado esperado:** Playlist criada ou editada com sucesso, redirecionando para a playlist.

* **CT-PLA-002: Criação de playlist com nome duplicado**
    * **Prioridade:** Média
    * **Pré-condições:** Usuário logado, acesso à tela da lista de playlist.
    * **Passos:** 1. Preencher o campo "nome da playlist" com dados válidos ; Nome: NomeRepetido ; Clicar em "Criar". 
    * **Resultado esperado:** Mensagem de erro: "Já existe uma playlist com este nome, tente outro."

* **CT-PLA-003: Criação de playlist com nome duplicado**
    * **Prioridade:** Média
    * **Pré-condições:** Usuário logado, acesso à tela da lista de playlist.
    * **Passos:** 1. Preencher o campo "nome da playlist" com dados válidos ; Nome:  ; Clicar em "Criar". 
    * **Resultado esperado:** Mensagem de erro: "A playlist deve ter um nome."


### 5.2.1. Técnica: Particionamento de Equivalência e Análise de Valores-Limite

#### Funcionalidade: Burlamento do sistema de palavras ofensivas/Maliciosas - 

#### Regra: O comentário deve ter de 1 a 200 caracteres e não deve haver nenhum comentário com palavras ofensivas e com derivações de caracteres.

|  Campo  |  Classe Válida  |  Classes inválidas |
| ---------- |:------------:|:------------:|
|  **Verificação de comentário**  | 1 a 200 Caracteres  |  Maior que 200  |

|  Campo  |  Classe Válida  |  Classes inválidas |
| ---------- |:------------:|:------------:|
|  **Verificação de comentário**  |    |  **Palavras ofensivas/maliciosas**  | 

**Análise de Valores-Limite para *Comentário* (Tamanho)**

|  Limite  |  Valor mínimo (1)  |  Valor abaixo do Mínmo |  Valor Máximo (200)  |  Valor Acima do Máximo |
| ---------- |:------------:|:------------:|:------------:|:------------:|
|  **Valores de Teste**  | C  |  *Vazio*  |  *Comentário com 200 caracteres*  |  *Comentário com mais de 200 caracteres* |

### 5.2.2 Técnica: Tabela de Decisão

#### Funcionalidade: Burlamento do sistema de palavras ofensivas/Maliciosas - 

#### Regra: Não deve haver nenhum comentário com palavras ofensivas e com derivações de caracteres.

|  Condições / Ações  |  R1  |  R2  |  R3  |
| ---------- |:------------:|:------------:|:------------:|
|  Usuário Logado?  |  Sim  |  Sim |  Sim  |
|  Usuário tem acesso ao vídeo?  |  Sim  |  Não  |  Sim  |
|  Aba de comentários aberta?  |  Sim  |  Sim  |  Sim  |
|  Caracteres <=200?  |  Sim  |  Sim  |  Sim  |
|  **Ação: Publicar comentário**  |  Sim  |  Sim  |  Sim  |
|  **Ação: Exibir Erro**  |  Não  |  Sim  |  Sim  |
|  Mensagem: "Faça Login"  | Não  |  Não  |  Não  |
|  Mensagem: "Comentário mandado com êxito"  | Sim  |  Não  |  Não  | 
|  Mensagem: "Comentário não enviado por conta de palavras ofensivas, enviando advertência. "  | Não  |  Sim  |  Sim  |

**Caso de Teste Resultante (Amostra):**

* **CT-COM-004: Comentário sem palavras ofensivas**
    * **Prioridade:** Alta
    * **Pré-condições:** Usuário logado, acesso ao vídeo, aba de comentários aberta.
    * **Passos:** 1. Abrir a aba de comentários ; 2. *Escreva um comentário: Comentário sem palavras ofensivas* ; 3. Clicar em "Publicar Comentário".
    * **Resultado esperado:** Comentário publicado com êxito sem palavras ofensivas.

* **CT-COM-005: Comentário com palavras ofensivas**
    * **Prioridade:** Alta
    * **Pré-condições:** Usuário logado, acesso ao vídeo, aba de comentários aberta.
    * **Passos:** 1. Abrir a aba de comentários ; 2. *Escreva um Comentário: Comentário com palavras ofensivas* ; 3. Clicar em "Publicar Comentário".
    * **Resultado esperado:** Comentário publicado foi censurado ou removido e mandado um advertência.

* **CT-COM-006: Comentário com palavras ofensivas contendo caracteres diferentes**
    * **Prioridade:** Alta
    * **Pré-condições:** Usuário logado, acesso ao vídeo, aba de comentários aberta.
    * **Passos:** 1. Abrir a aba de comentários ; 2. *Escreva um Comentário: Comentário com palavras ofensivas com @* ; 3. Clicar em "Publicar Comentário".
    * **Resultado esperado:** Comentário publicado foi censurado ou removido e mandado um advertência.


### 5.3.1. Técnica: Particionamento de Equivalência e Análise de Valores-Limite

#### Funcionalidade: Moderação de Conteúdo - Perfil de Acesso

|  Campo / Atributo  |  Classe Válida (Permitido)  |  Classe Inválida (Negado) |
| ---------- |:------------:|:------------:|
|  **Perfil de Acesso**  | Administrador  |  Usuário Comum, Usuário Deslogado (Visitante)  |

### 5.3.2 Técnica: Tabela de Decisão

#### Funcionalidade: Regras de Moderação

As Tabelas de Decisão são ideais para testar regras de negócio com múltiplas condições combinadas. Elas garantem que nenhum cenário de moderação seja esquecido.

|  Condições / Ações  |  R1  |  R2  |  R3  |  R4  |
| ---------- |:------------:|:------------:|:------------:|:------------:|
|  Usuário logado é Administrador?  |  Sim  |  Sim  |  Não  |  Não  |
|  Vídeo/Usuário viola as políticas?  |  Sim  |  Não  |  Sim  |  Não  |
|  **Ação: Acessar Telas Administrativas (ex: admin-videos.ejs)**  |  Sim  |  Sim  |  Não  |  Não  |
|  **Ação: Bloquear Usuário / Remover Vídeo**  |  Sim  |  Não  |  Não  |  Não  |
|  **Ação: Impedir Acesso (Ocultar botões ou "Acesso Negado")**  |  Não  |  Não  |  Sim  |  Sim  |


**Caso de Teste Resultante (Amostra):**

 **CT-MOD-007: Remoção de vídeo por violação de políticas**

    * **Prioridade:** Alta

    * **Pré-condições:** Usuário com perfil de Administrador logado. Existe um vídeo na plataforma que viola as regras.
    

**Passos:** 
1. Acessar o Dashboard Administrativo ;

2. Navegar até a aba de gerenciamento de vídeos através do link `[Videos]`  ; 
3. Buscar pelo vídeo denunciado utilizando o campo de busca ou filtragem ;
4. Na linha correspondente ao vídeo, clicar no botão `[Remover]` ; 
5. Confirmar a exclusão (se houver modal de confirmação).

**Resultado Esperado:** O vídeo deve ser removido do sistema, e o total de vídeos no Dashboard Administrativo deve ser atualizado. O vídeo não deve mais aparecer no feed ou no perfil do criador.

 **CT-MOD-008: Bloqueio de usuário**
   
 * **Prioridade:** Crítica
  
  * **Pré-condições:** Usuário com perfil de Administrador logado.

**Passos:** 

1. Acessar o Dashboard Administrativo ; 

2. Navegar até a aba de gerenciamento de usuários através do link `[Usuários]` ; 

3. Buscar pelo usuário utilizando o campo de busca ou filtragem ; 

4. Na linha correspondente ao usuário, clicar no botão `[Bloquear]`.

**Resultado Esperado:** O status do usuário deve ser atualizado para "Bloqueado" na listagem. O contador de "Usuários Banidos" no Dashboard deve ser incrementado. O usuário deve perder o acesso ao sistema ou ser impedido de realizar login.

 **CT-MOD-009: Tentativa de acesso à moderação por Classe Inválida**
    
* **Prioridade:** Crítica

* **Pré-condições:** Usuário comum logado (Não-Administrador).
    

**Passos:** 
1. Acessar a página de um vídeo publicado por terceiros  ; 
2. Verificar os botões disponíveis na interface ; 3. Tentar acessar diretamente pela barra de endereços do navegador as URLs administrativas.


**Resultado Esperado:** Na tela de vídeo (`video.ejs`), o usuário deve visualizar a opção `[Botão: Denunciar]`, não tendo acesso aos botões de `[Editar]` ou `[Excluir]`, que aparecem apenas para o dono do vídeo. Ao tentar forçar o acesso às URLs administrativas, o sistema deve impedir a navegação, retornando uma mensagem de "Acesso Negado" ou redirecionando o usuário para o feed principal (`home.ejs`).

### 5.4.1. Técnica: Particionamento de Equivalência e Análise de Valores-Limite

#### Funcionalidade: Upload de Vídeos

#### Regra: O Vídeo deve ser MP4 ou WebM, com uma duração máxima de 1 Minuto (60 Segundos).

|  Campo  |  Classe Válida  |  Classes inválidas |
| ---------- |:------------:|:------------:|
|  **Formatos**  |  MP4; WebM  |  MOV; AVI; WMV; MKV  |
|  **Duração**  |  Até 1 Minuto (60 Segundos)  |  > 1 Minuto (60 Segundos)  |

**Análise de Valores-Limite para *Vídeo* (Duração)**

|  Limite  |  Valor Máximo (60)  |  Valor Acima do Máximo |
| ---------- |:------------:|:------------:|
|  **Valores de Teste**  |  60 Segundos  |  65 Segundos  |


**Caso de Teste Resultante (Amostra):**

 ### Casos de Teste Resultantes (Amostra):
CT-UPV-010: Upload de Vídeo no formato válido 
* Prioridade: Alta 
* Pré-condições: Usuario logado, Acesso Upload de Vídeos
* Passos: 1. Acessar "Upload de Vídeos"; 2. Inserir Título; 3, Selecionar Vídeo MP4 de 60 segundos; 4. Selecionar Thumbnail; 5. Publicar Vídeo
* Resultado Esperado: Vídeo Publicado, aparecendo no perfil do Usuario


 CT-UPV-011: Upload de Vídeo no formato inválido 
* Prioridade: Alta 
* Pré-condições: Usuario logado, Acesso Upload de Vídeos
* Passos: 1. Acessar "Upload de Vídeos"; 2. Inserir Título; 3, Selecionar Vídeo AVI de 60 segundos; 4. Selecionar Thumbnail; 5. Publicar Vídeo
* Resultado Esperado: Mensagem de erro:"Não foi possivel publicar, Formato de vídeo invalido"


 CT-UPV-012: Upload de Vídeo Acima da duração maxima
* Prioridade: Média
* Pré-condições: Usuário logado, Acesso Upload de Vídeos
* Passos: 1. Acessar "Upload de Vídeos"; 2. Inserir Título; 3, 
Selecionar Vídeo AVI de 65 segundos; 4. Selecionar Thumbnail; 5. Publicar Vídeo
* Resultado Esperado: Mensagem de erro:"Não foi possivel publicar, O vídeo ultrapassa o maximo 60 segundos de duração"

## 6. Critérios de Aceitação

### 6.1. Critérios de Entrada

As atividades de teste para as funcionalidades em escopo só serão iniciadas quando as seguintes condições forem atendidas:

* Todas as ferramentas de testes estiverem disponíveis para a equipe de testes.
* Todas as funcionalidades do Shortz App que devem ser testadas estarem disponíveis e implantadas corretamente no ambiente de testes.
* Presença de dados iniciais (usuários, usuários moderadores) necessários para executar os casos de teste.
* Código de automação estar devidamente revisado e armazenado.


### 6.2. Critérios de Saída

O ciclo de testes será considerado concluído e as funcionalidades estarão aptas para implantação em produção quando:

* 100% dos casos de teste planejados foram executados.
* O sistema responder dentro do limite acordado.
* Todos os defeitos dos casos de teste de prioridade "Crítica" e "Alta" forem corrigidos devidamente.
* Os resultados dos testes demonstram que o sistema concede uma boa experiência ao usuário.
* Pelo menos 90% dos problemas reportados forem corrigidos.
* Não houver falhas que impactem significativamente a experiência do usuário.


### 6.3. Critérios de Suspensão

Os testes serão temporariamente suspensos se alguma das seguintes condições ocorrer:

* O login não funciona ou o sistema fecha sozinho (crash) ao abrir a tela principal.
* Impossibilidade de seguir o roteiro de testes.
* Muitas alterações no código-base forem necessárias.
* Falhas críticas no ambiente de testes.
* Erro em alguma implementação do ambiente de testes.



