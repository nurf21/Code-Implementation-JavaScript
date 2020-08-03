const arkFood = (harga, voucher, jarak, pajak) => {
    let potongan = cekPromo(harga, voucher);
    let ongkir = cekOngkir(jarak);
    let biayaPajak = cekPajak(harga, pajak);
    let subTotal = harga - potongan + ongkir + biayaPajak;
    console.log(`Harga          : ${harga}`);
    console.log(`Potongan       : ${potongan}`);
    console.log(`Biaya Antar    : ${ongkir}`);
    console.log(`Pajak          : ${biayaPajak}`);
    console.log(`Subtotal       : ${subTotal}`);
};

const cekPromo = (harga, voucher) => {
    if(voucher === 'ARKFOOD5' && harga >= 50000){
        if(harga * 50/100 <= 50000){
            potongan = harga * 50/100;
        }else{
            potongan = 50000;
        }
    }else if(voucher === 'DITRAKTIRDEMY' && harga >= 25000){
        if(harga * 60/100 <= 30000){
            potongan = harga * 60/100;
        }else{
           potongan = 30000;
        }
    }else{
        potongan = 0;
    }
    return potongan;
};

const cekOngkir = (jarak) => {
    if(jarak.toFixed() <= 2){
        ongkir = 5000;
    }else{
        ongkir = 5000 + ((jarak.toFixed() - 2) * 3000);
    }
    return ongkir;
};

const cekPajak = (harga, pajak) => {
    if(pajak){
        biayaPajak = harga*5/100;
    }else{
        biayaPajak = 0;
    }
    return biayaPajak;
};

arkFood(75000, 'ARKFOOD5', 5, true);