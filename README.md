# Controle de Despesas — Web Development

**Visualizar projeto:**  
https://rafaguanciale.github.io/web_project_expenses_pt/

Este projeto foi desenvolvido como parte da **Sprint 7** do curso de Web Development da TripleTen.  
O foco desta sprint é a introdução prática ao JavaScript, aplicando lógica, funções, loops e manipulação de dados para dar comportamento real a uma aplicação web.
Tive que implementar toda a lógica de cálculos e regras, concentrada principalmente no arquivo `calculations.js`.

## Tecnologias Utilizadas

- JavaScript (ES6)
- Manipulação de arrays
- Funções
- Loops (`for`, `for...of`)
- Condicionais
- Interação com o DOM 

## Principais Funcionalidades e Soluções Técnicas

### 1. Estrutura de dados de despesas

As despesas são armazenadas em um array aninhado, permitindo:
- Percorrer facilmente os dados
- Calcular totais, médias e estatísticas por categoria
- Reutilizar a mesma estrutura em diferentes funções

### 2. Cálculo do total de despesas

- Uso de variável acumuladora (totalExpensesValue)
- Atualização incremental ao adicionar ou remover despesas
- Evita recalcular todo o array desnecessariamente

### 3. Cálculo da despesa média

Função responsável por:
- Validar array vazio
- Dividir o total de despesas pela quantidade de registros
- Retornar um valor numérico seguro para exibição
Conceito reforçado:
- Validação antes da operação
- Prevenção de NaN

### 4. Cálculo do saldo e estado visual

- Saldo calculado como diferença entre orçamento e despesas
- Função separada para definir o estado do saldo (positivo, zero, negativo)
- Outra função aplica esse estado ao DOM por meio de classes CSS

### 5. Estatísticas por categoria

Responsável por:
- Receber uma categoria como parâmetro
- Percorrer todas as despesas
- Somar apenas os valores daquela categoria
- Retornar o total calculado
A função é reutilizada várias vezes para atualizar a interface, evitando duplicação de código.

### 6. Identificação da maior categoria de despesas

Implementação de um algoritmo para:
- Gerar um array aninhado com categorias e seus totais
- Percorrer esse array para identificar o maior valor
- Retornar a categoria correspondente

Esse exercício consolidou:
- Loops
- Reutilização de funções
- Comparação de valores
- Separação entre dados intermediários e resultado final

### 7. Adição dinâmica de despesas

- Implementação de função para adicionar novas despesas manualmente
- Conversão e validação de valores vindos do input
- Atualização do estado global e sincronização da interface
Ponto importante:
- Funções de dados não manipulam o DOM diretamente
- A atualização visual é centralizada em uma função de sincronização (setStats)


## Aprendizados Pessoais

Este projeto marcou uma virada importante no meu entendimento de JavaScript.

Principais aprendizados:
- Como funções criam novos contextos a cada chamada
- Importância da ordem de execução em loops e condicionais
- Como evitar NaN validando dados antes das operações
- Reutilização de funções ao invés de criar variáveis globais para tudo
- Entendimento de como o DOM armazena valores exibidos na página
- Mais do que “fazer funcionar”, este projeto reforçou como pensar logicamente antes de escrever código.

## Melhorias Futuras

- Validações mais robustas nos inputs
- Refatoração para reduzir dependência de variáveis globais
- Utilizar um banco de dados no lugar de uma array

## Screenshots

Página completa 
![page](./images/Screenshoot_1.JPG)