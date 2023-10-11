import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.description} />
                <div className='title'>
                  <strong>{product.title}</strong><span>- ${product.price}</span>
                </div>
                <button style={{ backgroundColor: isProductInCart ? 'red' : 'blue' }}
                onClick={() => isProductInCart
                  ? removeFromCart(product)
                  : addToCart(product) }>
                {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
                </button>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
