# Plano de Testes - Shortz-App

## 1. Identificação

- **Projeto:** Shortz-App
- **Versão:** 1.0 (Módulo de Usuários e Autenticação)
- **Data de ciração:** 10/01/2026
- **Objetivo:**  É cateogrizar e definir a prioridade dos riscos a serem testados
- **Autores:** Caue Yohan Plachi, Elias Schroeder de Souza, Lucas Juliano de Oliveira, Mateus Isidoro

## 2. Escopo

### O que será testado
- Banco de Dados
- Sistema de Comentários
- Sistema de Notificações
- Sistema de Administração
- Sistema de Vídeos

### O que não será testado
- Sistema de Login
- Sistema de Likes
- Sistema de Playlist
- Sistema de Denúncia

## 3. Estratégia
### Niveis de Teste
- **Unitario:** [o que será testado unitariamente]
- **Integração:** [rotas/endpoints a testar com Supertest]

### Ferramentas
- Vitest, Supertest, c8/coverage, GitHub Actions

## 4. Riscos Identificados
| ID | Descrição do risco | Sistema de referência | Categoria | Prob. | Impacto | Prioridade |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **R-01** | Usuário não ADM conseguir deletar vídeo dos outros | Youtube | Funcional | Baixa | Crítico | Alto |
| **R-02** | Visualização de vídeos não sincronizadas com os usuários | Tik-Tok | Funcional | Média | Baixo | Baixo |
| **R-03** | Responsividade não funcionando de forma adequada | Site do Governo | Funcional | Média | Alto | Alto |
| **R-04** | Pagina inicial demora para carregar | Redes sociais | Não Funcional | Alta | Baixo | Médio |
| **R-05** | Pessoas burlando o sistema de palavras ofensivas | Jogos competitivos | Funcional | Alta | Médio | Alto |
| **R-06** | Sistema não enviar notificação | Instagram | Funcional | Média | Baixo | Baixo |
| **R-07** | Servidor ficar sem espaço para vídeos | Tik-Tok | Não Funcional | Média | Crítico | Crítico |
| **R-08** | Sistema não salvar a mudança de apelido | Twitter | Funcional | Baixa | Médio | Baixo |
| **R-09** | Sistema lento por conta de sobrecarga de usuários | Steam | Não Funcional | Média | Crítico | Crítico |
| **R-10** | Usuário do perfil não consegue remover seu próprio vídeo | Youtube | Funcional | Média | Crítico | Crítico |


## 5. Recursos e Ambiente
- **Ambiente:** Node.js 20+, MySQL local, Vitest + Supertest
- **Dados de teste:** [seed / fixtures planejados]
- **CI:** GitHub Actions (npm test em cada push)


## 6. Cronograma 
| Semana | Atividade | Entrega |
| :--- | :--- | :--- | 
| 4 | Protótipo do Plano (esta aula) | plano-de-teste.md | 
| 5 | Caos de teste manuais | tests/manuais/casos-de-teste |
| 6 | Plano de Teste finalizado | Entrega 1 |


## 7. Critérios de Entrada e Saída
- **Entrada:** Ambiente configurado + migration ok + build passando
- **Saida:** Cobertura ≥ 70% + zero falhas em riscos Críticos/Altos
- **Suspensão:** Falha grave no ambiente que pede excução dos testes