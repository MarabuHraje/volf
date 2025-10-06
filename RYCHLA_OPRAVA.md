# ⚡ RYCHLÁ OPRAVA – Recenze se TEĎ zobrazí!

## ✅ Co jsem udělal:

Přidal jsem **fallback data** do API, takže:

- ✅ Sekce "Zkušenosti a hodnocení" **se ZOBRAZÍ i bez databáze**
- ✅ Uvidíš 3 testovací recenze (Karel, Petra, Jan)
- ✅ Průměr 4.7/5, Celkem recenzí: 3

## 🚀 Za 2 minuty bude na webu!

Vercel právě builduje novou verzi. Zkontroluj za ~2 minuty:

https://volf-rybarsky-web.vercel.app/#hodnoceni

---

## ⚠️ Důležité:

**Toto je DOČASNÉ řešení!**

- ✅ Recenze se **zobrazí** i bez databáze
- ❌ Ale **neuloží se** do databáze (zmizí po reloadu)
- ⚠️ Nové recenze vrátí chybu: *"Databáze není připojená..."*

---

## 🔧 Trvalé řešení (3 minuty):

Aby se recenze **ukládaly natrvalo**, musíš:

### 1. Vytvoř PostgreSQL databázi

1. Jdi na: https://vercel.com/dashboard
2. Otevři projekt **volf-rybarsky-web**
3. Klikni **Storage** (v levém menu)
4. Klikni **Create Database**
5. Vyber **Postgres**
6. Název: `volf-reviews`
7. Region: **Washington D.C. (iad1)**
8. Klikni **Create**

### 2. Spusť SQL skript

Po vytvoření databáze:

1. Otevři databázi
2. Záložka **Query**
3. Zkopíruj tento SQL kód:

```sql
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);

-- Testovací data (volitelné)
INSERT INTO reviews (name, rating, comment, created_at) VALUES
  ('Karel Dvořák', 5, 'Pomohli mi s nastavením chovu kaprů. Odbornost na vysoké úrovni.', '2024-09-01 10:00:00+00'),
  ('Petra Svobodová', 5, 'Rychlý servis navijáku, rozumné ceny. Určitě doporučuji!', '2024-08-20 14:30:00+00'),
  ('Jan Novák', 4, 'Vynikající služby, profesionální přístup a skvělé poradenství při výběru výbavy.', '2024-08-15 09:15:00+00');
```

4. Klikni **Execute**

### 3. Redeploy (automatické)

Databáze se automaticky připojí k projektu. Nic dalšího nedělej!

---

## 🎯 Výsledek:

### TEĎ (dočasné):
- ✅ Sekce recenzí se **zobrazí**
- ⚠️ Nové recenze se **neuloží**

### PO VYTVOŘENÍ DATABÁZE (trvalé):
- ✅ Sekce recenzí se zobrazí
- ✅ Nové recenze se **trvale uloží** do databáze
- ✅ Data **nikdy nezmizí**

---

## 📊 Jak to ověřit?

### 1. Zkontroluj web (za 2 min):
https://volf-rybarsky-web.vercel.app/#hodnoceni

Měl bys vidět sekci "Zkušenosti a hodnocení" s 3 recenzemi.

### 2. Zkontroluj API:
https://volf-rybarsky-web.vercel.app/api/reviews

Měl bys vidět JSON s recenzemi.

### 3. Po vytvoření databáze:
Zkus přidat novou recenzi → měla by se uložit a zůstat tam i po reloadu.

---

## ❓ Stále nefunguje?

Otevři soubor: **`DEBUG_RECENZE.md`** – kompletní troubleshooting guide.

---

**Shrnutí:** Sekce se TEĎ zobrazí, ale pro trvalé ukládání **vytvoř databázi** (3 minuty). 🚀
