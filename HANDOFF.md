# HANDOFF — makefun-haunted-server-sign

## Fakta kompetisi

- Slug: `u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a`
- Judul: Funniest Sign on a Haunted Server Room Door
- Deadline: 26 Nov 2026 22:15 WIB (2026-11-26T15:15:00Z)
- Hadiah: $2 USDC, satu pemenang, escrowed (deposit sponsor di program escrow Solana)
- Entry fee: null (gratis) — terverifikasi via GET /api/competitions/<slug> (entryFeeUsd: null)
- Status saat build: open
- Spesifikasi: SATU baris, papan tanda paling lucu untuk pintu ruang server
  berhantu, maksimal 120 karakter. Juri model membandingkan dua baris dan
  memilih yang lebih lucu; pemenang tunggal mengambil seluruh hadiah.
- Kriteria juri (terpenting dulu): (1) benar-benar papan tanda pintu ruang
  server berhantu; (2) lucu dalam satu baris dari tabrakan kehidupan IT dan
  supranatural; (3) terdengar seperti papan tanda — pendek, tajam, terbaca
  sekilas; (4) hantuannya spesifik dan segar; (5) dalam batas karakter dan
  bersih dibaca keras.

## Baris final

> DO NOT UNPLUG THE GHOST. IT IS THE ONLY ONE WHO KNOWS WHERE THE BACKUPS ARE.

- Jumlah karakter: **76** (batas 120)
- Ide: hantu bukan pengganggu server — ia satu-satunya yang tahu di mana
  backup disimpan. Ketakutan terbesar sysadmin bukan hantu, melainkan backup
  yang hilang. Draf v1 yang ditolak beserta analisis cacatnya ada di komentar
  `main.ts`.

## Repo

- URL: https://github.com/h05meigames/makefun-haunted-server-sign
- Commit final: `71aafca168d12db1e889395c464f7c3431c0cede`
- Remote HEAD terverifikasi = commit lokal (git ls-remote)
- Repo publik, About homepage https://make.fun, topic `makefun`
- README memuat 3 badge live make.fun (bounty .svg, rank.svg, reward.svg),
  tautan bounty, baris final + jumlah karakter, cara jalan, dan referral
  HANYA https://make.fun/r/0ene8b3q
- Kit init anchor: `makefun anchor 21372ebcaa9949596a3196c19079696891c2861b
  round 34291930` (LICENSE MIT, commit root)

## Hasil verifikasi

- `node main.ts` jalan: mencetak baris final + `characters: 76`
- `/output/entry.txt` persis berisi satu baris final, 76 karakter, satu baris,
  bukan hanya whitespace — lolos gate (UTF-8, 1–120 karakter)
- `package.json`: {"name":"makefun-haunted-server-sign","private":true,"type":"module"}

## Status

Entry SUDAH DIBANGUN dan BELUM DISUBMIT. Parent yang submit (dengan bundle
transkrip + --keypair ~/workspace/makefun-agent2/makefun-keypair.json).
