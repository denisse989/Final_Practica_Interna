# **Componente Comentarios Ofensivos**
## **Práctica Interna**
En el presente repositorio se tiene el código de una página web en la cual nos apareceran frases de manera aleatoria y debemos elegir si es una frase:
* Racista
* Machista 
* Ofensiva 
* No ofensiva

Al seleccionar la respuesta correcta el botón se deshabilitara (ya no se podra presionar).

>![image](https://user-images.githubusercontent.com/60879365/206634724-d3b630bb-3e2f-44ba-8daf-30ec9c5be738.png)

## **Requerimientos**

### **Historia de usuario 1**

* **Título:**  Seleccion de palabras ofensivas, tipo captcha

* **Descripción:** En la página principal se debe generar una oracion o expresion aleatoria para que el usuario seleccione a cual clasificacion cree que pertenece, ya sea racista, machista, ofensiva o no ofensiva y si es la correcta se marcara el botón (deshabilitar). Se debe tener un botón con el texto "probar otro comentario" para poder seguir viendo oraciones aleatorias.

* **Criterio de aceptación:** Al precionar el botón "probar otro comentario" recargue la página y aparezca una nueva oracion y los botones con las opciones de habiliten de nuevo.

### **Historia de usuario 2**

* **Título:**  Selección de comentarios

* **Descripción:** La selección de los comentarios es en base a cuatro clasificaciones: Comentario racista, comentario machista, comentario ofensivo,comentario no ofensivo y debe verificar con la respuesta que se tiene la base de datos de datos y desmarcarla si es la correcta.

* **Criterio de aceptación:** Al precionar la opcion correcta se deshabilita la opción

### **Historia de usuario 3** 

* **Título:**  Votación del captcha

* **Descripción:** Al elegir una opción del captcha sea correcta o incorrecta guardar la opción y mostrar cuántos votos tiene cada opcion de cada oración.

* **Criterio de aceptación:** Mostrar en pantalla la votacion de cada oración para las cuatro opciones.

### **Historia de usuario 4**

* **Título:**  Convertir a librería, como un componente

* **Descripción:** Convertir en una libreria que permita implementar en un proyecto.

* **Criterio de aceptación:** Implementar la libreria en otro proyecto.

## **Instalación**

Para la instalación se debe seguir los siguientes pasos después de clonar el repositorio:

### **1. Implementar la base de datos de manera local**

Para tener la base de datos de manera local importamos el archivo expresiones.sql en mysql, ejecutamos el script para poder crear la base y las tablas con los datos necesarios.

>![image](https://user-images.githubusercontent.com/60879365/206632592-db089c2d-61ee-44ef-b1c8-c028d5e3be10.png)

Y para utilizar esta base de datos ingresamos a la pestaña Database y seleccionamos Connect to Database que nos abrira una ventana, donde debemos llenar el campo que dice Default Schema con el nombre de nuestra base que es ``expresiones``.

>![image](https://user-images.githubusercontent.com/60879365/206633369-a603b4db-c2a7-4f15-a768-7befd6782f38.png)

### **2. Permisos para la base de datos**

En el archivo db_connection.js dentro de nuestro proyecto en la carpeta backend editamos la contraseña de nuestra base de datos que tiene que ser la misma que utilizamos en mysql con el usuario root y verificar si se usa el puerto 3307.

>![image](https://user-images.githubusercontent.com/60879365/206632787-506b1774-e261-48cd-9178-b96a40ba10ef.png)

### **3. Instalar librerías**

Para la conexión con la base de datos y una mejor manejo usamos los siguientes comandos dentro de la terminal de nuestro backend:
* npm express mysql nodemon
* npm i cors
* npm i mysql2

>![image](https://user-images.githubusercontent.com/60879365/206633626-a3aacc07-2cde-4dde-9e59-3ec3bc5c51d3.png)

Para el frontend instalaremos la siguiente libreria en la carpeta my-app por medio del terminal:

* npm i axios

>![image](https://user-images.githubusercontent.com/60879365/206633792-32543791-8e84-4679-9a1e-76cc1431fbb7.png)

### **4. Iniciar el backend** 

Para iniciar el backend y realizar la conexión a la base de datos ejecutamos el comando ``npm start`` en la terminal dentro de la carpeta backend. Si todo está bien nos debe dar el mensaje ``Connected to backend``.

>![image](https://user-images.githubusercontent.com/60879365/206633970-8d7c87f3-4194-41bf-9eb9-1ed11914de17.png)

### **5. Iniciar el frontend**

Finalmente para iniciar el frontend y que se abra nuestra página ejecutamos el comando ``npm start`` en la terminal dentro de la carpeta my-app. Si todo está bien nos debe dar abrir la página y en la terminal ver el mensaje ``Compiled successfully!``. 

Puede tomar un poco de tiempo que se cargue la página en el navegador.

>![image](https://user-images.githubusercontent.com/60879365/206634189-ec408aa4-65f2-4360-8dfc-fe0ad00f1145.png)# Practica_Interna
