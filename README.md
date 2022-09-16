# Template Serverless Functions TS 

## Instalacion

Necesita tener instalado :

- Node .js Version 14.17.6 o mayor
- Serverless Frameword Version 3
- Serverless CLI.

## Instalacion Serverless

Abra um terminal y digite npm install -g serverless para instalar el Serverless.

```bash
npm install -g serverless
```

para las credenciales

puede crear un perfil con sus credenciales otorgadas podria digitar el comando :

```bash
serverless config credentials --provider aws --key tuapyKeyaqui --secret tuSecretKeyaqui
```

o si no sabes donde conseguir las Key
consulte la documentacion mas a fondo :

https://www.serverless.com/framework/docs/providers/aws/guide/credentials

acabando esto continue con :

clonar el repositorio

abrir la consola y ejecutar en la carpeta raiz del proyecto

```bash
npm install
```

## Generar Modelos y Migraciones
** Para poder hacer la migracion entrar a la carpeta databse y al archivo 

```
config.js
```

rellenar o colocar las variables de entorno 

para generar modelos y migracion ejecutar el comando

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

[Link Reference](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)


__!Consideracion :__

Cuando se trabaja con Ts se debe pasar el model generado a TypeScript.

De igual manera para poder utilizar el Paranoid (eliminado logico se debe agregar a la migracion 

```
 deletedAt: {
        allowNull:false,
        type:Sequelize.DATE
      }
```
[Documentacion de Paranoid](https://sequelize.org/docs/v6/core-concepts/paranoid/#defining-a-model-as-paranoid)

y al modelo en la funcion init despues de poner los atributos agregar el 

```
paranoid:true,
timestamps: true,
```

## Migracion

para la migracion se necesita ejecutar  dentro de la carpeta database abrir terminal:

```bash
npm run migration
```
y genera todas las tablas en la base de datos.

## Creacion de Lambda 

entrar a la caroeta src/
```
cd src
```
entrar enla carpeta functions :

```
cd functions
```
entrar a la carpeta lambdas
```
cd lambdas
```
Carpetas 
```
- Functions 

    - controllers
        -controllers.ts

    - lambdas
        - lambdas.ts
    
    - interfaces
        - interfaces.ts

    - index.ts
```
ahi creas la lambda agregar un nuevo archivo:

```
 handler.ts
``` 
para despues crear su controllador  te posicionas 

para el controlador entras a la carpeta 

```
cd ..

cd controller
```
en esta carpeta esta los controlladores de cada lambda añadarias la logica.

creas el archivo para tu lambda

```
 exampleController.ts
```
procesder de crear y meter la logica en tu controller saldras 

```
cd ..
```
volveras a entrar a la carpeta lamdbas y despues añades la lambda a index el cual se configura el path de lambda los eventos 

despues de esto saldras a la carpeta __functions__ 

```
cd ..
```
entrando al archivo

```
 index,js
```
se agrega la exportacion de la lambda 

una ves exportado se va al automaticamente  en el serverless.ts la cual se exporta la Functions y en la parte de funciones ya se autoagregan.

Para conectar el proyecto con la base de datos en el serverless.ts

se configura en el custom

Ejemplo :

```
  databaseUser: {
      dev: '',
      prod:''
     },
     databasePassword: {
      dev: '',meet.google.com/wtv-kgrm-mez
      prod: '',
     },
     databaseName: {
      dev: '',
      prod:''
     },
     databasePort: {
      dev: '',
      prod: ''
     },
     databaseHost:{
      dev:'',
      prod:''
     },
     databaseDialect:{
      dev:'',
      prod:''
     },
```
 decidiendo el stage al cual trabajar

 para poder decicidir en que stage trabajar en la parte de  __provider__

 ```
    stage: 'dev',  o stage: 'prod',
 ```

## Ejecutar

te posicionas en la carpeta raiz  y 

para ejecutar :

```bash
sls offline
```

espera a que se suba a aws y te mostrara las lambdas

###  ! __ESTA PLANTILLA NO REQUIERE HACER BUILD DE TS__ ¡


Abrir postamn y checar apis

## Librerias nesesarias.

 __[mysql2](https://www.npmjs.com/package/mysql2)__

__[serverless-offline](https://www.npmjs.com/package/serverless-offline)__

__[sequelize](https://sequelize.org/)__

