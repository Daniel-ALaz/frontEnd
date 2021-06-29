# Ejercicio Frontend

## ¿Que esperamos?

Esperamos que el tiempo que tengas que invertir en este ejercicio no supere la hora de trabajo. Sabemos que es complicado sacar tiempo para este tipo de ejercicios y te agradecemos que nos puedas dedicar aproximadamente una hora de tu tiempo.
Con este ejercicio queremos comprobar que tienes los conocimientos mínimos para trabajar con nosotros, el objetivo no es, ni mucho menos, que demuestres todo lo que sabes.

## ¿Que buscamos?

Una solución lo más simple y efectiva posible al problema que te planteamos.

## ¿Como enviarnos la solución?

Queremos que subas tu solución a un repositorio público en GitHub, Bitbucket o cualquiera otra plataforma Git que podamos consultar.
Para ayudarnos a revisar tu código intenta que tu historial de commits este dividido, por lo menos, que exista más de un commit y tenga un mensaje con sentido.

Cuando lo tengas listo enviamos la url del repositorio a nuestro correo electrónico.

## El ejercicio

Hemos creado un proyecto con React sencillo pero muy parecido a lo que te vas a encontrar en Airgup.
Este proyecto arranca una página que muestra una cuenta atrás hasta una fecha que puedes cambiar con un selector de fecha. 
El proyecto no funciona bien, los componentes de horas `<CountdownHours/>` y minutos `<CountdownMinutes/>` no cuentan correctamente y el contador de días y segundos todavía no estan programados. 

Queremos que te encargues de arreglar los dos componentes ya existentes y que crees los otros dos que faltan para que la página funcione correctamente.

Una vez arreglado, si ahora mismo fueran las 13:48:55 del 25/06/2021 y seleccionamos como fecha el 26/06/2021 00:00 el contador deberia indicarnos que quedan 0 días 10 horas, 11 minutos y 5 segundos hasta la fecha indicada y cada segundo debería actualizarse de forma correcta (igual que cualquier cuenta atrás, como por ejemplo esta: https://countdown.onlinealarmkur.com/es/#2021-06-27T12:00)

La idea del ejercicio es que nos enseñes que, independientemente de tus conocimientos técnicos concretos, eres capaz de investigar, aprender rapidamente un par de conceptos y aplicarlos de forma eficaz.

No necesitamos que entiendas como funciona React para solucionar este ejercicio, si es la primera vez que utilizas estas tecnologías no intentes entender todo el código y centrarte en solucionar el ejercicio y que funcione correctamente.

Puedes basarte en los componentes que ya existen y no tienes porque refactorizar ni mejorar nada del código existente, solo arreglar las partes que obviamente funcionan mal.

## Como empezar

> Necesitas tener instalado node >= 10.

Para empezar necesitas instalar las dependencias del proyecto, para ello, en el directorio del proyecto:

```
npm install
``` 

Una vez instalado puedes arrancar el proyecto con:

```
npm start
``` 

Con esto ya podrás acceder a la url: `http://localhost:3000`

