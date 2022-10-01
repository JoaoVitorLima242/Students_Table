export const maxLengthString = (maxLength: number, str: string) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...'
    }

    return str
}