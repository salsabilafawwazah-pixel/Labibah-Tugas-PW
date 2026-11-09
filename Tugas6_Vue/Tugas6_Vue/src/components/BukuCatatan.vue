
<script setup>
import { ref, computed } from 'vue'

const judul = ref('')
const kategori = ref('Novel')
const sudahDibaca = ref(false)

const daftarBuku = ref([])

function tambahBuku() {
  if (judul.value.trim() === '') {
    alert('Judul buku harus diisi!')
    return
  }

  daftarBuku.value.push({
    id: Date.now(),
    judul: judul.value,
    kategori: kategori.value,
    sudahDibaca: sudahDibaca.value
  })

  judul.value = ''
  kategori.value = 'Novel'
  sudahDibaca.value = false
}

const jumlahDibaca = computed(() => {
  return daftarBuku.value.filter(
    buku => buku.sudahDibaca
  ).length
})
</script>

<template>
  <div class="container">
    <h1>📚 Aplikasi Buku Catatan</h1>
    <p>Kelola daftar buku bacaan kamu</p>

    <div class="form">
      <h2>Tambah Buku</h2>

      <label>Judul Buku</label>
      <input
        v-model="judul"
        placeholder="Masukkan judul buku"
      />

      <label>Kategori Buku</label>
      <select v-model="kategori">
        <option>Novel</option>
        <option>Pendidikan</option>
        <option>Teknologi</option>
        <option>Sejarah</option>
        <option>Komik</option>
      </select>

      <label class="check">
        <input type="checkbox" v-model="sudahDibaca">
        Sudah dibaca
      </label>

      <button @click="tambahBuku">
        Tambahkan Buku
      </button>
    </div>

    <div class="hasil">
      <h2>Daftar Buku</h2>

      <p>Total buku: {{ daftarBuku.length }}</p>
      <p>Sudah dibaca: {{ jumlahDibaca }}</p>

      <p v-if="daftarBuku.length === 0">
        Belum ada buku.
      </p>

      <div
        v-for="(buku, index) in daftarBuku"
        :key="buku.id"
        class="buku"
      >
        <h3>{{ index + 1 }}. {{ buku.judul }}</h3>
        <p>Kategori: {{ buku.kategori }}</p>

        <label class="check">
          <input
            type="checkbox"
            v-model="buku.sudahDibaca"
          >
          Sudah dibaca
        </label>

        <p>
          Status:
          {{ buku.sudahDibaca ? 'Selesai' : 'Belum selesai' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #eaf0f9;
  font-family: Arial, sans-serif;
  color: #222;
}

.container {
  max-width: 650px;
  margin: 30px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2563eb;
}

.form, .hasil {
  background: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px #00000012;
}

input:not([type="checkbox"]), select {
  width: 100%;
  padding: 12px;
  margin: 8px 0 15px;
  border: 1px solid #ccc;
  border-radius: 7px;
}

.check {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 12px 0;
}

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.buku {
  background: #f1f5f9;
  padding: 15px;
  margin-top: 12px;
  border-radius: 8px;
}
</style>


* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #eaf0f9;
  font-family: Arial, sans-serif;
  color: #222;
}

.container {
  max-width: 650px;
  margin: 30px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #2563eb;
}

h2 {
  color: #1e293b;
}

p, label {
  color: #222;
}

.form, .hasil {
  background: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px #00000012;
}

input:not([type="checkbox"]), select {
  width: 100%;
  padding: 12px;
  margin: 8px 0 15px;
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  background: #ffffff;
  color: #222222;
}

.check {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 12px 0;
}

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

button:hover {
  background: #1d4ed8;
}

.buku {
  background: #f1f5f9;
  padding: 15px;
  margin-top: 12px;
  border-radius: 8px;
}
