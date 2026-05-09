import React, { useMemo, useState } from "react";
import { WATCHES, FILTERS as RAW_FILTERS } from "../assets/dummywdata";
import { useCart } from "../../CartContext";
import { Grid, User, Users, Minus, Plus, ShoppingCart } from "lucide-react";

const ICON_MAP = { Grid, User, Users };

const FILTERS = RAW_FILTERS?.length
  ? RAW_FILTERS.map((f) => ({ ...f, icon: ICON_MAP[f.iconName] ?? Grid }))
  : [
      { key: "all", label: "All", icon: Grid },
      { key: "men", label: "Men", icon: User },
      { key: "women", label: "Women", icon: Users },
    ];

const WatchPage = () => {
  const [filter, setFilter] = useState("all");
  const { cart, addItem, increment, decrement, removeItem } = useCart();

  const filtered = useMemo(
    () => WATCHES.filter((w) => (filter === "all" ? true : w.gender === filter)),
    [filter]
  );

  const getQty = (id) => {
    const it = cart.find((c) => String(c.id) === String(id));
    return it ? it.qty : 0;
  };

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden">

      {/* BACKGROUND (EDITORIAL DARK LUXURY) */}
      <div className="absolute  inset-0 bg-gradient-to-br from-black via-zinc-950 to-zinc-900" />

      {/* SOFT LIGHT FOCUS */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mt-20 mx-auto px-6 py-24">

        {/* HEADER (EDITORIAL STYLE) */}
        <div className="text-center mb-20">

          <p className="text-xs tracking-[0.5em] uppercase text-zinc-500">
            Luxury Watch Collection
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-light tracking-[0.2em]">
            Timepieces <span className="text-zinc-400">Curated</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm text-zinc-500 leading-relaxed">
            A curated selection of handcrafted watches where precision meets design.
            Built for identity, not just time.
          </p>

        </div>

        {/* FILTER BAR (MINIMAL EDITORIAL PILLS) */}
        <div className="flex justify-center mb-20">

          <div className="flex gap-2 bg-white/5 border border-white/10 backdrop-blur-xl p-2 rounded-full">

            {FILTERS.map((f) => {
              const Icon = f.icon;
              const active = filter === f.key;

              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`flex items-center gap-2 px-6 h-10 rounded-full text-xs tracking-[0.3em] uppercase transition
                    ${
                      active
                        ? "bg-white text-black"
                        : "text-zinc-400 hover:text-white"
                    }`}
                >
                  <Icon size={14} />
                  {f.label}
                </button>
              );
            })}

          </div>

        </div>

        {/* PRODUCTS (EDITORIAL SHOWCASE LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

          {filtered.map((w, i) => {
            const sid = String(w.id);
            const qty = getQty(sid);

            return (
              <div
                key={sid}
                className="group relative"

              >

                {/* CARD */}
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 group-hover:-translate-y-2">

                  {/* IMAGE ZONE */}
                  <div className="h-[380px] flex items-center justify-center relative">

                    <img
                      src={w.img}
                      alt={w.name}
                      className="w-[70%] object-contain transition duration-700 group-hover:scale-110"
                    />

                    {/* LIGHT SWEEP EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />

                  </div>

                  {/* INFO */}
                  <div className="p-6">

                    <h3 className="text-lg tracking-wide font-medium">
                      {w.name}
                    </h3>

                    <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                      {w.desc}
                    </p>

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-white text-sm tracking-wider">
                        ${w.price}
                      </span>

                      {/* CART */}
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-black/50 border border-white/10 px-3 py-2 rounded-full backdrop-blur-xl">

                          <button onClick={() => qty > 1 ? decrement(sid) : removeItem(sid)}>
                            <Minus size={14} />
                          </button>

                          <span className="text-sm">{qty}</span>

                          <button onClick={() => increment(sid)}>
                            <Plus size={14} />
                          </button>

                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            addItem({
                              id: sid,
                              name: w.name,
                              price: w.price,
                              img: w.img,
                            })
                          }
                          className="flex items-center gap-2 px-5 h-10 rounded-full bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-zinc-300 transition"
                        >
                          <ShoppingCart size={14} />
                          Add
                        </button>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WatchPage;