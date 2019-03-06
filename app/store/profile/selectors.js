export const getProfileItems = data => {
    return data ? Object.keys(data).map(key => data[key]) : []
}
