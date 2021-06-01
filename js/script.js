$('.btn').on('click', function(e){
    let tujuan = $(this).attr('href');

    let elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 30
    }, 2000);

    e.preventDefault();

});





// Pilihan mandi
$('.mandi').on('click', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <div class="card-body">
                        <p class="card-text">
                            (Kamu sedang mandi dan bersiap-siap).
                            <br>
                            "SIP DAH WANGI NIH"
                            <br>
                            Setelah itu kamu pergi ke tempat kencan mengunakan sepeda motor.
                            Beberapa menit kemudian, ternyata lampu merah yang jaraknya tidak jauh dari tempat kencanmu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                    <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                        <p class="jalan-kaki">~ Pergi ke tempat kencan dengan jalan kaki.</p>       
                        <p class="menunggu-hijau">~ Menunggu lampu merah menjadi hijau.</p>       
                    </div>
                </div>
            </div>
        </div>
    `);
});

// mandi -> jalan-kaki
$('.container-game').on('click', '.jalan-kaki', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        "Aduhhh aku harus cepat nih, kalau tidak bisa telat aku"
                        <br>
                        Tidak lama kemudian.
                        <br>
                        "Huh akhirnya sampai juga"
                        "Harus cepat cepat nih ke sayangku"
                        <br>
                        Sampai di tempat doimu
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="halo-sayang">~ "Halo sayang"</p>
                    <p class="sudah-lama-nunggu">~ "Sudah lama ya tunggunya ya yang?"</p>      
                </div>
                </div>
            </div>
        </div>
    `);
});

// mandi -> jalan kaki -> halo sayang
$('.container-game').on('click', '.halo-sayang', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        "Cepetannnn, lama banget sihh" -kata doimu
                        <br>
                        "Iya iya maaf sayang"
                        "Jadi mau pesan makanan apa?"
                        <br>                   
                        "Terserah kamu aja"
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="jangan-gitu">~ "jangan gitu donk sayang"</p>
                    <p class="langsung-memilih-makanan">~ langsung pilih makanan</p>      
                </div>
                </div>
            </div>
        </div>
    `);
});

// mandi -> jalan kaki -> halo sayang -> jangan gitu
$('.container-game').on('click', '.jangan-gitu', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "UDAH SIH GAUSAH SOK IMUT CEPETAN LAH" -doimu
                        <br>
                        "PULANG AJA LAH, emosi aku lama-lama" -doimu
                        <br>
                        KAMU GAGAL!
                    </p>      
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>            
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> jalan kaki -> halo sayang -> jangan gitu

// mandi -> jalan kaki -> halo sayang -> langsung pilih makanan
$('.container-game').on('click', '.langsung-memilih-makanan', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "Apa nih?" -doimu
                        <br>
                        "Makanan kesukaan aku donk, enak lho coba deh"
                        <br>
                        "WHOAAA iya bener enak"
                        <br>
                        setelah makan kamu dan doimu pulang
                        <br>
                        "Haaaa, bahagianya aku, padahal aku sudah mau pulang tadi kalau kamu milih yang tidak-tidak"
                        <br>
                        KAMU BERHASIL!
                    </p>      
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>              
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> jalan kaki -> halo sayang -> langsung pilih makanan


// akhir mandi -> jalan kaki -> halo sayang

// mandi -> jalan kaki -> lama ya
$('.container-game').on('click', '.sudah-lama-nunggu', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        (Hmph) " lama banget" -doimu
                        <br>
                        "Maaf ya, aku pesan makanan kesukaanku ya?"
                        <br>
                        (Ngangguk iya) -doimu
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="mengobrol">~ mengobrol sambil makan</p>
                    <p class="diam">~ diam dan makan</p>      
                </div>
                </div>
            </div>
        </div>
    `);
});

// mandi -> jalan kaki -> lama ya -> mengobrol
$('.container-game').on('click', '.mengobrol', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        Enak ga makanannya?"
                        <br>
                        "Enaklah, makanan yang kamu suka tidak pernah mengecewakan aku" -doimu
                        <br>
                        "Wah senang lho aku"
                        <br>
                        "Tapi jangan telat lagi ya (senyum sinis)" -doimu
                        <br>
                        "O o oke"
                        <br>
                        Setelah itu kamu dan doimu pulang dengan bahagia
                        <br>
                        KAMU BERHASIL!
                    </p>      
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>              
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> jalan kaki -> lama ya -> mengobrol

// mandi -> jalan kaki -> lama ya -> diam
$('.container-game').on('click', '.diam', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        Setelah kamu selesai makan, kamu dan doimu pulang dengan keadaan yang biasa saja
                        <br>
                        Hmph Lumayan Baguslah!
                    </p>      
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>               
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> jalan kaki -> lama ya -> diam


// akhir mandi -> jalan kaki -> lama ya


// akhir mandi -> jalan-kaki



// mandi -> tunggu lampu hijau
$('.container-game').on('click', '.menunggu-hijau', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "Hadeh sampai juga, lama banget itu lampu hijaunya"
                        <br>
                        (Bergegas memarkirkan motor, dan pergi ke tempat yang telah ditentukan)
                        <br>
                        "Ah itu dia"
                        "(Marah ga ya dia?) Hai sayang"
                    </p>      
                </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="dengan-senyuman">~ Dengan senyuman</p>
                    <p class="aku-minta-maaf">~ "Aku minta maaf ya?"</p>                
                </div>
                </div>
            </div>
        </div>
    `);
});

// mandi -> menunggu lampu hijau -> dengan senyuman
$('.container-game').on('click', '.dengan-senyuman', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        "Cepetannn kekkk, gausah senyum-senyummm" -kata doimu
                        <br>
                        "Hehehe maaf ya"
                        "Yuk makan, kamu mau akan apa?"
                        <br>
                        "TERSERAH" -doimu
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="memesan-rekomendasi">~ pesan makanan rekomendasi</p>
                    <p class="lha-kok-gitu">~ lha kok gitu?</p>     
                </div>
                </div>
            </div>
        </div>
    `);
});

// mandi -> menunggu lampu hijau -> dengan senyuman -> pesan rekomendasi
$('.container-game').on('click', '.memesan-rekomendasi', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        "LAH kok malah pesan makanan rekomendasi" -doimu
                        <br>
                        "Salah ya? Yaudah aku pesan lagi ya yang lain"
                        <br>
                        "Engga gausah"
                        <br>
                        Setelah itu doimu minta pulang dengan kondisi makanan yang tidak habis
                        <br>
                        KAMU GAGAL!
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>      
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> menunggu lampu hijau -> dengan senyuman -> pesan rekomendasi

// mandi -> menunggu lampu hijau -> dengan senyuman -> lah kok gitu
$('.container-game').on('click', '.lha-kok-gitu', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        "APASIH KOK KAMU YANG NYOLOT, PULANG AJA LAH KALAU BEGINI" -doimu
                        <br>
                        "Jangan donk sayang"
                        <br>
                        "UDAH AKU MAU PULANG"
                        <br>
                        KAMU GAGAL!
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>     
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> menunggu lampu hijau -> dengan senyuman -> lah kok gitu

// akhir mandi -> menunggu lampu hijau -> dengan senyuman


// mandi -> menunggu lampu hijau -> maaf ya
$('.container-game').on('click', '.aku-minta-maaf', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                    <p class="card-text">
                        "Iya gapapa, ayok cepat pesan makanannya" -doimu
                        <br>
                        Kamu memesan makanan kesukaanmu
                        <br>
                        "Wahh enak seperti biasa makanan kesukaanmu" -doimu
                        <br>
                        Setelah makan kamu dan doimu pulang dengan bahagia
                        <br>
                        KAMU BERHASIL!
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>      
                </div>
                </div>
            </div>
        </div>
    `);
});
// akhir mandi -> menunggu lampu hijau -> maaf ya




// akhir mandi -> menunggu hijau


// akhir pilihan mandi







// Pilihan tidak mandi
$('.container-game').on('click', '.tidak-mandi', function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        Kamu sedang bersiap-siap mengenakan pakaian lalu mengunakan farfum agar dapat menutupi bahwa kamu tidak mandi.
                        <br>
                        "Sipp sudah lumayan wangi nih"
                        (Pergi ke depan rumah dan menaiki motor).
                        <br>
                        Kamu sedang menuju ke tempat kencan. Beberapa menit kemudian kamu sampai di depan tempat kencan.
                    </p>
                </div>      
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="berlari">~ Lari untuk mencari tempat yang telah ditentukan</p>
                    <p class="jalan-biasa">~ Berjalan biasa saja</p>
                </div>
            </div>
        </div>
    `);
});

// tidak mandi -> berlari
$('.container-game').on('click', '.berlari' ,function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        (Deg deg deg) "huh huh Halo sayang aku sampai nih"
                        <br>
                        "Ihhh kamu kok lari-larian keringetan lagi, kan jadi bau" -kata doimu
                        <br>
                        "Iya maaf sayang aku takut telat"
                    </p>     
                </div>       
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="maaf-ya-pasti-lama">~ "maaf ya kamu pasti sudah lama menunggu"</p>
                    <p class="langsung-pesan-makan">~ "aku langsung pesenin makanannya ya"</p>     
                </div>        
                </div>
            </div>
        </div>
    `);
});

// tidak mandi -> berlari -> maaf ya pasti lama 
$('.container-game').on('click', '.maaf-ya-pasti-lama' ,function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "IYA LAMA BANGET, kalau telat terus ga bau ma aku maaf-in" -doimu
                        <br>
                        "Dahla aku mau pulang aja" -doimu
                        <br>
                        KAMU GAGAL!
                    </p>     
                </div>       
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>     
                </div>        
                </div>
            </div>
        </div>
    `);
});
// akhir tidak mandi -> berlari -> maaf ya pasti lama 

// tidak mandi -> berlari -> langsung pesan
$('.container-game').on('click', '.langsung-pesan-makan' ,function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "UDAH GAUSAH REPOT-REPOT, AKU MAU PULANG AJA"
                        <br>
                        KAMU GAGAL!
                    </p>     
                </div>       
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>     
                </div>        
                </div>
            </div>
        </div>
    `);
});
// akhir tidak mandi -> berlari -> langsung pesan



// akhir tidak mandi -> berlari




// tidak mandi -> jalan biasa
$('.container-game').on('click', '.jalan-biasa' ,function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "Halo sayang, maaf ya aku telat"
                        <br>
                        "Iya gapapa sayang, yuk pesan makanannya" -kata doimu
                        <br>
                        "Iya, kamu mau makan apa?"
                        <br>
                        "Terserah kamu aja" -kata doimu
                    </p>     
                </div>       
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p class="makanan-kesukaanmu">~ Memilih makanan kesukaanmu</p>
                    <p class="makanan-rekomendasi">~ Memilih makanan rekomendasi restorannya</p>      
                </div>              
                </div>
            </div>
        </div>
    `);
});

// tidak mandi -> jalan biasa -> makanan kesukaanmu
$('.container-game').on('click', '.makanan-kesukaanmu' ,function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "Wahh enak, makanan yang kamu suka selalu enak deh" -doimu
                        <br>
                        "Haha iya donk aku gitu lho"
                        <br>
                        Setelah makan, kamu dan doimu pulang dengan bahagia
                        <br>
                        BERHASIL!
                    </p>     
                </div>       
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>
                </div>        
                </div>
            </div>
        </div>
    `);
});
// akhir tidak mandi -> jalan biasa -> makanan kesukaanmu

// tidak mandi -> jalan biasa -> makanan rekomendasi
$('.container-game').on('click', '.makanan-rekomendasi' ,function(){
    $('.container-game').html(`
        <div class="row">
            <div class="col">
                <div class="card satu">
                <div class="card-body">
                    <p class="card-text">
                        "Lhoo kok makanan rekomendasi, kita sudah lama pacaran masa gatau yang aku mau sih!" -doimu
                        <br>
                        (baru makan sedikit)
                        "Dah aku kenyang, aku mau PULANG"
                        <br>
                        KAMU GAGAL!
                    </p>     
                </div>       
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card dua">
                <div class="card-body">
                    <h5 class="pb-3">Silakan Memilih</h5>
                    <p>Reload ya kalau ingin bermain lagi</p>
                    <p>Semangat!</p>    
                </div>        
                </div>
            </div>
        </div>
    `);
});
// akhir tidak mandi -> jalan biasa -> makanan rekomendasi

// akhir tidak mandi -> jalan biasa

// akhir tidak mandi
