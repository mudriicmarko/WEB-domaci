let gitara=document.getElementById('zvuk_gitara');
let klavir=document.getElementById('zvuk_klavir');
let harmonika=document.getElementById('zvuk_harmonika');
let truba=document.getElementById('zvuk_truba');
let bubnjevi=document.getElementById('zvuk_bubnjevi');
let saksofon=document.getElementById('zvuk_saksofon');

function pusti(id){
	switch(id){
		case 'gitara': gitara.play();break;
		case 'klavir': klavir.play();break;
		case 'harmonika': harmonika.play();break;
		case 'truba': truba.play();break;
		case 'bubnjevi': bubnjevi.play();break;
		case 'saksofon': saksofon.play();break;
	}
}

function stani(id){
	switch(id){
		case 'gitara': gitara.pause();break;
		case 'klavir': klavir.pause();break;
		case 'harmonika': harmonika.pause();break;
		case 'truba': truba.pause();break;
		case 'bubnjevi': bubnjevi.pause();break;
		case 'saksofon': saksofon.pause();break;
	}
}