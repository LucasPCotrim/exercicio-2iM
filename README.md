# exercicio-2iM

O objetivo deste exercício é implementar uma aplicação para submissão de aplicações para um processo seletivo.
A aplicação deve conter um formulário na interface com usuário, que se comunica com uma API back-end que por sua vez se comunica com um banco de dados e com o Camunda para armazenar as candidaturas

<img src="https://github.com/LucasPCotrim/exercicio-2iM/blob/main/read-me-files/HomePage.png" />

## Como executar este projeto?

A execução deste projeto depende de três componentes: Front-end, Back-end e Banco de Dados.

### Front-end

O frot-end foi implementado utilizando o framework React.js com Typescript e pode ser executado a partir do comando "npm run start"

### Back-end

O back-end foi feito utilizando o framework Spring com linguagem Java e a API pode ser inicializada com o comando "mvn spring-boot:run"

### Banco de Dados

Para persistência de dados foi implementado um banco de dados PostgreSQL.
O mesmo deve ser inicializado anteriormente e as informações de acesso devem estar presentes no arquivo "application.properties" do back-end.
Para criação e população do banco de dados com exemplos de teste podem ser utilizados os scripts SQL nos arquivos "db/createDatabase.sql" e "db/populateDatabase.sql".
