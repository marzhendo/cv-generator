# ATS-Friendly CV Generator

## Tentang Aplikasi

Aplikasi web sederhana untuk membuat CV dengan format yang mudah dibaca sistem ATS (Applicant Tracking System). Dirancang agar siapa saja bisa bikin CV profesional tanpa ribet.

## Fitur

- **Form Input Lengkap** - Isi data personal, pengalaman kerja, pendidikan, dan skill
- **Tambah/Hapus Dinamis** - Bisa nambah atau hapus section pengalaman kerja dan pendidikan sesuai kebutuhan
- **Live Preview** - Langsung lihat hasil CV di sebelah kanan sambil ngisi form
- **Download Langsung** - Export ke format .txt yang clean dan ATS-friendly
- **Responsive** - Bisa dibuka di desktop maupun mobile

## Kenapa ATS-Friendly?

Banyak perusahaan sekarang pakai sistem ATS untuk screening CV otomatis sebelum sampai ke HRD. CV dengan format fancy kadang malah susah dibaca sistemnya. Makanya aplikasi ini generate CV dengan format plain text yang simple tapi tetap rapi dan terstruktur.

## Tech Stack

- React.js
- Tailwind CSS
- Lucide React (untuk icon)

## Cara Pakai

1. Isi form di sebelah kiri dengan data kamu
2. Lihat preview CV di sebelah kanan
3. Kalau udah oke, klik tombol "Download CV"
4. File .txt bakal otomatis ke-download dengan nama file sesuai nama kamu

## Instalasi & Running Local
```bash
# Clone atau download project
cd cv-generator

# Install dependencies
npm install
npm install lucide-react

# Jalankan development server
npm start
```

Buka browser di `http://localhost:3000`

## Setup Tailwind CSS

Ada dua cara:

**Cara 1: Pakai CDN (lebih simple)**
- Tambahkan di `public/index.html` dalam tag `<head>`:
```html

```

**Cara 2: Install via npm**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Lalu tambahkan di `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Struktur Project
```
cv-generator/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main component
│   └── index.css       # Global styles
└── package.json
```

## Catatan

- CV yang di-generate berbentuk plain text (.txt) supaya kompatibel dengan semua sistem ATS
- Format tanpa styling berlebihan memastikan informasi kamu terbaca dengan baik
- File bisa langsung diupload ke portal job application atau di-copy paste ke form online

## TODO / Improvement Ideas

- [ ] Tambah opsi export ke PDF
- [ ] Simpan draft CV (localStorage)
- [ ] Template CV dengan berbagai style
- [ ] Export ke format DOCX

## License

© 2026 Marzhendo. All rights reserved.
