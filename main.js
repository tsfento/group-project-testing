function addEmployee() {
    const container = document.querySelector('.employee-parent');
    const employeeBox = document.querySelector('.employee-box');
    const clone = employeeBox.cloneNode(true);

    container.appendChild(clone);
}