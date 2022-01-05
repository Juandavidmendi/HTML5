function iniciar(){
    var elemento=document.getElementById('copo');
    cxt1=elemento.getContext('2d');

    if(cxt1){
        cxt1.beginPath();
        cxt1.strokeStyle='white'
        cxt1.lineWidth=3;
        cxt1.lineCap="round";
        cxt1.moveTo(10,3);
        cxt1.lineTo(10,17);
        cxt1.moveTo(3,10);
        cxt1.lineTo(17,10);
        cxt1.moveTo(5,5);
        cxt1.lineTo(15,15);
        cxt1.moveTo(5,15);
        cxt1.lineTo(15,5);
        cxt1.stroke()
    }
    imagen1=new Image(); 
    imagen1.src="nieve.jpg";
    copoNieve=document.getElementById("copo");
    var elemento=document.getElementById('paisaje');
    cxt2=elemento.getContext('2d');
    if (cxt2){
        cxt2.beginPath(); 
        imagen1.onload=function() {
            cxt2.drawImage(imagen1,0,0,300,225); 
            a=4; 
            for (i=1;i<=200;i++) { 
                x=Math.random()*300; 
                x=Math.round(x);
                y=Math.random()*225;
                y=Math.round(y);
                cxt2.drawImage(copoNieve,x,y,a,a);
                a+=4; 
                if (a>=16) {
                    a=4;
                }
            }
        }	
    }   
}
window.addEventListener("load", iniciar, false);

