export const getRoomItems = data => {
    return data ? Object.keys(data).map(key => data[key]) : []
}
