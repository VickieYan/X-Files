export function formatDate(value) {
    value = value || new Date()
    const date = new Date(value)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const time = `${year}-${month}-${day}`
    return time
}
