    let YY = 2018;
    let MM = 11;
    let DD = 10;
    let HH = 19;
    let MI = 30;
    let SS = 00;

    function updateCounter() {
        let hoje = new Date();
        let futuro = new Date(YY, MM - 1, DD, HH, MI, SS);
        let ss = parseInt((futuro - hoje) / 1000);
        let mm = parseInt(ss / 60);
        let hh = parseInt(mm / 60);
        let dd = parseInt(hh / 24);
        ss = ss - (mm * 60);
        mm = mm - (hh * 60);
        hh = hh - (dd * 24);
        let faltam = '';
        faltam += (dd && dd > 1) ? dd + ' dias, ' : (dd == 1 ? '1 dia, ' : '');
        faltam += (toString(hh).length) ? hh + ' h, ' : '';
        faltam += (toString(mm).length) ? mm + ' min e ' : '';
        faltam += ss + ' seg';

        if (dd + hh + mm + ss > 0) {
            document.getElementById('counter').innerHTML = faltam;
            setTimeout(updateCounter, 1000);
        }
        else {
            document.getElementById('counter').innerHTML = 'VOCÊ JÁ ESTÁ ATRASADO, SE APRESSE!!!';
            setTimeout(updateCounter, 1000);
        }
    }
