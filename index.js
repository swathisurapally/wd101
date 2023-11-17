function nmValid(){
	let n=document.getElementById("nm").value;
	let nc=/^[a-zA-Z\" "\.]+$/;
	if(nc.test(n)){
		document.getElementById("nmerror").innerHTML="";
	}
	else
		document.getElementById("nmerror").innerHTML="Invalid Name";
}
function passValid(){
	let p=document.getElementById("p").value;
	let pc=/^(\w|\&|\*|\$|\@|\!|\8){8,}$/;
	if(pc.test(p)){
		document.getElementById("passerror").innerHTML="";
	}
	else
		document.getElementById("passerror").innerHTML="Atleast 8 characters";
}
function eValid(){
	let e=document.getElementById("em").value;
	let ec=/^[a-z0-9]\w*[a-z0-9]\@(gmail.com|email.com|cvr.ac.in)$/;
	if(ec.test(e)){
		document.getElementById("emailerror").innerHTML="";
	}
	else
		document.getElementById("emailerror").innerHTML="Invalid Email";
}