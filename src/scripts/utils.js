export function formatDate(value) {
    value = value || new Date()
    const date = new Date(value)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const time = `${year}-${month}-${day}`
    return time
}

function ascOrder(start, end) {
    return start - end
}

export default function compare(property) {
    return (object1, object2) => ascOrder(object1[property], object2[property])
}
