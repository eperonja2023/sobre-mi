# PIEDRA-PAPEL-TIJERA

El conocido juego de Piedra-Papel-Tijera ejecutable desde navegadores de internet para jugar contra la PC

---
## INFO PARA EL USUARIO 
### Acceso al juego
Con cualquier navegador acceder a https://eperonja2023.github.io/sobre-mi/practico2
### Reglamento del juego
Al ingresar a la página del juego será solicitado un nombre o alias para poder comenzar a jugar. Se deberá completar el campo para poder continuar. Se admiten números, letras y/o simbolos HASTA 9 CARACTERES. **No se admite un espacio o un punto sólo ni saltear el paso con Aceptar o Cancelar.**
El juego comienza cuando el jugador elige una de las 3 opciones (Piedra-Papel-Tijera) en la botonera inferior. Por cada elección que realice el jugador la PC hará su propia eleccion al azar. Luego ambas elecciones se verán en el área de juego.
De cada ronda saldrá un ganador según las reglas de Piedra-Papel-Tijera:
 * Piedra le gana a Tijera
 * Tijera le gana a Papel
 * Papel le gana a Piedra
 * Empates: Si el jugador y la PC eligen la misma opción (Piedra-Piedra, Papel-Papel, Tijera-Tijera) se considerará empate y no sumarán puntos. SE DEBERÁ JUGAR NUEVAMENTE LA RONDA HASTA QUE HAYA UN GANADOR.
El ganador de cada ronda sumará 1 punto que irá acumulando en su marcador.
El ganador del juego será el que primero llegue a ganar 3 rondas.
Una vez terminado el juego el jugador tendrá la posibilidar de comenzar un nuevo juego oprimiendo el boton de *REINICIAR*.
---
## INFO PARA PROGRAMADORES
_Estas instrucciones le permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._
### Pre-requisitos
Para acceder a los archivos del proyecto es recomendable tener instalado VS Code y Git Bash. 

### Descarga
Para obtener una copia del proyecto en funcionamiento en la máquina local para propositos de desarrollo y pruebas:
* Posicionarse en la carpeta donde desée descargar el proyecto
* Abrir el programa Git Bash y ejecutar el siguiente comando para iniciar la descarga:
 > git clone https://github.com/eperonja2023/sobre-mi.git
 * Una vez descargado ingresar a la carpeta *practico2* para acceder al contenido del programa.

### Para ejecutar el programa
* Desde la máquina local: abrir el archivo index.html descargado en la carpeta practico2.
* Desde Internet: usando cualquier navegador desde este enlace:  [Piedra-Papel-Tijera](https://eperonja2023.github.io/sobre-mi/practico2)
___
## Ejecutando las pruebas

#### Rondas - Combinacion de jugadas
| JUGADA   | Result.esperado MARCADOR JUGADOR| Result.esperado MARCADOR PC | Result.esperado RONDA | Result.esperado CONTADOR DE RONDA | RESULTADO OBTENIDO |
|:----:|:----:|:----:|:----:|:----:|:----:|
|**Ronda - Gana Jugador** |
| Jugador:Piedra - PC:Tijera | +1 | +0 |  "GANSTE RONDA [nro de ronda]" | "RONDA [(Nro de ronda +1)]| **OK** |
| Jugador:Papel - PC:Piedra  |  +1 | +0 |  "GANSTE RONDA [nro de ronda]" | "RONDA [(Nro de ronda +1)]| **OK** |
| Jugador:Tijera - PC:Papel     | +1 | +0 |  "GANSTE RONDA [nro de ronda]" | "RONDA [(Nro de ronda +1)]| **OK** |
|**Ronda - Gana PC**|
| PC:Piedra - Jugador:Tijera | +1 | +0 |  "GANSTE RONDA [nro de ronda]" | "RONDA [(Nro de ronda +1)]| **OK** |
|PC:Papel - Jugador:Piedra  |  +1 | +0 |  "GANSTE RONDA [nro de ronda]" | "RONDA [(Nro de ronda +1)]| **OK** |
| PC:Tijera - Jugador:Papel     | +1 | +0 |  "GANSTE RONDA [nro de ronda]" | "RONDA [(Nro de ronda +1)]| **OK** |
|**Empate**|
| PC:Piedra - Jugador:Piedra | +0 | +0 |  "EMPATE !!!" | "RONDA [(Nro de ronda)]| **OK** |
| PC:Papel - Jugador:Papel | +0 | +0 |  "EMPATE !!!" | "RONDA [(Nro de ronda)]| **OK** |
| PC:Tijera - Jugador:Tijera | +0 | +0 |  "EMPATE !!!" | "RONDA [(Nro de ronda)]| **OK** |

#### Determinar ganador - Fin del juego

**Gana Jugador** (Jugador gana primero 3 rondas)
| ELEMENTO DISPLAY  | Res.esperado DISPLAY| Res.esperado MENSAJE |RESULTADO OBTENIDO| 
|:----:|:----:|:----:|:----:|
|  **REGLAMENTO** |oculto | - |**ok** |
|  **NRO DE RONDA** |visible | Nro ultima ronda jugada |**ok** |
|  **RESULTADO RONDA** |visible | resultado ultima ronda jugada |**ok** |
|  **AREA JUEGO** |visible | marcador final + imagenes ultima jugada |**ok** |
|  **RESULTADO FINAL** |visible | "GANASTE"" |**ok** |
|  **PROGRESS BAR** |oculto | - |**ok** |
|  **BOTONERA** |oculto | - |**ok** |
|  **REINICIAR** |visible | botón reiniciar |**ok** |


**Gana PC** (PC gana primero 3 rondas)
| ELEMENTO DISPLAY  | Res.esperado DISPLAY| Res.esperado MENSAJE |RESULTADO OBTENIDO| 
|:----:|:----:|:----:|:----:|
|  **REGLAMENTO** |oculto | - |**ok** |
|  **NRO DE RONDA** |visible | Nro ultima ronda jugada |**ok** |
|  **RESULTADO RONDA** |visible | resultado ultima ronda jugada |**ok** |
|  **AREA JUEGO** |visible | marcador jugadores + imagenes ultima jugada |**ok** |
|  **RESULTADO FINAL** |visible | "PERDISTE" |**ok** |
|  **PROGRESS BAR** |oculto | - |**ok** |
|  **BOTONERA** |oculto | - |**ok** |
|  **REINICIAR** |visible | botón reiniciar |**ok** |

**BOTON reiniciar**
| ELEMENTO DISPLAY  | Res.esperado DISPLAY| Res.esperado MENSAJE |RESULTADO OBTENIDO| 
|:----:|:----:|:----:|:----:|
|  **REGLAMENTO** |visible | - |**ok** |
|  **NRO DE RONDA** |visible | "Ronda 1" |**ok** |
|  **RESULTADO RONDA** |visible | "nueva partida" |**ok** |
|  **AREA JUEGO** |visible | marcador jugadores en cero + imagenes jugadores |**ok** |
|  **RESULTADO FINAL** |oculto | - |**ok** |
|  **PROGRESS BAR** |visible | - |**ok** |
|  **BOTONERA** |visible | - |**ok** |
|  **REINICIAR** |oculto | - |**ok** |

---

## Correcciones o mejoras futuras
 A lo largo de la implementación de la aplicación, se fueron sucediendo con errores en el código, ya sea cosas que no funcionaban, o que no tenían el comportamiento deseado. Los mismos se fueron solucionando. Para la solucion de problemas, se fueron análizando los mismos y se recurrió a consultas con el profesor asignado de Practicas y en la web.
 Durante la realización del proyecto y testeo surgieron varios aspectos a mejorar:
  * Mejorar el uso de nombres asignados a variables y elementos para evitar confusiones en la lectura del código al seguir el hilo del programa en JS (principalmente evitar uso de nombres similares)
  * Ordenar el uso de clases e ids en el HTML de forma más criteriosa.
  * Rediseñar el cambio de ronda para que en el caso de los empates sea más claro para el jugador.
  * Guardar en una carpeta aparte los componentes del diseño y vista de la aplicación. De ese modo se podrá visualizar más facilmente lo correspondiente a la lógica y a la interfaz gráfica.
  * Incorporar movimiento a las imágenes de las jugadas (no se hizo por falta de tiempo)

---

## Construido con 

 * HTML
 * JavaScript
 * CSS

 ## Principales links de consulta
  * https://developer.mozilla.org/es/
  * https://www.w3schools.com/
  * https://www.freecodecamp.org/
  * https://www.youtube.com/
