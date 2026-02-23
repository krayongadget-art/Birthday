/* ================================= */
/* PASSWORD */
/* ================================= */
function cekPassword(){
    var pass = "18-12-23";
    var input = document.getElementById("passInput").value;

    if(input === pass){
        document.getElementById("passwordScreen").style.display = "none";
    }else{
        document.getElementById("passError").innerHTML = "Masih salah 🤭";
    }
}

/* ================================= */
/* MULAI */
/* ================================= */
function mulai(){
    document.getElementById("popupAwal").style.display = "none";
    document.getElementById("container").style.display = "block";

    var musik = document.getElementById("musik");
    musik.volume = 0.5;
    musik.play().catch(()=>{});

    ketikJudul();
}

/* ================================= */
/* JUDUL */
/* ================================= */
var j = 0;
var judulText = "Selamat ulang tahun, perempuan favorit aku ❤️";

function ketikJudul(){
    if(j < judulText.length){
        document.getElementById("judul").innerHTML += judulText.charAt(j);
        j++;
        setTimeout(ketikJudul, 60);
    }
}

/* ================================= */
/* SURAT */
/* ================================= */
var pesan = "Terima kasih sudah hadir di hidup aku. Kamu membuat semuanya terasa lebih indah, Terima kasih juga kamu telah menerima aku apa adanya, disaat aku dekat dengan kamu aku selalu nyaman karena kamu membuat perasaan aku lebih tenang wkwk 🤍";
var i = 0;

function mulaiSurprise(){
    document.getElementById("startSurprise").style.display = "none";
    ketikPesan();
}

function ketikPesan(){
    if(i < pesan.length){
        document.getElementById("typingText").innerHTML += pesan.charAt(i);
        i++;
        setTimeout(ketikPesan, 35);
    }
}

/* ================================= */
/* PERTANYAAN */
/* ================================= */
function jawabIya(){
    alert("Sudah Ditebak Kamu Sayang Aku, Kalau kamu sayang sama bagas berarti kamu cewenya bagas wkwk❤️");
}

function lari(){
    var btn = document.getElementById("btnTidak");
    btn.style.position = "absolute";
    btn.style.left = Math.random()*300 + "px";
    btn.style.top = Math.random()*300 + "px";
}

/* ================================= */
/* 🎬 CINEMATIC ENDING */
/* ================================= */

var endingMsg = "Di dunia yang luas ini, aku cuma ingin satu hal: kamu tetap di samping aku. Terima kasih sudah menjadi bagian terindah dalam hidup aku ❤️";
var endingIndex = 0;
var endingRunning = false;

function startEnding(){

    // supaya tidak bisa ditekan berkali-kali
    if(endingRunning) return;
    endingRunning = true;

    document.getElementById("endingScene").style.display = "flex";
    document.getElementById("endingText").innerHTML = "";
    endingIndex = 0;

    // kecilkan musik
    var musik = document.getElementById("musik");
    musik.volume = 0.2;

    ketikEnding();
}

function ketikEnding(){
    if(endingIndex < endingMsg.length){
        document.getElementById("endingText").innerHTML += endingMsg.charAt(endingIndex);
        endingIndex++;
        setTimeout(ketikEnding, 40);
    } 
    else{
        mulaiVideoEnding();
    }
}

/* ================================= */
/* VIDEO MOMENT */
/* ================================= */
function mulaiVideoEnding(){
    setTimeout(()=>{

        document.getElementById("videoEnding").style.display = "block";

        var musik = document.getElementById("musik");
        musik.volume = 0.1;   // lagu mengecil

        var video = document.getElementById("endingVideo");
        video.volume = 1;
        video.play();

    }, 1200);
}

/* ================================= */
/* BACK BUTTON */
/* ================================= */
function backFromVideo(){

    var ending = document.getElementById("endingScene");
    var video  = document.getElementById("endingVideo");
    var musik  = document.getElementById("musik");

    // stop video
    video.pause();
    video.currentTime = 0;

    // kasih efek fade
    ending.classList.add("fade-out");

    // naikkan volume perlahan
    var vol = musik.volume;
    var fadeMusic = setInterval(()=>{
        if(vol < 0.5){
            vol += 0.05;
            musik.volume = vol;
        } else {
            clearInterval(fadeMusic);
        }
    },50);

    // setelah animasi selesai → sembunyikan
    setTimeout(()=>{
        ending.style.display = "none";
        ending.classList.remove("fade-out");
    },500);

    // supaya bisa dipanggil lagi
    endingRunning = false;
}

