function RajaplaySound(url) {
  document.getElementById("dummyspan").innerHTML=
       "<embed src='/pcc/admin/raja_ivr_train_schedules/playsound?play="+url+"' hidden=true autostart=true loop=false>";
}

var spanTag = document.createElement("span");
spanTag.id='dummyspan';
document.body.appendChild(spanTag);
