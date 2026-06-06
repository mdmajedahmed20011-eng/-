import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Check, ShieldCheck, Leaf, Truck, Sprout, Facebook, MessageCircle, Plus, Minus, ArrowRight,
  Star, Flame, Clock, Users, ThumbsUp, Phone, MapPin, Award, Zap, AlertTriangle, BadgeCheck,
  PackageCheck, X,
} from "lucide-react";
import logo from "@/assets/achar-bari-logo.jpg";
import heroBanner from "@/assets/hero-banner.png";
import mangoPickle from "@/assets/mango-pickle.png";
import olivePickle from "@/assets/olive-pickle.png";
import mixedPickle from "@/assets/mixed-pickle.png";
import garlicPickle from "@/assets/garlic-pickle.png";
import tetulPickle from "@/assets/tetul-pickle.png";
import chiliPickle from "@/assets/chili-pickle.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "আচার বাড়ি - Achar Bari | স্বাদে নেই জুড়ি..." },
      { name: "description", content: "We Provide 100% Pure Product & Fresh Home Made Organic Pickle. আমের আচার, जलপাই আচার, মিক্সড আচার, রসুনের আচার, তেঁতুলের আচার, কাঁচা মরিচের আচার সারাদেশে ডেলিভারি।" },
    ],
  }),
});

const products = [
  { id: 1, name: "আমের আচার (Mango Pickle)", weight: "৫০০ গ্রাম", price: 450, oldPrice: 550, img: mangoPickle, badge: "জনপ্রিয়" },
  { id: 2, name: "জলপাই আচার (Olive Pickle)", weight: "৫০০ গ্রাম", price: 390, oldPrice: 490, img: olivePickle, badge: "সেশনাল" },
  { id: 3, name: "মিক্সড আচার (Mixed Pickle)", weight: "৫০০ গ্রাম", price: 420, oldPrice: 520, img: mixedPickle, badge: "বেস্ট সেলার", best: true },
  { id: 4, name: "রসুনের আচার (Garlic Pickle)", weight: "৫০০ গ্রাম", price: 350, oldPrice: 450, img: garlicPickle, badge: "স্বাস্থ্যকর" },
  { id: 5, name: "তেঁতুলের আচার (Tamarind Pickle)", weight: "৫০০ গ্রাম", price: 380, oldPrice: 480, img: tetulPickle, badge: "টক-ঝাল-মিষ্টি" },
  { id: 6, name: "কাঁচা মরিচের আচার (Chili Pickle)", weight: "৫০০ গ্রাম", price: 320, oldPrice: 420, img: chiliPickle, badge: "ঝাল স্পেশাল" },
];

const features = [
  { icon: Sprout, title: "১০০% ঘরে তৈরি ও বিশুদ্ধ", desc: "কোনো ক্ষতিকর কেমিক্যাল বা কৃত্রিম প্রিজারভেটিভ ছাড়া তৈরি।" },
  { icon: Leaf, title: "খাঁটি সরিষার তেল ও মসলা", desc: "ঘানিভাঙা খাঁটি সরিষার তেল ও নিজস্ব তদারকিতে প্রস্তুতকৃত মসলা।" },
  { icon: Award, title: "শতভাগ স্বাস্থ্যসম্মত", desc: "সম্পূর্ণ ঘরোয়া পরিবেশে পরম যত্ন ও পরিচ্ছন্নতার সাথে তৈরি।" },
  { icon: Truck, title: "সারাদেশে ক্যাশ অন ডেলিভারি", desc: "পণ্য হাতে পেয়ে দেখে যাচাই করে মূল্য পরিশোধ করার সুবিধা।" },
];

const reviews = [
  { name: "ইসমত তারা", loc: "ঢাকা, খিলগাঁও", text: "আপনাদের আমের আচারটা অনেক ভালো লেগেছে। আমি প্রথমবার অর্ডার করলাম, বাসার সবাই খুব পছন্দ করেছে। সরিষার তেলের চমৎকার ফ্লেভার!", rating: 5, qty: "আমের আচার" },
  { name: "রুবিনা ইসলাম", loc: "চট্টগ্রাম", text: "মিক্সড আচারের টেস্ট অসাধারণ! টক-ঝাল-মিষ্টির পারফেক্ট কম্বিনেশন। বিশেষ করে ঝালটা বেশ মজার লেগেছে। আবার অর্ডার করব খুব শীঘ্রই।", rating: 5, qty: "মিক্সড আচার" },
  { name: "আহমেদ ফয়সাল", loc: "সিলেট", text: "রসুনের আচারটা ভাতের সাথে তো বটেই, এমনি খেতেও অসাধারণ লাগে। আচারের রসুনগুলো একদম নরম আর পারফেক্টলি সেদ্ধ হয়েছে।", rating: 5, qty: "রসুনের আচার" },
  { name: "নিলুফার ইয়াসমিন", loc: "রাজশাহী", text: "তেঁতুলের আচারটা মুখে দিতেই জিভে জল চলে আসে! ছোটবেলার কথা মনে করিয়ে দেয়। প্যাকেজিংও খুব ভালো ছিল, একটুও তেল পড়েনি।", rating: 5, qty: "তেঁতুলের আচার" },
];

const liveOrders = [
  { name: "সাজ্জাদ হোসেন", loc: "মিরপুর", qty: "২টি আমের আচার", time: "২ মিনিট আগে" },
  { name: "মাহমুদা আক্তার", loc: "উত্তরা", qty: "৩টি জলপাই আচার", time: "৫ মিনিট আগে" },
  { name: "রিফাত আহমেদ", loc: "ধানমন্ডি", qty: "১টি মিক্সড আচার", time: "৮ মিনিট আগে" },
  { name: "সুমাইয়া ইয়াসমিন", loc: "খিলগাঁও", qty: "৪টি রসুনের আচার", time: "১২ মিনিট আগে" },
  { name: "ইমরান খান", loc: "বনানী", qty: "২টি তেঁতুলের আচার", time: "১৫ মিনিট আগে" },
];

const faqs = [
  { q: "ডেলিভারি চার্জ কত এবং কত দিনে পাবো?", a: "সারাদেশে ডেলিভারি চার্জ মাত্র ১১৫ টাকা। সাধারণত ঢাকায় ২৪–৪৮ ঘণ্টা এবং ঢাকার বাইরে ৩–৫ কর্মদিবসে হোম ডেলিভারি দেওয়া হয়।" },
  { q: "আচারগুলো কতদিন পর্যন্ত ভালো থাকবে?", a: "যেহেতু আমরা কোনো কৃত্রিম প্রিজারভেটিভ ব্যবহার করি না, তাই আচার ভালো রাখতে পরিষ্কার ও শুকনো চামচ ব্যবহার করুন এবং মাঝেমধ্যে রোদে দিন। সাধারণ তাপমাত্রায় এটি ৬-১২ মাস ভালো থাকে।" },
  { q: "পেমেন্ট কীভাবে করব?", a: "আমরা ক্যাশ অন ডেলিভারি (Cash on Delivery) দিচ্ছি। পণ্য হাতে পেয়ে দেখে বুঝে নিয়ে মূল্য পরিশোধ করতে পারবেন।" },
  { q: "আচারে তেলের পরিমাণ কেমন থাকে?", a: "আচার দীর্ঘদিন ভালো রাখতে আমরা পর্যাপ্ত পরিমাণে খাঁটি ঘানিভাঙা সরিষার তেল ব্যবহার করি। তেল আচারকে প্রাকৃতিকভাবে প্রিজার্ভ করে।" },
  { q: "নষ্ট বা জারের কোনো ক্ষতি হলে রিপ্লেসমেন্ট আছে?", a: "হ্যাঁ, ১০০% রিপ্লেসমেন্ট গ্যারান্টি! পরিবহনের সময় কোনো জার ভেঙে গেলে বা তেল চুইয়ে পড়লে আমাদের ছবি বা ভিডিও পাঠান, আমরা সম্পূর্ণ ফ্রিতে নতুন জার পাঠিয়ে দেব।" },
];

const compare = [
  { feat: "১০০% প্রিজারভেটিভ মুক্ত", us: true, them: false },
  { feat: "খাঁটি ঘানিভাঙা সরিষার তেল", us: true, them: false },
  { feat: "ক্যাশ অন ডেলিভারি (COD)", us: true, them: true },
  { feat: "হোমমেড ও সম্পূর্ণ হাইজেনিক", us: true, them: false },
  { feat: "ভাঙা/নষ্ট জারের ফ্রি রিপ্লেসমেন্ট", us: true, them: false },
  { feat: "সরাসরি পেজ অ্যাডমিন দ্বারা তদারকি", us: true, them: false },
];

function useCountdown(hours: number) {
  const [time, setTime] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => setTime((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  return { h, m, s };
}

function Index() {
  const [selected, setSelected] = useState(products[2]); // Default selection: Mixed Pickle
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [toastIdx, setToastIdx] = useState(0);
  const [showToast, setShowToast] = useState(true);
  const { h, m, s } = useCountdown(5);

  useEffect(() => {
    const t = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setToastIdx((i) => (i + 1) % liveOrders.length);
        setShowToast(true);
      }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const deliveryFee = 115;
  const subtotal = selected.price * qty;
  const total = subtotal + deliveryFee;
  const saved = (selected.oldPrice - selected.price) * qty;
  const stockLeft = 11;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* URGENCY BAR */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-[oklch(0.25_0.08_24)] via-[oklch(0.35_0.12_25)] to-[oklch(0.25_0.08_24)] text-white">
        <div className="container mx-auto flex flex-nowrap items-center justify-center gap-x-3 gap-y-1 overflow-hidden px-3 py-2 text-[11px] font-semibold sm:text-xs md:text-sm">
          <span className="flex items-center gap-1.5"><Flame className="h-3.5 w-3.5 shrink-0 text-cta" /> <span className="truncate">🥄 জিভে জল আনা ঘরোয়া আচার — সারাদেশে ডেলিভারি</span></span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" />
          <span className="flex items-center gap-1.5 shrink-0">
            <Clock className="h-3.5 w-3.5 text-cta" />
            <span className="inline-flex gap-1 font-mono">
              <span className="rounded bg-black/30 px-1.5 py-0.5">{pad(h)}</span>:
              <span className="rounded bg-black/30 px-1.5 py-0.5">{pad(m)}</span>:
              <span className="rounded bg-black/30 px-1.5 py-0.5">{pad(s)}</span>
            </span>
          </span>
        </div>
      </div>

      {/* TRUST MARQUEE */}
      <div className="border-b border-border bg-cream py-2.5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-sm font-semibold text-primary">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 px-5">
              <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-destructive" /> ৪৭,০০০+ সন্তুষ্ট গ্রাহক</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-cta text-cta" /> ৯২২ রিভিউ ১০০% রেকমেন্ড</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-destructive" /> ৬৪ জেলায় ক্যাশ অন ডেলিভারি</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-destructive" /> ভাঙা বা নষ্ট জারের রিপ্লেসমেন্ট গ্যারান্টি</span>
              <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-destructive" /> ১০০% বিশুদ্ধ ও ঘরোয়া পদ্ধতিতে তৈরি</span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 10, 5, 0.82), rgba(35, 10, 5, 0.85)), url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="animate-fade-up space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-cta/40 bg-cta/15 px-4 py-1.5 text-xs font-semibold text-cta backdrop-blur">
              <Flame className="h-3.5 w-3.5" /> অফার জারের স্টক সীমিত — মাত্র {stockLeft} টি জার বাকি
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              জিভে জল আনা <span className="shimmer-text">ঘরোয়া আচার</span><br />
              স্বাদে নেই জুড়ি...
            </h1>
            <p className="max-w-xl text-base text-white/85 md:text-lg">
              আচার বাড়ি (Achar Bari) দিচ্ছে ১০০% খাঁটি ও ঘরোয়া পদ্ধতিতে তৈরি ফ্রেশ অর্গানিক আচার। ঘানিভাঙা সরিষার তেল ও বাছাইকৃত মসলার পারফেক্ট স্বাদ।
            </p>

            {/* Rating row */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}
              </div>
              <span className="font-semibold">৪.৯/৫</span>
              <span className="text-white/70">(৯২২ রিভিউ - ১০০% রেকমেন্ডেড)</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#order"
                className="group relative inline-flex items-center gap-2 rounded-full bg-cta px-8 py-4 text-base font-bold text-cta-foreground shadow-2xl shadow-black/30 transition hover:scale-105 animate-pulse-ring"
              >
                <Zap className="h-4 w-4" />
                এখনই অর্ডার করুন
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="tel:+8801971208877" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10">
                <Phone className="h-4 w-4" /> কল করুন: ০১৯৭১-২০৮৮৭৭
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { i: ShieldCheck, t: "১০০% হাইজেনিক" },
                { i: Truck, t: "সারাদেশে ডেলিভারি" },
                { i: PackageCheck, t: "ক্যাশ অন ডেলিভারি" },
                { i: ThumbsUp, t: "সহজ রিপ্লেসমেন্ট" },
              ].map(({i: I, t}) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs backdrop-blur">
                  <I className="h-3.5 w-3.5 text-cta" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-float relative mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-full border-8 border-cta/80 shadow-2xl max-w-[320px] mx-auto bg-white">
              <img src={logo} alt="আচার বাড়ি লোগো" className="aspect-square h-full w-full object-cover rounded-full" />
            </div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-primary shadow-xl whitespace-nowrap shrink-0">
              <div className="flex items-center gap-1 justify-center">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-cta text-cta" />)}
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground text-center">৪৭,০০০+ সন্তুষ্ট কাস্টমার</div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-2xl bg-cta px-4 py-2 text-sm font-bold text-cta-foreground shadow-xl whitespace-nowrap">
              🍯 ১০০% ঘরোয়া অর্গানিক
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 gap-2 px-4 py-6 md:grid-cols-4">
          {[
            { n: "৪৭,০০০+", l: "সন্তুষ্ট কাস্টমার" },
            { n: "৬৪", l: "জেলায় ক্যাশ অন ডেলিভারি" },
            { n: "৯২২+", l: "১০০% পজিটিভ রিভিউ" },
            { n: "১০০%", l: "রিপ্লেসমেন্ট গ্যারান্টি" },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <div className="text-2xl font-bold text-cta md:text-3xl">{x.n}</div>
              <div className="text-xs text-primary-foreground/75 md:text-sm">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS GALLERY */}
      <section className="relative bg-cream py-20">
        <div className="absolute right-8 top-12 text-5xl opacity-40">🍋</div>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">আমাদের স্পেশাল মেনু</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary md:text-5xl">
            জিভে জল আনা আমাদের হরেক পদের আচার
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            আপনার পছন্দের আচার বেছে নিন। প্রতিটি আচারের জার পরম যত্ন ও খাঁটি উপকরণ দিয়ে ঘরোয়াভাবে তৈরি।
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.id} className="group relative overflow-hidden rounded-3xl bg-card border border-border/80 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl p-5 flex flex-col justify-between">
                <div className="relative overflow-hidden rounded-2xl bg-cream aspect-square">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <span className="absolute top-3 right-3 rounded-full bg-cta px-3 py-1 text-xs font-bold text-cta-foreground shadow">
                    {p.badge}
                  </span>
                </div>
                <div className="mt-4 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-primary text-lg md:text-xl">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">জার সাইজ: <span className="font-semibold text-primary">{p.weight}</span></p>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">৳{p.price}</span>
                    <span className="text-sm text-muted-foreground line-through">৳{p.oldPrice}</span>
                  </div>
                  <a
                    href="#order"
                    onClick={() => {
                      setSelected(p);
                      setQty(1);
                    }}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02]"
                  >
                    <Zap className="h-4 w-4 text-cta" /> অর্ডার সিলেক্ট করুন
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">কেন আচার বাড়ি?</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold text-primary md:text-5xl">
              বিশ্বাস, খাঁটি স্বাদ আর সুস্বাস্থ্যের নিশ্চয়তা
            </h2>
          </div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img src={heroBanner} alt="বাছাইকৃত আচার" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5 text-destructive" />
                  <span className="text-sm font-bold">১০০% অর্গানিক হোমমেড</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="group rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:bg-accent/30 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">পার্থক্য দেখুন</p>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">
              আচার বাড়ি vs বাজারের সাধারণ আচার
            </h2>
          </div>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border-2 border-primary/20 bg-card shadow-lg">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 font-semibold">ফিচার</div>
              <div className="p-4 text-center font-bold text-cta">আচার বাড়ি</div>
              <div className="p-4 text-center text-primary-foreground/70">অন্যরা</div>
            </div>
            {compare.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-border ${i % 2 ? "bg-muted/30" : ""}`}>
                <div className="p-4 text-sm font-medium text-foreground">{row.feat}</div>
                <div className="flex items-center justify-center p-4">
                  {row.us ? <Check className="h-5 w-5 text-destructive font-bold" strokeWidth={3} /> : <X className="h-5 w-5 text-destructive" />}
                </div>
                <div className="flex items-center justify-center p-4">
                  {row.them ? <Check className="h-5 w-5 text-muted-foreground" /> : <X className="h-5 w-5 text-destructive/70" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">গ্রাহক মন্তব্য</p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">আচার প্রেমীদের রিভিউ</h2>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2">
              <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}</div>
              <span className="text-sm font-semibold text-primary">৪.৯/৫ রেটিং (৯২২ রিভিউ)</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex">{[1,2,3,4,5].slice(0, r.rating).map(j => <Star key={j} className="h-4 w-4 fill-cta text-cta" />)}</div>
                <p className="mt-3 text-sm text-foreground">"{r.text}"</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                  <div>
                    <p className="text-sm font-bold text-primary">{r.name}</p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {r.loc}</p>
                  </div>
                  <span className="rounded-full bg-accent/40 px-2.5 py-1 text-[10px] font-semibold text-primary">{r.qty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="relative bg-gradient-to-b from-cream to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold text-destructive">
              <AlertTriangle className="h-3.5 w-3.5" /> মাত্র {stockLeft} টি স্পেশাল জার অফারে বাকি — দ্রুত অর্ডার করুন
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-5xl">সহজ ফর্মে অর্ডার করুন</h2>
            <p className="mt-2 text-muted-foreground">ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে চেক করে টাকা পরিশোধ করুন</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product picker */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">১. আপনার আচার পছন্দ করুন</h3>
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {products.map((p) => {
                  const isSelected = selected.id === p.id;
                  const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
                  return (
                    <button
                      key={p.id}
                      onClick={() => { setSelected(p); setQty(1); }}
                      className={`relative flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition ${
                        isSelected ? "border-primary bg-accent/40 shadow-md" : "border-border bg-card hover:border-primary/40"
                      } ${p.best ? "ring-2 ring-cta/40" : ""}`}
                    >
                      <img src={p.img} alt={p.name} width={80} height={80} loading="lazy" className="h-20 w-20 rounded-xl object-cover" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-bold text-primary text-sm sm:text-base">{p.name}</p>
                          <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-bold text-destructive">-{discount}%</span>
                        </div>
                        <div className="mt-1 flex items-baseline gap-2">
                          <p className="text-lg font-bold text-foreground">৳{p.price}</p>
                          <p className="text-sm text-muted-foreground line-through">৳{p.oldPrice}</p>
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">জার সাইজ: {p.weight}</p>
                      </div>
                      {isSelected && (
                        <div className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1">
                          <button onClick={(e) => { e.stopPropagation(); setQty(Math.max(1, qty - 1)); }} className="rounded-full p-1 hover:bg-muted"><Minus className="h-3 w-3" /></button>
                          <span className="min-w-[20px] text-center text-sm font-bold">{qty}</span>
                          <button onClick={(e) => { e.stopPropagation(); setQty(qty + 1); }} className="rounded-full p-1 hover:bg-muted"><Plus className="h-3 w-3" /></button>
                        </div>
                      )}
                      <span className="absolute -top-2.5 right-3 rounded-full bg-cta px-2.5 py-0.5 text-[10px] font-bold text-cta-foreground shadow">
                        {p.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Order summary */}
              <div className="rounded-2xl border-2 border-primary/20 bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <img src={selected.img} alt={selected.name} width={48} height={48} className="h-12 w-12 rounded-lg object-cover" />
                  <div className="flex-1 text-sm">
                    <p className="font-semibold text-primary">{selected.name} – {selected.weight}</p>
                    <p className="text-xs text-muted-foreground">x{qty} জার</p>
                  </div>
                  <p className="font-bold">৳{subtotal}</p>
                </div>
                <div className="mt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">আচারের দাম</span><span>৳{subtotal}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">ডেলিভারি চার্জ</span><span>৳{deliveryFee}</span></div>
                  <div className="flex justify-between text-destructive"><span>আপনি সেভ করছেন</span><span className="font-semibold">৳{saved}</span></div>
                  <div className="mt-2 flex justify-between border-t border-border pt-2 text-base font-bold text-primary">
                    <span>সর্বমোট</span><span>৳{total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border-2 border-primary/20 bg-card p-6 shadow-xl md:p-8">
              <h3 className="text-xl font-bold text-primary">২. ডেলিভারি ও কন্টাক্ট তথ্য দিন</h3>
              <p className="mt-1 text-xs text-muted-foreground">১০০% ক্যাশ অন ডেলিভারি (কোনো অগ্রিম পেমেন্ট লাগবে না)</p>

              <div className="mt-5 space-y-4">
                {[
                  { label: "নাম *", key: "name", ph: "আপনার পূর্ণ নাম লিখুন" },
                  { label: "মোবাইল নাম্বার *", key: "phone", ph: "১১ ডিজিটের সচল মোবাইল নাম্বার দিন" },
                  { label: "পূর্ণ ঠিকানা *", key: "address", ph: "বাসা নং, রোড, থানা, জেলা উল্লেখ করুন", textarea: true },
                  { label: "বিশেষ অনুরোধ (নোট)", key: "note", ph: "কোনো বিশেষ অনুরোধ থাকলে লিখুন (অপশনাল)" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block text-sm font-semibold text-primary">{f.label}</label>
                    {f.textarea ? (
                      <textarea
                        rows={2}
                        value={(form as any)[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.ph}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    ) : (
                      <input
                        value={(form as any)[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        placeholder={f.ph}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    )}
                  </div>
                ))}

                <div className="rounded-xl border border-cta/30 bg-cta/10 p-3 text-xs">
                  <p className="flex items-center gap-2 font-semibold text-primary">
                    <Clock className="h-4 w-4 text-destructive shrink-0" /> অফার শেষ হতে আর মাত্র: <span className="font-mono text-destructive">{pad(h)}:{pad(m)}:{pad(s)}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
                      alert("দয়া করে নাম, মোবাইল নাম্বার ও ঠিকানা পূরণ করুন।");
                      return;
                    }
                    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
                      alert("সঠিক ১১ ডিজিটের মোবাইল নাম্বার দিন।");
                      return;
                    }
                    const msg =
                      `আসসালামু আলাইকুম, আমি অর্ডার করতে চাই:\n\n` +
                      `আচার: ${selected.name}\n` +
                      `পরিমাণ: ${qty} জার (${selected.weight})\n` +
                      `আচারের দাম: ৳${subtotal}\n` +
                      `ডেলিভারি চার্জ: ৳${deliveryFee}\n` +
                      `সর্বমোট: ৳${total}\n\n` +
                      `নাম: ${form.name}\n` +
                      `মোবাইল: ${form.phone}\n` +
                      `ঠিকানা: ${form.address}\n` +
                      (form.note ? `নোট: ${form.note}\n` : "");
                    window.open(
                      `https://wa.me/8801971208877?text=${encodeURIComponent(msg)}`,
                      "_blank",
                    );
                  }}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cta to-[oklch(0.72_0.2_60)] py-4 text-base font-bold text-cta-foreground shadow-lg transition hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="h-5 w-5 text-destructive animate-bounce" />
                    অর্ডার কনফার্ম করুন (সর্বমোট: ৳{total})
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-destructive" /> ১০০% সুরক্ষিত</span>
                  <span className="flex items-center gap-1"><PackageCheck className="h-3.5 w-3.5 text-destructive" /> পণ্য দেখে পেমেন্ট</span>
                  <span className="flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5 text-destructive" /> সহজ রিটার্ন</span>
                </div>
                <p className="text-center text-[10px] text-muted-foreground">আমাদের প্রতিনিধি ২৪ ঘণ্টার মধ্যে কল করে অর্ডারটি কনফার্ম করবেন</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">সাধারণ জিজ্ঞাসা</p>
            <h2 className="text-3xl font-bold text-primary md:text-5xl">
              অর্ডারের আগে কিছু প্রয়োজনীয় তথ্য
            </h2>
            <p className="mt-4 text-muted-foreground">
              কোনো কিছু জানার থাকলে সরাসরি পেজে মেসেজ করুন অথবা আমাদের নাম্বারে কল করুন।
            </p>
            <a href="https://wa.me/8801971208877" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[oklch(0.5_0.15_140)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp এ মেসেজ করুন
            </a>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full rounded-xl border border-border bg-card p-5 text-left transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-4 font-semibold text-primary text-sm sm:text-base">
                  <span>{f.q}</span>
                  {openFaq === i ? <Minus className="h-4 w-4 shrink-0 text-destructive" /> : <Plus className="h-4 w-4 shrink-0 text-destructive" />}
                </div>
                {openFaq === i && (
                  <p className="mt-3 animate-fade-up text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-16 text-primary-foreground border-t border-primary/20">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="আচার বাড়ি" className="h-12 w-12 rounded-full border border-cta" />
              <span className="text-xl font-bold text-cta">আচার বাড়ি - Achar Bari</span>
            </div>
            <p className="text-sm text-primary-foreground/75 leading-relaxed">
              We Provide 100% Pure Product & Fresh Home Made Organic Pickle. স্বাদে নেই জুড়ি, ঘরের তৈরি আচারের নিশ্চয়তা।
            </p>
            <p className="text-xs text-primary-foreground/50">© 2026 Achar Bari. All rights reserved.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cta border-b border-white/10 pb-2">কন্টাক্ট ইনফো</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-cta shrink-0" /> ০১৯৭১-২০৮৮৭৭</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cta shrink-0" /> East Savar, Khilgaon, Dhaka, Bangladesh, 1219</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-cta shrink-0" /> acharbari21@gmail.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cta border-b border-white/10 pb-2">আমাদের সোশ্যাল মিডিয়া</h4>
            <p className="text-sm text-primary-foreground/85">আমাদের সম্পর্কে আরও জানতে বা নতুন আপডেট পেতে যুক্ত থাকুন:</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="https://www.facebook.com/acharbari21/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20">
                <Facebook className="h-4 w-4 text-cta" /> Facebook Page
              </a>
              <a href="https://wa.me/8801971208877" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-2 text-sm transition hover:bg-primary-foreground/20">
                <MessageCircle className="h-4 w-4 text-cta" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* LIVE ORDER TOAST */}
      {showToast && (
        <div className="fixed bottom-24 left-4 z-50 hidden max-w-xs animate-slide-in-left rounded-2xl border border-border bg-card p-3 shadow-2xl md:flex md:items-center md:gap-3 border-l-4 border-l-destructive">
          <div className="rounded-full bg-destructive/10 p-2 text-destructive">
            <Users className="h-4 w-4" />
          </div>
          <div className="text-xs">
            <p className="font-semibold text-primary">{liveOrders[toastIdx].name} ({liveOrders[toastIdx].loc})</p>
            <p className="text-muted-foreground">অর্ডার করেছেন {liveOrders[toastIdx].qty} • {liveOrders[toastIdx].time}</p>
          </div>
        </div>
      )}

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a href="#order" className="flex items-center justify-center gap-2 rounded-xl bg-cta py-3 font-bold text-cta-foreground text-sm shadow-lg">
          <Zap className="h-4 w-4 text-destructive animate-pulse" /> এখনই পছন্দমত অর্ডার করুন
        </a>
      </div>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8801971208877" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-24 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.5_0.15_140)] text-white shadow-2xl transition hover:scale-110 md:bottom-6 md:right-6 md:h-14 md:w-14">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
