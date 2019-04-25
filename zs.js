function zspd() {
    var x = document.forms["zs"]["zssr"].value;
    flag = true
    if (x < 2){
        alert("数据不合法!");
        return false;
    }

    if (x < 4){
        alert(num + "是一个质数!");
        return true
    }
    for (var a = 2;a <= x / 2;a++){
        if (x % a === 0){
            alert(x + "是一个合数!" + "\n" + "它的因数除了1和它本身还有" + a + "!");
            flag = false;
            return true;
        }
    }
    if (flag === true)
    {
        alert(num + "是一个质数!")
        return true
    }
}