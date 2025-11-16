# 🚀 Panduan Deployment TechStore

Panduan lengkap untuk deploy website TechStore ke berbagai hosting platform.

---

## 📋 Persiapan Sebelum Deploy

### ✅ Checklist Pre-Deployment

- [ ] Semua file sudah lengkap dan struktur folder benar
- [ ] Website berjalan dengan baik di local (test di browser)
- [ ] Tidak ada error di console browser (F12)
- [ ] Semua fitur berfungsi (search, filter, cart, checkout)
- [ ] Test responsive di berbagai ukuran layar
- [ ] Gambar sudah diganti dengan yang sesuai (jika perlu)
- [ ] Kontak dan informasi toko sudah diupdate
- [ ] File README.md sudah diupdate

---

## 🌐 Platform Hosting Gratis

### 1. Netlify (Recommended ⭐)

**Keunggulan:**

- ✅ Deploy super cepat (drag & drop)
- ✅ HTTPS gratis otomatis
- ✅ Custom domain gratis
- ✅ Form handling built-in
- ✅ Continuous deployment dari Git

**Cara Deploy:**

#### Metode 1: Drag & Drop (Termudah)

1. Buka https://www.netlify.com
2. Sign up / Login
3. Drag folder `techstore` ke dashboard Netlify
4. Tunggu proses upload
5. Website langsung live! 🎉

#### Metode 2: Via Git (Professional)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
cd techstore
netlify init
netlify deploy --prod
```

**Custom Domain:**

1. Settings → Domain management
2. Add custom domain
3. Update DNS di registrar domain Anda

---

### 2. Vercel

**Keunggulan:**

- ✅ Deploy otomatis dari Git
- ✅ Edge network global
- ✅ HTTPS otomatis
- ✅ Perfect untuk Next.js (future upgrade)

**Cara Deploy:**

#### Via Dashboard

1. Buka https://vercel.com
2. Sign up dengan GitHub
3. Import Git Repository
4. Atau drag & drop folder
5. Deploy!

#### Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd techstore
vercel

# Follow the prompts
```

---

### 3. GitHub Pages

**Keunggulan:**

- ✅ Gratis selamanya
- ✅ Terintegrasi dengan Git
- ✅ Good for portfolio

**Cara Deploy:**

1. **Create Repository**

```bash
cd techstore
git init
git add .
git commit -m "Initial commit"
```

2. **Push ke GitHub**

```bash
# Create repo di GitHub dulu, lalu:
git remote add origin https://github.com/username/techstore.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages**

- Buka Settings → Pages
- Source: Deploy from branch `main`
- Folder: `/ (root)`
- Save

4. **Akses Website**

- URL: `https://username.github.io/techstore`

**Custom Domain:**

- Settings → Pages → Custom domain
- Masukkan domain Anda
- Update DNS CNAME record

---

### 4. Render

**Keunggulan:**

- ✅ Static site gratis
- ✅ Auto deploy dari Git
- ✅ HTTPS otomatis

**Cara Deploy:**

1. Buka https://render.com
2. Sign up / Login
3. New → Static Site
4. Connect repository
5. Build settings (biarkan kosong untuk static)
6. Deploy!

---

### 5. Surge.sh

**Keunggulan:**

- ✅ Deploy dari command line super cepat
- ✅ Custom domain gratis
- ✅ No signup required

**Cara Deploy:**

```bash
# Install Surge
npm install -g surge

# Deploy
cd techstore
surge

# Follow prompts untuk domain
# Contoh: techstore.surge.sh
```

---

## 🔧 Optimasi Sebelum Deploy

### 1. Minify CSS & JavaScript

**Online Tools:**

- CSS: https://cssminifier.com
- JS: https://javascript-minifier.com

**Cara:**

1. Copy isi `styles.css`
2. Paste ke CSS minifier
3. Copy hasil minify
4. Ganti isi `styles.css` (atau buat `styles.min.css`)

Lakukan hal sama untuk `app.js`

**Update HTML:**

```html
<!-- Ganti -->
<link rel="stylesheet" href="css/styles.css" />
<!-- Jadi -->
<link rel="stylesheet" href="css/styles.min.css" />
```

### 2. Optimasi Gambar

**Jika pakai gambar lokal:**

- Compress dengan TinyPNG: https://tinypng.com
- Convert ke WebP format
- Gunakan lazy loading:

```html
<img src="image.jpg" loading="lazy" alt="..." />
```

### 3. Add meta tags untuk SEO

Tambahkan di `<head>` semua HTML:

```html
<!-- Meta SEO -->
<meta
  name="description"
  content="TechStore - Toko elektronik online terpercaya dengan produk berkualitas tinggi"
/>
<meta name="keywords" content="elektronik, gadget, smartphone, laptop, audio" />
<meta name="author" content="TechStore" />

<!-- Open Graph (Facebook) -->
<meta property="og:title" content="TechStore - Toko Elektronik Modern" />
<meta
  property="og:description"
  content="Belanja gadget dan elektronik terbaik"
/>
<meta property="og:image" content="https://yourdomain.com/preview.jpg" />
<meta property="og:url" content="https://yourdomain.com" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="TechStore" />
<meta
  name="twitter:description"
  content="Belanja gadget dan elektronik terbaik"
/>
<meta name="twitter:image" content="https://yourdomain.com/preview.jpg" />
```

### 4. Add Google Analytics (Optional)

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

---

## 🔒 Security Best Practices

### 1. Add Security Headers

Buat file `netlify.toml` (untuk Netlify) atau `vercel.json` (untuk Vercel):

**netlify.toml:**

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**vercel.json:**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### 2. Add robots.txt

Buat file `robots.txt` di root:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### 3. Add sitemap.xml

Buat file `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/product.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/cart.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/checkout.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 🎯 Custom Domain Setup

### 1. Beli Domain

**Registrar Recommended:**

- Namecheap: https://namecheap.com
- GoDaddy: https://godaddy.com
- Niagahoster (Indonesia): https://niagahoster.co.id
- Dewaweb (Indonesia): https://dewaweb.com

### 2. Setup DNS

**Untuk Netlify:**

```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

**Untuk Vercel:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**Untuk GitHub Pages:**

```
Type: CNAME
Name: www
Value: username.github.io

Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

### 3. Aktifkan HTTPS

- Netlify: Otomatis aktif
- Vercel: Otomatis aktif
- GitHub Pages: Settings → Pages → Enforce HTTPS

---

## 📊 Monitoring & Analytics

### 1. Google Search Console

1. Buka https://search.google.com/search-console
2. Add property → masukkan domain
3. Verify ownership
4. Submit sitemap.xml

### 2. Performance Monitoring

**Tools:**

- Lighthouse (Chrome DevTools)
- PageSpeed Insights: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com

**Target:**

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## 🐛 Troubleshooting Deploy

### Issue: 404 Error setelah deploy

**Solusi:**

- Pastikan `index.html` ada di root folder
- Check case-sensitive filename
- Clear cache browser (Ctrl+Shift+Delete)

### Issue: CSS tidak load

**Solusi:**

- Pastikan path relatif benar: `css/styles.css`
- Bukan: `/css/styles.css` atau `../css/styles.css`
- Check Network tab di DevTools

### Issue: JavaScript error

**Solusi:**

- Check console browser (F12)
- Pastikan `app.js` sudah di-load
- Pastikan path benar: `js/app.js`

### Issue: Gambar tidak muncul

**Solusi:**

- Check koneksi internet (untuk Unsplash CDN)
- Pastikan URL gambar valid
- Check CORS policy

---

## 🔄 Continuous Deployment

### Setup Auto-Deploy dari Git

**GitHub → Netlify:**

1. Connect repository di Netlify
2. Setiap push ke `main` branch = auto deploy

**GitHub → Vercel:**

1. Import repository di Vercel
2. Auto-deploy on push

**Workflow:**

```bash
# 1. Edit code
vim index.html

# 2. Commit
git add .
git commit -m "Update homepage"

# 3. Push
git push origin main

# 4. Auto-deploy! 🎉
```

---

## 📱 PWA (Progressive Web App) - Optional

Untuk membuat website bisa diinstall di mobile:

### 1. Buat manifest.json

```json
{
  "name": "TechStore",
  "short_name": "TechStore",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#667eea",
  "icons": [
    {
      "src": "assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 2. Add ke HTML

```html
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#667eea" />
```

### 3. Buat Service Worker (sw.js)

```javascript
const CACHE_NAME = "techstore-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/styles.css",
        "/js/app.js",
      ]);
    })
  );
});
```

---

## 🎓 Next Steps

Setelah deploy berhasil:

1. **Test di berbagai device:**

   - Desktop (Chrome, Firefox, Safari)
   - Mobile (iOS, Android)
   - Tablet

2. **Share dengan teman:**

   - Copy URL website
   - Share di social media

3. **Monitor performance:**

   - Check Google Analytics
   - Review Google Search Console
   - Monitor uptime

4. **Update reguler:**

   - Tambah produk baru
   - Update harga
   - Fix bugs jika ada

5. **Backup:**
   - Regular commit ke Git
   - Download backup dari hosting

---

## 📞 Support

Jika ada masalah:

1. Check dokumentasi hosting platform
2. Search di Stack Overflow
3. Check GitHub Issues (jika ada repo)

---

**Selamat! Website Anda sudah online! 🎉**

Share URL Anda dan mulai jualan!
