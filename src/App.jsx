import React, { useState } from "react";

const headerImg = "/img/header.jpeg"; // Aggiorna qui il percorso del tuo header

const prodotti = [
  {
    menu: "🇺🇸-PURPLE X MAC-🇺🇸",
    nome: "PURPLE X MAC 1",
    sottotitolo: "Cali real (no prg/no derivates)\n💲-Single strain-💲",
    prezziDettaglio: [
      { q: "3g", p: "40€" },
      { q: "5g", p: "60€" },
      { q: "10g", p: "110€" },
      { q: "20g", p: "200€" },
      { q: "25g", p: "240€" },
    ],
    prezziIngrosso: [
      { q: "50g", p: "460€" },
      { q: "100g", p: "880€" },
      { q: "200g", p: "1650€" },
      { q: "500g", p: "3550€" },
      { q: "1kg", p: "priv." }
    ],
    video: "/videos/PURPLEXMAC.MP4",
  },
  {
    menu: "😈-TOP DRY “HASH ANGEL”😈",
    nome: "TOP DRY “HASH ANGEL”",
    sottotitolo: "(tutti gli strain)\n⚠️ -formati 100g-⚠️",
    prezziDettaglio: [
      { q: "3g", p: "30€" },
      { q: "5g", p: "40€" },
      { q: "10g", p: "70€" },
      { q: "20g", p: "130€" },
      { q: "25g", p: "160€" },
    ],
    prezziIngrosso: [
      { q: "50g", p: "280€" },
      { q: "100g", p: "530€" },
      { q: "200g", p: "1030€" },
      { q: "500g", p: "2050€" },
      { q: "1kg", p: "3950€" }
    ],
    video: "/videos/HASHANGEL.MP4",
  },
  {
    menu: "🔞-DRY “GRINGO CONNECTION”🔞",
    nome: "DRY “GRINGO CONNECTION”",
    prezziDettaglio: [
      { q: "3g", p: "30€" },
      { q: "5g", p: "40€" },
      { q: "10g", p: "70€" },
      { q: "20g", p: "130€" },
      { q: "25g", p: "160€" },
    ],
    prezziIngrosso: [
      { q: "50g", p: "250€" },
      { q: "100g", p: "460€" },
      { q: "200g", p: "880€" },
      { q: "500g", p: "1900€" }
    ],
    img: "/img/NOTAVAILABLE.jpg",
  },
  {
    menu: "🛍-DRY “BUFALO PLEIN “(LIMITED EDITION) 🛍",
    nome: "DRY “BUFALO PLEIN” (LIMITED EDITION)",
    sottotitolo: "🍒(Strain mon cherry)🍒\nFormati da 25g!",
    prezziDettaglio: [
      { q: "3g", p: "30€" },
      { q: "5g", p: "50€" },
      { q: "10g", p: "80€" },
      { q: "20g", p: "250€" },
    ],
    prezziIngrosso: [
      { q: "50g", p: "280€" },
      { q: "100g", p: "500€" },
      { q: "200g", p: "970€" },
      { q: "500g", p: "2050€" },
      { q: "1kg", p: "priv" }
    ],
    img: "/img/NOTAVAILABLE.jpg",
  },
  {
    menu: "❄️-ICE O LATOR❄️",
    nome: "ICE O LATOR",
    sottotitolo: "Mixed genetics by nature boyz\n(Biscotti x Barbara Bud)",
    prezziDettaglio: [
      { q: "1-4g", p: "22€/g" },
      { q: "5-9g", p: "20€/g" },
      { q: "10-19g", p: "17.5€/g" },
      { q: "20-49g", p: "16€/g" },
      { q: "50g", p: "700€" },
      { q: "1h", p: "1350€" }
    ],
    video: "/videos/ICE O LATOR.mp4",
  },
];

const categorie = ["Tutti i prodotti", ...prodotti.map(p => p.menu)];

export default function App() {
  const [categoria, setCategoria] = useState("Tutti i prodotti");
  const prodottiFiltrati = categoria === "Tutti i prodotti"
    ? prodotti
    : prodotti.filter(p => p.menu === categoria);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#181818",
      color: "#fff",
      fontFamily: "sans-serif",
      paddingBottom: 32
    }}>
      <div style={{maxWidth: 600, margin: "0 auto", padding: 12}}>
        {/* HEADER - aggiungi questa parte sopra la select */}
        <img
          src={headerImg}
          alt="Header"
          style={{
            width: "100%",
            borderRadius: 14,
            marginBottom: 18,
            marginTop: 10,
            objectFit: "cover"
          }}
        />

        {/* Dropdown categorie */}
        <select
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            fontSize: 18,
            borderRadius: 8,
            marginBottom: 20,
            background: "#222",
            color: "#fff",
            border: "2px solid #444"
          }}>
          {categorie.map(c => <option key={c}>{c}</option>)}
        </select>

        {/* Griglia prodotti */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18
        }}>
          {prodottiFiltrati.map((p, i) => (
            <div key={i} style={{
              background: "#232323",
              borderRadius: 12,
              padding: 10,
              marginBottom: 12
            }}>
              {/* Video ha priorità! Solo se manca, mostra img */}
              {p.video ? (
                <video
                  src={p.video}
                  style={{width: "100%", borderRadius: 10, minHeight: 120, objectFit: "cover"}}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : p.img ? (
                <img
                  src={p.img}
                  alt={p.nome}
                  style={{width: "100%", borderRadius: 10, minHeight: 120, objectFit: "cover"}}
                />
              ) : null}

              <div style={{fontWeight: "bold", fontSize: 16, marginTop: 10, whiteSpace: "pre-line"}}>
                {p.nome}
              </div>
              <div style={{fontSize: 13, color: "#ccc", whiteSpace: "pre-line", marginBottom: 8}}>
                {p.sottotitolo}
              </div>
              <div style={{fontWeight: "bold", color: "#ffb300", marginBottom: 4}}>DETTAGLIO:</div>
              <div style={{marginBottom: 8}}>
                {p.prezziDettaglio && p.prezziDettaglio.map((pz, k) => (
                  <span key={k} style={{
                    background: "#333",
                    color: "#eee",
                    borderRadius: 8,
                    padding: "3px 10px",
                    fontSize: 13,
                    marginRight: 5,
                    display: "inline-block",
                    marginBottom: 2
                  }}>{pz.q} - {pz.p}</span>
                ))}
              </div>
              {p.prezziIngrosso && (
                <>
                  <div style={{fontWeight: "bold", color: "#62e9a3", marginBottom: 4}}>INGROSSO:</div>
                  <div style={{marginBottom: 8}}>
                    {p.prezziIngrosso.map((pz, k) => (
                      <span key={k} style={{
                        background: "#244",
                        color: "#bde",
                        borderRadius: 8,
                        padding: "3px 10px",
                        fontSize: 13,
                        marginRight: 5,
                        display: "inline-block",
                        marginBottom: 2
                      }}>{pz.q} - {pz.p}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
