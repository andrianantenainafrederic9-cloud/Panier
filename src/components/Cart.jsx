import { useCart } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart, total } = useCart()

  return (
    <div>
      <h2>Panier</h2>

      {cart.length === 0 && <p>Panier vide</p>}

      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.qty} = {item.price * item.qty} €
          <button onClick={() => removeFromCart(item.id)}>
            Supprimer
          </button>
        </div>
      ))}

      <h3>Total : {total} €</h3>
    </div>
  )
}

export default Cart