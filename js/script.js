function hitungbmi(){
    let tinggi = document.getElementById('tinggi').value
    let berat = document.getElementById('berat').value
    let usia = document.getElementById('usia').value
    var data = document.getElementsByName("radio")
    var i

    //batasan
    if(tinggi != '' && berat != '' && usia != ''){
        tinggi = tinggi/100
        let bmi =(berat / (tinggi*tinggi))

        document.getElementById('heading').innerHTML = bmi.toFixed(2)
        document.getElementById('usia-anda').innerHTML = 'Usia kamu : ' + usia
        
        //kriteria BMI
        if(bmi < 18.5){
            document.getElementById('pesan').innerHTML = 'Kekurangan berat badan'
        }else if(bmi >= 18.5 && bmi < 25){
            document.getElementById('pesan').innerHTML = 'Berat badan sudah ideal'
        }else if(bmi >= 25 && bmi < 30){
            document.getElementById('pesan').innerHTML = 'Berat badan termasuk dalam berat badan yang kelebihan berat badan'
        }else{
            document.getElementById('pesan').innerHTML = 'Berat badan termasuk dalam berat badan yang kegemukan (Obesitas)'
        }
        for(i=0; i<=data.length; i++){
            if(data[i].checked){
                document.getElementById('jen-kel').innerHTML = 'Jenis Kelamin: ' + data[i].value
                a=1
            }
        }

    }else{
        alert('Masukkan data yang lengkap');
    }
    
}
//clear atau reset input
function reload(){
    window.location.reload()
}