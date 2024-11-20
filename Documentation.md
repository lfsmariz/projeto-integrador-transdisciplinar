# Documentação do Projeto

## 1. Cadastro de Usuário
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero me cadastrar no aplicativo para poder fazer pedidos e acompanhar minhas compras.
- **Critérios de Aceitação:**
  - Campos obrigatórios: nome, e-mail, senha
  - Validação de CPF
  - Mensagem de sucesso após cadastro
- **Regras de Negócio:**
  - CPF e Email devem ser únicos no sistema
- **Requisito Não Funcional:**
  - Tempo de resposta de cadastro menor que 3 segundos
- **Prioridade:** A
- **Pontos de História:** 5

### Tarefas
- Criar estrutura do formulário de cadastro - 2 horas
- Implementar validação de e-mail - 3 horas
- Configurar envio de e-mail de confirmação - 4 horas
- Mensagem de sucesso após cadastro - 1 hora

---

## 2. Login de Usuário
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero fazer login no aplicativo para acessar minha conta e fazer pedidos.
- **Critérios de Aceitação:**
  - Campos obrigatórios: e-mail ou CPF e senha
  - Verificação de e-mail/CPF e senha
- **Regras de Negócio:**
  - Usuário bloqueado após 5 tentativas falhas consecutivas
- **Requisito Não Funcional:**
  - Mensagem não pode indicar registros anteriores no sistema
  - Tempo de resposta de login menor que 1 segundo
- **Prioridade:** A
- **Pontos de História:** 5

### Tarefas
- Criar estrutura do formulário de login - 2 horas
- Implementar validação de e-mail e senha - 3 horas
- Mensagem de erro para credenciais incorretas - 2 horas
- Testes e ajustes - 3 horas

---

## 3. Recuperação de Senha
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero poder recuperar minha senha caso a esqueça, para poder acessar minha conta novamente.
- **Critérios de Aceitação:**
  - Envio de e-mail com link para redefinição de senha
  - Validação do link de redefinição
  - Mensagem de confirmação de alteração de senha
- **Regras de Negócio:**
  - Link de redefinição expira em 30 minutos
- **Requisito Não Funcional:**
  - Tempo de envio do e-mail menor que 60 segundos
  - Reenvio após 1 minuto
- **Prioridade:** A
- **Pontos de História:** 8

### Tarefas
- Criar estrutura do formulário de recuperação de senha - 2 horas
- Configurar envio de e-mail com link de redefinição - 4 horas
- Implementar validação do link de redefinição - 4 horas
- Mensagem de confirmação de alteração de senha - 2 horas
- Testes e ajustes - 4 horas

---

## 4. Listado de Produtos
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero visualizar o catálogo de cupcakes disponíveis para escolher os que desejo comprar.
- **Comentários:** Imagens devem ser predefinidas para MVP
- **Critérios de Aceitação:**
  - Lista de produtos com imagem, nome, descrição e preço
  - Filtro por tipo de cupcake
- **Regras de Negócio:**
  - Apenas produtos disponíveis em estoque são exibidos
- **Requisito Não Funcional:**
  - Catálogo deve se adaptar ao modelo retrato ou paisagem
  - Tempo de carregamento do catálogo menor que 3 segundos
- **Prioridade:** A
- **Pontos de História:** 8

### Tarefas
- Criar estrutura da página de catálogo - 3 horas
- Implementar filtro por tipo e sabor de cupcake - 4 horas
- Exibir produtos com imagem, nome, descrição e preço - 3 horas
- Testes e ajustes - 4 horas

---

## 5. Adicionar Produto ao Carrinho
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero adicionar cupcakes ao meu carrinho de compras para depois finalizar a compra.
- **Comentários:** Carrinho deve ser apresentado como uma cestinha
- **Critérios de Aceitação:**
  - Produtos adicionados ao carrinho exibidos com quantidade e preço total
  - Snackbar de confirmação ao adicionar produto
- **Regras de Negócio:**
  - Limite de 500 unidades por cupcake no carrinho
- **Requisito Não Funcional:**
  - Carrinho deve ser acessível em todas as telas
- **Prioridade:** A
- **Pontos de História:** 8

### Tarefas
- Criar botão de adicionar produto ao carrinho - 2 horas
- Exibir produtos adicionados com quantidade e preço total - 3 horas
- Mensagem de confirmação ao adicionar produto - 2 horas
- Testes e ajustes - 3 horas

---

## 6. Remover Produto do Carrinho
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero poder remover cupcakes do meu carrinho caso mude de ideia.
- **Critérios de Aceitação:**
  - Produtos removidos com atualização imediata do valor total do carrinho
  - Mensagem de confirmação ao remover produto
- **Regras de Negócio:**
  - Produto é removido permanentemente do carrinho até ser adicionado novamente
  - Botão de limpar carrinho deve estar sempre habilitado
- **Requisito Não Funcional:**
  - Resposta é cálculo imediato e confirmado após consolidação na base de dados
- **Prioridade:** A
- **Pontos de História:** 3

### Tarefas
- Criar botão de remover produto do carrinho - 2 horas
- Atualizar valor total do carrinho - 2 horas
- Mensagem de confirmação ao remover produto - 1 hora
- Testes e ajustes - 2 horas

---

## 7. Finalizar Compra
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero finalizar a compra dos cupcakes no meu carrinho para receber minha encomenda.
- **Critérios de Aceitação:**
  - Processamento de pagamento com opções de cartão de crédito, débito e pix
  - Confirmação de pedido por e-mail com detalhes da compra
- **Regras de Negócio:**
  - Validação de estoque antes de confirmar compra
  - Pedido mínimo de R$50,00
- **Requisito Não Funcional:**
  - Tempo de resposta para processamento de pagamento menor que 10 segundos
- **Prioridade:** A
- **Pontos de História:** 13

### Tarefas
- Criar formulário de processamento de pagamento - 3 horas
- Implementar opções de cartão de crédito e débito - 5 horas
- Validação de estoque antes de confirmar compra - 3 horas
- Enviar confirmação de pedido por e-mail - 2 horas
- Testes e ajustes - 4 horas

---

## 8. Rastreamento de Pedido
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero rastrear o status do meu pedido para saber quando ele será entregue.
- **Critérios de Aceitação:**
  - Atualização de status do pedido (em preparação, em trânsito, entregue)
  - Notificações push para cada atualização de status
- **Regras de Negócio:**
  - Status atualizado automaticamente conforme o andamento do pedido
- **Requisito Não Funcional:**
  - Tempo de atualização de status em tempo real
- **Prioridade:** A
- **Pontos de História:** 8

### Tarefas
- Criar sistema de atualização de status do pedido - 3 horas
- Implementar notificações push para cada atualização de status - 3 horas
- Testes e ajustes - 4 horas

---

## 9. Avaliação de Produtos
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero poder avaliar os cupcakes que comprei para ajudar outros clientes.
- **Critérios de Aceitação:**
  - Sistema de avaliação com estrelas e comentários
  - Exibição de avaliações anteriores na página do produto
- **Regras de Negócio:**
  - Apenas clientes que compraram o produto podem avaliá-lo
- **Requisito Não Funcional:**
  - Avaliações carregadas em menos de 2 segundos
  - Nome dos avaliadores parcialmente encoberto por motivos de segurança
- **Prioridade:** B
- **Pontos de História:** 8

### Tarefas
- Criar sistema de avaliação com estrelas e comentários - 4 horas
- Exibir avaliações anteriores na página do produto - 3 horas
- Testes e ajustes - 4 horas

---

## 10. Promoções e Ofertas
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero receber notificações de promoções e ofertas especiais para aproveitar descontos.
- **Critérios de Aceitação:**
  - Notificações push para promoções e ofertas
  - Página dedicada a promoções no aplicativo
- **Regras de Negócio:**
  - Promoções aplicáveis somente para pedidos feitos pelo aplicativo
- **Requisito Não Funcional:**
  - Notificações enviadas nos momentos de maior conversão calculadas pela equipe de marketing após a publicação da promoção
- **Prioridade:** C
- **Pontos de História:** 5

### Tarefas
- Implementar notificações push para promoções e ofertas - 2 horas
- Criar página dedicada a promoções no aplicativo - 3 horas
- Testes e ajustes - 2 horas

---

## 11. Histórico de Pedidos
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero visualizar o histórico de meus pedidos anteriores para acompanhar minhas compras.
- **Critérios de Aceitação:**
  - Lista de pedidos anteriores com data, valor e status
  - Detalhes do pedido acessíveis
- **Regras de Negócio:**
  - Histórico disponível por até 12 meses
- **Requisito Não Funcional:**
  - Tempo de carregamento do histórico menor que 2 segundos
- **Prioridade:** B
- **Pontos de História:** 5

### Tarefas
- Criar página de histórico de pedidos - 3 horas
- Exibir detalhes dos pedidos anteriores - 3 horas
- Testes e ajustes - 2 horas

---

## 12. Chat de Suporte
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero acessar um chat de suporte para resolver problemas ou tirar dúvidas.
- **Critérios de Aceitação:**
  - Chat disponível durante horário de funcionamento
  - Resposta inicial em menos de 2 minutos
- **Regras de Negócio:**
  - Atendimento disponível de segunda a domingo, das 9h às 22h
  - Suspensão por 3 minutos de inatividade
- **Requisito Não Funcional:**
  - Tempo de resposta menor que 3 minutos
- **Prioridade:** C
- **Pontos de História:** 8

### Tarefas
- Integrar sistema de chat no aplicativo - 4 horas
- Configurar horários de atendimento - 2 horas
- Implementar resposta inicial automática - 2 horas
- Testes e ajustes - 3 horas

---

## 13. Personalização de Cupcake
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero personalizar os cupcakes (sabor, cobertura, enfeites) para atender minhas preferências.
- **Critérios de Aceitação:**
  - Opções de personalização selecionáveis
  - Preço atualizado conforme as escolhas
- **Regras de Negócio:**
  - Restrições de combinações de sabores e coberturas (Limitar quantidades)
- **Requisito Não Funcional:**
  - Tempo de resposta para atualizações de personalização em tempo real antes da adição do produto ao carrinho
- **Prioridade:** D
- **Pontos de História:** 13

### Tarefas
- Criar opções de personalização selecionáveis - 4 horas
- Atualizar preço conforme as escolhas - 3 horas
- Implementar restrições de combinações de sabores e coberturas - 3 horas
- Testes e ajustes - 4 horas

---

## 14. Programa de Fidelidade
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero participar de um programa de fidelidade para acumular “Cupcoins” e obter descontos em compras futuras.
- **Comentários:** Válido apenas para compra online
- **Critérios de Aceitação:**
  - Sistema de pontos por valor gasto
  - Troca de pontos por descontos
- **Regras de Negócio:**
  - Pontos válidos por 12 meses
- **Requisito Não Funcional:**
  - Atualização de pontos em tempo real
- **Prioridade:** D
- **Pontos de História:** 8

### Tarefas
- Criar sistema de pontos por valor gasto - 4 horas
- Implementar troca de pontos por descontos - 3 horas
- Testes e ajustes - 4 horas

---

## 15. Clique e Retire
- **Requerente:** Cliente
- **Ação:** Como cliente, eu quero participar de um programa de fidelidade para acumular “Cupcoins” e obter descontos em compras futuras.
- **Critérios de Aceitação:**
  - Mapa integrado com localização da loja
  - Opções de rota de acordo com o meio de transporte
- **Regras de Negócio:**
  - Exibição de horários de funcionamento e informações de contato
- **Requisito Não Funcional:**
  - Tempo de carregamento do mapa menor que 3 segundos
- **Prioridade:** D
- **Pontos de História:** 8