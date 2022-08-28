const data = [
            {
                "id": 1,
                "question": "Nama tool pada gambar di bawah ini adalah",
                "img": require("./images/pen-tool.png"),
                "options": [
                    { "option": "a", "optionText": "Curvature tool", "isCorrect": false },
                    { "option": "b", "optionText": "Selection tool", "isCorrect": false },
                    { "option": "c", "optionText": "Pen tool", "isCorrect": true },
                    { "option": "d", "optionText": "Eye dropper tool", "isCorrect": false }
                ],
                "answer" : { "option": "c", "optionText": "Pen tool", "isCorrect": true },
                "pembahasan" : "Gambar tersebut menunjukkan pen tool"
            },
            
            {
                "id": 2,
                "question": "Tool tersebut berfungsi sebagai",
                "img": require("./images/curve-tool.png"),
                "options": [
                    { "option": "a", "optionText": "Membuat garis atau kurva", "isCorrect": true },
                    { "option": "b", "optionText": "Menyeleksi ornament", "isCorrect": false },
                    { "option": "c", "optionText": "Memilih warna", "isCorrect": false },
                    { "option": "d", "optionText": "Mengatur ukuran", "isCorrect": false }
                ],
                "answer": { "option": "a", "optionText": "Membuat garis atau kurva", "isCorrect": true },
                "pembahasan": "Pen tool digunakan untuk membuat garis atau kurva dengan menghubungkan titik ke titik"
            },
            
            {
                "id": 3,
                "question": "Nama tool pada gambar di bawah ini adalah",
                "img": require("./images/gradient-tool.png"),
                "options": [
                    { "option": "a", "optionText": "Curvature tool", "isCorrect": false },
                    { "option": "b", "optionText": "Rectangle tool", "isCorrect": false },
                    { "option": "c", "optionText": "Eye dropper tool", "isCorrect": false },
                    { "option": "d", "optionText": "Gradient tool", "isCorrect": true }
                ],
                "answer": { "option": "d", "optionText": "Gradient tool", "isCorrect": true },
                "pembahasan": "Gambar tersebut menunjukkan gradient tool"
            },
    
            {
                "id": 4,
                "question": "Untuk mengambil sample warna tool yang digunakan adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Curvature tool", "isCorrect": false },
                    { "option": "b", "optionText": "Selection tool", "isCorrect": false },
                    { "option": "c", "optionText": "Pen tool", "isCorrect": false },
                    { "option": "d", "optionText": "Eye dropper tool", "isCorrect": true }
                ],
                "answer": { "option": "d", "optionText": "Eye dropper tool", "isCorrect": true },
                "pembahasan": "Eye dropper tool digunakan untuk mengambil sampel warna dengan cara menyeret pen tool ke objek dengan warna yang ingin diambil"
            },
    
            {
                "id": 5,
                "question": "Tools untuk membuat suatu bentuk persegi atau persegi panjang menggunakan",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Oval tool", "isCorrect":false },
                    { "option": "b", "optionText": "Hexagon tool", "isCorrect": false },
                    { "option": "c", "optionText": "Circle tool", "isCorrect": false },
                    { "option": "d", "optionText": "Rectangle tool", "isCorrect": true }
                ],
                "answer": { "option": "d", "optionText": "Rectangle tool", "isCorrect": true },
                "pembahasan": "Rectangle tool digunakan untuk membuat objek persegi dan persegi panjang"
            },
            
            {
                "id": 6,
                "question": "Warna yang digunakan untuk media cetak adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "HSL", "isCorrect": false },
                    { "option": "b", "optionText": "CMYK", "isCorrect":true },
                    { "option": "c", "optionText": "RGB", "isCorrect": false },
                    { "option": "d", "optionText": "HUE", "isCorrect": false }
                ],
                "answer": { "option": "b", "optionText": "CMYK", "isCorrect":true },
                "pembahasan": "Dibandingkan RGB, CMYK mampu membuat spektrum warna yang lebih luas. Alhasil, hasil cetakannya pun dapat menghasilkan warna yang lebih baik."
            },
    
            {
                "id": 7,
                "question": "Model warna yang biasanya di gunakan untuk desain grafis seperti feeds instagram adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "HSL", "isCorrect": false },
                    { "option": "b", "optionText": "CMYK", "isCorrect": false },
                    { "option": "c", "optionText": "RGB", "isCorrect": true },
                    { "option": "d", "optionText": "HUE", "isCorrect": false }
                ],
                "answer": { "option": "c", "optionText": "RGB", "isCorrect": true },
                "pembahasan": "Karena RGB merupakan model warna yang digunakan untuk media digital"
            }, 
            
            {
                "id": 8,
                "question": "Warna yang digunakan dalam media digital adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "HSL", "isCorrect": false },
                    { "option": "b", "optionText": "CMYK", "isCorrect": false },
                    { "option": "c", "optionText": "RGB", "isCorrect": true },
                    { "option": "d", "optionText": "HUE", "isCorrect": false }
                ],
                "answer": { "option": "c", "optionText": "RGB", "isCorrect": true },
                "pembahasan": "Warna RGB lebih terang dan jelas, jika kalian ingin mendesain untuk kepentingan digital seperti website, iklan produk di tv dan lainnya, maka kalian harus pakai warna RGB"
            },
    
            {
                "id": 9,
                "question": "Apakah fungsi utama dari huruf?",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Penambah nilai estetika", "isCorrect": false },
                    { "option": "b", "optionText": "Komunikasi visual", "isCorrect": true },
                    { "option": "c", "optionText": "Pengisi ruang", "isCorrect": false },
                    { "option": "d", "optionText": "Pengganti gambar", "isCorrect": false }
                ], 
                "answer": { "option": "b", "optionText": "Komunikasi visual", "isCorrect": true },
                "pembahasan": "Huruf merupakan alat komunikasi non verbal, kita bisa mendapat informasi dengan membacanya secara visual."
            },
    
            {
                "id": 10,
                "question": "Dalam video tutorial yang di tampilkan, ada berapa banyak warna yang di gunakan",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "3", "isCorrect":false },
                    { "option": "b", "optionText": "5", "isCorrect": false },
                    { "option": "c", "optionText": "4", "isCorrect":true },
                    { "option": "d", "optionText": "2", "isCorrect":false }
                ],
                "answer": { "option": "c", "optionText": "4", "isCorrect":true },
                "pembahasan": "Dalam video tutorial, warna yang digunakan ada 4 yaitu warna krem, kuning, coklat muda dan coklat tua"
            },
            
            {
                "id": 11,
                "question": "Tahapan untuk mengexport file .ai menjadi .jpg adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "File > Export > Export As > Ketik File Name > Pilih format di Save as type > Use Artboard > Export", "isCorrect":true },
                    { "option": "b", "optionText": "File > Save", "isCorrect":false },
                    { "option": "c", "optionText": "File > Save As > Ketik file nama", "isCorrect":false },
                    { "option": "d", "optionText": "Object > Expand", "isCorrect":false }
                ],
                "answer": { "option": "a", "optionText": "File > Export > Export As > Ketik File Name > Pilih format di Save as type > Use Artboard > Export", "isCorrect":true },
                "pembahasan": "Tahapan export file adalah: File > Export > Export As > Ketik File Name > Pilih format di Save as type > Use Artboard > Export"
            },
            
            {
                "id": 12,
                "question": "Shortcut untuk menggunakan Pen tool adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Ctrl + P", "isCorrect":false },
                    { "option": "b", "optionText": "Ctrl + V", "isCorrect":false },
                    { "option": "c", "optionText": "V", "isCorrect":false },
                    { "option": "d", "optionText": "P", "isCorrect":true }
                ],
                "answer": { "option": "d", "optionText": "P", "isCorrect":true },
                "pembahasan": "Karena shortcut untuk pen tool adalah P"
            },
            
            {
                "id": 13,
                "question": "Menyisipkan tulisan atau teks pada AI menggunakan tool",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Text tool", "isCorrect":true },
                    { "option": "b", "optionText": "Gradient tool", "isCorrect":false },
                    { "option": "c", "optionText": "Freeform tool", "isCorrect":false },
                    { "option": "d", "optionText": "Selection tool", "isCorrect":false }
                ],
                "answer": { "option": "a", "optionText": "Text tool", "isCorrect":true },
                "pembahasan": "Sesuai namanya, text tool berfungsi untuk menambahkan teks dan tipografi."
            },
            
            {
                "id": 14,
                "question": "Shortcut untuk Selection Tool adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Ctrl + P", "isCorrect":false },
                    { "option": "b", "optionText": "Ctrl + V", "isCorrect":false },
                    { "option": "c", "optionText": "V", "isCorrect":true },
                    { "option": "d", "optionText": "P", "isCorrect":false }
                ],
                "answer": { "option": "c", "optionText": "V", "isCorrect":true },
                "pembahasan": "Karena shortcut untuk selecton tool adalah V"
            },
            
            {
                "id": 15,
                "question": "Jenis font yang tidak memiliki busur elit atau goresan kecil pada setiap akhir hurufnya adalah",
                "img": "",
                "options": [
                    { "option": "a", "optionText": "Serif", "isCorrect":false },
                    { "option": "b", "optionText": "Dekoratif", "isCorrect":false },
                    { "option": "c", "optionText": "Monospace", "isCorrect":false },
                    { "option": "d", "optionText": "Sans serif", "isCorrect":true }
                ],
                "answer": { "option": "d", "optionText": "Sans serif", "isCorrect":true },
                "pembahasan": "Sesuai namanya, sans serif merupakan font yang tidak memiliki goresan ataupun sirip di bagian akhirnya, kebalikan dari serif."
            }
        
    
]

export default data