import { useCart } from '../context/CartContext'

function Navbar() {
  const { cart } = useCart()

  return (
    <div style={{ background: "#222", color: "#fff", padding: "10px" }}>
      <h1>🛒 Ma Boutique</h1>
      <p>Articles : {cart.length}</p>
    </div>
  )
}

export default Navbar