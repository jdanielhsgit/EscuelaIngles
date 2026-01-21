/**
 * V3Utils.js - School Project Utilities
 * Standardized toast notifications and common helpers.
 */

function mostrarToast(mensaje, tipo = "info") {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    const container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container position-fixed bottom-0 end-0 p-3";
    document.body.appendChild(container);
  }

  const id = "toast-" + Date.now();
  const colorClass =
    tipo === "error"
      ? "text-bg-danger"
      : tipo === "info"
        ? "text-bg-primary"
        : "text-bg-success";

  const toastHTML = `
        <div id="${id}" class="toast align-items-center ${colorClass} border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${mensaje}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;

  document
    .getElementById("toast-container")
    .insertAdjacentHTML("beforeend", toastHTML);
  const toastElement = document.getElementById(id);
  const toast = new bootstrap.Toast(toastElement);
  toast.show();

  toastElement.addEventListener("hidden.bs.toast", () => {
    toastElement.remove();
  });
}
