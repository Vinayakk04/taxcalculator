document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function () {
        const gender = document.getElementById('gender').value;
        const salary = parseFloat(document.getElementById('salary').value);
        const daPercentage = parseFloat(document.getElementById('da').value);
        const hraPercentage = parseFloat(document.getElementById('hra').value);
        const taPercentage = parseFloat(document.getElementById('ta').value);

        if (isNaN(salary) || isNaN(daPercentage) || isNaN(hraPercentage) || isNaN(taPercentage)) {
            alert('Please enter valid numbers.');
            return;
        }

        const da = (daPercentage / 100) * salary;
        const hra = (hraPercentage / 100) * salary;
        const ta = (taPercentage / 100) * salary;
        const totalIncome = salary + da + hra + ta;

        let taxRate = 0;

        if (totalIncome >= 1500000) {
            taxRate = (gender === 'male') ? 0.30 : 0.25;
        } else if (totalIncome >= 1000000) {
            taxRate = (gender === 'male') ? 0.20 : 0.15;
        } else if (totalIncome >= 500000) {
            taxRate = (gender === 'male') ? 0.10 : 0.05;
        } else {
            taxRate = 0;
        }

        const incomeTax = totalIncome * taxRate;
        const afterTaxIncome = totalIncome - incomeTax;

        document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
        document.getElementById('incomeTax').textContent = incomeTax.toFixed(2);
        document.getElementById('aftertaxincome').textContent = afterTaxIncome.toFixed(2);
     
    });
});
