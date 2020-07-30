const arkFood = (harga, voucher, jarak, pajak) => {
    if(voucher === 'ARKFOOD5' && harga >= 50000){
        if(harga * 50/100 <= 50000){
            potongan = harga * 50/100;
            cekOngkir(harga, potongan, jarak, pajak);
        }else{
            potongan = 50000;
            cekOngkir(harga, potongan, jarak, pajak);
        }
    }else if(voucher === 'DITRAKTIRDEMY' && harga >= 25000){
        if(harga * 60/100 <= 30000){
            potongan = harga * 60/100;
            cekOngkir(harga, potongan, jarak, pajak);
        }else{
           potongan = 30000;
           cekOngkir(harga, potongan, jarak, pajak);
        }
    }else{
        potongan = 0;
        cekOngkir(harga, potongan, jarak, pajak);
    }
};

const cekOngkir = (harga, potongan, jarak, pajak) => {
    if(jarak.toFixed() <= 2){
        ongkir = 5000;
        cekPajak(harga, potongan, ongkir, pajak);
    }else{
        ongkir = 5000 + ((jarak.toFixed() - 2) * 3000);
        cekPajak(harga, potongan, ongkir, pajak);
    }
};

const cekPajak = (harga, potongan, ongkir, pajak) => {
    if(pajak){
        ppn = harga*5/100;
        subTotal(harga, potongan, ongkir, ppn);
    }else{
        ppn = 0;
        subTotal(harga, potongan, ongkir, ppn);
    }
};

const subTotal = (harga, potongan, ongkir, ppn) => {
    let total = harga - potongan + ongkir + ppn;
    console.log(`Harga          : ${harga}`);
    console.log(`Potongan       : ${potongan}`);
    console.log(`Biaya Antar    : ${ongkir}`);
    console.log(`Pajak          : ${ppn}`);
    console.log(`Subtotal       : ${total}`);
};

arkFood(75000, 'ARKFOOD5', 5, true);