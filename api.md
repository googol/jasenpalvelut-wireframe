# Rajapintakuvaus

GET /jäsenet/:jäsennumero
  palauttaa Jäseninfon

POST /jäsenet/:jäsennumero
  kutsun bodyssä jokin osio Jäseninfon RW-määritetyistä kentistä
  päivittää kyseiset osiot jäsenen tiedoista
  palauttaa OK/validaatiovirhe/etc

POST /jäsenet/:jäsennumero/kuva
  bodyssä kuvadata (jpg)
  päivittää jäsenen profiilikuvan

GET /jäsenet/:jäsennumero/tapahtumat
  palauttaa tapahtumat joihin jäsen on ilmoittautunut/osallistunut

GET /jäsenet/:jäsennumero/oikeudet
  palauttaa objektin, joka mappaa organisaation/tapahtuman tunnisteen oikeuksiin kyseisessä organisaatiossa/tapahtumassa
  query parametrina filter, joka ottaa pilkulla erotellun listan oikeuksien tunnisteita, jolloin rajataan pois kaikki muut oikeudet. tyhjät organisaatiot tapahtumat rajataan pois

GET /tapahtumat/
  query parametreina haun alkuaika, loppuaika
  palauttaa tapahtumat halutulla aikavälillä
  Tapahtumat_Rajapinta toteuttaa tämän kyselyn jo

GET /tapahtumat/:tapahtumaId
  palauttaa tapahtuman tiedot
  Tämän voisi toteuttaa Tapahtumat_Rajapinta-apissa

Jäseninfo:
jäsennumero string RO
nimi  string  RO
entinenSukunimi string  RW
partionimi  string  RW
sähköposti  string  RW
ykköslippukunta  tunniste  RW
jäsenyydet  Organisaatio RO
avoimetLaskut  Lasku[] RO
katuosoite  string  RW
postinumero  string  RW
postitoimipaikka  string RW
maa string RW
sukupuoli 'mies'/'nainen'/'muu'/'ei tietoa'/'en halua kertoa' RW
lähiomaisenNimi string RW
lähiomaisenPuhelinnumero string RW
kuvauskielto boolean RW
kuvaUrl string RO
huollettavat Huollettava[] RO

Organisaatio:
tunniste string RO
nimi string RO

Lasku:
tunniste string RO
eräpäivä 'YYYY-MM-DD' RO
laskulaji string RO
viite string RO
tilinumero string RO
summa number RO
pdfUrl string RO

Huollettava:
jäsennumero string RO
nimi string RO
ykköslippukunta Organisaatio RO

Tapahtuma:
nimi string RO
alkuaika ISO-datetime-with-timezone RO
loppuaika ISO-datetime-with-timezone RO
ilmoittautumisenLoppuaika ISO-datetime-with-timezone RO
kuvaus string RO
järjestäjäorganisaatio Organisaatio RO
sijainti string RO
ilmoittautumislinkki string RO
nettisivulinkki string RO
