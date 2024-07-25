
# Encriptador

## Descripción
Encriptador es una herramienta web diseñada para encriptar y desencriptar texto mediante un cifrado simple basado en sustituciones. La aplicación también permite copiar el texto encriptado o desencriptado al portapapeles, facilitando el uso de texto cifrado.

## Características
- **Encriptar texto**: Convierte las vocales en combinaciones específicas.
- **Desencriptar texto**: Revierte las combinaciones específicas a las vocales originales.
- **Copiar al portapapeles**: Copia el texto encriptado o desencriptado con un solo clic.
- **Interfaz responsiva**: Se ajusta a diferentes tamaños de pantalla para una experiencia óptima en dispositivos móviles y de escritorio.

## Tecnologías usadas
- **HTML**: Estructura de la aplicación.
- **CSS**: Diseño y estilo visual.
- **JavaScript**: Lógica para encriptar, desencriptar y manipular la interfaz.
 Abre el archivo `index.html` en tu navegador para visualizar la aplicación.

## Uso
1. **Encriptar texto**:
   - Ingresa el texto en el área de entrada.
   - Haz clic en el botón **Encriptar**.
   - El texto encriptado se mostrará en el área de salida. El botón **Copiar** se activará para permitir la copia del texto al portapapeles.

2. **Desencriptar texto**:
   - Ingresa el texto encriptado en el área de entrada.
   - Haz clic en el botón **Desencriptar**.
   - El texto desencriptado se mostrará en el área de salida. El botón **Copiar** se activará para permitir la copia del texto al portapapeles.

3. **Copiar al portapapeles**:
   - Haz clic en el botón **Copiar** para copiar el texto mostrado al portapapeles.

## Funcionamiento Interno
- **Encriptar**: La función `encriptar(texto)` reemplaza las vocales (`a`, `e`, `i`, `o`, `u`) en el texto con combinaciones específicas (`ai`, `enter`, `imes`, `ober`, `ufat`).

- **Desencriptar**: La función `desencriptar(texto)` convierte las combinaciones específicas de vuelta a las vocales originales.

- **Texto Limpio**: La función `textoLimpio(texto)` elimina acentos de las vocales para garantizar que la encriptación y desencriptación funcionen correctamente con texto acentuado.

- **Manipulación de la Interfaz**:
  - `asignarTexto(elemento, texto)` actualiza el contenido del área de salida.
  - `limpiarCasilla()` limpia el área de entrada.
  - `copiarTexto()` copia el texto al portapapeles.

## Diseño y Estilo

- **Colores**: La aplicación utiliza un esquema de colores con un fondo blanco para el área de salida y un color azul oscuro para los botones y encabezado.

- **Tipografía**: Se utiliza la fuente "Inter" de Google Fonts para una presentación clara y moderna.

- **Diseño Responsivo**: La aplicación se ajusta a diferentes tamaños de pantalla. En pantallas más pequeñas, como las de dispositivos móviles, el diseño se adapta para ofrecer una experiencia de usuario óptima.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.
