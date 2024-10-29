function getCurrentWeekDates() {
    const today = new Date();
    const currentDay = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - currentDay); 
    const weekDates = [];
    const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i); 
        weekDates.push({
            date: currentDate.getDate(), 
            day: daysOfWeek[i], 
            isSelected:new Date().getDate() === currentDate.getDate() ? true : false 
        });
    }

    return weekDates;
}

export default getCurrentWeekDates