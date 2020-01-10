var zssr = document.getElementById("zssr");
var zsjg = document.getElementById("zsjg");

zssr.addEventListener("input", zspd);

function zspd()
{
    var zs = parseInt(zssr.value);
    if (isNaN(zs)){
        zsjg.innerHTML = "";
        return false;
    }
    if (zs < 2){
        zsjg.innerHTML = "结果:" + zs + "不是一个有效数字!(请输入大于1的整数)";
        return false;
    }

    if (zs < 4){
        zsjg.innerHTML = "结果:" + zs + "是一个质数!";
        return true;
    }
    for (var a = 2;a <= zs / 2;a++)
    {
        if (zs % a === 0)
        {
            zsjg.innerHTML = "结果:" + zs + "是一个合数!" + "\n" + "它的因数除了1和它本身还有" + a + "!";
            return true;
        }
    }

    zsjg.innerHTML = "结果:" + zs + "是一个质数!";
    return true;
}

var qrtext = document.getElementById("qrtext");
var qrsubmit = document.getElementById("qrsubmit");
var qrwindow = document.getElementById("qrwindow");

qrsubmit.addEventListener("click", function () {
    qrwindow["src"] = "https://cli.im/api/qrcode/code?text=" + qrtext.value;
});