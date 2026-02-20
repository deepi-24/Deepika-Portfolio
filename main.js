var typed=new Typed(".text",{
    strings:["Software Developer","Data Engineer","Data Analytics"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

(function () {
  emailjs.init("rRZCdmMeMW2NtC9xN"); 
})();

document.getElementById("contactform").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_9ae46vw", "template_ppzygpt", this)
    .then(function () {
      alert("Message Sent ✅");
      document.getElementById("contactform").reset();
    })
    .catch(function (error) {
      alert("Failed ❌ " + JSON.stringify(error));
    });
});
