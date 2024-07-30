const pointsTableData = {
    2014: [
        { position: 1, team: "Kings XI Punjab", matches: 14, wins: 11, losses: 3, points: 22 },
        { position: 2, team: "Kolkata Knight Riders", matches: 14, wins: 9, losses: 5, points: 18 },
        // Add more teams as necessary
    ],
    2015: [
        { position: 1, team: "Chennai Super Kings", matches: 14, wins: 9, losses: 5, points: 18 },
        { position: 2, team: "Mumbai Indians", matches: 14, wins: 8, losses: 6, points: 16 },
        // Add more teams as necessary
    ],
    // Add data for other years up to 2024
};

function fetchPointsTable() {
    const year = document.getElementById('year-select').value;
    const tableBody = document.getElementById('points-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    if (pointsTableData[year]) {
        pointsTableData[year].forEach(team => {
            const row = document.createElement('tr');
            Object.values(team).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 6;
        cell.textContent = 'No data available for this year.';
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
}

// Initialize the table with the first year's data
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year-select').value = '2014';
    fetchPointsTable();
});
