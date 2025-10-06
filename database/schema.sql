-- Vercel Postgres schema pro recenze
-- Spusť tento skript v Vercel Postgres dashboardu

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index pro rychlejší načítání (seřazeno od nejnovějších)
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);

-- Příklad testovacích dat (volitelné)
INSERT INTO reviews (name, rating, comment, created_at) VALUES
  ('Karel Dvořák', 5, 'Pomohli mi s nastavením chovu kaprů. Odbornost na vysoké úrovni.', '2024-09-01 10:00:00+00'),
  ('Petra Svobodová', 5, 'Rychlý servis navijáku, rozumné ceny. Určitě doporučuji!', '2024-08-20 14:30:00+00'),
  ('Jan Novák', 4, 'Vynikající služby, profesionální přístup a skvělé poradenství při výběru výbavy.', '2024-08-15 09:15:00+00');
