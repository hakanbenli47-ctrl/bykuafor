"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { themes } from "@/theme/themes"
import { siteData } from "@/data/site"
export default function Home() {
const theme = themes.dovmeci

  const [scrolled, setScrolled] = useState(false)
const [showBubble, setShowBubble] = useState(false)

useEffect(() => {
  setTimeout(() => {
    setShowBubble(true)
  }, 3000)
}, [])
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

useEffect(() => {
  setTimeout(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
  }, 100)
}, [])

  return (
<main style={{ background: theme.bg, color: theme.text }} className="overflow-hidden page-fade">

{/* HEADER */}
<header
  className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
   scrolled
  ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
  : "bg-black/30 backdrop-blur-md"
  }`}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <div className="leading-tight">
      <h1 
  className="heading font-bold text-lg tracking-widest"
  style={{ color: themes.saglik.text }}
>
        {siteData.genel.isim}
      </h1>

    <p 
  className="text-xs tracking-[0.25em]"
  style={{ color: themes.saglik.textSoft }}
>
        {siteData.genel.altBaslik}
      </p>
    </div>

    {/* MENU */}
   <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-main">
     {siteData.menu.map((item: any, i: number) => (
        <a
          key={i}
          href={item.link}
          className="hover:opacity-70 transition"
        >
          {item.label}
        </a>
      ))}
    </nav>

    {/* ACTIONS */}
    <div className="flex items-center gap-3">

      {/* WHATSAPP */}
     <a
  href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
  style={{
    background: theme.primary,
    color: "#fff",
    boxShadow: `0 0 20px ${theme.primary}80`
  }}
  className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition"
>
        <FaWhatsapp />
      </a>

      {/* CTA */}
      <a
        href={`tel:${siteData.iletisim.telefon}`}
        style={{
          background: theme.primary,
          color: "#fff"
        }}
     className="btn-primary px-5 py-2 rounded-xl font-semibold tracking-wide shadow-lg hover:scale-105 hover:opacity-90 transition text-sm"
      >
        Randevu Al
      </a>

    </div>

  </div>
</header>

{/* HERO */}
<section className="relative min-h-screen flex items-center px-4 md:px-6 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 z-0">
    <motion.img
      src={siteData.hero.arkaPlan}
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      className="w-full h-full object-cover opacity-80"
    />

    <div
      style={{
        background: `linear-gradient(to bottom, transparent, ${theme.bgSoft})`
      }}
      className="absolute inset-0"
    />
  </div>

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-30 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
  >

    {/* 🔴 SOL TARAF */}
    <div className="relative text-center md:text-left">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          color: theme.text,
          fontFamily: "'Playfair Display', serif"
        }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
      >
        {siteData.hero.baslik}
      </motion.h1>

      {/* GLOW FIX (mobilde küçültüldü ve ortalandı) */}
      <div
        style={{ background: theme.primary + "40" }}
        className="absolute blur-[80px] md:blur-[120px] w-[250px] md:w-[400px] h-[150px] md:h-[200px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 top-10 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{ color: theme.text + "cc" }}
        className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
      >
        {siteData.hero.aciklama}<br />
        <span style={{ color: theme.primary }}>
          {siteData.hero.vurgu}
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
      >

        <a
          href={`tel:${siteData.iletisim.telefon}`}
          style={{ background: theme.primary, color: "#fff" }}
          className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition text-center"
        >
          {siteData.hero.buton1}
        </a>

        <a
         href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
          style={{
            border: `1px solid ${theme.primary}`,
            color: theme.primary
          }}
          className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:scale-105 transition text-center"
        >
          {siteData.hero.buton2}
        </a>

      </motion.div>

    </div>

    {/* 🔵 SAĞ TARAF */}
    <div className="relative hidden md:block">

      <img
        src={siteData.hero.arkaPlan}
        className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
      />

      <div
        style={{ background: theme.glow }}
        className="absolute -bottom-10 -right-10 w-[150px] md:w-[200px] h-[150px] md:h-[200px] blur-[100px] md:blur-[120px] rounded-full"
      />

    </div>

  </motion.div>

  {/* AŞAĞI OK */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.2 }}
    className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30"
  >
    <a href="#hizmetler" className="flex flex-col items-center group">

      <span
        style={{ color: theme.text }}
        className="text-[10px] md:text-xs tracking-widest mb-2 opacity-70"
      >
        Kaydır
      </span>

      <svg
        style={{ color: theme.primary }}
        className="w-6 h-6 md:w-8 md:h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>

    </a>
  </motion.div>

</section>

{/* STATS */}
<section
  className="-mt-24 px-6 relative z-40 reveal"
>
  <div className="max-w-7xl mx-auto">

    <div
      style={{
        background: theme.bg,
        boxShadow: "0 40px 120px rgba(0,0,0,0.1)",
        border: `1px solid ${theme.primary}15`
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl p-6 md:p-10 backdrop-blur-xl"
    >

      {siteData.stats.map((item: any, i: number) => (
        <div
          key={i}
          className="relative p-6 rounded-2xl transition duration-300 hover:scale-105 hover:-translate-y-1 group"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}
        >

          {/* glow hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <h3
            style={{ color: theme.primary }}
            className="text-3xl md:text-4xl font-bold mb-2 relative z-10"
          >
            {item.deger}
          </h3>

          <p
            className="text-sm md:text-base mb-1 relative z-10"
            style={{ color: theme.text }}
          >
            {item.label}
          </p>

          <p
            className="text-xs leading-relaxed relative z-10"
            style={{ color: theme.text + "99" }}
          >
            {item.aciklama}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
{/* SERVICES */}
<section id="hizmetler" className="py-32 px-6 reveal">
  <div className="max-w-7xl mx-auto">

    {/* BAŞLIK */}
    <div className="text-center mb-16">

      <h2
        style={{ color: theme.primary }}
        className="heading text-3xl md:text-5xl font-bold tracking-tight"
      >
        {siteData.hizmetlerMeta.baslik}
      </h2>

      <p
        style={{ color: theme.text + "99" }}
        className="mt-4 max-w-xl mx-auto text-sm md:text-base"
      >
        {siteData.hizmetlerMeta.aciklama}
      </p>

    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {siteData.hizmetler.map((item: any, i: number) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          className="group relative p-8 rounded-3xl transition duration-300"
          style={{
            background: theme.card,
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
          }}
        >

          {/* glow hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <div className="relative z-10">

            <h3
              style={{ color: theme.primary }}
              className="heading text-xl font-semibold mb-3"
            >
              {item.title}
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: theme.text + "cc" }}
            >
              {item.desc}
            </p>

            {/* ALT ÇİZGİ */}
            <div
              className="mt-6 h-[2px] w-10 group-hover:w-20 transition-all duration-300"
              style={{ background: theme.primary }}
            />

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* İŞLETME SAHİBİ */}
    <section
  style={{ background: theme.bgSoft }}
  className="py-32 px-6 reveal"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* GÖRSEL */}
    <div className="relative group">

      <img
        src={siteData.about.gorsel}
        className="rounded-3xl shadow-2xl object-cover w-full h-[500px] transition duration-700 group-hover:scale-105"
      />

      {/* glow */}
      <div
        style={{ background: theme.glow }}
        className="absolute -bottom-10 -left-10 w-[220px] h-[220px] blur-[120px] rounded-full"
      />

      {/* üst parlama */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
        }}
      />

    </div>

    {/* METİN */}
    <div>

      <h2
        style={{ color: theme.primary }}
        className="heading text-3xl md:text-5xl font-bold tracking-tight mb-6"
      >
        {siteData.about.isim}
      </h2>

      <p
        style={{ color: theme.text + "cc" }}
        className="text-base md:text-lg leading-relaxed mb-8"
      >
        {siteData.about.aciklama}
      </p>

      {/* ALT HİGHLIGHT */}
      <div
        style={{ background: theme.primary }}
        className="h-[3px] w-16 rounded-full"
      />

    </div>

  </div>
</section>
{/* HAKKIMIZDA / NEDEN BİZ */}
<section
  style={{ background: theme.bgSoft }}
  className="py-32 px-6 reveal"
>
  <div className="max-w-7xl mx-auto">

    {/* BAŞLIK */}
    <div className="text-center mb-20">
      <h2
        style={{ color: theme.primary }}
        className="heading text-3xl md:text-5xl font-bold tracking-tight"
      >
        {siteData.nedenBiz.baslik}
      </h2>

      <p
        style={{ color: theme.text + "99" }}
        className="max-w-xl mx-auto mt-4 text-sm md:text-base"
      >
        {siteData.nedenBiz.aciklama}
      </p>
    </div>

    {/* KARTLAR */}
    <div className="grid md:grid-cols-3 gap-8">

      {siteData.nedenBiz.maddeler.map((item: any, i: number) => (
        <div
          key={i}
          className="group relative p-8 rounded-3xl transition duration-300 hover:-translate-y-2"
          style={{
            background: theme.card,
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
          }}
        >

          {/* glow hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <div className="relative z-10 text-center">

            {/* SAHTE İKON (circle) */}
            <div
              style={{ background: theme.primary + "20" }}
              className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
            >
              <div
                style={{ background: theme.primary }}
                className="w-6 h-6 rounded-full"
              />
            </div>

            <h3
              style={{ color: theme.primary }}
              className="heading text-xl font-semibold mb-3"
            >
              {item.title}
            </h3>

            <p
              style={{ color: theme.text + "cc" }}
              className="text-sm leading-relaxed"
            >
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
{/* GALERİ */}
<section
  id="galeri"
  style={{ background: theme.bg }}
  className="py-32 px-6 reveal"
>
  <div className="max-w-7xl mx-auto">

    {/* BAŞLIK */}
    <div className="text-center mb-20">
      <h2
        style={{ color: theme.primary }}
        className="heading text-3xl md:text-5xl font-bold tracking-tight"
      >
        {siteData.galeri.baslik}
      </h2>

      <p
        style={{ color: theme.text + "99" }}
        className="max-w-xl mx-auto mt-4 text-sm md:text-base"
      >
        {siteData.galeri.aciklama}
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {siteData.galeri.gorseller.map((src: string, i: number) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl"
        >

          {/* GÖRSEL */}
          <img
            src={src}
            className="w-full h-52 md:h-64 object-cover transition duration-700 group-hover:scale-110"
          />

          {/* KARARTMA */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)"
            }}
          />

          {/* GLOW */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          {/* HOVER ÇERÇEVE */}
          <div
            className="absolute inset-0 border opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"
            style={{ borderColor: theme.primary }}
          />

        </div>
      ))}

    </div>

  </div>
</section>
      {/* YORUMLAR */}
 <section
  id="yorumlar"
  style={{ background: theme.bgSoft }}
  className="py-32 px-6 reveal"
>
  <div className="max-w-7xl mx-auto">

    {/* BAŞLIK */}
    <div className="text-center mb-20">
      <h2
        style={{ color: theme.primary }}
        className="heading text-3xl md:text-5xl font-bold tracking-tight"
      >
        {siteData.yorumlar.baslik}
      </h2>

      <div className="flex justify-center items-center gap-2 text-lg mt-4">
        <span style={{ color: theme.primary }}>★★★★★</span>

        <span
          style={{ color: theme.text }}
          className="text-sm ml-2"
        >
          {siteData.yorumlar.puan}
        </span>
      </div>
    </div>

    {/* YORUMLAR */}
    <div className="grid md:grid-cols-3 gap-8">

      {siteData.yorumlar.liste.map((item: any, i: number) => (
        <div
          key={i}
          className="group relative p-8 rounded-3xl transition duration-300 hover:-translate-y-2"
          style={{
            background: theme.card,
            border: `1px solid ${theme.primary}20`,
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
          }}
        >

          {/* glow hover */}
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              background: `linear-gradient(120deg, transparent, ${theme.glow}, transparent)`
            }}
          />

          <div className="relative z-10">

            {/* ÜST */}
            <div className="flex justify-between items-center mb-4">

              <h4
                style={{ color: theme.text }}
                className="font-semibold"
              >
                {item.name}
              </h4>

              <span style={{ color: theme.primary }}>
                ★★★★★
              </span>

            </div>

            {/* YORUM */}
            <p
              style={{ color: theme.text + "cc" }}
              className="text-sm leading-relaxed"
            >
              {item.yorum}
            </p>

            {/* ALT DETAY */}
            <div
              className="mt-6 h-[2px] w-10 group-hover:w-20 transition-all duration-300"
              style={{ background: theme.primary }}
            />

          </div>

        </div>
      ))}

    </div>

  </div>
</section>
      {/* CTA */}
  <section
  style={{
    background: `linear-gradient(to bottom, ${theme.bg}, ${theme.bgSoft})`
  }}
  className="py-24 text-center reveal flex flex-col items-center gap-8"
>
  <h2
    style={{ color: theme.primary }}
    className="heading text-3xl md:text-4xl font-bold tracking-tight"
  >
    {siteData.cta.baslik}
  </h2>

  <a
    href={`tel:${siteData.iletisim.telefon}`}
    style={{
      background: theme.primary,
      color: "#fff"
    }}
    className="px-10 py-4 rounded-xl font-semibold tracking-wide shadow-lg transition hover:scale-105"
  >
    {siteData.cta.buton}
  </a>
</section>

      {/* FOOTER */}
    <footer
  className="relative py-24 px-6 overflow-hidden"
  style={{
    background: theme.bg,
    borderTop: `1px solid ${theme.primary}20`
  }}
>

  {/* GLOW ARKA PLAN */}
  <div
    style={{ background: theme.glow }}
    className="absolute inset-0 blur-[120px] opacity-30"
  />

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

    {/* LOGO */}
    <div>
      <h3
        style={{ color: theme.primary }}
        className="heading text-xl font-semibold mb-4"
      >
        {siteData.genel.isim}
      </h3>

      <p
        style={{ color: theme.text + "cc" }}
        className="text-sm leading-relaxed"
      >
        {siteData.footer.aciklama}
      </p>
    </div>

    {/* MENU */}
    <div>
      <h4
        style={{ color: theme.primary }}
        className="text-sm mb-4"
      >
        {siteData.footer.menuBaslik}
      </h4>

      <div className="flex flex-col gap-3 text-sm">
        {siteData.menu.map((item: any, i: number) => (
          <a
            key={i}
            href={item.link}
            style={{ color: theme.text }}
            className="hover:translate-x-1 transition duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>

    {/* İLETİŞİM */}
    <div>
      <h4
        style={{ color: theme.primary }}
        className="text-sm mb-4"
      >
        {siteData.footer.iletisimBaslik}
      </h4>

      <div className="flex flex-col gap-3 text-sm">

        <a
          href={`tel:${siteData.iletisim.telefon}`}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          {siteData.iletisim.telefon}
        </a>

        <a
          href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          WhatsApp
        </a>

        <a
          href={siteData.footer.harita}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          Harita
        </a>

        <a
          href={siteData.footer.instagram}
          style={{ color: theme.text }}
          className="hover:opacity-70 transition"
        >
          Instagram
        </a>

      </div>
    </div>

    {/* CTA */}
    <div>
      <h4
        style={{ color: theme.primary }}
        className="text-sm mb-4"
      >
        Randevu
      </h4>

      <a
        href={`tel:${siteData.iletisim.telefon}`}
        style={{
          background: theme.primary,
          color: "#fff",
          boxShadow: `0 10px 30px ${theme.glow}`
        }}
        className="px-8 py-4 rounded-2xl font-semibold tracking-wide inline-block transition hover:scale-105 hover:opacity-90"
      >
        Randevu Al
      </a>
    </div>

  </div>

  {/* ALT */}
  <div
    style={{ color: theme.text + "99" }}
    className="text-center mt-16 text-xs"
  >
    {siteData.footer.copyright}
  </div>

</footer>
{/* FLOATING CTA */}
<div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">

  {/* WHATSAPP */}
  <div className="flex items-center gap-2">

    {showBubble && (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
      >
        Hemen yaz
      </motion.div>
    )}

    <a
       href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
      className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition"
      style={{ background: "#25D366", color: "#fff" }}
    >
      <FaWhatsapp size={22} />
    </a>

  </div>

  {/* ARA */}
  <div className="flex items-center gap-2">

    {showBubble && (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: [0, -6, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
      >
        Hemen ara
      </motion.div>
    )}

    <a
      href={`tel:${siteData.iletisim.telefon}`}
      className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition"
      style={{ background: "#111", color: "#fff" }}
    >
      📞
    </a>

  </div>

</div>
    </main>
  )
}