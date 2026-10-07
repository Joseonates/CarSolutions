# Car Solutions · Placa a Placa (PWA)

App web instalable del taller. Funciona en celular, tableta y computador, y abre sin internet después de la primera visita.

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La aplicación completa |
| `manifest.webmanifest` | Nombre, colores e íconos para instalarla |
| `sw.js` | Service worker: permite abrirla sin internet |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Íconos de Android y del navegador |
| `apple-touch-icon.png` | Ícono de iPhone y iPad |
| `favicon-32.png` | Ícono de la pestaña |

Todos los archivos van juntos en la misma carpeta, sin subcarpetas.

## Publicar en GitHub Pages

1. En GitHub, **New repository**. Nombre: `CarSolutions` (o el que prefiera), público.
2. **Add file → Upload files**, arrastre los 8 archivos de esta carpeta y pulse **Commit changes**.
3. **Settings → Pages**. En *Source* elija **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y **Save**.
4. En uno o dos minutos queda en `https://<su-usuario>.github.io/CarSolutions/`.

La app necesita HTTPS para instalarse y funcionar sin internet; GitHub Pages ya lo trae.

## Instalar en el celular

- **Android (Chrome):** abra el enlace. Aparece el botón **Instalar** abajo a la derecha, o use el menú ⋮ → **Instalar aplicación** / **Agregar a la pantalla principal**.
- **iPhone (Safari):** abra el enlace, toque **Compartir** (cuadro con flecha) → **Agregar a inicio**.
- **Computador (Chrome o Edge):** ícono de instalar en la barra de direcciones.

Queda un ícono de Car Solutions como cualquier app y abre a pantalla completa.

## Actualizar a una nueva versión

Suba el nuevo `index.html` al mismo repositorio, reemplazando el anterior. Los celulares toman la versión nueva la próxima vez que abran la app con internet; si no la ven, cierren la app del todo y ábranla otra vez.

## Importante sobre los datos

En esta versión **cada equipo guarda sus propios datos** (indicador naranja "Datos solo en este dispositivo"). Lo que se registra en el celular no aparece en el PC y al revés.

- Use un solo equipo principal para el taller mientras tanto.
- Descargue una copia de seguridad con frecuencia: **Ajustes → Descargar copia**. Con **Restaurar desde archivo** se pasan los datos a otro equipo.
- No borre los datos del navegador ni desinstale la app sin tener copia.

La siguiente fase conecta la app a Firebase para que todos los equipos compartan la misma información en tiempo real.
