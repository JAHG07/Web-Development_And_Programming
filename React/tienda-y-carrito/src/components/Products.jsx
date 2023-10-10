import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map((product) => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.description} />
                <div className='title'>
                  <strong>{product.title}</strong><span>- ${product.price}</span>
                </div>
                <button>
                  <AddToCartIcon />
                </button>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
