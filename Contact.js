emailjs.init("d8UknT5Ks-sAYBKOR"); 

function validateForm(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!fname || !lname || !email || !phone || !message) {
        alert("Please fill in all the fields before submitting.");
        return; 
    }
 
    const templateParams = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        message: message
    };
 
    emailjs.send("service_tj19ag8", "template_mpn886n", templateParams)
        .then(function(response) {
            console.log("SUCCESS",response); 
            alert("Thank you for your message! We will get back to you shortly.");
        
            document.getElementById('contact-form').reset(); 
        }, function(error) {
            console.error("FAILED", error); 
            alert("Something went wrong. Please try again later.");
        });
}
