export function convertEnumToObject(enumData) {
    return Object.entries(enumData).map(obj => {
        return {key: obj[0], value: obj[1]};
    });
}

export function convertEnumToFormlyDropdownObject(enumData) {
    return Object.entries(enumData).map(obj => {
        return {id: obj[0], name: obj[1]};
    });
}
