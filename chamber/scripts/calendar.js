// Sample event data
const events = [
    { date: '2024-06-15', title: 'Graduation Ceremony' },
    { date: '2024-06-20', title: 'Golf Tournament' },
    { date: '2024-06-30', title: 'Business Networking Event' }
];

function generateCalendar(year, month) {
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = '';

    const currentDate = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = currentDate.getDay();

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const tr = document.createElement('tr');
    weekdays.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    // Create table body
    let date = 1;
    for (let i = 0; i < 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const td = document.createElement('td');
            if (i === 0 && j < firstDay) {
                // Blank cells for days before the first of the month
                td.textContent = '';
            } else if (date > daysInMonth) {
                // Blank cells for days after the last of the month
                td.textContent = '';
            } else {
                // Populate the calendar with dates
                td.textContent = date;

                // Check for events on this date
                const eventElements = events.filter(event => event.date === `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`).map(event => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('event');
                    eventElement.textContent = event.title;
                    return eventElement;
                });
                if (eventElements.length > 0) {
                    eventElements.forEach(event => td.appendChild(event));
                }
                date++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    calendarContainer.appendChild(table);
}

// Generate the calendar for the current month
const currentDate = new Date();
generateCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1);