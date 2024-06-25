let key_api = "219725bbkborbourrp2cd4"
let cors_any   = "https://bobwatcherx-corsanywhere3.hf.space"

let frame_domain = "https://d0000d.com"

let shortlink_domain  = "https://cuty.io/quick?token="
let shortlink_token  = "3c2f8445e662326c2ebcd8d60"
let shortlink_tujuan  = "&url="


let directlink_url = "https://flowerdicks.com/in/p/?spot_id=826042&cat=25&sub_id=513297734"

function direct_click(code){
	let random_pilih =  Math.floor(Math.random() * 2) + 1;
	if(random_pilih === 2){
		window.open(directlink_url,'_blank')
	}else{
		window.location.href = `/p.html?id=${code}`
	}
}
