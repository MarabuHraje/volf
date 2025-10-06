# 🐟 Nastavení databáze pro recenze

## Rychlý start (Vercel)

### 1. Vytvoř Vercel Postgres databázi

1. Přihlas se na [vercel.com](https://vercel.com)
2. Otevři svůj projekt **volf-rybarsky-web**
3. Jdi do záložky **Storage** → **Create Database**
4. Vyber **Postgres** → **Continue**
5. Zadej název databáze (např. `volf-reviews-db`)
6. Region: **Washington D.C., USA (iad1)** (nejbližší pro EU)
7. Klikni **Create**

### 2. Spusť databázové schéma

Po vytvoření databáze:

1. V Vercel dashboardu otevři databázi
2. Jdi do záložky **Query** (nebo **Data**)
3. Zkopíruj obsah souboru `database/schema.sql` a spusť ho v query editoru
4. Stiskni **Run Query**

```sql
-- Zkopíruj a spusť tento SQL kód z database/schema.sql
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

### 3. Připoj databázi k projektu

Databáze se automaticky napojí na tvůj Vercel projekt. Environment variables (`POSTGRES_URL`, atd.) se vytvoří samy.

### 4. Deploy

```bash
git add .
git commit -m "feat: migrace recenzí na PostgreSQL"
git push origin main
```

Vercel automaticky nasadí změny. Recenze se teď ukládají do databáze navždy! 🎣

---

## Lokální vývoj

Pro testování na lokálním počítači:

### Varianta A: Použít Vercel Postgres i lokálně

```bash
# Nainstaluj Vercel CLI
npm i -g vercel

# Přihlas se
vercel login

# Stáhni environment variables z Vercelu
vercel env pull .env.local
```

Teď můžeš spustit `npm run dev` a vše poběží proti produkční databázi.

### Varianta B: Lokální PostgreSQL

1. Nainstaluj PostgreSQL lokálně (Postgres.app, Docker, nebo `brew install postgresql`)
2. Vytvoř databázi:
   ```bash
   createdb volf_reviews
   psql volf_reviews < database/schema.sql
   ```
3. Vytvoř `.env.local`:
   ```env
   POSTGRES_URL="postgresql://username:password@localhost:5432/volf_reviews"
   ```

---

## Jak to funguje?

### API Route: `/app/api/reviews/route.ts`

- **GET** `/api/reviews` – Načte všechny recenze z databáze
- **POST** `/api/reviews` – Uloží novou recenzi

### Frontend: `components/ReviewsSection.tsx`

- Při načtení stránky zavolá `/api/reviews`
- Po odeslání formuláře POSTne na `/api/reviews`
- Recenze se okamžitě zobrazí (optimistická aktualizace)

### Databáze

Tabulka `reviews` obsahuje:
- `id` – automatické číslo (PRIMARY KEY)
- `name` – jméno autora
- `rating` – hodnocení 1-5
- `comment` – text recenze
- `created_at` – datum vytvoření (automatické)

---

## Troubleshooting

### Chyba: "Error: Connection to Postgres failed"

1. Zkontroluj, že databáze je vytvořená ve Vercelu
2. Přejdi na Storage → tvoje databáze → Settings → zkontroluj, že je připojená k projektu
3. Restartuj deployment: `vercel --prod`

### Recenze se nezobrazují

1. Otevři Vercel dashboard → tvůj projekt → Deployments
2. Klikni na poslední deployment → Functions → `/api/reviews`
3. Zkontroluj logy – měl by tam být buď úspěšný zápis, nebo chybová zpráva

### Lokálně nefunguje

Ujisti se, že máš `.env.local` soubor s `POSTGRES_URL`. Restart dev serveru: `npm run dev`.

---

## 🎯 Výsledek

✅ Recenze se ukládají trvale do PostgreSQL databáze  
✅ Funguje i na lokálním počítači (s produkční DB nebo lokální)  
✅ Žádný spam – jednoduchý validovaný formulář  
✅ Rychlé zobrazení – cache vypnuto, data vždy čerstvá  

Hotovo! 🐟
