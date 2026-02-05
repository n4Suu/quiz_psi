const questionsData = [
  {
    "id": 1,
    "question": "Jeżeli chcemy elementy wyświetlić jeden obok drugiego, a jednocześnie móc ustawić ich szerokość powinniśmy w css ustawić właściwość display na wartość:",
    "answers": ["Inline-block", "Block", "Żadne z powyższych", "Inline"],
    "correct": 0
  },
  {
    "id": 2,
    "question": "W celu przesyłania plików na serwer musimy ustawić kodowanie formularza:",
    "answers": ["Text/plain", "Multipart/form-data", "Application/x-www-form-urlencoded", "Multipart/files"],
    "correct": 1
  },
  {
    "id": 3,
    "question": "Za pomocą obiektu XMLHttpRequest możliwa jest komunikacja z serwerem w trybie:",
    "answers": ["Tylko asynchronicznie", "Asynchronicznym lub synchronicznym (ustala to przeglądarka na podstawie jakości łącza)", "Tylko synchronicznym", "Asynchronicznym lub synchronicznym (ustawia to programista)"],
    "correct": 3
  },
  {
    "id": 4,
    "question": "Które zdanie jest prawdziwe na temat protokołu http:",
    "answers": ["Dane przesyłane metodą post są szyfrowane", "Dane przesyłane metodą get są dołączone do adresu", "Dane przesyłane metodą post są dołączane do adresu", "Dane przesyłane metodą get są szyfrowane"],
    "correct": 1
  },
  {
    "id": 5,
    "question": "Dostęp do składowych klasy można uzyskać za pomocą:",
    "answers": ["Tylko notacji nawiasów kwadratowych", "Tylko notacji kropkowej", "Żadne z wymienionych", "Za pomocą notacji kropkowej lub notacji nawiasów kwadratowych"],
    "correct": 3
  },
  {
    "id": 6,
    "question": "Dlaczego w definicji () => ({imie:\"Ala\", nazwisko:\"Kot\"}), po prawej stronie strzałki pojawiają się nawiasy okrągłe:",
    "answers": ["Tworzenie obiektów za pomocą składni literalnej zawsze wymaga użycia nawiasów okrągłych", "Nawiasy klamrowe w funkcji strzałki oznaczają ciało funkcji", "Zapewniają, że kod tworzący ten obiekt będzie wykonany asynchronicznie", "Nie są one wymagane, dodaje się je, aby zwiększyć czytelność"],
    "correct": 1
  },
  {
    "id": 7,
    "question": "Za pomocą funkcji setInterval uruchomiłeś ciągłe wykonywanie jakiegoś zadania. Jaką funkcją przerwiesz jego wykonywanie:",
    "answers": ["removeInterval", "clearInterval", "stopinterval", "unsetInterval"],
    "correct": 1
  },
  {
    "id": 8,
    "question": "Jaki typ danych nie jest dostępny w JavaScript:",
    "answers": ["Undefined", "Integer", "Object", "String"],
    "correct": 1
  },
  {
    "id": 9,
    "question": "Który element pozwoli na pobranie skryptu w sposób asynchroniczny, ale opóźni jego wykonanie do całkowitego załadowania strony:",
    "answers": ["<script src=\"skrypt.js\" async></script>", "<script src=\"skrypt.js\" after></script>", "<script src=\"skrypt.js\"></script>", "<script src=\"skrypt.js\" defer></script>"],
    "correct": 3
  },
  {
    "id": 10,
    "question": "Modyfikacje drzewa DOM są możliwe:",
    "answers": ["Zależnie od konfiguracji przeglądarki", "Zawsze", "Tylko przed pełnym załadowaniem strony", "Tylko po załadowaniu kodu strony"],
    "correct": 1
  },
  {
    "id": 11,
    "question": "W CSS relatywne jednostki miary bazują na innych wartościach. Jednostka em bazuje na:",
    "answers": ["Rozmiarze czcionki elementu głównego HTML", "Rozmiarze czcionki elementu nadrzędnego", "Szerokości elementu", "Wysokości linii elementu"],
    "correct": 1
  },
  {
    "id": 12,
    "question": "Dana jest funkcja JavaScript: function przykład(a,b) { return a+b; }. Które wywołanie funkcji pozwoli ją uruchomić: I). przykład (1,2) II). przykład (1), III). przykład (1,2,3).",
    "answers": ["Tylko I)", "Tylko II). IIII)", "Tylko I). i II)", "Wszystkie"],
    "correct": 3
  },
  {
    "id": 13,
    "question": "Jak nazywa się we Flexbox oś zdefiniowana przez kierunek, w którym ułożone są elementy w kontenerze:",
    "answers": ["Oś pozioma", "Oś pomocnicza", "Oś główna", "Oś pionowa"],
    "correct": 2
  },
  {
    "id": 14,
    "question": "Dane mamy klasy w JavaScript: class Person { constructor (firstName, lastName, age){} } oraz class Student extends Person { constructor(firstName, lastName, age, index Number){} }. Kod ten nie jest poprawny ponieważ:",
    "answers": ["JavaScript nie posiada słowa kluczowego extends", "W konstruktorze klasy Student brakuje linii: base (firstName, lastName, age)", "W konstruktorze klasy Student brakuje linii: super(firstName, lastName, age)", "W konstruktorze klasy Student brakuje linii: Person.constructor(firstName, lastName, age)"],
    "correct": 2
  },
  {
    "id": 15,
    "question": "Który z poniższych atrybutów musi być przypisany do pól formularza http, aby dane mogły być wysłane na serwer:",
    "answers": ["Id", "Action", "Name", "Class"],
    "correct": 2
  },
  {
    "id": 16,
    "question": "Próbujesz stworzyć nowy obiekt z klasy JavaScript, które zawiera kilka konstruktorów. Co się stanie:",
    "answers": ["Dostaniesz błąd niejednoznaczności metody", "Dostaniesz błąd składni", "Stworzyć pętle nieskończoną", "Dostaniemy błąd segmentacji pamięci"],
    "correct": 1
  },
  {
    "id": 17,
    "question": "Jednostki bezwzględne CSS powinniśmy stosować:",
    "answers": ["W przypadku przygotowywania strony w wersji do wyświetlania na urządzeniach mobilnych.", "W przypadku przygotowania strony w wersji do wydruku", "W przypadku przygotowania strony w wersji do wyświetlenia na ekranach", "Zawsze dla elementów liniowych, a nigdy dla blokowych"],
    "correct": 1
  },
  {
    "id": 18,
    "question": "Dany jest kod klasy TodoClass. Metoda toString dodana do prototypu będzie dostępna:",
    "answers": ["Tylko w obiekcie przypisanym", "We wszystkich obiektach utworzonych na podstawie klasy TodoClass", "W obiektach utworzonych na podstawie klasy TodoClass przed dołączeniem metody toString do prototypu", "W obiektach utworzonych na podstawie klasy TodoClass po dołączeniu metody toString do prototypu"],
    "correct": 1
  },
  {
    "id": 19,
    "question": "Funkcję, która wywołana będzie po odrzuceniu obietnicy możemy przypisać za pomocą:",
    "answers": ["tylko then", "error", "then lub catch", "tylko catch"],
    "correct": 2
  },
  {
    "id": 20,
    "question": "Domyślnie wszystkie elementy obiektu w JavaScript są:",
    "answers": ["abstrakcyjne", "chronione", "publiczne", "prywatne"],
    "correct": 2
  },
  {
    "id": 21,
    "question": "Nagłówek kolumny w tabeli HTML zapisujemy za pomocą znacznika:",
    "answers": ["td", "tr", "tc", "th"],
    "correct": 3
  },
  {
    "id": 22,
    "question": "Słowo kluczowe await możemy:",
    "answers": ["zastosować z dowolną funkcją", "zastosować wewnątrz dowolnej funkcji", "zastosować tylko w przypadku stosowania funkcji zwrotnych", "zastosować tylko wewnątrz funkcji oznaczonych słowem kluczowym async"],
    "correct": 3
  },
  {
    "id": 23,
    "question": "Ile zadań może jednocześnie wykonywać \"procesor\" JavaScript:",
    "answers": ["dowolnie wiele", "2", "1", "3"],
    "correct": 2
  },
  {
    "id": 24,
    "question": "Kliknięcie na element #link spowoduje:",
    "answers": ["wyświetlenie w konsoli przeglądarki wartości 12", "wyświetlenie w konsoli komunikatu o błędzie, ponieważ obiekt e nie posiada metody preventDefault();", "wyświetlenie w konsoli komunikatu o błędzie, ponieważ nieznany jest element x", "wyświetlenie w konsoli komunikatu o błędzie, ponieważ metoda kliknięcie nie otrzymuje wartości parametru e"],
    "correct": 2
  },
  {
    "id": 25,
    "question": "Która z wymienionych jest jednostką absolutną CSS:",
    "answers": ["px", "ex", "em", "cm"],
    "correct": 3
  },
  {
    "id": 26,
    "question": "Aby element pozostawał cały czas w tym samym miejscu na ekranie, w css należy zastosować:",
    "answers": ["position: static", "position: absolute", "position: fixed", "position: relative"],
    "correct": 2
  },
  {
    "id": 27,
    "question": "Dany jest fragment strony html <div class=”Z”><div class=”W”>BBB</div></div> Które reguły pozwolą umieścić element wewnętrzny o 3px od lewej krawędzi elementu zewnętrznego.",
    "answers": ["div Z {position: relative, left, 3px}, div W {position: absolute}", "div Z {position: absolute}, div W {position: relative, left: 3px}", " div Z {position: relative}, div W {position: absolute, left: 3px}", "div Z {position: static, left, 3px}, div W {position: absolute}"],
    "correct": 1
  },
  {
    "id": 28,
    "question": "Nowe elementy obiektów w JavaScript możemy dodawać:",
    "answers": ["tylko w klasie", "tylko w funkcji konstruktorowej", "tylko w konstruktorze", "w dowolnym momencie"],
    "correct": 3
  },
  {
    "id": 29,
    "question": "Obietnice mogą zmienić swój stan:",
    "answers": ["tylko raz", "trzykrotnie", "dwukrotnie", "dowolną ilość razy"],
    "correct": 0
  },
  {
    "id": 30,
    "question": "Dziedziczenie w JavaScript:",
    "answers": ["nie istnieje", "bazuje na klasach lub prototypach w zależności od wersji przeglądarki", "bazuje na prototypach", "bazuje na klasach jak w C++"],
    "correct": 2
  },
  {
    "id": 31,
    "question": "Która z poniższych funkcji spowoduje uruchomienie kodu w sposób asynchroniczny",
    "answers": ["setTimeout", "repeat", "startTimeout", "async"],
    "correct": 0
  },
  {
    "id": 32,
    "question": "Funkcję, która wywołana będzie po rozwiązaniu obietnicy możemy przypisać za pomocą:",
    "answers": ["then", "next", "afterThen", "after"],
    "correct": 0
  },
  {
    "id": 33,
    "question": "Tworzysz aplikację React. Chcesz, aby po kliknięciu przycisku zmieniła się zawartość paragrafu. Który z fragmentów jest poprawny:",
    "answers": ["<p>{{imie}}</p>", "<p>[imie]</p>", "<p></p>", "<p>{imie}</p>"],
    "correct": 3
  },
  {
    "id": 34,
    "question": "React. Jaka jest podstawowa technika przekazywania danych z komponentu dziecka do rodzica:",
    "answers": ["Nie można tego zrobić", "Zwracamy te dane jako rezultat metody render()", "Przekazujemy dane podczas wywołania funkcji przekazanej do dziecka jako parametr komponentu", "Wywołujemy specjalną metodę umieszczoną w stanie komponentu"],
    "correct": 2
  },
  {
    "id": 35,
    "question": "Chcąc określić adres odnośnika w znaczniku \"a\" należy użyć atrybutu",
    "answers": ["href", "ref", "src", "url"],
    "correct": 0
  },
  {
    "id": 36,
    "question": "Jaki jest poprawny sposób tworzenia tablic w JavaScript:",
    "answers": ["let wartosci = [1;2;3;4]", "let wartosci = [1,2,3]", "let wartosci = (1,2,3)", "let wartosci = [0:1,1:2,2:3]"],
    "correct": 1
  },
  {
    "id": 37,
    "question": "Tworzysz aplikację React. Wyświetlając listę obiektów powinieneś pamiętać aby ustawić wartość atrybutu:",
    "answers": ["key", "id", "item", "list"],
    "correct": 0
  },
  {
    "id": 38,
    "question": "Który ze znaczników jest znacznikiem semantycznym:",
    "answers": ["table", "a", "p", "article"],
    "correct": 3
  },
  {
    "id": 39,
    "question": "W Css relatywne jednostki miary bazują na innych wartościach. Jednostka rem bazuje na:",
    "answers": ["wysokości linii elementu", "rozmiarze czcionki elementu głównego HTML", "szerokości elementu", "rozmiarze czcionki elementu nadrzędnego"],
    "correct": 1
  },
  {
    "id": 40,
    "question": "Protokół http jest protokołem:",
    "answers": ["ze stanem, którego miejsce przechowywania zależy od konfiguracji", "ze stanem przechowywanym po stronie serwera", "ze stanem przechowywanym po stronie klienta", "bezstanowym"],
    "correct": 3
  },
  {
    "id": 41,
    "question": "Za pomocą jakiego słowa kluczowego możesz zdefiniować zmienną w JavaScript:",
    "answers": ["wszystkie z wymienionych", "const", "var", "let"],
    "correct": 0
  },
  {
    "id": 42,
    "question": "Za pomocą których metod możesz przesyłać dane wykorzystując z AJAX:",
    "answers": ["tylko GET, POST DELETE", "tylko GET, POST", "tylko GET, POST, DELETE PUT", "dowolnych zdefiniowanych w protokole HTTP"],
    "correct": 3
  },
  {
    "id": 43,
    "question": "Kody odpowiedzi określające błąd serwera należą do grupy:",
    "answers": ["500", "400", "300", "200"],
    "correct": 0
  },
  {
    "id": 44,
    "question": "Równoległe wywołanie obietnic realizuje się za pomocą funkcji:",
    "answers": ["Promise.whenAll", "Promise.all", "Promise.race", "Promise.parallel"],
    "correct": 1
  },
  {
    "id": 45,
    "question": "W jakich stanach może znajdować się obietnica:",
    "answers": ["oczekująca, rozwiązana, anulowana", "oczekująca, rozwiązana, odrzucona", "oczekująca, wygrana, przegrana", "rozwiązana, odrzucona"],
    "correct": 1
  },
  {
    "id": 46,
    "question": "Meta informacje o stronie należy umieszczać w znaczniku:",
    "answers": ["metainfo", "info", "head", "body"],
    "correct": 2
  },
  {
    "id": 47,
    "question": "Jeżeli wyświetlasz kolekcję danych w React, to zrobisz to za pomocą:",
    "answers": ["for", "while", "funkcyjnie za pomocą metody map", "funkcyjnie za pomocą metody select"],
    "correct": 2
  },
  {
    "id": 48,
    "question": "Zakresem widoczności zmiennych utworzonych za pomocą słowa kluczowego let jest:",
    "answers": ["cała aplikacja", "cała funkcja", "klasa", "blok ograniczony nawiasami klamrowymi"],
    "correct": 3
  },
  {
    "id": 49,
    "question": "Właściwość CSS box-sizing służy do:",
    "answers": ["Do określania sposobu wyznaczania wymiarów pudełka CSS", "Do określania sposobu wyznaczania wymiarów okna przeglądarki", "Do określania wymiarów pudełka blokowego CSS", "Do określania wymiarów pudełka CSS"],
    "correct": 0
  },
  {
    "id": 50,
    "question": "Czym jest JSX?",
    "answers": ["Językiem podobnym do HTML'a, który kompiluje się do CSS'a", "Językiem podobnym do HTML'a, który kompiluje się do JavaScript", "Biblioteką HTTP dla React'a", "Biblioteką testową dla React'a"],
    "correct": 1
  },
  {
    "id": 51,
    "question": "Składowe klasy w JavaScript są",
    "answers": ["publiczne lub chronione", "publiczne lub prywatne", "zawsze publiczne", "publiczne, chronione lub prywatne"],
    "correct": 1
  },
  {
    "id": 52,
    "question": "W czystym JavaScript procedury obsługi zdarzeń możemy przypisać za pomocą funkcji:",
    "answers": ["event", "addEventListener", "addEvent", "addListener"],
    "correct": 1
  },
  {
    "id": 53,
    "question": "Do Zamiany obiektu na reprezentację JSON w JavaScript służy funkcja?",
    "answers": ["JSON.decode", "JSON.stringfy", "JSON.parse", "JSON.encode"],
    "correct": 1
  },
  {
    "id": 54,
    "question": "Domyślnie połączenia AJAX można realizować z",
    "answers": ["z serwerem, z którego załadowana była strona", "serwerem zaufanym", "dowolnym serwerem HTTPS", "dowolnym serwerem"],
    "correct": 0
  },
  {
    "id": 55,
    "question": "Który fragment pozwoli poprawnie dodać skrypt do strony",
    "answers": ["<script src=\"skrypt.js\" />", "<script src=\"skrypt.js\"></script>", "<script href=\"skrypt.js\" />", "<script href=\"skrypt.js\"></script>"],
    "correct": 1
  },
  {
    "id": 56,
    "question": "Który z poniższych fragmentów pozwoli poprawnie wywołać konstruktor klasy bazowej",
    "answers": ["class Pochodna extends Bazowa{ constructor() {super(); }}", "class Pochodna extends Bazowa{ constructor(): base() {}}", "class Pochodna extends Bazowa{ constructor(): super() { }}", "class Pochodna extends Bazowa{ constructor() {base(); }}"],
    "correct": 0
  },
  {
    "id": 57,
    "question": "Aby w procedurze obsługi zdarzenia określić element, który zgłosił to zdarzenie wykorzystasz właściwość",
    "answers": ["source", "src", "href", "target"],
    "correct": 3
  },
  {
    "id": 58,
    "question": "Zdarzenie error jest zgłaszane przez obiekt XMLHttpRequest gdy:",
    "answers": ["wystąpi błąd połączenia lub błąd HTTP z grupy 500", "wystąpi błąd połączenia", "wystąpi błąd HTTP z grupy 400 lub 500", "wystąpi błąd połączenia lub błąd HTTP z grupy 400"],
    "correct": 1
  },
  {
    "id": 59,
    "question": "Który selektor pozwoli przypisać regułę do elementu a z identyfikatorem \"glowny\"",
    "answers": ["a#glowny", "a.glowny", ".glowny", "#.glowny"],
    "correct": 0
  },
  {
    "id": 60,
    "question": "Który fragment pozwoli poprawnie dołączyć do dokumentu HTML arkusz styli zdefiniowany w osobnym pliku",
    "answers": ["<link rel=\"stylesheet\" href=\"style.css\" />", "<stylesheet rel=\"stylesheet\" href=\"style.css\" />", "<link rel=\"stylesheet\" src=\"style.css\" />", "<a rel=\"stylesheet\">style.css</a>"],
    "correct": 0
  },
  {
    "id": 61,
    "question": "Ile kolumn ma system siatkowy Bootstrap?",
    "answers": ["6", "9", "12", "18"],
    "correct": 2
  },
  {
    "id": 62,
    "question": "Który element stworzy przycisk Bootstrapa:",
    "answers": ["<a class=\"btn\">Przycisk</a>", "<a class=\"button\">Przycisk</a>", "<a id=\"button\">Przycisk</a>", "<a id=\"btn\">Przycisk</a>"],
    "correct": 0
  },
  {
    "id": 63,
    "question": "Podczas zamykania przeglądarki lub zakładki dane w localstorage są:",
    "answers": ["automatycznie przesyłane na serwer", "usuwane", "zachowywane po stronie klienta tak, aby były dostępne następnym razem", "automatycznie zapisywane do bazy IndexedDB"],
    "correct": 2
  },
  {
    "id": 64,
    "question": "Jak nazywa się funkcja tworząca obiekt umożliwiający asynchroniczną komunikację z serwerem:",
    "answers": ["Ajax", "AsyncConnection", "XMLHttpRequest", "AsyncHttpRequest"],
    "correct": 2
  },
  {
    "id": 65,
    "question": "Celem AJAX jest:",
    "answers": ["poprawienie odczuć użytkownika podczas korzystania z aplikacji internetowej", "ułatwienie tworzenia formularzy HTML", "ułatwienie tworzenia aplikacji asynchronicznych w języku JavaScript", "Synchroniczne przesyłanie danych na server"],
    "correct": 0
  },
  {
    "id": 66,
    "question": "Które z wywołań JQuery poprawnie przypisze funkcje obsługi zdarzenia „kliknięcia” do dowolnego elementu typu div na stronie:",
    "answers": ["$(\"div\").on(\"click\", function() {})", "$(\"div\").assign(\"click\", function() {})", "$.click(\"div\", function () {})", "$.on(\"click\", function () {})"],
    "correct": 0
  },
  {
    "id": 67,
    "question": "W wyrażeniu: $(function () { console.log(\"Test\"); }) wyrażenie \"test\" zostanie wyświetlone w konsoli przeglądarki w momencie:",
    "answers": ["wystąpienia zdarzenia Load", "wystąpienia zdarzenia DomContentLoaded", "Wystąpienia kliknięcia na dowolnym elemencie na stronie internetowej", "Natychmiast podczas wykonania funkcji"],
    "correct": 1
  },
  {
    "id": 68,
    "question": "Wyrażenie $(\"<div>Ala ma kota</div>\") spowoduje:",
    "answers": ["dodanie do strony internetowej nowego elementu typu div", "wyszukanie na stronie internetowej elementu takiego jak przekazany do funkcji", "utworzenie obiektu jQuery, który będzie opisywał elementy typu div", "nic, ponieważ jest błędne"],
    "correct": 2
  },
  {
    "id": 69,
    "question": "Który fragment jest poprawnym zapisem w formacie JSON:",
    "answers": ["\"{imie:'Ala', nazwisko:'Kowalska'}\"", "\"{'imie':'Ala', 'nazwisko':'Kowalska'}\"", "\"{'imie':'Ala'; 'nazwisko:'Kowalska';}\"", "\"{'imie':'Ala', 'nazwisko':'Kowalska', wiek:function() {return 12;}}\""],
    "correct": 0
  },
  {
    "id": 70,
    "question": "Żądanie pobrania danych z serwera najlepiej przesłać metodą:",
    "answers": ["GET", "POST", "PUT", "DELETE"],
    "correct": 0
  },
  {
    "id": 71,
    "question": "Który ze znaczników określa link do określonego miejsca na innej stronie:",
    "answers": ["<a href=\"strona.html\">link</a>", "<a href=\"#miejsce\">link</a>", "<a href=\"strona.html#miejsce\">link</a>", "<a href=\"strona.html?place=miejsce\">link</a>"],
    "correct": 2
  },
  {
    "id": 72,
    "question": "Który znacznik pozwoli poprawnie wstawić ukryte pole formularza:",
    "answers": ["<hidden name=\"pole\">Wartość</hidden>", "<input name=\"pole\" value=\"Wartość\" />", "<input type=\"hidden\" name=\"pole\" value=\"wartosc\" />", "<input type=\"hidden\" name=\"pole\">Wartość</input>"],
    "correct": 2
  },
  {
    "id": 73,
    "question": "Gdzie najlepiej umieszczać style CSS",
    "answers": ["w znaczniku HTML za pomocą atrybutu style", "w ciele strony za pomocą znacznika link", "na samym końcu strony za pomocą znacznika link", "w części head za pomocą znacznika link"],
    "correct": 3
  },
  {
    "id": 74,
    "question": "Który selektor określa wszystkie elementy typu div z przypisaną klasą „glowna”:",
    "answers": ["#glowna", ".glowna", "div.glowna", "div#glowna"],
    "correct": 2
  },
  {
    "id": 75,
    "question": "Który z poniższych zapisów poprawnie zdefiniuje w CSS kolor za pomocą notacji szesnastkowej:",
    "answers": ["AAA", "#AAA", "$AAA", "@AAA"],
    "correct": 1
  },
  {
    "id": 76,
    "question": "Która odpowiedź poprawnie zmieni typ elementu HTML na blokowy:",
    "answers": ["display=\"block\"", "visibility=\"block\"", "type=\"block\"", "mode=\"block\""],
    "correct": 0
  },
  {
    "id": 77,
    "question": "Dany jest fragment strony html <h1>AAA<h1><p>BB</p> oraz reguły CSS H1 {margin:10px} p{margin:5px;}. Jaki będzie margines pomiędzy elementami h1 i p:",
    "answers": ["5px", "10px", "15px", "30px"],
    "correct": 1
  },
  {
    "id": 78,
    "question": "Czym jest dopełnienie?",
    "answers": ["kombinacją obiektu, funkcji i zmiennych w zakresie lokalnym", "sposobem zdefiniowania czasu życia obiektu", "kombinacją funkcji i środowiska leksykalnego wewnątrz którego ta funkcja jest zadeklarowana", "kombinacją obiektu, funkcji i zmiennych w zakresie globalnym"],
    "correct": 2
  },
  {
    "id": 79,
    "question": "Która z poniższych instrukcji pozwoli przejść po nazwach właściwości obiektu var obj={a:\"Ala\",b:\"ma\", c:\"kota\"}:",
    "answers": ["for(var klucz in obj) {}", "for(var klucz of obj) {}", "foreach(var klucz in obj) {}", "foreach(var klucz of obj) {}"],
    "correct": 0
  },
  {
    "id": 80,
    "question": "Dana jest funkcja języka javascript: function f(a,b,c) {}. Które wywołanie tej funkcji jest poprawne:",
    "answers": ["f(1)", "f(1,2)", "f(1,2,3)", "wszystkie odp poprawne"],
    "correct": 3
  },
  {
    "id": 81,
    "question": "Zakresem widoczności zmiennych JavaScript zdefiniowanych za pomocą var jest:",
    "answers": ["instrukcja warunkowa", "instrukcja pętli", "funkcja", "dowolny blok Javascript oznaczony {}"],
    "correct": 2
  },
  {
    "id": 82,
    "question": "W JQuery nowy element strony możemy dodać jako pierwsze dziecko dowolnego innego elementu za pomocą:",
    "answers": ["first", "prepend", "append", "begin"],
    "correct": 1
  },
  {
    "id": 83,
    "question": "Obserwowalne kolekcje w Knockout pozwalają na",
    "answers": ["reagowanie tylko w przypadku dodawania nowego elementu do kolekcji", "reagowanie na zmiany w kolekcji i jej elementach", "reagowanie na zmiany jej elementów", "reagowanie na zmiany w kolekcji"],
    "correct": 3
  },
  {
    "id": 84,
    "question": "Załóżmy że mamy kolekcje zadań asynchronicznych. Którą funkcję należy wykorzystać, aby uzyskać wynik pierwszego zakończonego lub odrzuconego zadania",
    "answers": ["allSettled", "all", "race", "first"],
    "correct": 2
  },
  {
    "id": 85,
    "question": "W jaki sposób należy ustawić tło koloru białego dla wszystkich elementów typu h1",
    "answers": ["all.h1 {background-color: #FFF;}", ".h1 {background-color: #FFF;}", "h1 {background-color: #FFF;}", "h1.all {background-color: #FFF;}"],
    "correct": 2
  },
  {
    "id": 86,
    "question": "Znacznik oddzielający tematycznie treść, występujący zwykle jako linia pozioma, to:",
    "answers": ["hr", "tr", "rd", "hd"],
    "correct": 0
  },
  {
    "id": 87,
    "question": "W celu zastosowania pojemnika o pełnej szerokości we frameworku Bootstrap należy użyć klasy:",
    "answers": ["container-width", "container", "container-fluid", "container-full"],
    "correct": 2
  },
  {
    "id": 88,
    "question": "Chcąc zmienić wygląd odnośnika nad którym znajduje się kursor, należy zastosować selektor:",
    "answers": ["a:hover", "a:active", "a:over", "a:mousein"],
    "correct": 0
  },
  {
    "id": 89,
    "question": "W celu ustawienia tła koloru czerwonego dla wszystkich elementów p należy zastosować następujący kod jQuery",
    "answers": ["$(\"p\").style(\"background-color\",\"red\");", "$(\"p\").layout(\"background-color\",\"red\");", "$(\"p\").css(\"background-color\",\"red\");", "$(\"p\").manipulate(\"background-color\",\"red\");"],
    "correct": 2
  },
  {
    "id": 90,
    "question": "Blokowanie akcji domyślnej realizuje się za pomocą funkcji:",
    "answers": ["preventDefault", "stopPropagation", "preventPropagation", "stopAction"],
    "correct": 0
  },
  {
    "id": 91,
    "question": "Które metody przesyłania danych są obsługiwane bezpośrednio w formularzach HTML:",
    "answers": ["Get, Post", "Get, Put", "Post, Put", "Get, Delete"],
    "correct": 0
  },
  {
    "id": 92,
    "question": "Szerokość elementu liniowego w CSS:",
    "answers": ["Zmienia się właściwością width", "Zmienia się właściwością height", "Nie może być zmieniona", "Może być zmieniona tylko dla elementów typu a"],
    "correct": 2
  },
  {
    "id": 93,
    "question": "Wysokość elementu blokowego w CSS:",
    "answers": ["Zmienia się właściwością width", "Zmienia się właściwością height", "Nie może być zmieniona", "Może być zmieniona tylko dla elementów typu a"],
    "correct": 1
  },
  {
    "id": 94,
    "question": "Który selektor wybierze wszystkie elementy typu a, które znajdują się w na pierwszym poziomie zagnieżdżenia wewnątrz elementu typu div:",
    "answers": ["div,a", "div>a", "div a", "div+a"],
    "correct": 1
  },
  {
    "id": 95,
    "question": "Tablica w Javascript:",
    "answers": ["Może przechowywać wartości tylko tego samego typu", "Może przechowywać wartości różnych typów", "Może przechowywać tylko wartości typów wartościowych", "Może przechowywać tylko wartości typów referencyjnych"],
    "correct": 1
  },
  {
    "id": 96,
    "question": "Znacznik <canvas> w HTML5 jest stosowany do:",
    "answers": ["wyświetlania danych z bazy danych", "rysowania grafiki", "tworzenia elementów drag and drop", "manipulowania danymi zapisanymi w polach input"],
    "correct": 1
  },
  {
    "id": 97,
    "question": "Która wartość atrybutu należy podać w znaczniku a, aby link otwierał się w nowym oknie?",
    "answers": ["a.target=\"_new\"", "a.target=\"_top\"", "a.target=\"_self\"", "a.target=\"_blank\""],
    "correct": 3
  },
  {
    "id": 98,
    "question": "Chcąc aby tekst umieszczony w pliku HTML obok znacznika obrazka znalazł się po jego lewej stronie w oknie przeglądarki, właściwość 'float' obrazka musi przyjąć wartość:",
    "answers": ["right", "none", "brak poprawnej odpowiedzi", "left"],
    "correct": 0
  },
  {
    "id": 99,
    "question": "'Grid system' frameworku Bootstrap pozwala na umieszczenie maksymalnie ilu komórek w jednym wierszu?",
    "answers": ["8", "10", "14", "12"],
    "correct": 3
  },
  {
    "id": 100,
    "question": "Rezultat warunku null === undefined to:",
    "answers": ["true, ze względu na wartość jest tożsama", "false, dlatego że sprawdzany jest również typ a nie tylko wartość", "true, dlatego że null jest typu undefined", "false, ze względu na wartość jest różna"],
    "correct": 1
  },
  {
    "id": 101,
    "question": "Która z poniższych atrybutów określa alternatywny tekst w przypadku gdy obraz nie może być wyświetlany:",
    "answers": ["alt", "title", "longdesc", "src"],
    "correct": 0
  },
  {
    "id": 102,
    "question": "Fragment kodu: x=\"4\"+1+2; console.log(x);, napisany w języku JavaScript zwróci w konsoli przeglądarki:",
    "answers": ["7", "NaN", "412", "43"],
    "correct": 2
  },
  {
    "id": 103,
    "question": "Do czego wymaga zastosowanie słowa kluczowego await?",
    "answers": ["Aby funkcja dla której zostało ono użyte zwracała Promise", "Aby funkcja w której zostało ono użyte było typu async", "Aby funkcja dla której zostało ono użyte wykonywała żądanie asynchroniczne", "nic nie jest wymagane"],
    "correct": 1
  },
  {
    "id": 104,
    "question": "Chcąc określić adres odnośnika w znaczniku \"a\" należy użyć atrybutu:",
    "answers": ["ref", "src", "href", "url"],
    "correct": 2
  },
  {
    "id": 105,
    "question": "Aby zmienić kolor tła znacznika HTML należy użyć właściwości CSS o nazwie:",
    "answers": ["color", "background-color", "background", "background-image"],
    "correct": 1
  },
  {
    "id": 106,
    "question": "We fragmencie kodu: var str = \"Ala ma kota\"; var pos = str.indexOf(\"ma\");, napisanym w języku JavaScript, zmienna 'pos' przyjmie wartość:",
    "answers": ["6", "3", "5", "4"],
    "correct": 3
  },
  {
    "id": 107,
    "question": "Fragment kodu: x=1+2+console.log(x);, napisany w języku JavaScript zwróci w konsoli przeglądarki:",
    "answers": ["125", "35", "NaN", "8"],
    "correct": 2
  },
  {
    "id": 108,
    "question": "Za pomocą jakiego znacznika HTML załączamy do dokumentu style CSS zawarte w pliku?",
    "answers": ["stylesheet", "style", "link", "script"],
    "correct": 2
  },
  {
    "id": 109,
    "question": "Wybierz poprawny znacznik HTML wyświetlający nagłówek tekstowy zawierający największą czcionkę",
    "answers": ["head", "h1", "h6", "header"],
    "correct": 1
  },
  {
    "id": 110,
    "question": "Chcąc zmienić odległość między treścią znacznika 'p' a jego ramką, należy zastosować właściwość CSS:",
    "answers": ["margin", "border", "content", "padding"],
    "correct": 3
  },
  {
    "id": 111,
    "question": "Następująca właściwość CSS 'margin: 25px 50px 75px 100px;' ustawi:",
    "answers": ["ustawi wartość górnego marginesu jako 100px", "ustawi wartość górnego marginesu jako 25px", "ustawi wartość górnego marginesu jako 75px", "ustawi wartość górnego marginesu jako 50px"],
    "correct": 1
  },
  {
    "id": 112,
    "question": "Znacznik nagłówka w HTML 5 występuje na:",
    "answers": ["5 poziomach", "7 poziomach", "4 poziomach", "6 poziomach"],
    "correct": 3
  },
  {
    "id": 113,
    "question": "Która metoda jQuery jest wykorzystywana do dodawania i usuwania klasy z wybranych elementów",
    "answers": ["switch()", "altClass()", "addRemoveClass()", "toggleClass()"],
    "correct": 3
  },
  {
    "id": 114,
    "question": "Następujący kod $(\"a[href^='http']\") zwraca:",
    "answers": ["wszystkie elementy typu a zawierające atrybut href, gdzie wartość tego atrybutu zaczyna się od http", "wszystkie elementy typu a zawierające atrybut href, gdzie wartość tego atrybutu to 'http'", "wszystkie elementy typu a zawierające atrybut href, gdzie wartość tego atrybutu zawiera 'http'", "wszystkie elementy typu a zawierające atrybut href, gdzie wartość tego atrybutu kończy się na 'http'"],
    "correct": 0
  },
  {
    "id": 115,
    "question": "W celu nadania obrazowi okrągłego kształtu należy użyć następującej klasy frameworku Bootstrap:",
    "answers": ["elipse", "rounded-circle", "circle", "rounded"],
    "correct": 1
  },
  {
    "id": 116,
    "question": "Następujący kod $(\"div.col-12 li a, div.col-6 li a\") zwraca:",
    "answers": ["wszystkie elementy typu a których bezpośrednim rodzicem jest element li oraz dziadkiem element div zawierający col-6", "wszystkie elementy typu a których rodzicem jest element li oraz dziadkiem element typu div zawierający klasy col-12 oraz col-6", "wszystkie elementy typu div których rodzicem jest element li oraz dziadkiem element typu div zawierający klasy col-12 oraz col-6", "wszystkie elementy typu a których bezpośrednim rodzicem jest element li oraz dziadkiem element div zawierający col-12"],
    "correct": 1
  },
  {
    "id": 117,
    "question": "Który znacznik HTML należy użyć aby stworzyć listę numerowaną?",
    "answers": ["ol", "dl", "ul", "dh"],
    "correct": 0
  },
  {
    "id": 118,
    "question": "We frameworku Bootstrap do oznaczenia tekstu kolorem czerwonym należy użyć klasy:",
    "answers": ["text-info", "text-muted", "text-danger", "text-warning"],
    "correct": 2
  },
  {
    "id": 119,
    "question": "Która z poniższych metod z biblioteki jQuery umożliwia wykonanie żądania asynchronicznego",
    "answers": ["fetch()", "async()", "await()", "$.ajax"],
    "correct": 3
  },
  {
    "id": 120,
    "question": "Aby ustawić ramkę elementu HTML jako linię ciągłą należy użyć odpowiedniej wartości właściwości 'border style':",
    "answers": ["double", "dotted", "solid", "dashed"],
    "correct": 2
  },
  {
    "id": 121,
    "question": "Selektor \"div.col-12 .name\" wyszukuje",
    "answers": ["wszystkie elementy zawierające klasę col-12 oraz klasę name", "wszystkie elementy zawierające elementy typu div zawierające klasę name", "wszystkie elementy zawierające klasę name oraz będące potomkami elementów col-12", "wszystkie elementy zawierające klasę name oraz będące potomkami elementów div zawierających klasę col-12"],
    "correct": 3
  },
  {
    "id": 122,
    "question": "Który znacznik HTML należy użyć aby stworzyć listę wypunktowaną?",
    "answers": ["dh", "dl", "ul", "ol"],
    "correct": 2
  },
  {
    "id": 123,
    "question": "Który znacznik HTML należy użyć aby stworzyć wielowierszowe pole tekstowe",
    "answers": ["textarea", "area", "input", "inputarea"],
    "correct": 0
  },
  {
    "id": 124,
    "question": "Następujący kod $('div button.btn') zwraca:",
    "answers": ["wszystkie elementy typu button posiadające klasę btn, znajdujące się jako potomkowie elementów div", "wszystkie element typu div i button z posiadające klasę btn", "wszystkie elementy typu button posiadające klasę btn, znajdujące się jako bezpośredni potomkowie elementów div", "wszystkie elementy zawierające klasę btn, znajdujące się jako potomkowie elementów div"],
    "correct": 0
  },
  {
    "id": 125,
    "question": "Który znacznik HTML należy użyć, aby złamać tekst do nowej linii?",
    "answers": ["br", "Ib", "break", "b"],
    "correct": 0
  },
  {
    "id": 126,
    "question": "Do czego służy deklaracja doctype?",
    "answers": ["Do określenia wersji języka HTML z której korzystamy", "Do określenia rodzaju dokumentu (np. html, pdf)", "Do określenia typu dokumentu (np. prywatny, publiczny)", "Jest rodzicem body I head"],
    "correct": 0
  },
  {
    "id": 127,
    "question": "Znacznik największego nagłówka HTML to",
    "answers": ["head", "h6", "h1", "header"],
    "correct": 2
  },
  {
    "id": 128,
    "question": "Który fragment poprawnie określa odnośnik (link) do strony PCz:",
    "answers": ["<a url=\"https://www.pcz.pl\">Politechnika Częstochowska</a>", "<link href=\"https://www.pcz.pl\">Politechnika Częstochowska</link>", "<a href=\"https://www.pcz.pl\">Politechnika Częstochowska</a>", "<a href=\"www.pcz.pl\">Politechnika Częstochowska</a>"],
    "correct": 2
  },
  {
    "id": 129,
    "question": "Który fragment poprawnie zdefiniuje regułę CSS:",
    "answers": ["p {color:blue; font-size:12px;}", "p {color=blue; font-size=12px;}", "p <color:blue; font-size:12px;>", "{p= color:blue; font-size:12px;}"],
    "correct": 0
  },
  {
    "id": 130,
    "question": "Chcesz przypisać marginesy do wszystkich elementów typu p: góra: 10px, dół: 20px, lewo: 30px prawo: 40px. Która reguła pozwoli to osiągnąć",
    "answers": ["p.all {margin:10px 40px 20px 30px}", "p {margin:10px 20px 30px 40px}", "p {padding:10px 40px 20px 30px}", "p {margin:10px 40px 20px 30px}"],
    "correct": 3
  },
  {
    "id": 131,
    "question": "Który z poniższych fragmentów poprawnie definiuje funkcję w JavaScript?",
    "answers": ["Komunikat (tresc) { alert(tresc);}", "void Komunikat (string tresc) { alert(tresc);}", "function Komunikat (tresc) { alert(tresc);}", "function Komunikat (tresc:string):void { alert(tresc);}"],
    "correct": 2
  },
  {
    "id": 132,
    "question": "Zakładając, że korzystasz z JQuery, wyrażenie: $(\"<div>element</div>\") spowoduje",
    "answers": ["Wyszukanie na stronie elementu div o zawartości element", "Stworzenie nowego obiektu jquery opisującego element typu div", "Zgłoszenie wyjątku", "Stworzenie nowego elementu typu div i wstawienie go do strony"],
    "correct": 1
  },
  {
    "id": 133,
    "question": "Czy zawartość elementu title jest domyślnie wyświetlana w elemencie H1 strony internetowej",
    "answers": ["Prawda", "Fałsz"],
    "correct": 1
  },
  {
    "id": 134,
    "question": "Zakresem zmiennych utworzonych za pomocą let jest zawsze cała funkcja?",
    "answers": ["Prawda", "Fałsz"],
    "correct": 1
  },
  {
    "id": 135,
    "question": "Czy element: <script src=\"skrypt.js\" /> jest poprawny?",
    "answers": ["Prawda", "Fałsz"],
    "correct": 1
  },
  {
    "id": 136,
    "question": "Wywołania sekwencyjne w Promise API możemy zrealizować za pomocą funkcji:",
    "answers": ["then", "catch", "finally", "all"],
    "correct": 0
  },
  {
    "id": 137,
    "question": "Które wywołanie jQuery poprawnie zmieni kolor czcionki elementu:",
    "answers": ["$(\"div\").css(\"color\":\"red\");", "$(\"div\").style(\"color\", \"red\");", "$(\"div\").css(\"color\", \"red\");", "$(\"div\").color(\"red\");"],
    "correct": 2
  },
  {
    "id": 138,
    "question": "Biblioteka jQuery wykorzystuje wzorzec projektowy",
    "answers": ["wywołań łańcuchowych", "obserwator", "singleton", "dekorator"],
    "correct": 0
  }
];