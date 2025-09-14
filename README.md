# Sistema de Gestion de Inventarios (Frontend)
## ¿De qué trata el proyecto?
El Sistema de Gestión de Inventarios es una página web hecha para gestionar el stock de productos dentro de un comercio.
Este Sistema permite:
- Consultar productos existentes
- Registrar productos nuevos
- Modificar o Eliminar productos existentes
## Tecnologias usadas (Frontend)
Para la parte Frontend de este proyecto se decidio utilizar TypeScript junto con Angular. Se decidio utilizar los mismos gracias a que estos se puede obtener un codigo mas limpio y mantenible, y tambien por su ayuda en la deteccion de errores. Tambien se utilizo Node.js como entorno de ejecucion.
## Cómo instalarlo y correrlo
1. Descargar/clonar el repositorio
```
git clone https://github.com/TejonCosmico/Sistema-de-Inventarios-Frontend.git
```
2. Situarse en el carpeta ./Sistema-de-Inventarios-Frontend
3. Ejecutar el comando
```
ng serve -o
```
Esto abre automaticamente en el navegador una ventana a la pagina web `http://localhost:4200`. El puerto por defecto de Angular es `4200`, si se desea cambiar el puerto del mismo debe configurar el archivo `angular.json` y cambiar `"serve"` por:
```
"serve": {
          "builder": "@angular/build:dev-server",
          "options": {
            "port": 4200
          },
          "configurations": {
            "production": {
              "buildTarget": "inventario-app:build:production"
            },
            "development": {
              "buildTarget": "inventario-app:build:development"
            }
          },
          "defaultConfiguration": "development"
        }
```
Cambiar `4200` por el puerto deseado.
## Ejemplo
Un ejemplo de utilizacion para este proyecto podria ser un Kiosko que quiere migrar su inventario de una planilla de papel a una base de datos. Como primer paso pasa sus existencias para ser guardadas en la base de datos. Una vez migrados los articulos le va a asegurar la persistencia de los mismos y va a tener la capacidad de eliminar o modificar cuando quiera.
