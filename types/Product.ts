export interface IProduct {
  id: string
  title: string
  thumbnail: string
  address: {
    state_name: string
  }
  price: number
}
