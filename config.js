let key_api = "219725bbkborbourrp2cd4"
let cors_any   = "https://darenx-corsanywhere3.hf.space"

let frame_domain = "https://dood.li"

let shortlink_domain  = "https://cuty.io/quick?token="
let shortlink_token  = "3c2f8445e662326c2ebcd8d60"
let shortlink_tujuan  = "&url="


let directlink_url = "https://darkbananas.com/in/p/?spot_id=830736&cat=25&sub_id=1246634411"


function direct_click(code){
	window.location.href = `/p.html?id=${code}`
	
}

  function savelocal(data) {
      const file = JSON.parse(decodeURIComponent(data));
      let savedFiles = localStorage.getItem('nonton-film');
      savedFiles = savedFiles ? JSON.parse(savedFiles) : [];
      savedFiles.push(file);
      localStorage.setItem('nonton-film', JSON.stringify(savedFiles));
       Swal.fire({
            icon: 'success',
            toast:true,
            title: 'Video Berhasil Disimpan',
            timer:1000
          });
    }



// =================================================
// shoppe afiliate
const toastifyCss = document.createElement('link');
toastifyCss.rel = 'stylesheet';
toastifyCss.href = 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css';
document.head.appendChild(toastifyCss);

// Dynamically import Toastify JS
const toastifyScript = document.createElement('script');
toastifyScript.src = 'https://cdn.jsdelivr.net/npm/toastify-js';
document.head.appendChild(toastifyScript);

let api_query = "https://rnkbyktrileupeigvtuq.supabase.co/rest/v1/shopee?select=*"

let anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJua2J5a3RyaWxldXBlaWd2dHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MTM3MzAsImV4cCI6MjAzMjA4OTczMH0.YamveBqC-mljVodizzLNp8o5k9XxgPVdkgyD8GQ_7fE"


 function Popunder_shopee() {
    let popunder_pilih = [1, 2, 3, 4,5];
    const randomChoice = popunder_pilih[Math.floor(Math.random() * popunder_pilih.length)];
    console.log("shopee popunder ",randomChoice)
    if (randomChoice === 2) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 128, 0, 0.8)';
        overlay.style.zIndex = 9998; 
        overlay.style.opacity = 0
        overlay.style.display = 'block'; 
        document.body.appendChild(overlay);

        fetch(api_query, {
            headers: {
                'apikey': anon_key,
                'Authorization': `Bearer ${anon_key}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Process your data here if needed
            const randomIndex = Math.floor(Math.random() * data.length);
            randomData = data[randomIndex];
        })
        .catch(error => console.error('Error:', error));
        
        overlay.addEventListener('click', () => {
            if (randomData && randomData.link) {
                window.open(randomData.link, '_blank'); 
            }
            overlay.style.display = 'none'; 
        });    
    }
}



function Toast_shopee(){
     fetch(api_query, {
    headers: {
        'apikey': anon_key,
        'Authorization': `Bearer ${anon_key}`
    }
})
.then(response => response.json())
.then(data => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomData = data[randomIndex];

     function truncateTitle(title) {
        if (title.length > 60) {
            return title.substring(0, 60) + '...';
        }
        return title;
    }

    const isMobileOrTablet = window.innerWidth <= 768;
    const toast_show = [1, 2, 3];
    const randomToastId = toast_show[Math.floor(Math.random() * toast_show.length)];
    console.log("shoope toast id ",randomToastId)

      if (isMobileOrTablet  && randomToastId === 2) {
    const toast = Toastify({
        text: `
            <div >
            <span class="close-btn" style="cursor: pointer;
                font-size: 20px;
                padding: 0 10px;
                position: absolute;
                top: 2px;
                right: 2px;
                background-color: red;
                border-radius: 4px;
                color: white;">X</span>
                <div>
                <div style="display:flex;justify-content:start">
                    <img src="${randomData.img}" alt="Image"
                  class="materialboxed" style="max-width: 50%; height: auto;"
                    >
                    <div style="margin-left:10px;">
                    <h5 style="font-weight:bold;color:black">Rp. ${randomData.harga}</h5>
                    <a href="${randomData.link}" target="_blank" style="
                    padding:2px;
                    display: flex; align-items: center;
                    background-color:white;border:3px solid orange;
                    ">
                        <img src="https://freelogopng.com/images/all_img/1656180520shopee-png-image.png" alt="Shopee" style="width: 50px; height: 40px; margin-right: 8px;">
                        <h6 style="font-weight:bold">Checkout Shopee Disini</h6>
                    </a>
                    </div>
                </div>
                    <div style="color:black">
                        <h6 style="font-weight:bold">${truncateTitle(randomData.title)}- (${randomData.id})</h6>
                        
                    </div>
                </div>
                
            </div>
        `,
        duration: -1, 
        gravity: "bottom", 
        position: "center",
        escapeMarkup: false, 
        backgroundColor: "#faebf8",
    });

    toast.showToast();

    document.querySelector('.close-btn').addEventListener('click', () => {
        toast.hideToast(); 
    });
    }
})
.catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    Popunder_shopee();
    Toast_shopee();
});
