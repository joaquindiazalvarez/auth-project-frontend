# ⚡React - Birthday countdown 
## Sobre este proyecto...
  Este es un proyecto el cual está dividido en frontend y backend    
  Este repositorio pertenece a la parte del frontend (React)  
  [pincha aquí para ir al repositorio del backend](https://github.com/joaquindiazalvarez/auth-project-backend)  
  
## Descripción...
  Básicamente es un contador de cuantos días quedan para tu cumpleaños 
  que posee un registro y un login.
  
# ⚡Empezando...
Luego de crear el repositorio, creamos dentro de el un archivo llamado .env, donde escribimos lo siguiente


```$ REACT_APP_BACKEND_URL=http://localhost:puerto```  

Reemplazar __puerto__ por el puesto que se le asigne desde el backend, que por lo general es 8000  
y guardamos.

Para correr la aplicación, se debe entrar a la carpeta del proyecto con:  

```$ cd auth-project-frontend```  
    
luego se deben instalar los paquetes de node con:  

```$ npm i```    
    
finalmente, se puede correr la app con:   

```$ npm start```    

# ⚡Funcionamiento  
Para empezar, tienes una página home, que posee un Navbar  
en el Navbar está el link hacia el Home, un botón para loguearse  
y un botón para registrarse.  

Como no tenemos un usuario propio, debemos registrarnos.  
Aquí tenemos varios campos que tienen ciertas validaciones:  
- Name: No puede estar vacío  
- Email: Debe tener la estructura de un email con un usuario, arroba y un dominio válido  
- Password: Debe contener mayúsculas, minúsculas, y números. También debe tener mínimo 8 caracteres  
- Repeat password: Debe ser idéntica a la primera password indicada  
- Birthdate: no puede estar vacío  
Si el registro se completa satisfactoriamente, se pasa al login.  

En el login, hay que introducir las credenciales. Si son correctas, se rediccionará  
a la página de cuenta regresiva para el cumpleaños, o birthday.  

En la página birthday, que es privada, está la opción de desloguearse.  
En esta página se encuentra el contador.  

# ⚡Arquitectura de la app  
## Descripción  
Esta APP está hecha con HTML, CSS, Bootstrap 5 y JavaScript con el framework React  
- Boostrap se incluye en el public HTML con un CDN  
- No se modificaron los archivos CSS.  
## React:  
Esta aplicación se creó con create-react-app.  
El archivo App.js funciona como archivo padre, donde se carga el router dom (v6) y las rutas.  
Tenemos 4 rutas:  
  - Home(/)  
  - Register(/register)  
  - Login(/login)  
  - Birthay(/birthday), ruta privada  
