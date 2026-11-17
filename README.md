# BRC Baile Inolvidable · Bariloche 2026

Álbum digital del viaje de egresados con firmas. Página estática para GitHub Pages.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Todo en uno: diseño (CSS), código (JS) y las 9 páginas del Canva adentro |
| `config.js` | Configuración: la planilla de las firmas y la música |
| `apps-script/Code.gs` | El script que se pega en Google Sheets (paso 2 de abajo) |
| `firmas.txt` | Opcional: firmas agregadas a mano, un código por línea |

## 1. Publicar en GitHub Pages

1. Subí todos estos archivos a un repositorio nuevo (sin carpetas extra).
2. **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**.
3. A los 1 o 2 minutos queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## 2. Que las firmas se guarden solas (Google Sheets)

1. Entrá a https://sheets.new y creá una planilla (ponele "Firmas BRC").
2. Menú **Extensiones → Apps Script**. Borrá lo que haya, pegá todo el contenido de `apps-script/Code.gs` y tocá el ícono de guardar.
3. Arriba a la derecha: **Implementar → Nueva implementación**.
   - Tocá la ruedita ⚙ y elegí **Aplicación web**.
   - **Ejecutar como:** Yo.
   - **Quién tiene acceso:** Cualquier persona.
   - Tocá **Implementar**, aceptá los permisos de Google (si dice "app no verificada": **Configuración avanzada → Ir a ... (no seguro)**; es tu propio script) y copiá la **URL de la aplicación web** (termina en `/exec`).
4. En GitHub abrí `config.js`, tocá el lápiz y pegá la URL entre las comillas:
   ```js
   window.BRC_API="https://script.google.com/macros/s/XXXXXXXX/exec";
   ```
   Hacé **Commit changes**.
5. Listo: cuando alguien firma, la firma queda guardada en la hoja **Firmas** y aparece en el libro para todos.

Cada firma es una fila de la planilla. **Para borrar una firma, borrá su fila.**

Si cambiás el script de Apps Script más adelante, tenés que hacer **Implementar → Administrar implementaciones → editar → Nueva versión**; la URL se mantiene.

## 3. Música (opcional)

El libro tiene un botón **Poner música** arriba a la derecha. Se activa cuando completás una de estas dos líneas en `config.js`:

- **Con YouTube** (lo más simple, no hay que subir nada): pegá el link de la canción.
  ```js
  window.BRC_YOUTUBE="https://www.youtube.com/watch?v=XXXXXXXXXXX";
  ```
  Al tocar el botón aparece un reproductor chico abajo a la derecha. Al pausar desaparece.
- **Con un archivo**: subí el MP3 al repositorio, al lado de `index.html`, y poné su nombre.
  ```js
  window.BRC_MUSICA="musica.mp3";
  ```
  Usá un archivo que puedas publicar. Una canción comercial en un repositorio público puede ser retirada por derechos de autor; con YouTube no pasa.

Los navegadores no dejan que la música arranque sola: siempre empieza cuando alguien toca el botón.

## Si no configurás la planilla

Todo sigue funcionando: al firmar, a cada compañero le sale un código para mandarte por WhatsApp, y vos lo pegás en `firmas.txt` (una línea por código, con el lápiz de GitHub).

## Notas

- Cualquiera que tenga el link puede firmar. Si alguien firma algo que no va, borrá su fila.
- El botón **Descargar PDF** arma un PDF con las páginas y las firmas puestas.
- Para sumar los días 7, 9 y 10: pasale el PDF nuevo de Canva a Claude y te devuelve el `index.html` actualizado. Las firmas guardadas en la planilla se mantienen en su lugar.
