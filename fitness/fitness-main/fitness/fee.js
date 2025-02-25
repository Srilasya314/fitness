document.addEventListener("DOMContentLoaded", function () {
    const bookNowBtn = document.getElementById("bookNowBtn");
    const modal = document.getElementById("bookingModal");
    const closeModal = document.querySelector(".close-btn");
    const confirmBooking = document.getElementById("confirmBooking");

    bookNowBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    confirmBooking.addEventListener("click", function () {
        const selectedPlan = document.getElementById("plan").value;
        const selectedTrainer = document.getElementById("trainer").value;

        alert(`Booking Confirmed!\nPlan: ${selectedPlan}\nTrainer: ${selectedTrainer}`);
        modal.style.display = "none";
    });
});