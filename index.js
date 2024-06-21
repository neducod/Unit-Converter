function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromunit = document.getElementById('fromunit').value;
    const tounit = document.getElementById('tounit').value;
    let result;

    // Convert the input value to meters as a common base unit
    let valueInMeters;
    switch (fromunit) {
        case 'meters':
            valueInMeters = value;
            break;
        case 'kilometers':
            valueInMeters = value * 1000;
            break;
        case 'feet':
            valueInMeters = value * 0.3048;
            break;
        case 'miles':
            valueInMeters = value * 1609.34;
            break;
        default:
            valueInMeters = value;
    }

    // Convert from meters to the target unit
    switch (tounit) {
        case 'meters':
            result = valueInMeters;
            break;
        case 'kilometers':
            result = valueInMeters / 1000;
            break;
        case 'feet':
            result = valueInMeters / 0.3048;
            break;
        case 'miles':
            result = valueInMeters / 1609.34;
            break;
        default:
            result = valueInMeters;
    }

    // Display the result
    document.getElementById('result').textContent = result;
}
