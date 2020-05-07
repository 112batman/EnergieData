# Een installer maken

## Vooraf

Persoonlijk maak ik de installer met behulp van [Inno Setup](https://jrsoftware.org/isinfo.php), deze handleiding zal er dan ook op gericht zijn dat je dit gebruikt. Je kan met bijna alles wel een installer maken voor EnergieData het belangrijkste is dat je alle bestanden die in de out voor dat platform stonden in de installer stopt, als dit je lukt is het hoogstwaarschijnlijk dat je installer ook werkt.

## Het setup script downloaden

Als je weet hoe Inno Setup werkt, geweldig! Deze stap kan je over slaan, als dat niet zo is. Download het Inno Setup script dat ik heb gemaakt voor EnergieData. [http://112batman.github.io/install.iss](http://112batman.github.io/install.iss).

## De installer compilen

 Open het script in Inno Setup en verander de paths voor de exe en de rest van de bestanden naar paths die kloppen voor waar jij je ge-compiled versie hebt staan. Gebruik vervolgens de toetsencombinatie ctrl + F9 om te starten met het compilen van de installer. De installer zal in een folder genaamd 'Output' worden geplaatst als hij klaar is. Gefeliciteerd! Het is je gelukt om een installer te maken voor EnergieData.

