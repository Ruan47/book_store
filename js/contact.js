window.onload =function () {
    document.getElementById("name").focus();
    if (document.getElementById("contact") != null) {
        document.getElementById("contact").onsubmit = function () {
            var sName = document.getElementById("name").value;
            var sDzyj = document.getElementById("dzyj").value;
            var sTelephone = document.getElementById("telephone").value;
            var sCompany = document.getElementById("company").value;
            var oSex = document.getElementsByName("sex");
            for (iCv = 0; iCv < oSex.length; iCv++) {
                if (oSex.item(iCv).checked) {
                    sSex = oSex.item(iCv).value;
                }
            }
            var oAge = document.getElementById("age");
            for (iCv = 0; iCv < oAge.options.length; iCv++) {
                if (oAge.options[iCv].selected) {
                    sAge = oAge.options[iCv].firstChild.nodeValue;
                }
            }
            var sInterest = "";
            var oInterest = document.getElementsByName("interest");
            for (iCv = 0; iCv < oInterest.length; iCv++) {
                if (oInterest.item(iCv).checked) {
                    sInterest += oInterest.item(iCv).value;
                }
            }
            document.getElementById("message").style.visibility = "visibility";
            document.getElementById("submitmessage").innerHTML = "<strong>姓名：" + sName + "<br>性别：" + sSex + "<br>年龄范围："
                + sAge + "<br>爱好：" + sInterest + "<br>电子邮件：" + sDzyj + "<br>固定电话：" + sTelephone + "<br>公司：" + sCompany + "</strong>>";
            return false;
        }
    }
}