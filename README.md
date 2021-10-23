<h1 align="center">
    Desafio Técnico Keycash
    <h6 align="center">Tecnologias usadas: NodeJS, TypeScript, Express, TypeORM e MySQL</h6>
</h1>

### Executando a API

Primeiramente instale as dependências com o comando ```npm install```, em seguida crie um arquivo ```.env``` na raiz passando as informações necessárias como o ```.env.sample``` exemplifica:

```
    API_PORT=

    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    DATABASE_NAME=
```

Depois de configurado o seu banco de dados *MySQL* rode as *migrations* com o comando ```npm run typeorm migration:run``` e você estará pronto para rodar o servidor. Para rodar o servidor de desenvolvimento utilize o comando ```npm run dev:server```, para buildar e rodar o servidor de produção utilize ```npm start```.

### Endpoints da API

Em seu navegador acesse o Endpoint */api-docs* para ter acesso a documentação das rotas e as instruções de como usá-las (documentação gerada pelo Swagger). Abaixo segue algumas informações sobre os Endpoints:

#### /register

Método POST que espera receber um body no formato *application/json* com o seguinte conteúdo: 

```ts
    interface IRealtyRequest {
        price: number;
        type: RealtyTypeEnum;
        size: number;
        parkingSpace: number;
        bedroom: number;
        bathroom: number;
        city: string;
        state: string;
        neighborhood: string;
        address: string;
    }
```

Sendo *RealtyTypeEnum*:

```ts
    enum RealtyTypeEnum {
        House = 'house',
        Apartment = 'apartment'
    }
```

#### /list/:id

Método GET que espera receber o *id* do imóvel pelo *params* da requisição via path.

#### /update/:id

Método PUT que espera receber o *id* do imóvel pelo *params* da requisição via path e um body no formato *application/json* como no exemplo (podendo atualizar apenas o campo desejado):

```json
    {
        "price": 100000,
        "type": "apartment",
        "size": 90,
        "parkingSpace": 1,
        "bedroom": 2,
        "bathroom": 2,
        "city": "São Paulo",
        "state": "SP",
        "neighborhood": "Bairro",
        "address": "Rua"
    }
```

#### /delete/:id

Método DELETE que espera receber o *id* do imóvel pelo *params* da requisição via path.

#### /search

Método GET que espera receber as seguintes *querys*:

```/search?type=&bedroom=&bathroom=&parkingSpace=&city=&neighborhood=&page=```