function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message".value)
    };

    const serviceID = "service_g5pasyk";
    const templateID = "template_3xpez59";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("subject").value = '';
        document.getElementById("message").value = '';
        console.log(res);
        alert("Your mesage sent successfully");
    }
       ).catch((err) => console.log(err));

}

