const addToLoxalStorage = (id) => {
    let clubForTime = {}
    const storageData = localStorage.getItem('clubForTime')
    if (storageData) {
        clubForTime =JSON.parse(storageData)
    }
    const quantity = clubForTime[id]
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1
        clubForTime[id]=newQuantity
        // localStorage.setItem(id, newQuantity)
    }
    else {
        // localStorage.setItem(id ,1)
        clubForTime[id]=1
    }
    localStorage.setItem('clubForTime' , JSON.stringify(clubForTime))
}
const getStoragebd = () => {
    let clubForTime = {}
    const storageData = localStorage.getItem('clubForTime')
    if (storageData) {
        clubForTime =JSON.parse(storageData)
    }
    return clubForTime
}
export {addToLoxalStorage , getStoragebd}