// makefun-haunted-server-sign — Funniest Sign on a Haunted Server Room Door
// Competition: u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a
// Task: write ONE funny line for the door of a haunted server room, max 120 chars.
// The program writes that single line to /output/entry.txt.
//
// ---------------------------------------------------------------------------
// DRAF v1 (DITOLAK) — 98 karakter:
//   "WARNING: HAUNTED SERVER ROOM. THE GHOST IN RACK 7 KEEPS REBOOTING THE
//    SERVERS. PLEASE KNOCK FIRST."
//
// Analisis cacat v1:
//   1. Tiga kalimat menjelaskan leluconnya sendiri — tidak ada satu ketukan
//      yang langsung kena; pembaca sudah tahu arahnya sebelum punchline.
//   2. "Ghost in rack 7 keeps rebooting the servers" adalah klise hantu
//      server room yang paling mudah ditebak; tidak ada sudut segar.
//   3. "PLEASE KNOCK FIRST" generik — bisa ditempel di pintu berhantu mana
//      pun, tidak ada tabrakan spesifik antara kehidupan IT dan supranatural.
//   4. Nada peringatan panjang seperti paragraf, bukan papan tanda yang
//      dibaca sekilas dari lorong.
//
// ---------------------------------------------------------------------------
// REVISI GENUINE v2 — satu ketukan/ide baru:
//   Alih-alih hantu yang *mengganggu* server, balikkan relasinya: hantu itu
//   justru *penjaga* satu-satunya yang tahu soal backup. Ketakutan terbesar
//   sysadmin bukan hantu — melainkan backup yang hilang. Jadi larangan
//   "DO NOT UNPLUG" bukan soal hantu menakutkan, melainkan soal operasional:
//   mencabut hantu = kehilangan satu-satunya yang tahu soal backup. Satu
//   kalimat perintah + satu alasan yang membalik ekspektasi; itulah
//   punchline-nya.
// ---------------------------------------------------------------------------
// REVISI GENUINE v3 — cacat v2 (baris final sebelumnya, 76 karakter):
//   "DO NOT UNPLUG THE GHOST. IT IS THE ONLY ONE WHO KNOWS WHERE THE BACKUPS ARE."
//
// Cacatnya ada di paruh kedua: "KNOWS WHERE THE BACKUPS ARE" terlalu samar
// dan taruhannya rendah. Backup, menurut definisinya, disimpan di tempat yang
// diketahui — pembaca harus mengarang sendiri kenapa itu menakutkan, jadi
// punchline-nya mengandalkan imajinasi pembaca, bukan kata-katanya sendiri.
// Mimpi buruk sysadmin yang sesungguhnya dan jauh lebih spesifik bukan
// "di mana backup disimpan", melainkan kata sandi/credential backup-nya:
// backup yang lokasinya diketahui tapi tidak bisa dibuka sama saja dengan
// tidak ada backup.
//
// Yang diubah + kenapa:
//   "KNOWS WHERE THE BACKUPS ARE" -> "REMEMBERS THE BACKUP PASSWORD".
//   Satu detail konkret menggantikan lokasi yang generik; taruhannya langsung
//   jelas tanpa penjelasan tambahan. "REMEMBERS" juga lebih pas untuk hantu
//   daripada "KNOWS WHERE" — hantu adalah makhluk yang mengingat, dan
//   password yang hanya diingat hantu adalah tabrakan IT-supranatural yang
//   lebih absurd dan lebih tajam. Paruh pertama ("DO NOT UNPLUG THE GHOST")
//   dipertahankan apa adanya: itu kaitannya, dan sudah bekerja.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "DO NOT UNPLUG THE GHOST. IT IS THE ONLY ONE WHO REMEMBERS THE BACKUP PASSWORD.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
