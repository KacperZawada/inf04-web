
# INF.04 – Aplikacje webowe

Repozytorium zawiera zadania realizowane w ramach przedmiotu INF.04.

**Autor:** Kacper Zawada  
**Klasa:** 5p2t

## Opis projektu

Głównym projektem jest aplikacja internetowa **Galeria Podróży**, umożliwiająca przeglądanie zdjęć podzielonych na kategorie, wyświetlanie szczegółów zdjęć oraz dodawanie własnych pozycji do galerii.

Projekt jest rozwijany etapami w ramach kolejnych zadań MB.

## Funkcjonalności

- Wyświetlanie galerii zdjęć.
- Filtrowanie zdjęć według kategorii.
- Oznaczanie zdjęć jako ulubione.
- Usuwanie zdjęć z galerii.
- Wyświetlanie szczegółów wybranego zdjęcia.
- Dodawanie nowych zdjęć za pomocą formularza.
- Losowe wyświetlanie zdjęcia dnia.
- Obsługa nieistniejących adresów za pomocą strony 404.
- Wielostronicowa nawigacja z wykorzystaniem React Router.
- Pobieranie danych z pliku JSON.

## Technologie

- HTML
- CSS
- JavaScript
- React
- Vite
- Bootstrap
- React Router
- Node.js
- npm

## Uruchomienie projektu

1. Sklonuj repozytorium:

   ```bash
   git clone https://github.com/KacperZawada/inf04-web.git
   ```

2. Przejdź do folderu aplikacji:

   ```bash
   cd inf04-web/zadania/mb05
   ```

3. Zainstaluj zależności:

   ```bash
   npm install
   ```

4. Uruchom aplikację:

   ```bash
   npm run dev
   ```

5. Otwórz adres wyświetlony w terminalu.

## Przydatne polecenia

```bash
npm run dev
npm run lint
npm run build
```

## Struktura projektu

```text
inf04-web/
├── dokumentacja/
│   └── egzamin.docx
├── zadania/
│   ├── mb05/
│   │   ├── public/
│   │   └── src/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── pages/
│   │       └── services/
│   └── mb07/
└── README.md
```

## Dokumentacja

Dokumentacja projektu znajduje się w folderze `dokumentacja/` i zawiera opis środowiska programistycznego oraz zrzuty ekranu przedstawiające działanie aplikacji.
