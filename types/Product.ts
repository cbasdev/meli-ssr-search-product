export interface IProduct {
  id: string
  title: string
  thumbnail: string
  address: {
    state_name: string
  }
  price: number
  condition: string
  sold_quantity: number
}

export interface IProductDetails extends IProduct {
  plain_text: string
}
