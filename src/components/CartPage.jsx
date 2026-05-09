import React, { useState } from "react";
import { useCart } from "../../CartContext";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ShieldCheck,
  Truck,
  CreditCard,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const {
    cart,
    increment,
    decrement,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleMobileChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(digitsOnly);
  };

  const isFormValid = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !address.trim() ||
      !mobile.trim() ||
      !paymentMethod.trim()
    ) {
      return false;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const phoneOk = /^[0-9]{10}$/.test(mobile);

    return emailOk && phoneOk;
  };

  const processPayment = (method) => {
    if (method === "Cash on Delivery") return true;
    if (method === "Online") return Math.random() < 0.75;
    return false;
  };


   const handleSubmit = (e) => {
  e.preventDefault();

  if (!isFormValid()) {
    toast.error("Please fill all required fields correctly.", {
      position: "top-right",
    });
    return;
  }

  if (!cart.length) {
    toast.error("Your cart is empty.", {
      position: "top-right",
    });
    return;
  }

  // 🟢 PRODUCTS MESSAGE
  const orderItems = cart
    .map(
      (item, index) =>
        `🛍 Product ${index + 1}
━━━━━━━━━━━━━━
📦 Name: ${item.name}
💰 Price: ${item.price}
🔢 Qty: ${item.qty}
`
    )
    .join("\n");

  const total = (totalPrice * 1.08).toFixed(2);

  const message = `
✨ NEW ORDER RECEIVED ✨

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
📍 Address: ${address}

💳 Payment: ${paymentMethod}

🛒 ORDER DETAILS:
${orderItems}

💵 Total Bill: ₹${total}

📝 Note:
${note || "No note provided"}

`;

  // ✅ WHATSAPP NUMBER
  const phoneNumber = "923014122192";

  // 🔥 OPEN WHATSAPP
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  // PAYMENT
  const paymentOk = processPayment(paymentMethod);

  if (paymentOk) {
    clearCart();

    setName("");
    setEmail("");
    setAddress("");
    setMobile("");
    setNote("");
    setPaymentMethod("");

    toast.success("Order placed successfully.", {
      position: "top-right",
    });
  } else {
    toast.error("Payment failed. Please try again.", {
      position: "top-right",
    });
  }
};
  

  /* EMPTY CART */
  if (!cart.length) {
    return (
      <>
        <ToastContainer />

        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full" />

          <div className="relative z-10 w-full max-w-xl rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 text-center">

            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
              <ShoppingBag size={40} />
            </div>

            <h2 className="mt-8 text-4xl font-light tracking-[0.15em]">
              Your Cart is Empty
            </h2>

            <p className="mt-4 text-zinc-500 leading-relaxed">
              Explore our premium luxury collection and discover timeless
              fragrances crafted with elegance.
            </p>

            <Link
              to="/watches"
              className="mt-10 inline-flex items-center justify-center px-8 h-14 rounded-full bg-white text-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-300 transition-all duration-500 hover:scale-105"
            >
              Browse Collection
            </Link>

          </div>

        </section>
      </>
    );
  }

  return (
    <>
      <ToastContainer />

      <section className="relative min-h-screen overflow-hidden bg-black text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-16">

            <div>

              <Link
                to="/watches"
                className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition mb-6"
              >
                <ArrowLeft size={18} />
                Continue Shopping
              </Link>

              <h1 className="text-4xl md:text-6xl font-light tracking-[0.15em]">
                Shopping <span className="text-zinc-500">Cart</span>
              </h1>

              <p className="mt-4 text-zinc-500 max-w-xl">
                Review your luxury collection and complete your order securely.
              </p>

            </div>

            <button
              onClick={clearCart}
              className="flex items-center gap-3 px-6 h-12 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-500"
            >
              <Trash2 size={16} />
              Clear Cart
            </button>

          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-10">

            {/* LEFT */}
            <div>

              {/* FORM */}
              <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10">

                <div className="flex items-center gap-3 mb-8">
                  <Sparkles size={18} />
                  <h2 className="text-2xl tracking-[0.15em] font-light">
                    Checkout Details
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="grid md:grid-cols-2 gap-5">

                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-white/30 transition"
                    />

                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-white/30 transition"
                    />

                  </div>

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={handleMobileChange}
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-white/30 transition"
                  />

                  <textarea
                    rows={4}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-white/30 transition resize-none"
                  />

                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-white/30 transition"
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Online">Online Payment</option>
                    <option value="Cash on Delivery">
                      Cash on Delivery
                    </option>
                  </select>

                  <textarea
                    rows={3}
                    placeholder="Delivery Notes"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 outline-none focus:border-white/30 transition resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full h-14 rounded-2xl bg-white text-black text-xs tracking-[0.35em] uppercase hover:bg-zinc-300 transition-all duration-500 hover:scale-[1.02]"
                  >
                    Place Order
                  </button>

                </form>

              </div>

              {/* CART ITEMS */}
              <div className="mt-10 space-y-6">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 overflow-hidden"
                  >

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                    <div className="relative flex flex-col md:flex-row gap-6">

                      {/* IMAGE */}
                      <div className="w-full md:w-[180px] h-[180px] rounded-[26px] bg-gradient-to-b from-white/10 to-black/30 flex items-center justify-center overflow-hidden">

                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-[75%] object-contain transition duration-700 group-hover:scale-110"
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 flex flex-col justify-between">

                        <div>

                          <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                            Luxury Collection
                          </p>

                          <h3 className="mt-3 text-2xl font-light">
                            {item.name}
                          </h3>

                          <p className="mt-3 text-zinc-400">
                            {item.price}
                          </p>

                        </div>

                        {/* CONTROLS */}
                        <div className="mt-6 flex items-center justify-between flex-wrap gap-5">

                          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-3">

                            <button
                              onClick={() => decrement(item.id)}
                              className="hover:text-zinc-300 transition"
                            >
                              <Minus size={16} />
                            </button>

                            <span>{item.qty}</span>

                            <button
                              onClick={() => increment(item.id)}
                              className="hover:text-zinc-300 transition"
                            >
                              <Plus size={16} />
                            </button>

                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
                          >
                            <Trash2 size={16} />
                            Remove
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="lg:sticky lg:top-10 h-fit">

              <div className="rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

                <h2 className="text-2xl font-light tracking-[0.15em]">
                  Order Summary
                </h2>

                {/* SUMMARY */}
                <div className="mt-10 space-y-5">

                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-400">
                    <span>Tax (8%)</span>
                    <span>₹{(totalPrice * 0.08).toFixed(2)}</span>
                  </div>

                </div>

                {/* TOTAL */}
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">

                  <span className="text-lg tracking-[0.15em] uppercase">
                    Total
                  </span>

                  <span className="text-3xl font-light">
                    ₹{(totalPrice * 1.08).toFixed(2)}
                  </span>

                </div>

                {/* FEATURES */}
                <div className="mt-10 space-y-5">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Truck size={18} />
                    </div>

                    <div>
                      <h4 className="text-sm tracking-[0.2em] uppercase">
                        Free Shipping
                      </h4>

                      <p className="text-zinc-500 text-sm">
                        Fast premium delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <ShieldCheck size={18} />
                    </div>

                    <div>
                      <h4 className="text-sm tracking-[0.2em] uppercase">
                        Secure Checkout
                      </h4>

                      <p className="text-zinc-500 text-sm">
                        Protected payment process
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <CreditCard size={18} />
                    </div>

                    <div>
                      <h4 className="text-sm tracking-[0.2em] uppercase">
                        Flexible Payment
                      </h4>

                      <p className="text-zinc-500 text-sm">
                        Online & COD available
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default CartPage;