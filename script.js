let totalBudget = 0;
let totalIncome = 0;
let totalExpenses = 0;

document.getElementById('add-transaction').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description && amount && !isNaN(amount)) {
        if (type === 'income') {
            totalIncome += amount;
            totalBudget += amount;
        } else if (type === 'expense') {
            totalExpenses += amount;
            totalBudget -= amount;
        }

        // Update display for balance, income, and expenses
        document.getElementById('total-budget').textContent = totalBudget.toFixed(2);
        document.getElementById('total-income').textContent = totalIncome.toFixed(2);
        document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);

        // Add new transaction to the list with income, expenses, and balance
        const transactionList = document.getElementById('transaction-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="transaction-info">${description}: ₱${amount.toFixed(2)}</span>
            <span class="transaction-info">Total Income: ₱${totalIncome.toFixed(2)}</span>
            <span class="transaction-info">Total Expenses: ₱${totalExpenses.toFixed(2)}</span>
            <span class="transaction-info">Balance: ₱${totalBudget.toFixed(2)}</span>
        `;
        li.classList.add(type); // Add class for income or expense
        transactionList.appendChild(li);

        // Clear inputs
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter a valid description and amount.');
    }
});
