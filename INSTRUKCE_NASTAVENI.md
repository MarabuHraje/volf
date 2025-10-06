# ✅ Hotovo! Co teď?

## 1️⃣ Vytvoř databázi ve Vercelu (2 minuty)

Jdi na: https://vercel.com/dashboard

**Krok po kroku:**

1. Otevři svůj projekt **volf-rybarsky-web**
2. Vlevo v menu klikni na **Storage**
3. Klikni **Create Database**
4. Vyber **Postgres**
5. Název: `volf-reviews` (nebo cokoliv jiného)
6. Region: **Washington D.C. (iad1)** – nejbližší pro Evropu
7. Klikni **Create & Continue**

✅ Databáze se automaticky propojí s projektem!

---

## 2️⃣ Spusť SQL skript (1 minuta)

Po vytvoření databáze:

1. V Storage dashboardu klikni na **tvoji novou databázi**
2. Jdi na záložku **Query** nebo **Data**
3. **Zkopíruj a vlož tento SQL kód:**

```sql
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);

-- Testovací data
INSERT INTO reviews (name, rating, comment, created_at) VALUES
  ('Karel Dvořák', 5, 'Pomohli mi s nastavením chovu kaprů. Odbornost na vysoké úrovni.', '2024-09-01 10:00:00+00'),
  ('Petra Svobodová', 5, 'Rychlý servis navijáku, rozumné ceny. Určitě doporučuji!', '2024-08-20 14:30:00+00'),
  ('Jan Novák', 4, 'Vynikající služby, profesionální přístup a skvělé poradenství při výběru výbavy.', '2024-08-15 09:15:00+00');
```

4. Klikni **Execute** nebo **Run Query**

✅ Měl by ses vidět: `CREATE TABLE`, `CREATE INDEX`, `INSERT 0 3`

---

## 3️⃣ Redeploy projektu (automatické)

Změny jsem právě pushnul na GitHub → Vercel automaticky nasadí novou verzi (cca 2 minuty).

**Zkontroluj:**
- Jdi na https://vercel.com → tvůj projekt → **Deployments**
- Měl bys vidět nový deploy s commit zprávou *"feat: migrace recenzí z Vercel KV na PostgreSQL"*
- Počkej, až se status změní na ✅ **Ready**

---

## 4️⃣ Otestuj

Otevři web: https://volf-rybarsky-web.vercel.app

1. Scrolluj dolů na sekci **"Zkušenosti a hodnocení"**
2. Měly by se zobrazit 3 testovací recenze (Karel, Petra, Jan)
3. Zkus přidat novou recenzi → formulář pod recenzemi
4. Po odeslání **se recenze objeví okamžitě a zůstane tam navždy!** 🎉

---

## 🔍 Jak ověřit, že to funguje?

### Způsob 1: Zkontroluj data v databázi

1. Jdi do Vercelu → Storage → tvoje databáze
2. Záložka **Data** nebo **Browse**
3. Měl bys vidět tabulku `reviews` s daty

### Způsob 2: Zkontroluj API

Otevři v prohlížeči:
```
https://volf-rybarsky-web.vercel.app/api/reviews
```

Měl bys vidět JSON s recenzemi.

---

## 🚨 Pokud něco nefunguje

### Problém: "Error loading reviews"

**Řešení:**
1. Jdi do Vercelu → tvůj projekt → **Deployments** → poslední deploy
2. Klikni na **Functions** → `/api/reviews`
3. Podívej se na **Logs** – uvidíš přesnou chybovou hlášku

**Časté problémy:**
- ❌ Databáze není připojená k projektu
  - Řešení: Storage → databáze → Settings → Connect to Project
- ❌ SQL skript neproběhl
  - Řešení: Spusť SQL v Query záložce znovu

### Problém: Recenze zmizely po reloadu

To by **nemělo** nastat. Pokud ano:
1. Zkontroluj, že deployment skutečně proběhl (zelená fajfka)
2. Hard refresh: `Ctrl+Shift+R` (Windows) nebo `Cmd+Shift+R` (Mac)
3. Zkontroluj API endpoint: `/api/reviews` by měl vrátit data

---

## 📊 Co se změnilo?

### Před (localStorage/Vercel KV):
- ❌ Data se ukládala dočasně
- ❌ Po restartu serveru mohla zmizet
- ❌ Složité škálování

### Teď (PostgreSQL):
- ✅ Data jsou **trvale uložená** v databázi
- ✅ Produkční řešení
- ✅ Automatické zálohy (Vercel Postgres)
- ✅ Rychlé načítání
- ✅ Jednoduchá správa přes Vercel dashboard

---

## 🎯 Hotovo!

Recenze se teď ukládají do PostgreSQL databáze a **zůstanou tam navždy**. 🐟

Máš otázky? Piš! 👋
