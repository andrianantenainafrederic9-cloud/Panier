import { useCart } from '../context/CartContext'

function Shop() {
  const { addToCart } = useCart()

  const products = [
    { id: 1, name: "Chaussures", price: 50 },
    { id: 2, name: "T-shirt", price: 20 },
    { id: 3, name: "Casquette", price: 15 }
  ]

  return (
    <div>
      <h2>Produits</h2>

      {products.map(p => (
        <div key={p.id}>
          {p.name} - {p.price} €
          <button onClick={() => addToCart(p)}>
            Ajouter
          </button>
        </div>
      ))}
    </div>
  )
}

export default Shop