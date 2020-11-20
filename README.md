# Teste da Tempo telecom


# Backend

Backend feito em Node.js com express. 

o servidor da aplicação roda na porta 8080, para alterar basta mudar a variavel **port** no arquivo **src/server.js**

o controle da aplicação é feito atraves dos aquivos no diretorio **src/controller** sendo que cada um é responsavel por elemento do sistema
| elemento | arquivo|
|----------|---------|
|pedidos  |pedidoController.js|
|clientes |clienteController.js|
|produtos |produtoController.js|


# Banco de dados
O banco de dados usado foi o SqlLite3 em conjunto com knex para agilizar a montagem dos modelos

As configurações gerais de banco de dados podem ser mudadas no arquivo **knexfile.js** na raiz e no aquivo **src/data/db-config.js** podem modificado a configuração especifica

o Knex quando roda o comando **npx knex migrate:make {nome da tabela}** gera as migrates que são responsaveis pela criação do modelo do banco 
Apos a criação do modelo devesse rodar o comando **knex migrate:latest** e entao é gerado o banco de dados com nome definido anteriomente no db-congif.js e configuraçõs do knexfile.js
O banco em sqlite3 pode ser visto pelo app [SqliteStudio]<https://sqlitestudio.pl/>


# Frontend

Frontend ainda não concluido mas conectado ao backend, para conecta ao backend foi usada a biblioteca Axio.
todos os metodos ja estao implementados no backend,  ainda falta criar as paginas de:
faltam ainda as paginas:
cadastro de cliente;
cadastro de pedido;
cadastro de produto;
lista de produto;
lista de pedido;

A nao implementação dessas paginas se deve ao fato da demora na correção de um bug instação do Axio e q precisou ser refeita. 
apesar de trazer informações de clientes essas ainda nao sao mostradas pela pagina (resolvendo no momento) após isso o proxmo passo é a implementação de cadastro de novos clientes
