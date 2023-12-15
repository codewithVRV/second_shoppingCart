export function getAllCategories () {
    return "products/categories";
}


export function getAllProducts () {
    return "products"
}

export function getAllProductById (category) {
    return `products/category/${category}`
}

export function getSingleProductById(id) {
    return `products/${id}`
}