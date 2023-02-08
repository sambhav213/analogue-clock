setInterval (()=>{
    d=new Date();
    hours=d.getHours();
    minutes=d.getMinutes();
    seconds=d.getSeconds();

    hr=30*hours+minutes*0.5;
    mr=6*minutes;
    sr=6*seconds;
    h.style.transform=`rotate(${hr}deg)`;
    min.style.transform=`rotate(${mr}deg)`;
    sec.style.transform=`rotate(${sr}deg)`;
    },1000);