emailjs.init("d8UknT5Ks-sAYBKOR");

const profileSection = document.querySelector('.profile');
const returnButton = document.querySelector('.return-button');
const navButtons = document.querySelectorAll('.nav-button');

window.onload = function () {
    profileSection.classList.add('fade-in');
    returnButton.classList.add('fade-in');
};

navButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        profileSection.classList.add('fade-out');
        returnButton.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});

const bookingForm = document.querySelector('.booking-process form');

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const rentalPlan = document.getElementById('rental-plan').value;
    const girlfriend = document.getElementById('girlfriend').value;
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const dateTime = document.getElementById('date-time').value;

    if (!rentalPlan || !girlfriend || !phoneNumber || !dateTime) {
        alert("Please fill in all the fields before submitting.");
        return;
    }

    const templateParams = {
        rental_plan: rentalPlan,
        girlfriend: girlfriend,
        phone_number: phoneNumber,
        date_time: dateTime
    };

    emailjs.send("service_tj19ag8", "template_mpn886n", templateParams)
        .then(function (response) {
            console.log("SUCCESS", response);
            alert("Thank you for your booking! You will receive confirmation soon.");
            
            bookingForm.reset();
        }, function (error) {
            console.error("FAILED", error);
            alert("Something went wrong. Please try again later.");
        });
});
