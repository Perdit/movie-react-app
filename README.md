- A tesztfeladatban filmekkel fogsz dolgozni. A feladatleírás mellé csatoltunk egy "movies.json" nevű fájlt, amelyben megtalálhatók a feladathoz szükséges adatok.
- Teljesen rád van bízva, hogy milyen technológiák segítségével oldod meg a feladatot, de pozitívum, ha az általunk is használt eszközöket választod (react, typescript, html, css, scss).
- Third-party library-k szabadon használhatók.
- A feladatok egyre nehezednek. A cél, hogy minél többet megoldj belőlük!
- A legfontosabb szempont, hogy az elkészült funkciók megfelelően működjenek, de törekedj a külalakra is, próbálj meg minél átláthatóbb/tetszetősebb felületet létrehozni!

01. Készíts egy táblázatot, amelynek a következő oszlopai vannak:
	- Cím
	- Hossz
	- Megjelenés dátuma
	- Értékelés

02. A táblázatot töltsd fel a mellékelt "movies.json" fájlból kinyert adatokkal:
	- Cím: "Title"
	- Hossz: "Running_Time_min"
	- Megjelenés dátuma: "Release_Date"
	- Értékelés: "IMDB_Rating"
	
03. A táblázat páros sorai legyenek kiemelve eltérő háttérszínnel.

04. Legyen kiemelve eltérő háttérszínnel az a sor, amely fölé az egeret mozgatjuk.

05. Amennyiben egy filmnek nincs elérhető "Értékelése", a cellában jeleníts meg egy "—" karaktert.

06. Az "Értékelés" legyen színezve az értéke szerint:
	- 1-4: piros
	- 4-7: fekete
	- 7-10: zöld

07. Egy sorra kattintva jelenítsd meg megformázva az adott film további tulajdonságait a táblázat fölött:
	- Rendező: "Director"
	- Forgalmazó: "Distributor"
	- Költségvetés: "Production_Budget"
	- Összbevétel: "Worldwide_Gross"
	
08. A kiválasztott film sora legyen kiemelve eltérő háttérszínnel.
Másik sorra kattintva frissítsük a részletezőt az újonnan kiválasztott film adataival.
Amennyiben a már kiválasztott sorra kattintunk ismét, a részletező tűnjön el.
	
09. Tagolással jelenítsd meg a részletezőben a "Költségvetés" és "Összbevétel" tulajdonságokat (pl. 1234567 -> 1.234.567).

10. Tedd a táblázat sorait törölhetővé. A sorok végére kerüljön egy újabb cella, melyben legyen egy törlés gomb. A gombra kattintva tűnjön el az adott sor.

11. Kerüljön fel a felületre egy "Újratöltés" gomb, aminek megnyomására ismét legyenek láthatók az előzőleg kitörölt sorok.

12. Kerüljön fel a felületre egy szabadszavas kereső, valamint mellé egy "Keresés" és egy "Keresés törlése" gomb.
A "Keresés" gombra nyomva csak azok a filmek jelenjenek meg a táblázatban, melyek címében bárhol megtalálható a keresőbe beírt kifejezés.
A "Keresés törlése" gombra jelenjen meg ismét minden sor.

13. A részletezőt ne a táblázat fölött, hanem egy Modal ablakon jelenítsd meg.
A modal-on legyen fejlécként feltűntetve a megnyitott film címe is.
A modal aljára kerüljön fel egy "Bezárás" gomb, aminek megnyomására záródjon be a modal.

14. A modal-on legyen egy "Előző film" és egy "Következő film" gomb. Az "Előző film" gombra nyomva töltsd be a megnyitott film helyére a listában előtte szereplő filmet, a "Következő film" gombra nyomva pedig a következőt.

15. Tedd a táblázatot rendezhetővé "Cím" szerinti növekvő-, valamint "Értékelés" szerinti csökkenő sorrendbe.
Az adott tulajdonság szerinti rendezés az oszlop fejlécére kattintva történjen meg.

16. Tedd a táblázatot lapozhatóvá. Egy oldalon 50 elem jelenjen meg. Egy lapozó segítségével lehessen az oldalak között előre és hátra haladni.

17. Töltsd fel az elkészült projektet egy tetszőleges git repository-ba, ami elérhető számunkra is.

Amennyiben a 17. feladat nem sikerül, az elkészült feladatot egy zip fájlba csomagolva juttasd el hozzánk.

Sok sikert!
