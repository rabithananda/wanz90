
link_jejakmu = "https://jejakmu.com/YpjG5y3"
maximum_nonton = 65
localstorage_name = 'bokepcounter'

link_download_jejakmu = "https://jejakmu.com/BMg2"
bayar_download = 1000


function Jejakmu_counter(file_code) {
    let counter = localStorage.getItem(localstorage_name);
    if (!counter) {
        counter = { id: 1, file_code: file_code };
    } else {
        counter = JSON.parse(counter);
        counter.id += 1;
        counter.file_code = file_code
    }
    localStorage.setItem(localstorage_name, JSON.stringify(counter));
     console.log("tambah counter",counter)
}



function Jejakmu_download() {
    const counter = JSON.parse(localStorage.getItem(localstorage_name));
    
    if (counter) {
        const downloadButton = document.createElement('a');
        downloadButton.href = link_download_jejakmu;
        downloadButton.style.width = "100%"
        downloadButton.target = "_blank";
        downloadButton.className = "btn waves-effect waves-light purple bold-text"; // Tombol dengan Materialize
        downloadButton.innerHTML = "Download Tanpa iklan Rp. " + bayar_download; 

        const container = document.getElementById('jejakdownload');
        if (container) {
            container.appendChild(downloadButton); // Append tombol ke dalam div
        } else {
            console.error('Elemen dengan id "jejakdownload" tidak ditemukan.');
        }
    }
    return counter
}


 function Jejakmu_reset() {
            let counter = localStorage.getItem(localstorage_name);
            if (counter) {
                counter = JSON.parse(counter);
                counter.id = 0;  // Reset the id to 1
                localStorage.setItem(localstorage_name, JSON.stringify(counter));
                console.log("Counter reset:", counter);
            if (counter.file_code) {
            window.location.href = `/p.html?id=${counter.file_code}`; // Redirect ke p.html dengan file_code
            } else {
                // Redirect ke index.html jika file_code tidak ditemukan
                window.location.href = 'index.html';
            }

            } else {
                console.log("No counter found to reset.");
            }
        }



function Jejakmu_check() {
    let counter = JSON.parse(localStorage.getItem(localstorage_name)); // Ambil counter dari localStorage
    const counterContainer = document.getElementById('jejakmucounter');

    if (counter) {
         const id = counter.id; // Ambil id dari counter
        const progressValue = Math.min(id, maximum_nonton); // Hitung persentase (tidak lebih dari 100%)
           let circlesHTML = `<div class="circle" style="width: 12px; height: 12px; border-radius: 50%; display: inline-block; margin-right: 5px;"></div>`;
        counterContainer.innerHTML = `
            <div style="position: fixed; bottom: 10px; right: 10px; background-color: #f3f3f3; padding: 10px; border: 1px solid black; border-radius: 5px; z-index: 9999;">
                <strong>${circlesHTML} Limit Nonton tersisa : </strong> <span id="counterValue">${id}/${maximum_nonton}x</span> 
                <div style="width: 200px; height: 30px; background-color: #f3f3f3; border: 1px solid black; border-radius: 5px; margin-top: 5px;">
                    <div id="progressBar" style="height: 100%; width: ${progressValue}%; background-color: #fa1995; border-radius: 5px;"></div>
                </div>
            </div>
        `;
         const circles = document.querySelectorAll('.circle');
        
        let isGreen = true;
        setInterval(() => {
            circles.forEach(circle => {
                if (isGreen) {
                    circle.style.backgroundColor = 'green';
                } else {
                    circle.style.backgroundColor = 'white';
                }
            });
            isGreen = !isGreen; // Tukar antara hijau dan putih
        }, 500); // Ubah setiap 1 detik (1000 ms)

        if (id >= maximum_nonton) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
            script.onload = function() {
                Swal.fire({
                    title: 'Donasi Rp. 1.000 untuk lanjut Nonton di web ini',
                    html: `Berikan donasi 1.000 untuk Biaya Server Web ADMIN. <br><br><a href=${link_jejakmu} target="_blank" style="text-decoration: underline; color: blue;">Klik di sini untuk memberikan donasi</a>`,
                    icon: 'info',
                    showCancelButton: false,
                    showConfirmButton: false, // Tidak menampilkan tombol konfirmasi
                    allowOutsideClick: false, // Tidak bisa menutup dengan klik di luar
                    allowEscapeKey: false, // Tidak bisa menutup dengan tombol Esc
                    showCloseButton: false, // Tidak menampilkan tombol close
                });
            };
            document.body.appendChild(script);  // Append the script to the body
        }
    }
    }


window.onload = function() {
    console.log("LocalStorage updated:", JSON.parse(localStorage.getItem(localstorage_name)));  // For debugging
}