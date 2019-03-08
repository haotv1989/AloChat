
export const getChatItems = data => {
    console.log(data)
    return data ? Object.keys(data).map(key => data[key]) : []
}
