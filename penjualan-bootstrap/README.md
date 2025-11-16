# 🛍️ TechStore - Website Penjualan Elektronik Modern

Website e-commerce modern untuk penjualan produk elektronik dengan fitur lengkap menggunakan **HTML5, CSS3, JavaScript Vanilla, dan Bootstrap 5**.

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi](#-teknologi-yang-digunakan)
- [Struktur Folder](#-struktur-folder)
- [Instalasi](#-instalasi)
- [Cara Menggunakan](#-cara-menggunakan)
- [Fitur Detail](#-fitur-detail)
- [Screenshot](#-screenshot)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [License](#-license)

---

## ✨ Fitur Utama

### 🏠 Halaman Utama (index.html)

- ✅ Hero section dengan background gradient modern
- ✅ Grid produk responsif (4 kolom desktop, 2 kolom tablet, 1 kolom mobile)
- ✅ Search bar untuk mencari produk
- ✅ Filter kategori produk (Smartphone, Laptop, Audio, Wearable)
- ✅ Sort produk (Harga rendah-tinggi, tinggi-rendah, terbaru)
- ✅ Badge "Baru" untuk produk terbaru
- ✅ Rating bintang untuk setiap produk
- ✅ Card produk dengan hover effect

### 📦 Halaman Detail Produk (product.html)

- ✅ Gambar produk besar
- ✅ Informasi lengkap produk
- ✅ Badge kategori dan status baru
- ✅ Informasi stok produk
- ✅ Tombol tambah ke keranjang
- ✅ Produk terkait (Related Products)
- ✅ Breadcrumb navigation

### 🛒 Halaman Keranjang (cart.html)

- ✅ Daftar produk di keranjang
- ✅ Thumbnail gambar produk
- ✅ Kontrol kuantitas (+/- dan input manual)
- ✅ Update otomatis subtotal per item
- ✅ Tombol hapus item
- ✅ Ringkasan pesanan:
  - Subtotal
  - Ongkir (Rp 25.000)
  - Diskon (untuk pembelian > Rp 10.000.000)
  - Total akhir
- ✅ Empty state untuk keranjang kosong
- ✅ Kolom kode promo (UI ready)

### 💳 Halaman Checkout (checkout.html)

- ✅ Progress indicator (Keranjang → Checkout → Selesai)
- ✅ Form informasi pembeli:
  - Nama depan & belakang
  - Email
  - Nomor telepon
  - Alamat lengkap
  - Kota & kode pos
- ✅ Pilihan metode pembayaran:
  - Transfer Bank
  - Kartu Kredit/Debit
  - E-Wallet (GoPay, OVO, Dana)
  - COD (Bayar di Tempat)
- ✅ Validasi form Bootstrap
- ✅ Ringkasan pesanan di sidebar
- ✅ Catatan pesanan (opsional)

### 🎯 Fitur Teknis

- ✅ Data disimpan di **localStorage** (persistent)
- ✅ Badge counter di icon cart (update realtime)
- ✅ Toast notification saat tambah produk
- ✅ Konfirmasi sebelum hapus item
- ✅ Responsive 100% (320px - 1920px+)
- ✅ SEO-friendly semantic HTML5
- ✅ Fast loading dengan CDN
- ✅ Cross-browser compatible

---

## 🛠️ Teknologi yang Digunakan

| Teknologi       | Versi  | Keterangan                  |
| --------------- | ------ | --------------------------- |
| HTML5           | Latest | Semantic markup             |
| CSS3            | Latest | Custom styling + animations |
| JavaScript      | ES6+   | Vanilla JS (no framework)   |
| Bootstrap       | 5.3.2  | UI framework                |
| Bootstrap Icons | 1.11.1 | Icon library                |
| Google Fonts    | -      | Poppins font family         |

**CDN yang Digunakan:**

- Bootstrap CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css`
- Bootstrap JS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js`
- Bootstrap Icons: `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css`
- Google Fonts: `https://fonts.googleapis.com/css2?family=Poppins`

---

## 📁 Struktur Folder

```
techstore/
│
├── index.html              # Halaman utama
├── product.html            # Halaman detail produk
├── cart.html               # Halaman keranjang
├── checkout.html           # Halaman checkout
│
├── css/
│   └── styles.css          # Custom styling
│
├── js/
│   └── app.js              # Logika utama aplikasi
│
├── assets/
│   └── images/             # Folder untuk gambar produk
│       ├── produk1.jpg     # (menggunakan Unsplash placeholder)
│       ├── produk2.jpg
│       └── ...
│
└── README.md               # Dokumentasi ini
```

---

## 🚀 Instalasi

### Metode 1: Download & Extract

1. Download semua file proyek
2. Extract ke folder pilihan Anda
3. Struktur folder harus sesuai dengan di atas

### Metode 2: Manual Setup

1. Buat folder baru bernama `techstore`
2. Buat subfolder: `css`, `js`, `assets/images`
3. Copy semua file ke folder yang sesuai:
   - HTML files → root folder
   - styles.css → folder `css/`
   - app.js → folder `js/`

### Metode 3: Git Clone (jika ada repository)

```bash
git clone [repository-url]
cd techstore
```

---

## 💻 Cara Menggunakan

### Menjalankan Website

**Opsi 1: Double Click**

- Buka file `index.html` langsung di browser

**Opsi 2: Live Server (Recommended)**

- Gunakan VS Code dengan extension "Live Server"
- Klik kanan `index.html` → "Open with Live Server"
- Website akan buka di `http://localhost:5500`

**Opsi 3: Python HTTP Server**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Buka: `http://localhost:8000`

**Opsi 4: Node.js HTTP Server**

```bash
npx http-server -p 8000
```

### Navigasi Website

1. **Halaman Utama** (`index.html`)

   - Browse produk di katalog
   - Gunakan search bar untuk mencari produk
   - Filter berdasarkan kategori
   - Sort berdasarkan harga atau status
   - Klik "Detail" untuk melihat info lengkap
   - Klik "Keranjang" untuk langsung tambah ke cart

2. **Detail Produk** (`product.html`)

   - Lihat gambar besar produk
   - Baca deskripsi lengkap
   - Cek ketersediaan stok
   - Tambah ke keranjang
   - Lihat produk terkait

3. **Keranjang** (`cart.html`)

   - Review produk yang dipilih
   - Update jumlah item (+/-)
   - Hapus item yang tidak diinginkan
   - Lihat ringkasan biaya
   - Lanjut ke checkout

4. **Checkout** (`checkout.html`)
   - Isi data pembeli
   - Isi alamat pengiriman
   - Pilih metode pembayaran
   - Review pesanan
   - Klik "Buat Pesanan"

---

## 🎨 Fitur Detail

### 1. Search & Filter

**Search:**

- Ketik di search bar
- Pencarian realtime (tanpa tombol submit)
- Mencari di nama dan deskripsi produk
- Case-insensitive

**Filter Kategori:**

- Semua Kategori
- Smartphone
- Laptop
- Audio
- Wearable

**Sort:**

- Default (urutan asli)
- Harga: Rendah ke Tinggi
- Harga: Tinggi ke Rendah
- Terbaru (produk dengan badge "Baru" di atas)

### 2. Shopping Cart

**Fitur:**

- Persistent storage (tersimpan meskipun browser ditutup)
- Update realtime quantity
- Auto-calculate subtotal per item
- Auto-calculate total keseluruhan
- Badge counter di navbar
- Toast notification

**Kalkulasi:**

```javascript
Subtotal = Σ(harga × quantity)
Ongkir = Rp 25.000 (flat)
Diskon = Rp 500.000 (jika subtotal > Rp 10.000.000)
Total = Subtotal + Ongkir - Diskon
```

### 3. Form Validation

**Required Fields:**

- ✅ Nama Depan
- ✅ Nama Belakang
- ✅ Email (format email)
- ✅ No. Telepon
- ✅ Alamat Lengkap
- ✅ Kota
- ✅ Kode Pos

**Validasi:**

- Bootstrap form validation
- Real-time feedback
- Error message di bawah field
- Submit hanya jika semua valid

### 4. LocalStorage Structure

```javascript
// Key: techstore_cart
// Value: Array of objects
[
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 19999000,
    image: "url",
    quantity: 2
  },
  ...
]
```

---

## 🖼️ Screenshot

### Homepage

- Hero section dengan gradient purple
- Product grid 4 kolom
- Search, filter, sort di atas katalog
- Card dengan hover effect

### Product Detail

- Layout 2 kolom (gambar kiri, info kanan)
- Rating bintang dan badge
- Tombol CTA besar
- Related products di bawah

### Cart

- List item dengan thumbnail
- Quantity controls elegant
- Summary card di kanan (desktop)
- Empty state dengan icon

### Checkout

- Progress indicator 3 step
- Form terstruktur dengan card
- Summary sticky di kanan
- Button primary besar

---

## 🎨 Customization

### Mengganti Warna Tema

Edit `css/styles.css`:

```css
/* Primary color (Purple) */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Warning color (Orange) */
.btn-warning {
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
}
```

### Menambah Produk

Edit `js/app.js`, tambahkan objek baru di array `products`:

```javascript
{
    id: 9,  // ID harus unik
    name: "Nama Produk",
    category: "smartphone", // smartphone/laptop/audio/wearable
    price: 5000000,
    image: "https://images.unsplash.com/photo-xxx",
    rating: 4.5,
    description: "Deskripsi produk...",
    stock: 10,
    isNew: true  // true = badge "Baru"
}
```

### Mengganti Gambar Produk

**Opsi 1: Gunakan Unsplash**

```
https://images.unsplash.com/photo-[ID]?w=500
```

**Opsi 2: Lokal**

1. Simpan gambar di `assets/images/`
2. Ubah path: `image: "assets/images/nama-file.jpg"`

**Opsi 3: Pexels**

```
https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg?w=500
```

### Mengubah Logo & Nama

Edit di semua HTML files:

```html
<a class="navbar-brand fw-bold" href="index.html">
  <i class="bi bi-lightning-charge-fill text-warning"></i> NamaToko
</a>
```

### Mengubah Ongkir & Diskon

Edit `js/app.js` di function `updateOrderSummary()`:

```javascript
const shipping = subtotal > 0 ? 25000 : 0; // Ubah 25000
const discount = subtotal > 10000000 ? 500000 : 0; // Ubah threshold & nilai
```

---

## 📱 Browser Support

| Browser       | Version | Status          |
| ------------- | ------- | --------------- |
| Chrome        | 90+     | ✅ Full Support |
| Firefox       | 88+     | ✅ Full Support |
| Safari        | 14+     | ✅ Full Support |
| Edge          | 90+     | ✅ Full Support |
| Opera         | 76+     | ✅ Full Support |
| Mobile Safari | iOS 14+ | ✅ Full Support |
| Chrome Mobile | Latest  | ✅ Full Support |

**Catatan:**

- Website responsive dari 320px (iPhone SE) hingga 1920px+
- Tested di berbagai device menggunakan Chrome DevTools
- Gunakan browser modern untuk hasil terbaik

---

## 🐛 Troubleshooting

### Produk tidak muncul

- Pastikan file `js/app.js` sudah ter-load
- Cek console browser (F12) untuk error
- Pastikan array `products` tidak kosong

### Cart tidak tersimpan

- Pastikan localStorage tidak diblokir browser
- Clear cache & cookies
- Coba mode incognito

### Gambar tidak muncul

- Periksa koneksi internet (untuk CDN images)
- Pastikan URL gambar valid
- Cek path jika menggunakan gambar lokal

### Layout berantakan di mobile

- Clear cache browser
- Pastikan viewport meta tag ada
- Cek apakah Bootstrap CSS ter-load

---

## 📝 TODO / Future Improvements

- [ ] Backend integration (API)
- [ ] User authentication & login
- [ ] Payment gateway integration
- [ ] Order history
- [ ] Product reviews & ratings
- [ ] Wishlist feature
- [ ] Product comparison
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Admin dashboard

---

## 📄 License

Free to use for personal and commercial projects.

---

## 👨‍💻 Author

**TechStore Project**  
Created with ❤️ using Bootstrap 5

---

## 🙏 Acknowledgments

- Bootstrap Team untuk framework yang luar biasa
- Unsplash untuk gambar placeholder berkualitas
- Google Fonts untuk Poppins font
- Bootstrap Icons untuk icon set lengkap

---

## 📞 Support

Jika ada pertanyaan atau issue:

1. Baca dokumentasi ini dengan teliti
2. Cek console browser untuk error
3. Pastikan semua file sudah lengkap
4. Verifikasi struktur folder sudah benar

---

**Happy Coding! 🚀**
