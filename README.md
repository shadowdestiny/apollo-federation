# prisma graphql

These containers allow to display an instance of Prisma and Grahpql

## Steps to follow configure our environment
1. Clone .env.example renamed to .env
2. Execute in our console the following command ``docker-compose build``
3. Execute in our console the following command ``docker-compose up``
4. Execute in other console the following command ``docker-compose exec nodejs bash``, then once inside, run the following command ``npm i``. This installs the dependencies
5. Right there execute the following command for each microservice ``cd /var/www/services/post/mariaDB && prisma migrate dev --name ini`` and  ``cd /var/www/services/user/mariaDB && prisma migrate dev --name ini``, this builds a migration on our mariaDB database
6. Right there execute the following command  ``cd /var/www/ && npm run start-seeders``
7. Right there execute the following command ``npm run start-services`` start 2 microservices.
8. open another window and run the following command ``docker-compose exec nodejs bash``
9. And finally we run the gateway ``npm run start-gateway``

# Deployment and local variables

Environment variables in the docker scope (node)

| ENV Variable      | Content                | Example                    |
|-------------------|------------------------|----------------------------|
| SERVICE_USER_PORT | Microservice user node | ``SERVICE_USER_PORT=5001`` |
| SERVICE_POST_PORT | Microservice post node | ``SERVICE_POST_PORT=5002`` |
| GATEWAY_USER_PORT | Gateway port node      | ``GATEWAY_USER_PORT=5000`` |

Environment variables in the docker scope (mysql) 1 microservice "User"

| ENV Variable | Content                                  | Example                |
|--------------|------------------------------------------|------------------------|
| DB_PORT_1    | DB name MYSQL 1 microservice 1           | ``DB_PORT_1=3245``     |
| DB_NAME_1    | Database User Mysql(root) microservice 1 | ``DB_NAME_1=service1`` |
| DB_USER_1    | Database Password Mysql microservice 1   | ``DB_USER_1=root``     |
| DB_PASS_1    | Database Port password microservice 1    | ``DB_PASS_1=service1`` |

Environment variables in the docker scope (mysql) 2 microservice "Post"

| ENV Variable | Content                                  | Example                |
|--------------|------------------------------------------|------------------------|
| DB_PORT_2    | DB name MYSQL 2 microservice 2           | ``DB_PORT_1=3246``     |
| DB_NAME_2    | Database User Mysql(root) microservice 2 | ``DB_NAME_1=service2`` |
| DB_USER_2    | Database Password Mysql microservice 2   | ``DB_USER_1=root``     |
| DB_PASS_2    | Database Port password microservice 2    | ``DB_PASS_1=service2`` |

# Environment subnet
| ENV Variable      | Content                                      | Example                            |
|-------------------|----------------------------------------------|------------------------------------|
| GA_BACKEND_SUBNET | Subnet range                                 | ``GA_BACKEND_SUBNET=120.3.2.0/16`` |
| GA_DB_HOST_1      | Host IP inherited of the variable DB_HOST    | ``GA_DB_HOST=120.3.2.2``           |
| GA_DB_HOST_2      | Host IP inherited of the variable DB_HOST    | ``GA_DB_HOST=120.3.2.4``           |
| GA_NODE_IP        | Host IP inherited of the variable GA_NODE_IP | ``GA_NODE_IP=120.3.2.3``           |

# String prismaORM
| ENV Variable   | Content                       | Example                                                                                        |
|----------------|-------------------------------|------------------------------------------------------------------------------------------------|
| DATABASE_URL_1 | Database string for PrismaORM | ``DATABASE_URL_1="mysql://root:${DB_PASS_1}@${GA_DB_HOST_1}:3306/${DB_NAME_1}?schema=public"`` |
| DATABASE_URL_2 | Database string for PrismaORM | ``DATABASE_URL_1="mysql://root:${DB_PASS_1}@${GA_DB_HOST_1}:3306/${DB_NAME_1}?schema=public"`` |

### Tool
``graphdoc -e http://localhost:4001/graphql -o ./doc/schema``

[Prisma Migrate](https://www.youtube.com/watch?v=9l8iZP_HKY8)

### Prisma Migrate
``prisma migrate dev --name init``
####
``prisma migrate dev --schema=./prisma/mysql/schema.prisma``
####
``prisma migrate dev --schema=./prisma/postgres/schema1.prisma``

### graphql limit
[Graphl limit](https://mugan86.medium.com/tips-graphql-limitando-la-profundidad-de-las-consultas-1-cd12f3e0b1ba)

### Prisma Migrate from typeorm
[Migrate from typeorm](https://www.prisma.io/docs/guides/migrate-to-prisma/migrate-from-typeorm)

### Create different scheme
[Different schema](https://github.com/prisma/prisma/issues/2443#issuecomment-630679118)
``prisma generate --schema=./prisma/mysql/schema.prisma``

``prisma generate --schema=./prisma/postgres/schema1.prisma``

### init project
``npm run dev``

``prisma migrate deploy --schema=./prisma/postgres/schema1.prisma``
