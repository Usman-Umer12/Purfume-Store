import React, { useState } from "react";
import { contactPageStyles } from "../assets/dummyStyles";
import {
  AlertCircle,
  Check,
  Clock,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Send,
  ShoppingCart,
  User,
} from "lucide-react";

/* ---------------- INPUT WITH ICON ---------------- */
function InputWithIcon({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
}) {
  return (
    <label className="block">
      <span className={contactPageStyles.inputLabel}>
        {label}{" "}
        {required && <span className={contactPageStyles.requiredStar}>*</span>}
      </span>
      <div className={contactPageStyles.inputContainer}>
        <div className={contactPageStyles.inputIconContainer}>{icon}</div>
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${contactPageStyles.inputBase} ${
            error ? contactPageStyles.inputError : contactPageStyles.inputNormal
          }`}
        />
      </div>
      {error && (
        <p className={contactPageStyles.errorMessage}>
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </label>
  );
}

/* ---------------- SELECT WITH ICON ---------------- */
function SelectWithIcon({
  icon,
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  required,
}) {
  return (
    <label className="block">
      <span className={contactPageStyles.inputLabel}>
        {label}{" "}
        {required && <span className={contactPageStyles.requiredStar}>*</span>}
      </span>
      <div className={contactPageStyles.inputContainer}>
        <div className={contactPageStyles.inputIconContainer}>{icon}</div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${contactPageStyles.inputBase} ${
            error ? contactPageStyles.inputError : contactPageStyles.inputNormal
          }`}
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className={contactPageStyles.errorMessage}>
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </label>
  );
}

/* ---------------- RIGHT SIDE CREATIVE CARD ---------------- */
function CreativeCard({
  title,
  subtitle,
  icon,
  ctaText,
  ctaOnClick,
  accent = "amber",
}) {
  const accentBg =
    accent === "indigo"
      ? contactPageStyles.accentIndigo
      : contactPageStyles.accentAmber;
  const buttonClass =
    accent === "indigo"
      ? contactPageStyles.buttonIndigo
      : contactPageStyles.buttonAmber;

  return (
    <div className={`${contactPageStyles.creativeCardBase} ${accentBg}`}>
      <div className="flex items-start gap-4">
        <div className={contactPageStyles.creativeCardIconContainer}>
          {icon}
        </div>
        <div className="flex-1">
          <div
            className={contactPageStyles.creativeCardTitle}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </div>
          <p className={contactPageStyles.creativeCardSubtitle}>{subtitle}</p>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={ctaOnClick}
          className={`${contactPageStyles.creativeCardButtonBase} ${buttonClass}`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}

/* ---------------- MAIN PAGE ---------------- */
const ContactPage = () => {
  const WHATSAPP_NUMBER = "923014122192";

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    product: "General Inquiry",
    budget: "",
    contactMethod: "WhatsApp",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const products = [
    "General Inquiry",
    "Norqain Independence",
    "Zenith Chronomaster",
    "Jacob & Co. Epic X",
    "Bvlgari Octo",
    "H. Moser Endeavour",
  ];

  const budgets = [
    "PKR 150,000 - 300,000",
    "PKR 300,000 - 700,000",
    "PKR 700,000 - 1,500,000",
    "Above PKR 1,500,000",
  ];

  function showToast(text, kind = "info", duration = 1800) {
    setToast({ text, kind });
    setTimeout(() => setToast(null), duration);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email is invalid";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.product.trim()) e.product = "Select product";
    if (!form.budget.trim()) e.budget = "Budget is required";
    if (!form.contactMethod.trim()) e.contactMethod = "Select contact method";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) {
      showToast("Please fill all required fields", "error");
      return;
    }

    setSending(true);

    const message =
      `Hello! I am *${form.name}*.\n\n` +
      `*Interest:* ${form.product}\n` +
      `*Budget:* ${form.budget}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Preferred Contact:* ${form.contactMethod}\n\n` +
      `*Message:* ${form.message}`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    showToast("Opening WhatsApp...", "success", 900);

    setTimeout(() => {
      window.open(url, "_blank");
      setForm(initialForm);
      setSending(false);
      showToast("Submitted — form cleared", "success");
    }, 700);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  }

  return (
   
   <section className="relative w-full overflow-hidden bg-black text-white">

    {/* 🌑 PREMIUM BACKGROUND */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

    {/* GLOW */}
    <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full" />

    {/* GRID LIGHT */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    <div className="relative mt-15 max-w-7xl mx-auto px-5 md:px-8 py-20">

      {/* HEADER */}
      <div className="text-center mb-20">

        <div className="inline-flex items-center gap-2 px-5 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs tracking-[0.35em] uppercase text-zinc-300">

          <Mail size={14} />
          Contact Luxury

        </div>

        <h1 className="mt-8 text-5xl md:text-7xl font-light tracking-[0.18em] leading-tight">
          Let's Create
          <br />
          <span className="text-zinc-500">
            Something Elegant
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-500 leading-relaxed text-sm md:text-base">
          Connect with our luxury fragrance specialists for premium collections,
          private consultations and exclusive experiences.
        </p>

      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[1.1fr_0.7fr] gap-10">

        {/* LEFT FORM */}
        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden">

          {/* TOP LIGHT */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="p-6 md:p-10">

            {/* FORM HEADER */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-10">

              <div>
                <p className="text-xs tracking-[0.35em] uppercase text-zinc-500">
                  Premium Inquiry
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-[0.1em]">
                  Contact Form
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Send size={22} />
              </div>

            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* ROW */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* NAME */}
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Full Name
                  </label>

                  <div className="mt-3 relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-white/30 transition"
                    />
                  </div>

                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Email Address
                  </label>

                  <div className="mt-3 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-white/30 transition"
                    />
                  </div>

                </div>

              </div>

              {/* ROW */}
              <div className="grid md:grid-cols-2 gap-5">

                {/* PHONE */}
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Phone Number
                  </label>

                  <div className="mt-3 relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />

                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 xxx xxx xxxx"
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-white/30 transition"
                    />
                  </div>

                </div>

                {/* PRODUCT */}
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Product Interest
                  </label>

                  <div className="mt-3 relative">

                    <ShoppingCart className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 z-10" />

                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-white/30 transition appearance-none"
                    >

                      {products.map((p) => (
                        <option
                          key={p}
                          value={p}
                          className="bg-black"
                        >
                          {p}
                        </option>
                      ))}

                    </select>

                  </div>

                </div>

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your luxury fragrance preference..."
                  className="mt-3 w-full rounded-[28px] border border-white/10 bg-white/[0.03] p-5 outline-none focus:border-white/30 transition resize-none"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={sending}
                className="group relative overflow-hidden w-full md:w-auto px-8 h-14 rounded-full bg-white text-black text-xs tracking-[0.35em] uppercase hover:bg-zinc-300 transition-all duration-500"
              >

                <span className="relative z-10 flex items-center justify-center gap-3">

                  {sending ? "Sending..." : "Send via WhatsApp"}

                  <Send
                    size={16}
                    className="transition duration-500 group-hover:translate-x-1"
                  />

                </span>

              </button>

            </form>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* CARD */}
          <div className="relative rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden p-8">

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">

              <MapPin size={26} />

            </div>

            <h3 className="mt-8 text-3xl font-light tracking-[0.08em]">
              Private Showroom
            </h3>

            <p className="mt-5 text-zinc-500 leading-relaxed">
              Experience luxury fragrances in a premium environment crafted for
              elegance and exclusivity.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4 text-zinc-400">

                <Phone size={18} />

                <span>+92 301 4122192</span>

              </div>

              <div className="flex items-center gap-4 text-zinc-400">

                <Mail size={18} />

                <span>luxury@perfume.com</span>

              </div>

              <div className="flex items-center gap-4 text-zinc-400">

                <Clock size={18} />

                <span>Mon - Sat / 10AM - 9PM</span>

              </div>

            </div>

          </div>

          {/* SECOND CARD */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">

            <div className="absolute right-[-80px] top-[-80px] w-[220px] h-[220px] rounded-full bg-white/10 blur-[100px]" />

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Premium Experience
            </p>

            <h3 className="mt-5 text-4xl font-light leading-tight">
              Crafted For
              <br />
              Luxury Lifestyle
            </h3>

            <button
              className="mt-10 w-full h-14 rounded-full border border-white/10 bg-white text-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-300 transition"
            >
              Book Appointment
            </button>

          </div>

        </div>

      </div>

    </div>

    {/* TOAST */}
    {toast && (
      <div
        className={`fixed top-6 right-6 z-50 px-5 py-4 rounded-2xl border backdrop-blur-xl flex items-center gap-3
        ${
          toast.kind === "error"
            ? "bg-red-500/10 border-red-500/20 text-red-300"
            : "bg-green-500/10 border-green-500/20 text-green-300"
        }`}
      >

        {toast.kind === "success" ? (
          <Check size={18} />
        ) : (
          <AlertCircle size={18} />
        )}

        <span className="text-sm tracking-wide">
          {toast.text}
        </span>

      </div>
    )}
  </section>
  );
};

export default ContactPage;
