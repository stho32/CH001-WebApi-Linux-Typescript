# CH001-WebApi-Linux-Typescript
Experiment basierend auf https://github.com/stho32/Collection-Of-Challenges

Nach der Klassifikation beinhaltet dieses Repository:
- einen Zufallsgenerator
- als WebAPI
- unter Linux lauffähig
- in TypeScript

# Zufallsgenerator Anforderungen

- [ ] Es gibt eine einfache Möglichkeit eine Zufallszahl zwischen 1 und 10 abzurufen
- [ ] Es gibt eine Möglichkeit beliebige Zufallszahlen zwischen zwei angegebenen Werten abzurufen
- [ ] Es gibt eine Möglichkeit Zufallskennworte zu generieren
  - [ ] mit Sonderzeichen/ohne Sonderzeichen
  - [ ] in beliebiger Länge
  - [ ] mit Zahlen, ohne Zahlen
  - [ ] Groß-/Kleinschreibung
  - [ ] Steuerung der Anteile
- [ ] Generierung von zufälligen Tiernamen z.B. lustig schnappender Lurch

## Zusatzanforderungen

- [ ] Das Repository sollte eine Dokumentation und/ oder ein build-Skript beinhalten, das angibt, woe der Code zu übersetzen ist
- [ ] Das Repository kann/möchte wenn möglich einen github-Workflow beinhalten, der den Code übersetzt und ein neues Release bereitstellt.

## Umgebung installieren
- wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
- Shell neu starten
- nvm install --lts
- node --version --> ```v16.13.1```
