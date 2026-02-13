# Asesoría Pública (sitio web)

Sitio estático premium (1 página) listo para publicar gratis en GitHub Pages y conectar el dominio `asesoriapublica.cl`.

## 1) Editar WhatsApp y correo
En `script.js` cambia:
- `whatsappNumber = "569XXXXXXXX"` por tu número real (formato internacional, sin +).
- Si quieres otro correo, cambia `contacto@asesoriapublica.cl` en `index.html` y `script.js`.

## 2) Publicar GRATIS en GitHub Pages (paso a paso)
1. Crea cuenta en GitHub y crea un repositorio llamado **asesoriapublica** (público).
2. Sube estos archivos al repositorio:
   - `index.html`
   - `styles.css`
   - `script.js`
   - carpeta `assets/`
3. Ve a **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
   - Save
4. Espera a que GitHub te entregue una URL del tipo:
   - `https://TUUSUARIO.github.io/asesoriapublica/`

## 3) Conectar dominio `asesoriapublica.cl` a GitHub Pages
En **Settings → Pages → Custom domain**, escribe:
- `asesoriapublica.cl` (sin www) y guarda.

Luego en tu proveedor DNS agrega:

### A records (apex)
- A → 185.199.108.153
- A → 185.199.109.153
- A → 185.199.110.153
- A → 185.199.111.153

### (Opcional) www
- CNAME → `TUUSUARIO.github.io`

Finalmente activa **Enforce HTTPS** cuando aparezca disponible.

## 4) Personalización rápida
- Nombre/Marca: en el header (arriba) y el footer.
- Textos: edita `index.html`.
- Colores: edita variables en `styles.css` (`--blue`, `--violet`, etc.).

Listo.
