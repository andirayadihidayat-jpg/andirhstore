// Data 8 Produk - Gambar Jam, Tumbler, dan Topi SUDAH SESUAI ASLINYA
const daftarProduk = [
    { id: 1, nama: "Sneaker Nike Air Jordan Retro Blue", harga: 1499000, foto: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, nama: "Jam Tangan Rolex Chronograph Gold", harga: 2450000, foto: "https://cdn.phototourl.com/free/2026-07-05-c4422e2c-0a1f-4645-b78c-590e83f87f62.png" },
    { id: 3, nama: "Kacamata Hitam Aviator Anti UV", harga: 225000, foto: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, nama: "Tas Ransel Outdoor Waterproof Eiger", harga: 495000, foto: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 5, nama: "Running Shoes Adidas UltraBoost White", harga: 1820000, foto: "https://cdn.phototourl.com/free/2026-07-06-7f1715bd-3f4b-4740-a345-c472c38d3f80.png" },
    { id: 6, nama: "Jaket Bomber Leather Classic Black", harga: 575000, foto: "https://images.pexels.com/photos/9834881/pexels-photo-9834881.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, nama: "Tumbler Stainless Steel Black Premium 1L", harga: 189000, foto: "https://cdn.phototourl.com/free/2026-07-05-054bb23b-e9c4-4462-9153-dc0b350df84c.jpg" },
    { id: 8, nama: "Topi Baseball Original Canvas Black", harga: 145000, foto: "https://cdn.phototourl.com/free/2026-07-05-f3c39fec-6cf0-4d30-b2ca-1ea38161fddf.jpg" }
];

// Otomatis memasukkan 8 produk ke dalam keranjang sejak halaman dimuat awal
let dataKeranjang = daftarProduk.map(p => ({ ...p, jumlah: 1 }));

document.addEventListener("DOMContentLoaded", function () {
    renderProfilOwner();
    renderKatalog();
    renderKeranjang();
});

// MENAMPILKAN DETAIL PROFIL OWNER & TOKO (Andi Rayadi Hidayat)
function renderProfilOwner() {
    const profileCard = document.querySelector(".profile-card");
    if (!profileCard) return;

    profileCard.innerHTML = `
        <img src="https://images.pexels.com/photos/7620548/pexels-photo-7620548.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Logo Toko">
        <div style="width: 100%;">
            <h1 style="font-size: 26px; color: #2c3e50; margin-bottom: 5px;">Andi Store Sepatu (Official)</h1>
            <p style="color: #555; margin-bottom: 15px; font-size: 15px; line-height: 1.5;">
                Selamat datang di Andi Store Sepatu. Kami menyediakan berbagai macam pilihan produk fashion, sneaker premium, 
                dan aksesoris olahraga dengan jaminan kualitas terbaik, pelayanan ramah, serta pengiriman instan ke seluruh Indonesia.
            </p>
            
            <!-- BIODATA DAN KONTAK OWNER LENGKAP -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; background: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #e9ecef; font-size: 14px; margin-bottom: 20px;">
                <div><strong>Nama Owner:</strong> Andi Rayadi Hidayat</div>
                <div><strong>No. HP / WhatsApp:</strong> +62 812-3456-7890</div>
                <div><strong>Email Resmi:</strong> andirayadihidayat@gmail.com</div>
                <div><strong>Alamat Toko:</strong> Jl. Raya Fashion No. 88, Blok C, Jakarta, Indonesia</div>
                <div><strong>Jam Operasional:</strong> 09.00 - 21.00 WIB</div>
                <div><strong>Status Toko:</strong> <span style="background: #2ed573; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">BUKA</span></div>
            </div>

            <!-- KETERANGAN PENJELASAN TOKO TAMBAHAN -->
            <div style="background: #eef2f7; border-left: 4px solid #007bff; padding: 15px; border-radius: 6px; font-size: 13.5px; color: #444; line-height: 1.6;">
                <h4 style="margin: 0 0 8px 0; color: #2c3e50; font-size: 15px;">ℹ️ Keterangan & Kebijakan Toko:</h4>
                <ul style="margin: 0; padding-left: 20px;">
                    <li><strong>Jaminan Originalitas:</strong> Semua produk sepatu, fashion, dan aksesoris yang kami jual 100% original dan telah melewati proses pengecekan kualitas fisik (QC) yang ketat sebelum dikirim.</li>
                    <li><strong>Kebijakan Garansi & Retur:</strong> Kami menyediakan garansi tukar ukuran (size) dalam waktu 3x24 jam setelah barang diterima, wajib menyertakan video unboxing utuh tanpa potongan.</li>
                    <li><strong>Sistem Pengiriman:</strong> Pesanan yang masuk sebelum jam 17.00 WIB akan dikirim di hari yang sama. Mendukung pengiriman reguler, kargo, maupun instan (Gojek/Grab).</li>
                    <li><strong>Keamanan Pembayaran:</strong> Transaksi Anda dilindungi dan diproses secara aman melalui simulasi sistem Payment Gateway terintegrasi kami di bawah ini.</li>
                </ul>
            </div>
        </div>
    `;
}

function renderKatalog() {
    const divKatalog = document.getElementById("katalog-produk");
    if (!divKatalog) return;
    divKatalog.innerHTML = "";
    
    daftarProduk.forEach(p => {
        const kartu = document.createElement("div");
        kartu.className = "product-card";
        kartu.innerHTML = `
            <div>
                <img src="${p.foto}" class="product-img" alt="${p.nama}">
                <div class="product-info">
                    <div class="product-title">${p.nama}</div>
                    <div class="product-price">Rp ${p.harga.toLocaleString('id-ID')}</div>
                </div>
            </div>
            <div style="padding: 0 15px 15px 15px;">
                <button class="yellow-btn" onclick="tambahKeKeranjang(${p.id})">
                    💛 Keranjang Kuning
                </button>
            </div>
        `;
        divKatalog.appendChild(kartu);
    });
}

function renderKeranjang() {
    const divKeranjang = document.getElementById("keranjang-payment");
    if (!divKeranjang) return;

    if (dataKeranjang.length === 0) {
        divKeranjang.innerHTML = `<h4 style="text-align:center; color:#999; margin:20px 0;">🛒 Keranjang Kuning Anda Kosong</h4>`;
        return;
    }

    let total = 0;
    let htmlItems = "";

    dataKeranjang.forEach(item => {
        const subtotal = item.harga * item.jumlah;
        total += subtotal;
        htmlItems += `
            <div class="cart-item">
                <div class="cart-item-left">
                    <img src="${item.foto}" class="cart-item-img" alt="${item.nama}">
                    <div>
                        <div class="cart-item-name">${item.nama}</div>
                        <div class="cart-item-qty">Jumlah: ${item.jumlah}x @ Rp ${item.harga.toLocaleString('id-ID')}</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:20px;">
                    <span style="font-weight:700;">Rp ${subtotal.toLocaleString('id-ID')}</span>
                    <button class="delete-btn" onclick="hapusDariKeranjang(${item.id})">Hapus</button>
                </div>
            </div>
        `;
    });

    divKeranjang.innerHTML = `
        <h3 style="margin-bottom: 15px; color:#222;">🛒 Daftar 8 Keranjang Kuning Aktif</h3>
        <div>${htmlItems}</div>
        <div class="total-container">
            <span>Total Pembayaran Keseluruhan:</span>
            <span class="total-price">Rp ${total.toLocaleString('id-ID')}</span>
        </div>
        <button class="pay-btn" onclick="prosesBayar(${total})">
            💳 Selesaikan Pembayaran (Payment Gateway)
        </button>
    `;
}

function tambahKeKeranjang(id) {
    const item = dataKeranjang.find(p => p.id === id);
    if (item) {
        item.jumlah += 1;
    } else {
        const produk = daftarProduk.find(p => p.id === id);
        dataKeranjang.push({ ...produk, jumlah: 1 });
    }
    renderKeranjang();
}

function hapusDariKeranjang(id) {
    dataKeranjang = dataKeranjang.filter(item => item.id !== id);
    renderKeranjang();
}

function prosesBayar(total) {
    alert(`--- NOTIFIKASI PAYMENT SUCCESS ---\n\nTotal Tagihan sebesar Rp ${total.toLocaleString('id-ID')} Berhasil Dibayar!\n\nTerima kasih sudah berbelanja di Andi Store Sepatu.`);
    dataKeranjang = [];
    renderKeranjang();
}