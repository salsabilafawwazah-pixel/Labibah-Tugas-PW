const namaToko = "Labibah Mart";

console.log("==================================================");
console.log("                  Labibah Mart                    ");
console.log("            Sistem Transaksi Belanja              ");
console.log("==================================================");

const transaksi = [
    {id: 1, barang: "Beras", harga: 75000, qty: 1, kategori: "Sembako"},
    {id: 2, barang: "Minyak Goreng", harga: 17000, qty: 1, kategori: "Sembako"},
    {id: 3, barang: "Roti Gembul Coklat", harga: 28000, qty: 2, kategori: "Makanan"},
    {id: 4, barang: "Kopi ICE Americano", harga: 12000, qty: 1, kategori: "Minuman"},
    {id: 5, barang: "Roti Amanda Brownis", harga: 130000, qty: 3, kategori: "Makanan"},
    {id: 6, barang: "Kopi 1/2M", harga: 150000, qty: 1, kategori: "Minuman"},

];
console.log("\nDAFTAR TRANSAKSI LABIBAH MART");
console.table(transaksi);

console.log("\n=== FILTER KATEGORI MAKANAN ===");
const makanan = transaksi.filter(
    ({kategori}) => kategori === "Makanan"
);
console.table(makanan);

console.log("\n=== MAP SUBTOTAL BARANG ===");
const daftarSubtotal =transaksi.map(
    ({id, barang, harga, qty, kategori }) =>({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);
console.table(daftarSubtotal);

console.log("\n=== REDUCE TOTAL BELANJA ===");
const totalBelanja =daftarSubtotal.reduce(
    (total, {subtotal}) => total + subtotal, 
    0
);
console.log(
    "Total belanja" + namaToko + ": Rp " +
    totalBelanja.toLocaleString("id-ID")
);

console.log("\n==================================================");
console.log("            STRUK BELANJA SELESAI                   ");
console.log("====================================================");
console.log("Nama Toko  : " + namaToko                            );
console.log("Jumlah Barang : " + transaksi.length  + "jenis"       );
console.log("Total Belanja : Rp " + totalBelanja.toLocaleString("id-ID"));
console.log("----------------------------------------------------");
console.log("Terimakasih telah berbelanja!!"                      );
console.log("Semoga hari Anda menyenangkan"                       );
console.log("====================================================");

