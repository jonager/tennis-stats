export const formatObjectReactSelect = arr => {
    const fortmattedArr = [];
    arr.forEach(item => {
        const fullName = item.last_name + ', ' + item.first_name;
        fortmattedArr.push({ label: fullName, value: item.player_id });
    });

    return fortmattedArr;
};

export const generateId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return (
        '_' +
        Math.random()
            .toString(36)
            .substr(2, 9)
    );
};
