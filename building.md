# Building

## De source-code downloaden

Download van [GitHub](https://github.com/112batman/EnergieData) een zip van de source-code van de laatste release of van de huidige staat \(als je van de huidige staat download weet je niet zeker of het wel stable is\). Pak het zip bestand uit.

## De source-code compilen

Navigeer naar de root van de source-code, open hier een terminal/command prompt. 

```
$ npm install
```

{% hint style="info" %}
Het 'node\_modules' folder wordt niet meegeleverd in de source-code dus download je de packages voordat je gaat builden
{% endhint %}

Als hij zegt dat hij klaar is met het installeren van de packages kan je gaan compilen hiervoor gebruiken we ['electron-packager'](https://github.com/electron/electron-packager).

{% hint style="info" %}
Electron packager is al automatisch geinstalleerd bij het uitvoeren van de vorige stap dus hier hoef je niks meer voor te doen
{% endhint %}

```text
$ npm run compile
```

{% hint style="info" %}
Er is al een script gespecificeerd in package.json genaamd compile vandaar dat dit werkt, er zal voor win32, linux, mas worden ge-compiled voor alle mogelijke proccesorarchitecturen
{% endhint %}

Het is je gelukt! Je hebt EnergieData ge-compiled, helemaal zelf! Het resultaat zal worden geplaats in een folder 'Out' dat staat in de root van de source-code.

