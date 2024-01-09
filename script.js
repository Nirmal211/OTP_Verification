

function generateOtp() {
    let generateOtp = Math.floor(1000+ Math.random() * 9000);
    window.localStorage.setItem("OTP" , generateOtp);
    alert(generateOtp);
}


function validOtp() {
    let validOtp = document.querySelector("#otpVerification").value;
    // console.log(validOtp);
    let otp = window.localStorage.getItem("OTP");

    if(validOtp == otp) {
        alert("valid otp")
    }else {
        alert("otp is not valid");
    }
}


