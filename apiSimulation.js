const generateAvailableTimesByDate = () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const today = new Date();
    const endDate = new Date(today);
    endDate.setFullYear(today.getFullYear() + 3);

    let currentDate = new Date(today);
    const availableTimesByDate = {};

    while (currentDate <= endDate) {
        const formattedDate = currentDate.toISOString().split('T')[0];
        availableTimesByDate[formattedDate] = [...availableTimes];
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return availableTimesByDate;
};

const availableTimesByDate = generateAvailableTimesByDate();

const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate[date]) {
                resolve(availableTimesByDate[date]);
            } else {
                reject(new Error('No available times for the selected date.'));
            }
        }, 1000);
    });
};

const submitAPI = (formData) => {
    if (availableTimesByDate[formData.date]) {
        availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData) {
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Form submission failed.'));
            }
        }, 1000); // Simulate API delay
    });
};

export { fetchAPI, submitAPI };
