let key_api = "165756vnlahl7ak3l52aeo"
let cors_any   = "https://darenx-corsanywhere5.hf.space"

let frame_domain = "https://doods.pro"

let shortlink_domain  = ""
let shortlink_token  = ""
let shortlink_tujuan  = ""


let midtrans_payment = "https://darenx-popdownload.hf.space/create"

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



