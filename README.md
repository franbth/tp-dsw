# tp-dsw
## Grupo

### Integrantes

- 48821 - Buthet Francisco
- 49718 - Passe Alejo

## Tema

Sitio de busqueda de profesionales para trabajos freelance

### Descripción

Nuestra sitio web tiene como objetivo conectar a los usuarios con profesionales locales, especializados en areas como plomeria, albañilería, electricidad, entre otros. Ofreciendo una seccion donde los usuarios pueden publicar proyectos específicos que necesitan ser completados. Permitiendo así a los profesionales realizar ofertas sobre el trabajo. El creador del proyecto tiene la libertad de seleccionar al profesional que mejor se ajuste a sus necesidades y preferencias.

### Modelo

![Modelo](https://raw.githubusercontent.com/franbth/tp-dsw/master/assets/modeloDSW.png)

## Alcance Funcional

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD USUARIO<br>2. CRUD PETICION|
|CRUD dependiente|1. CRUD PETICION {depende de} CRUD USUARIO|
|Listado<br>+<br>detalle| 1. Listado de las peticiones segun ubicacion, muestra fecha en que se realizo la peticion y descripcion|
|CUU/Epic|1. Registrar un usuario o iniciar sesion|

Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD TECNICO<br>2. CRUD PROPUESTA<br>3. CRUD PAGO|
|CUU/Epic|1. Registrar usuario o iniciar sesion<br>2. Realizar una peticion|

Alcance Adicional Voluntario
|Req|Detalle|
|:-|:-|
|CUU/Epic|1. Registrar un tecnico<br>2. Realizar una propuesta|
