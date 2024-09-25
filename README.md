# Projeto Lista de Músicas - ADS 3º Semestre - Programação Web

Este projeto faz parte do curso de **Análise e Desenvolvimento de Sistemas (ADS)** no 3º semestre, para a disciplina eletiva de **Programação Web**. A aplicação consiste em uma tabela que lista músicas com informações detalhadas, utilizando componentes do **Bootstrap** para estilização. O projeto será desenvolvido em etapas, e novas funcionalidades serão adicionadas ao longo do tempo.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Etapas de Desenvolvimento](#etapas-de-desenvolvimento)
  - [1.0 Criação do Projeto](#10-criação-do-projeto)
    - [1.1 Criação do Projeto Angular](#11-criação-do-projeto-angular)
    - [1.2 Inicialização do Repositório Git](#12-inicialização-do-repositório-git)
    - [1.3 Instalação do Bootstrap](#13-instalação-do-bootstrap)
    - [1.4 Criação do Componente de Tabela](#14-criação-do-componente-de-tabela)
    - [1.5 Implementação de Dados Locais](#15-implementação-de-dados-locais)
    - [1.6 Migração para API Externa com JSON Server](#16-migração-para-api-externa-com-json-server)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

Este projeto visa desenvolver uma aplicação web para exibir uma lista de músicas, detalhando nome, artista, ano de lançamento, categoria e preço. A aplicação utiliza **Angular** para gerenciamento de componentes, **Bootstrap** para estilização e um **JSON Server** para simular uma API externa, da qual os dados das músicas serão carregados dinamicamente.

## Funcionalidades

- Exibição de uma tabela com detalhes de músicas: título, artista, ano, categoria e nota.
- Utilização de **Bootstrap** para uma tabela responsiva e estilizada.
- Dados das músicas inicialmente definidos no componente Angular, mas migrados para uma API externa simulada usando **JSON Server**.

## Tecnologias Utilizadas

- **Node.js** (v14 ou superior)
- **Angular**
- **Bootstrap**
- **JSON Server** (para simulação de API externa)

## Etapas de Desenvolvimento

### 1.0 Criação do Projeto

Nesta seção, são descritos os passos seguidos para a criação e organização do projeto.

#### 1.1 Criação do Projeto Angular

O projeto foi iniciado com o Angular usando o comando:

```bash
ng new lista-de-musicas --no-standalone
```

Esse comando cria uma estrutura modular, ideal para projetos mais complexos, sem o uso de componentes standalone.

#### 1.2 Inicialização do Repositório Git

Para controle de versão, o projeto foi configurado com Git:

1. Inicialize o repositório:
   ```bash
   git init
   ```

2. Adicione todos os arquivos:
   ```bash
   git add .
   ```

3. Faça o primeiro commit:
   ```bash
   git commit -m "Primeiro commit"
   ```

4. Conecte a um repositório remoto (como GitHub):
   ```bash
   git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
   ```

5. Envie para o GitHub:
   ```bash
   git push -u origin master
   ```

#### 1.3 Instalação do Bootstrap

O **Bootstrap** foi adicionado para garantir uma interface elegante e responsiva. O comando usado foi:

```bash
ng add @ng-bootstrap/ng-bootstrap
```

#### 1.4 Criação do Componente de Tabela

Para criar a tabela que exibe as músicas, foi gerado um componente específico com o comando abaixo, o que gerou o arquivo `src/app/tabela-de-musicas/tabela-de-musicas.component.ts`:

```bash
ng g c tabela-de-musicas
```

Em seguida, o componente foi adicionado à página principal do projeto, localizada em `src/app/app.component.html`:

```html
<app-tabela-de-musicas></app-tabela-de-musicas>
```

Foi criada uma interface para definir o modelo de dados de uma música. Esta interface foi declarada no arquivo `src/app/tabela-de-musicas/musicas.ts`:

```typescript
export interface Musica {
  id: number;
  name: string;
  note: number;
  category: string;
  artist: string;
  year: number;
}
```

#### 1.5 Implementação de Dados Locais

No início do desenvolvimento, os dados das músicas foram inseridos diretamente no componente `tabela-de-musicas.component.ts`, no caminho `src/app/tabela-de-musicas/tabela-de-musicas.component.ts`:

```typescript
import { Component } from '@angular/core';
import { Musica } from './musicas';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrls: ['./tabela-de-musicas.component.css']
})
export class TabelaDeMusicasComponent {
  musicas: Musica[] = [
    {
      id: 1,
      name: 'Bohemian Rhapsody',
      note: 9.99,
      category: 'Rock',
      artist: 'Queen',
      year: 1975
    },
    {
      id: 2,
      name: 'Hotel California',
      note: 9.99,
      category: 'Rock',
      artist: 'Eagles',
      year: 1976
    },
    // Outros objetos de música...
  ];
}
```

A exibição desses dados foi configurada no arquivo HTML do componente `src/app/tabela-de-musicas/tabela-de-musicas.component.html`:

```html
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Título</th>
      <th>Nota</th>
      <th>Artista</th>
      <th>Gênero</th>
      <th>Ano</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let musica of musicas">
      <td>{{musica.id}}</td>
      <td>{{musica.name}}</td>
      <td>{{musica.note}}</td>
      <td>{{musica.artist}}</td>
      <td>{{musica.category}}</td>
      <td>{{musica.year}}</td>
    </tr>
  </tbody>
</table>
```

#### 1.6 Migração para API Externa com JSON Server

Os dados foram posteriormente migrados para uma API simulada com **JSON Server**. O arquivo de configuração da API (`db.json`) foi criado na raiz do projeto.

1. Instale o JSON Server:
   ```bash
   npm install json-server
   ```

2. Crie o arquivo `db.json` na raiz do projeto com os dados das músicas:

```json
{
  "musicas": [
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "note": 9.99,
      "category": "Rock",
      "artist": "Queen",
      "year": 1975
    },
    {
      "id": 2,
      "name": "Hotel California",
      "note": 9.99,
      "category": "Rock",
      "artist": "Eagles",
      "year": 1976
    }
    // Outros objetos de música...
  ]
}
```

3. Execute o servidor:
   ```bash
   json-server --watch db.json
   ```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto Angular:
   ```bash
   ng serve
   ```

4. Para a API simulada, inicie o JSON Server:
   ```bash
   json-server --watch db.json
   ```

## Uso

Após instalar e iniciar o projeto, acesse `http://localhost:4200` no navegador. A tabela de músicas será carregada dinamicamente a partir dos dados da API.

## Contribuição

Para contribuir, siga os passos:

1. Fork o repositório.
2. Crie uma branch nova: `git checkout -b minha-feature`.
3. Faça commit das mudanças: `git commit -m 'Minha nova feature'`.
4. Envie para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
