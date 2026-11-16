# BRC Baile Inolvidable · Bariloche 2026

Álbum digital del viaje de egresados con firmas. Es una página estática: HTML + CSS + JavaScript, sin servidor.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Todo en uno: estructura, diseño (CSS), código (JS) y las 9 páginas del Canva adentro |
| `firmas.txt` | Los códigos de las firmas recibidas (uno por línea) |

## Publicarlo con GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `libro-bariloche`) y subí todo el contenido de esta carpeta.
2. Entrá a **Settings → Pages**.
3. En **Build and deployment** elegí **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guardá.
4. A los 1 o 2 minutos el libro queda en `https://TU-USUARIO.github.io/libro-bariloche/`. Ese link se lo mandás a tus compañeros.

## Cómo se agregan las firmas

1. Cada compañero abre el link, toca **Firmar el libro**, firma, elige dónde va y toca **Generar código**.
2. Te manda el código por WhatsApp.
3. En GitHub abrí `firmas.txt`, tocá el lápiz (**Edit**), pegá el código en una línea nueva y hacé **Commit changes**.
4. En 1 o 2 minutos la firma aparece en el libro para todos.

Para borrar una firma, borrá su línea de `firmas.txt`.

## Actualizar las páginas (días 7, 9 y 10)

Pasale el PDF nuevo de Canva a Claude y te devuelve este mismo `index.html` actualizado.

Las firmas se guardan como porcentaje de la página, así que quedan en su lugar aunque cambies las imágenes.

## Notas

- Si abrís `index.html` con doble clic (sin servidor), el libro se ve, pero `firmas.txt` no se carga por una restricción del navegador. En GitHub Pages sí funciona.
- El botón **Descargar PDF** arma un PDF con las páginas y las firmas puestas.
