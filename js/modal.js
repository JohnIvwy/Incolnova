document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("miModal");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const cancelBtn = document.querySelector(".cancel-btn");

    openBtn.addEventListener("click", () => {
        modal.showModal();
    });

    // Cerrar con botón X
    closeBtn.addEventListener("click", () => modal.close());

    // Cerrar con botón Cancel
    cancelBtn.addEventListener("click", () => modal.close());

    // Cerrar haciendo click fuera del modal
    modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

        if (!isInDialog) {
            modal.close();
        }
    });
});