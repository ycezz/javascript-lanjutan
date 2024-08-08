   // 1. HTML Fragments
        // const mhs = {
        //     nama: 'Putri',
        //     umur: 32,
        //     nim: '87205465',
        //     email: 'putri@example.com'
        // };

        // const el = `<div class="mhs">
        //     <h2>${mhs.nama}</h2>
        //     <span class="nim">${mhs.nim}</span>
        // </div>`;

        // 2. Looping
        // const mhs = [
        //     {
        //         nama : 'Putri',
        //         email: 'putri@example.com'
        //     },
        //     {
        //         nama : 'Andi',
        //         email: 'andi@example.com'
        //     },
        //     {
        //         nama : 'Budi',
        //         email: 'budi@example.com'
        //     }
        // ];

        // const el = `<div class="mhs">
        //     ${mhs.map(m => `<ul>
        //         <li>${m.nama}</li>
        //         <li>${m.email}</li>
        //     </ul>`).join('')}
        // </div>`;
            
    
        // 3. Conditionals
        // ternary
        // const lagu = {
        //     judul: 'Tetap Dalam Jiwa',
        //     penyanyi: 'Isyana Sarasvati',
        //     feat: 'Natalie Portman'
        // }

        // const el = `<div class="lagu">
        //      <ul>
        //         <li>${lagu.penyanyi}</li>
        //         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
        //     <ul>
        // </div>`;

        // 4. Nested
        // HTML Fragments bersarang

        const mhs = {
            nama: 'Putri',
            semester: 5,
            mataKuliah: [
                'Rekayasa Web',
                'Analisis dan Perancangan Sistem Informasi',
                'Pemrograman Sistem Interaktif',
                'Perancangan Sistem Berorientasi Object'
            ]
        };

        function cetakMataKuliah(mataKuliah) {
            return `
                <ol>
                    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
                </ol>
            `;
        }

        const el = `<div class="mhs">
            <h2>${mhs.nama}</h2>
            <span class="semester">Semester : ${mhs.semester}</span>
            <h4>Mata Kuliah :</h4>
            ${cetakMataKuliah(mhs.mataKuliah)}
        </div>`;

        document.body.innerHTML = el;
