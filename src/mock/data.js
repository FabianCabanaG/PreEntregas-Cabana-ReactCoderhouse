const productList = [
     { id: '01', category:'gibson' ,name: 'Guitarra Original', stock: 10, price: 4500000, description: 'Guitarra Gibson Les Paul', img: 'https://i.postimg.cc/bvFD9MHQ/Gibson-Les-Paul-Classic-Electric-Guitar-7.jpg' }
    ,{ id: '02', category:'gibson' ,name: 'Guitarra Imitación', stock: 7, price: 1500000, description: 'Guitarra copia Gibson les Paul', img: '../img/gibson.jpg' }
    ,{ id: '03', category:'fender' ,name: 'Guitarra Original ', stock: 11, price: 6500000, description: 'Guitarra Fender Stratocaster', img: '../img/Fender.jpg' }
    ,{ id: '04', category:'fender' ,name: 'Guitarra Imitación', stock: 2, price: 1400000, description: 'Guitarra copia Fender Stratocaster', img: '../img/Fender.jpg' }
    ,{ id: '05', category:'bcrich' ,name: 'Guitarra Original', stock: 14, price: 3500000, description: 'Guitarra BCRich virgo', img: '../img/bcrich.jpg' }
    ,{ id: '06', category:'bcrich' ,name: 'Guitarra Imitación', stock: 9, price: 1200000, description: 'Guitarra copia BCRich virgo', img: '../img/bcrich.jpg' }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() => {
            if (error) {
                reject('Error:No hay datos')
            } else {
                resolve(productList)
            }
        }
            , 2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productList.find((item)=>item.id===id))
        },2000)
    })
}