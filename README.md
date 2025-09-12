# 1. Moderní přehledný i pro starší lidi
2. ⁠info o nás- pár z českých Budějovic s láskou ke zvířatům a rybářskému sportu.galerii určitě. Náhled krámku a obecný přehled zboží
3. ⁠pracujeme s bílou zelenou a hnědou barvou. Takže něco v tomto stylu.
4. ⁠elektronické logo jsem schopny poskytnout.
5. ⁠Suchomelská 2251 České Budějovice 37004,702100963,davidvolfrp@seznam.cz,https://www.instagram.com/potreby.volf?igsh=MTI4bmQ5dDgyeDdjNg%3D%3D&utm_source=qr
6. ⁠byli by jsme rádi kdyby zde lidi mohli zanechat zkušenost s námi a hodnoceni.
7. ⁠líbili se mi stránky které jste nám zasílali a wapp.

## Trvalé recenze (Vercel KV)

Aby recenze přežily redeploye v produkci, API `/api/reviews` používá Vercel KV. V lokálním vývoji se dál používá soubor `data/reviews.json` (případně `/tmp`).

Postup na Vercelu:

1) Přidej Vercel KV add-on (Storage → KV → Create).
2) V projektu na Vercelu se automaticky doplní proměnné prostředí `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_URL`.
3) Proveď re-deploy.

Není-li KV nakonfigurováno (chybí proměnné), API spadne do bezpečného souborového fallbacku (dočasné a netrvalé v produkci).