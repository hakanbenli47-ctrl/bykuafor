"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { themes } from "@/theme/themes"
import { siteData as tr } from "@/data/tr"
import { siteData as en } from "@/data/en"
import { siteData as de } from "@/data/de"
import { siteData as ru } from "@/data/ru"

export default function Home({ params }: { params: { lang: string } }) {

  const theme = themes.dovmeci
const [activeImage, setActiveImage] = useState(0)
const [activeVideo, setActiveVideo] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  
  const lang = typeof window !== "undefined"
  ? window.location.pathname.split("/")[1]
  : "tr"
  

type Lang = "tr" | "en" | "de" | "ru"

const dataMap: Record<Lang, typeof tr> = { tr, en, de, ru }

const currentLang = (["tr","en","de","ru"].includes(lang) ? lang : "tr") as Lang

const siteData = dataMap[currentLang]
  const imageSlides = siteData.hero.slider.filter((item: any) => item.type === "image")
const videoSlides = siteData.hero.slider.filter((item: any) => item.type === "video")


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
  if (!imageSlides.length) return

  const interval = setInterval(() => {
    setActiveImage((prev) =>
      prev === imageSlides.length - 1 ? 0 : prev + 1
    )
  }, 3000)

  return () => clearInterval(interval)
}, [imageSlides])
useEffect(() => {
  if (!videoSlides.length) return

  const interval = setInterval(() => {
    setActiveVideo((prev) =>
      prev === videoSlides.length - 1 ? 0 : prev + 1
    )
  }, 6000)

  return () => clearInterval(interval)
}, [videoSlides])
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
  scrolled ? "backdrop-blur-xl border-b" : ""
}`}
style={{
  background: scrolled ? theme.bg + "cc" : theme.bg + "99"
}}
>
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">

    {/* LOGO */}
    <div className="leading-tight">
      <h1 
  className="heading font-bold text-lg tracking-widest"
style={{ color: theme.text }}
>
        {siteData.genel.isim}
      </h1>

    <p 
  className="text-xs tracking-[0.25em]"
style={{ color: theme.textSoft }}
>
        {siteData.genel.altBaslik}
      </p>
    </div>

    {/* MENU */}
   <nav
  className="hidden md:flex gap-8 text-xs uppercase tracking-widest"
  style={{ color: theme.text }}
>
     {siteData.menu.map((item: any, i: number) => (
       <a
  key={i}
  href={`/${currentLang}${item.link}`}
  style={{ color: theme.text }}
  className="hover:opacity-70 transition"
>
          {item.label}
        </a>
      ))}
    </nav>

    {/* ACTIONS */}
  <div className="flex items-center gap-2 md:gap-3">
<div className="flex gap-1 md:gap-2 text-[10px] md:text-xs">

  <a
    href="/tr"
    style={{ color: currentLang === "tr" ? theme.primary : theme.text }}
    className={`px-2 py-1 rounded-md transition ${
      currentLang === "tr" ? "font-bold" : "opacity-60 hover:opacity-100"
    }`}
  >
    TR
  </a>

  <a
    href="/en"
    style={{ color: currentLang === "en" ? theme.primary : theme.text }}
    className={`px-2 py-1 rounded-md transition ${
      currentLang === "en" ? "font-bold" : "opacity-60 hover:opacity-100"
    }`}
  >
    EN
  </a>

  <a
    href="/de"
    style={{ color: currentLang === "de" ? theme.primary : theme.text }}
    className={`px-2 py-1 rounded-md transition ${
      currentLang === "de" ? "font-bold" : "opacity-60 hover:opacity-100"
    }`}
  >
    DE
  </a>

  <a
    href="/ru"
    style={{ color: currentLang === "ru" ? theme.primary : theme.text }}
    className={`px-2 py-1 rounded-md transition ${
      currentLang === "ru" ? "font-bold" : "opacity-60 hover:opacity-100"
    }`}
  >
    RU
  </a>

</div>
      {/* WHATSAPP */}
     <a
  href={`https://wa.me/${siteData.iletisim.whatsapp}?text=Merhaba%20web%20sitenizden%20ulaşıyorum%20randevu%20almak%20istiyorum`}
  style={{
    background: theme.primary,
    color: "#fff",
    boxShadow: `0 0 20px ${theme.primary}80`
  }}
 className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full"
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
    className="btn-primary px-3 md:px-5 py-2 rounded-xl font-semibold tracking-wide shadow-lg hover:scale-105 transition text-xs md:text-sm"
      >
        Randevu Al
      </a>

    </div>

  </div>
</header>

{/* HERO */}
<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

  <img
    src="/salon1.jpg"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60" />

  <div className="relative z-10 text-center px-4 max-w-xl">

    <h1 className="text-3xl sm:text-4xl font-bold text-white">
      {siteData.hero.slider[0]?.baslik}
    </h1>

    <p className="mt-4 text-sm text-white/80">
      {siteData.hero.slider[0]?.aciklama}
    </p>

    <div className="mt-6 flex flex-col gap-3">

      <a
        href={`tel:${siteData.iletisim.telefon}`}
        className="py-3 rounded-xl text-white font-semibold"
        style={{ background: theme.primary }}
      >
        {siteData.hero.buton1}
      </a>

      <a
        href={`https://wa.me/${siteData.iletisim.whatsapp}`}
        className="py-3 rounded-xl border text-white"
      >
        {siteData.hero.buton2}
      </a>

    </div>

  </div>

</section>
<section className="w-full">

  <div className="grid grid-cols-2 w-full">

```
{/* SOL - GÖRSEL */}
<div className="relative h-[220px] md:h-[450px] overflow-hidden">

  {imageSlides.map((item: any, i: number) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-700 ${
        i === activeImage ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={item.src}
        className="w-full h-full object-cover"
      />
    </div>
  ))}

</div>

{/* SAĞ - VİDEO */}
<div className="relative h-[220px] md:h-[450px] overflow-hidden bg-black">

  {videoSlides.map((item: any, i: number) => (
    <div
      key={i}
      className={`absolute inset-0 transition-opacity duration-700 ${
        i === activeVideo ? "opacity-100" : "opacity-0"
      }`}
    >
      <video
        src={item.src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
    </div>
  ))}

</div>
```

  </div>

</section>



{/* STATS */}
<section
  className="mt-10 px-6 relative z-40 reveal"
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
           href={`/${currentLang}${item.link}`}
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