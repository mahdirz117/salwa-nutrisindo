# Panduan Resmi Website Salwa Nutrisindo (GitHub Pages & Custom Domain)

Selamat datang di repositori website resmi **Salwa Nutrisindo** (`salwanutrisindo.com`). 

Website ini dirancang secara khusus sebagai **pure static website** (HTML5, CSS3, Vanilla JavaScript) tanpa dependensi backend, database, Node.js server, PHP, atau framework yang berat. Website dapat langsung dijalankan hanya dengan membuka file `index.html` di browser dan 100% siap di-deploy ke **GitHub Pages** menggunakan custom domain.

---

## Daftar Isi
1. [Struktur File Project](#1-struktur-file-project)
2. [Cara Membuat Repository GitHub](#2-cara-membuat-repository-github)
3. [Cara Upload Project ke GitHub](#3-cara-upload-project-ke-github)
4. [Cara Mengaktifkan GitHub Pages](#4-cara-mengaktifkan-github-pages)
5. [Cara Mengatur Custom Domain](#5-cara-mengatur-custom-domain)
6. [Pengaturan File CNAME](#6-pengaturan-file-cname)
7. [Cara Mengatur Konfigurasi DNS](#7-cara-mengatur-konfigurasi-dns)
8. [Cara Mengaktifkan Enkripsi HTTPS](#8-cara-mengaktifkan-enkripsi-https)
9. [Cara Mengganti Gambar & Aset](#9-cara-mengganti-gambar--aset)
10. [Cara Mengubah & Menambah Data Produk](#10-cara-mengubah--menambah-data-produk)
11. [Cara Mengubah Nomor WhatsApp & Format Pesan](#11-cara-mengubah-nomor-whatsapp--format-pesan)

---

## 1. Struktur File Project

```text
salwa-nutrisindo/
│
├── index.html                  # Halaman utama static website
├── CNAME                       # Konfigurasi custom domain (salwanutrisindo.com)
├── README.md                   # Dokumentasi lengkap pemeliharaan website
│
├── css/
│   └── style.css               # Seluruh styling, CSS variables & responsive rules
│
├── js/
│   └── script.js               # Data produk, filter, modal & integrasi WhatsApp
│
├── assets/
│   ├── logo/
│   │   └── logo-salwa.png      # Logo resmi Salwa Nutrisindo
│   ├── hero/
│   │   └── hero.jpg            # Visual utama pada hero section
│   ├── categories/
│   │   ├── apel.jpg            # Gambar kategori Apel
│   │   ├── lemon.jpg           # Gambar kategori Lemon
│   │   ├── nanas.jpg           # Gambar kategori Nanas
│   │   ├── mengkudu.jpg        # Gambar kategori Mengkudu
│   │   └── wortel.jpg          # Gambar kategori Wortel
│   └── products/
│       ├── apel-250.jpg        # Cuka Apel 250 ml
│       ├── apel-500.jpg        # Cuka Apel 500 ml
│       ├── lemon-250.jpg       # Cuka Lemon 250 ml
│       ├── lemon-500.jpg       # Cuka Lemon 500 ml
│       ├── nanas-250.jpg       # Cuka Nanas 250 ml
│       ├── nanas-500.jpg       # Cuka Nanas 500 ml
│       ├── mengkudu.jpg        # Cuka Mengkudu
│       └── wortel.jpg          # Cuka Wortel
│
└── favicon.ico                 # Favicon browser tab
```

> **Catatan Penting:** Semua referensi path file dalam website ini menggunakan **relative path** (`./assets/...`, `./css/style.css`, `./js/script.js`), sehingga tidak akan terjadi error path saat di-host di GitHub Pages dengan nama repo apa pun.

---

## 2. Cara Membuat Repository GitHub

1. Masuk ke akun Anda di [https://github.com](https://github.com).
2. Klik tombol **New** (atau ikon **+** di pojok kanan atas > **New repository**).
3. Beri nama repositori, contoh: `salwa-nutrisindo` atau `salwanutrisindo-web`.
4. Pilih opsi visibility: **Public** (wajib Public agar fitur GitHub Pages gratis dapat digunakan).
5. Jangan centang "Add a README file" jika Anda akan mengunggah seluruh folder ini langsung.
6. Klik **Create repository**.

---

## 3. Cara Upload Project ke GitHub

### Opsi A: Menggunakan Git Command Line (Terminal)
Buka terminal di folder project Anda, lalu jalankan perintah:

```bash
# Inisialisasi Git lokal
git init

# Tambahkan seluruh file ke staging
git add .

# Buat commit pertama
git commit -m "Initial release website resmi Salwa Nutrisindo"

# Ubah branch utama menjadi main
git branch -M main

# Sambungkan ke repositori GitHub Anda (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Upload seluruh file
git push -u origin main
```

### Opsi B: Menggunakan GitHub Desktop
1. Buka aplikasi **GitHub Desktop**.
2. Pilih menu **File > Add Local Repository...** dan arahkan ke folder `salwa-nutrisindo`.
3. Klik **Publish repository** ke akun GitHub Anda.

### Opsi C: Upload Melalui Web Browser
1. Pada halaman repositori kosong di GitHub, klik tautan **uploading an existing file**.
2. Tarik (drag & drop) seluruh isi folder (termasuk folder `css`, `js`, `assets`, file `index.html`, `CNAME`, dsb.).
3. Beri pesan commit, lalu klik **Commit changes**.

---

## 4. Cara Mengaktifkan GitHub Pages

1. Pada halaman repositori Anda di GitHub, klik tab **Settings**.
2. Pada menu bilah samping kiri, pilih menu **Pages** (di bawah bagian *Code and automation*).
3. Pada bagian **Build and deployment**:
   - **Source**: Pilih **Deploy from a branch**.
   - **Branch**: Pilih branch `main` (atau `master`) dan folder `/ (root)`.
4. Klik tombol **Save**.
5. Tunggu sekitar 1–3 menit. GitHub Actions akan secara otomatis mempublikasikan website Anda.

---

## 5. Cara Mengatur Custom Domain

Domain Anda adalah: **`salwanutrisindo.com`**.

1. Masuk kembali ke tab **Settings > Pages** di repositori GitHub Anda.
2. Scroll ke bawah menuju bagian **Custom domain**.
3. Ketikkan nama domain Anda: `salwanutrisindo.com` (atau `www.salwanutrisindo.com`).
4. Klik tombol **Save**.
5. GitHub akan membuat atau memperbarui file `CNAME` secara otomatis di branch utama Anda dan melakukan pengecekan DNS.

---

## 6. Pengaturan File CNAME

Repositori ini sudah menyertakan file bernama `CNAME` di direktori root yang berisi:

```text
salwanutrisindo.com
```

*Jika Anda ingin menggunakan subdomain `www` sebagai domain utama, cukup ubah isi file `CNAME` menjadi `www.salwanutrisindo.com`.*

---

## 7. Cara Mengatur Konfigurasi DNS

Buka dashboard DNS Management di tempat Anda membeli domain (misalnya di Niagahoster, Rumahweb, DomaiNesia, IDCloudHost, Cloudflare, Namecheap, dsb.). Tambahkan record berikut:

### 1. A Records (Untuk apex domain: `salwanutrisindo.com`)
Arahkan `@` (apex domain) ke IP address resmi GitHub Pages:

| Type | Name / Host | Target / IPv4 Address | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | Automatic / 3600 |
| **A** | `@` | `185.199.109.153` | Automatic / 3600 |
| **A** | `@` | `185.199.110.153` | Automatic / 3600 |
| **A** | `@` | `185.199.111.153` | Automatic / 3600 |

### 2. CNAME Record (Untuk subdomain `www.salwanutrisindo.com`)
Arahkan subdomain `www` ke alamat github.io Anda:

| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `USERNAME.github.io.` | Automatic / 3600 |

*(Ganti `USERNAME` dengan nama akun GitHub Anda. Jangan lupa akhiri dengan tanda titik jika sistem DNS Anda mewajibkannya).*

> **Waktu Propagasi:** Proses propagasi DNS di internet umumnya memerlukan waktu antara 10 menit hingga maksimal 24 jam tergantung penyedia DNS Anda.

---

## 8. Cara Mengaktifkan Enkripsi HTTPS

1. Setelah DNS terpropagasi dan terverifikasi di GitHub Pages (status bertanda centang hijau), opsi **Enforce HTTPS** akan dapat diklik.
2. Centang kotak **Enforce HTTPS** di menu **Settings > Pages**.
3. GitHub akan menerbitkan sertifikat SSL/TLS gratis (Let's Encrypt) secara otomatis untuk domain Anda. Website kini dapat diakses secara aman melalui `https://salwanutrisindo.com`.

---

## 9. Cara Mengganti Gambar & Aset

Anda dapat mengganti gambar kapan saja dengan cara menimpa file di folder `assets/` dengan nama file dan ekstensi yang sama:

- **Logo Perusahaan:** `assets/logo/logo-salwa.png` (Rekomendasi: format PNG transparan, rasio horizontal, lebar ~400px).
- **Hero Image:** `assets/hero/hero.jpg` (Rekomendasi: rasio 16:9, resolusi 1200x675px, visual produk/buah).
- **Kategori Buah:** `assets/categories/` (`apel.jpg`, `lemon.jpg`, `nanas.jpg`, `mengkudu.jpg`, `wortel.jpg` dengan rasio 4:3).
- **Produk:** `assets/products/` (`apel-250.jpg`, `apel-500.jpg`, dst. dengan rasio 1:1 persegi).
- **Favicon:** `favicon.ico` pada root direktori.

---

## 10. Cara Mengubah & Menambah Data Produk

Seluruh data produk dikelola secara terpusat dalam array JavaScript pada file:

📂 **`js/script.js`**

Contoh struktur produk:

```javascript
{
  id: "apel-250",
  name: "Cuka Apel Malang Tahestian",
  category: "apel",                      // Kategori untuk tab filter: "apel", "lemon", "nanas", "mengkudu", "wortel"
  size: "250 ml",                        // Ukuran botol
  price: null,                           // Isi angka (contoh: 45000) atau null jika ingin tampil "Hubungi kami untuk harga"
  image: "./assets/products/apel-250.jpg",
  badge: "Bestseller",                   // Badge opsional: "Bestseller", "Favorit Keluarga", atau null
  bpom: "023771000301445",               // Nomor registrasi BPOM (atau null jika belum ada)
  halal: "3511005166480623",             // Nomor ketetapan halal resmi
  description: "Deskripsi lengkap produk untuk jendela modal detail...",
  composition: "100% Sari Buah Apel Malang Pilihan, Air, Kultur Alami"
}
```

- **Menambah Produk Baru:** Cukup salin satu blok objek `{ ... }`, ubah datanya, lalu tambahkan ke dalam array `products`.
- **Menetapkan Harga:** Jika Anda sudah memiliki harga resmi, cukup ubah `price: null` menjadi angka, misalnya `price: 45000`. Sistem katalog akan memformatnya secara otomatis menjadi `Rp 45.000` dan mengaktifkan sorting berdasarkan harga.

---

## 11. Cara Mengubah Nomor WhatsApp & Format Pesan

### Mengubah Nomor WhatsApp
Nomor WhatsApp resmi diatur dalam satu konstanta pada baris awal file `js/script.js`:

```javascript
const OFFICIAL_WA_NUMBER = "6285954312258"; // Gunakan format internasional tanpa tanda '+' atau strip
```

Cukup ubah nilai string ini jika di masa depan nomor WhatsApp admin berganti. Semua tombol WhatsApp di website (navbar, hero, katalog, modal detail, floating button, banner, dan footer) akan otomatis terhubung ke nomor baru tersebut.

### Format Pesan Otomatis Transaksi Produk:
Format template pesan dikirimkan otomatis saat calon pembeli menekan tombol **"Tanya via WhatsApp"** pada kartu produk atau modal detail:

```text
Halo Salwa Nutrisindo,

Saya ingin menanyakan produk:

[NAMA PRODUK]
Ukuran: [UKURAN]

Mohon informasi mengenai ketersediaan produk, harga terbaru, dan ongkos kirim.

Terima kasih.
```

Pesan ini di-encode secara aman menggunakan `encodeURIComponent()` sehingga kompatibel di seluruh browser desktop maupun aplikasi WhatsApp Mobile (Android/iOS).

---

## 12. Informasi Lokasi Produksi & Google Maps

Lokasi produksi resmi Salwa Nutrisindo telah terintegrasi langsung dengan link Google Maps resmi:

- **Nama Lokasi:** Cuka Apel Malang Pak Luqman
- **Koordinat:** `-7.8768007, 112.515357` (Malang, Jawa Timur)
- **Tautan Google Maps:** [Buka di Google Maps](https://www.google.com/maps/place/Cuka+Apel+Malang+Pak+Luqman/@-7.8768007,112.515357,17z/)
- **Embed Iframe:** Sudah terpasang secara otomatis dan responsif pada section `#lokasi` di file `index.html` tanpa memerlukan API key khusus.

---

## Lisensi & Hak Cipta
Hak cipta © 2026 **Salwa Nutrisindo**. Seluruh hak cipta dilindungi undang-undang.

