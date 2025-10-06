# 🐛 Recenze se nezobrazují – Co dělat?

## Krok 1: Zkontroluj deployment

1. Jdi na: https://vercel.com/dashboard
2. Otevři projekt **volf-rybarsky-web**
3. Záložka **Deployments**
4. Měl bys vidět poslední deploy s commit zprávou:
   - `fix: oprava ReviewsSection pro PostgreSQL interface`
   
**Zkontroluj:**
- ✅ Je deployment **Ready** (zelená fajfka)?
- ⚠️ Nebo je **Failed** (červený křížek)?

### Pokud je FAILED:
Klikni na deployment → **View Function Logs** → hledej chybu s `@vercel/postgres`

---

## Krok 2: Zkontroluj databázi

1. V Vercel dashboardu jdi na **Storage**
2. Máš tam vytvořenou **Postgres databázi**?

### ❌ Pokud NEMÁŠ databázi:
**To je problém!** Bez databáze API nefunguje.

**Vytvoř databázi (2 minuty):**
1. Klikni **Create Database**
2. Vyber **Postgres**
3. Název: `volf-reviews`
4. Region: **Washington D.C. (iad1)**
5. Klikni **Create**

### ✅ Pokud MÁŠ databázi:
Pokračuj na Krok 3.

---

## Krok 3: Spusť SQL schéma

**Důležité:** I když máš databázi, musíš v ní vytvořit tabulku!

1. Otevři databázi v Storage
2. Záložka **Query** nebo **Data**
3. **Zkopíruj a vlož tento SQL:**

```sql
-- Nejprve zkontroluj, jestli tabulka existuje
SELECT * FROM reviews LIMIT 1;
```

### Pokud dostaneš chybu "relation reviews does not exist":
✅ To je OK! Tabulka neexistuje. Spusť:

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

### Pokud tabulka existuje:
```sql
-- Zkontroluj, kolik recenzí je v databázi
SELECT COUNT(*) FROM reviews;
```

---

## Krok 4: Zkontroluj propojení databáze s projektem

1. V Storage klikni na tvoji databázi
2. Záložka **Settings**
3. Najdi sekci **Connected Projects**
4. **Měl bys tam vidět**: `volf-rybarsky-web`

### ❌ Pokud tam NENÍ:
1. Klikni **Connect Project**
2. Vyber `volf-rybarsky-web`
3. Klikni **Connect**
4. **Redeploy:** Jdi do Deployments → poslední deploy → tlačítko **⋯** → **Redeploy**

---

## Krok 5: Testuj API endpoint

Otevři v prohlížeči:
```
https://volf-rybarsky-web.vercel.app/api/reviews
```

### ✅ Měl bys vidět:
```json
[
  {
    "id": 1,
    "name": "Karel Dvořák",
    "rating": 5,
    "comment": "Pomohli mi s nastavením...",
    "created_at": "2024-09-01T10:00:00.000Z"
  },
  ...
]
```

### ❌ Pokud vidíš chybu:
- `{"error": "..."}` → Zkopíruj celou chybovou zprávu a piš mi
- `500 Internal Server Error` → Jdi do Vercel → Deployments → Function Logs

---

## Krok 6: Zkontroluj sekci na webu

Otevři: https://volf-rybarsky-web.vercel.app/#hodnoceni

### ✅ Měl bys vidět:
- Průměr: 4.7/5
- Celkem recenzí: 3
- 3 recenze (Karel, Petra, Jan)

### ❌ Pokud vidíš prázdnou sekci:
Otevři konzoli v prohlížeči (F12 → Console)
- Hledej chybovou hlášku červeně

---

## 🔥 Rychlé řešení (když nic nefunguje):

### 1. Ujisti se, že databáze existuje a je připojená
### 2. Spusť SQL skript (viz Krok 3)
### 3. Redeploy:
```
Vercel Dashboard → tvůj projekt → Deployments → poslední deploy → ⋯ → Redeploy
```

---

## 📞 Pomoc

Pokud stále nefunguje, pošli mi:

1. Screenshot z Vercel → Storage (seznam databází)
2. Screenshot z Vercel → Deployments (status posledního deploye)
3. Co vidíš na: https://volf-rybarsky-web.vercel.app/api/reviews
4. Console log (F12 → Console) když otevřeš sekci recenzí

---

**Nejčastější problém:** Databáze není vytvořená nebo SQL skript neproběhl. ☝️
