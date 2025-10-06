# 🎉 HOTOVO – Recenze v PostgreSQL databázi

## ✅ Co jsem udělal:

### 1. **Vytvořil databázové schéma** (`database/schema.sql`)
   - Tabulka `reviews` s id, name, rating, comment, created_at
   - Index pro rychlé řazení
   - 3 testovací recenze (Karel, Petra, Jan)

### 2. **Přepsal API route** (`app/api/reviews/route.ts`)
   - **Před:** Vercel KV (dočasné Redis úložiště)
   - **Teď:** PostgreSQL (trvalá relační databáze)
   - GET `/api/reviews` – načte všechny recenze
   - POST `/api/reviews` – uloží novou recenzi

### 3. **Upravil frontend** (`data/reviews.ts`)
   - Změnil interface: `id: number`, `created_at` místo `date`
   - Kompatibilní s PostgreSQL strukturou

### 4. **Aktualizoval dependencies** (`package.json`)
   - Nahradil `@vercel/kv` → `@vercel/postgres`
   - Balíček už je nainstalovaný ✅

### 5. **Pushnu vše na GitHub**
   - Vercel automaticky nasadí změny
   - Build proběhne za ~2 minuty

---

## 🚀 Co teď musíš udělat (max 3 minuty):

### Otevři soubor: **`INSTRUKCE_NASTAVENI.md`** ← TADY JE NÁVOD KROK ZA KROKEM

**Zkrácená verze:**

1. **Vytvoř databázi ve Vercelu:**
   - https://vercel.com → tvůj projekt → Storage → Create Database → Postgres

2. **Spusť SQL skript:**
   - V databázi jdi do Query záložky
   - Zkopíruj obsah z `database/schema.sql` a spusť

3. **Počkej na deploy:**
   - Vercel automaticky nasadí změny (už běží)
   - Zkontroluj: https://vercel.com/dashboard → Deployments

4. **Otestuj:**
   - Otevři web → sekce "Zkušenosti a hodnocení"
   - Měly by se zobrazit 3 testovací recenze
   - Přidej novou recenzi → zůstane tam navždy! 🎣

---

## 📁 Nové soubory:

- `database/schema.sql` – SQL schéma pro PostgreSQL
- `DATABASE_SETUP.md` – technická dokumentace pro vývojáře
- `INSTRUKCE_NASTAVENI.md` – **⭐ ZAČNI TADY** – jednoduchý návod pro tebe
- `PREHLED.md` – tento soubor (shrnutí)

---

## 🔍 Jak to funguje:

```
Uživatel napíše recenzi v prohlížeči
           ↓
Frontend odešle POST na /api/reviews
           ↓
Next.js API route uloží do PostgreSQL
           ↓
Databáze vrátí uloženou recenzi s ID
           ↓
Frontend ji okamžitě zobrazí
           ↓
Data jsou trvale uložená v databázi ✅
```

---

## ⚡ Rychlé odkazy:

- **Návod:** `INSTRUKCE_NASTAVENI.md` (otevři tento soubor!)
- **SQL skript:** `database/schema.sql`
- **Technická dokumentace:** `DATABASE_SETUP.md`
- **Vercel dashboard:** https://vercel.com/dashboard
- **GitHub repo:** https://github.com/MarabuHraje/volf

---

## 💡 Důležité:

**⚠️ Bez vytvoření databáze ve Vercelu recenze nebudou fungovat!**

Ale neboj, je to **super jednoduché** – otevři `INSTRUKCE_NASTAVENI.md` a následuj kroky.

Zabere to **max 3 minuty**. 🚀

---

Hotovo! Máš otázky? Piš! 🐟
