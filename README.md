# ABANDONADO (VOU REFAZER) ||||| RENTX - ROCKETSEAT IGNITE TRILHA NODE.JS

### REQUISITOS FUNCIONAIS

Funcionalidades que devem ser implementadas no projeto.


### REQUISITOS NÃO FUNCIONAIS

Requisitos não ligados diretamente na regra de negócio, mas que devem ser implementados no projeto.

### REGRAS DE NEGÓCIO

Regras por trás das funcionalidades.

## Cadastro de carros

**RF**

* Deve ser possível cadastrar um carro no sistema.
* Deve ser possível listar todas as categorias de carros cadastradas.


**RN**

* Não deve ser possível cadastrar um carro com uma placa já cadastrada.
* Não deve ser possível alterar a placa de um carro já cadastrado.
* Por padrão, o carro já deve ser cadastrado como disponível.
* Um carro só pode ser cadastrado por um usuário administrador.

## Listagem de carros

**RF**

* Deve ser possível listar os carros cadastrados no sistema.
* Deve ser possível listar dos carros cadastrados no sistema por categoria.
* Deve ser possível listar os carros cadastrados pela marca.
* Deve ser possível listar os carros cadastrados pelo nome.

**RN**

* Não é necessário estar logado para listar os carros.

## Cadastro de Especificações nos carros

**RF**

* Deve ser possível cadastrar uma especificação no carro.
* Deve ser possível listar todas as especificações cadastradas no sistema.

**RN**

* Não deve ser possível cadastrar uma especificação com um nome já cadastrado.
* Não deve ser possível cadastrar uma especificação para um carro que não esteja cadastrado.
* Não deve ser possível cadastrar uma mesma especificação para um carro mais de uma vez.

## Cadastro de imagens nos carros

**RF**

* Deve ser possível cadastrar uma imagem no carro.
* Deve ser possível listar todos os carros cadastrados no sistema.

**RNF**

* Utilizar o Multer para o upload das imagens.

**RN**

* O usuário deve ser administrador para cadastrar imagens.
* O usuário deve poder cadastrar mais de uma imagem para um carro.
* Não deve ser possível cadastrar uma imagem para um carro que não esteja cadastrado.

## Aluguel de carros

**RF**

* Deve ser possível alugar um carro.

**RN**

* O aluguel deve ter duração mínima de 1 dia.
* Não deve ser possível alugar um carro que não esteja disponível.
* Não deve ser possível cadastrar um aluguel para um usuário que já tenha um aluguel em aberto.
* Não deve ser possível cadastrar um aluguel para um carro que não esteja cadastrado.	
