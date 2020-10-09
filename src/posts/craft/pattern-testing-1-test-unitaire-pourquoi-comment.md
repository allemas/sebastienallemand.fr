---
title: "Pattern testing #1 - Tests unitaires pourquoi ? comment?"
tags: [crafting, tdd, refactoring]
url: /pattern-testing-test-unitaire-pourquoi-comment
author: Allemand Sébastien
description: Pattern testing#1 Améliorer sa stratégie de test dans un projet legacy grace aux tests unitaires et test d'intégration
date: 2020-06-30
---

Aujourd’hui, il est très facile d’enrichir de tests unitaires un projet; malheureusement même si la tendance tend vers une généralisation de ce type de tests, j’ai l'impression qu’on passe encore a côté de la philosophie des tests et de leurs utilités.

> Un Test Unitaire est un bout de code (généralement une méthode) chargé d’appeler d’autres bouts de codes pour vérifier certaines hypothèses.

## Pourquoi ?
- **Permet de vérifier si un bloc de code fonctionne**
- **Protège des régressions**
- **Permet le refactoring et les évolutions de design**
- **Réduit les coûts des tests et de QA**
- **Ouvre des discussions et débats dans l’équipe.** Ex: comment tester  un composant critique d’un point de vue métier ?

&nbsp;
Je remarque que dans encore beaucoup de projets, les tests sont rédigés une fois les développements terminé voir sont vus comme ___des bonus___. Je pense que c’est très dommage. En rédigeant les tests après avoir fait le développement, on passe a côté de tous leurs bénéfices.
&nbsp;

- **Valider la compréhension du besoin :** on peut discuter de certains cas de tests avec le métier et livrer les résultats en QA pour attester du bon fonctionnement de l’application
- **Valider les contrats d’interfaces (logiciel ou archi)**
- **Mettre en évidence les schémas de conception et la logique**
- **Pratiquer la micro intégration** : intégration douce de nouveaux composants dans le système


> Comment valider tout ça le plus en amont si le travail est déjà achevé ?


## Mais alors, qu’est-ce qu’on teste ?
- **les cas passants / non passants**
- **La logique fonctionnelle** : toute portion de code avec de la logique métier ou fonctionnelle : règles de gestion, calculs …
- **Les parties critiques de l’application**: fortement utilisées ou avec une forte attente du métier
- **Les portions de code subissant des corrections**
- **Les contrats d’échanges** : les frontières fonctionnelles (Api, Objets métiers, Modèles, parsing etc.). Curseur à positionner en fonction de votre niveau de maturité

## Qu’est-ce qu’on ne teste pas ?

- **Le code avec un besoin d’interagir avec d’autres systèmes externes.** C’est un test d’intégration
- **Parties tierces - Frameworks etc..** :testez votre code et faites confiance aux développeurs qui maintiennent votre framework, libs etc.
- **Interface graphique** : ça ne teste pas les rouages interne de votre système, sans parler des cas de faux positifs…
- **Si le test est plus difficile à écrire que le code lui-même** (on peut se poser des questions sur sa conception)
- **un prototype** : C’est fait pour être ré-écrit :)

## Quelques bonnes pratiques
- On ne test qu’une seule chose a la fois : un comportement ou bien un algorithme
- Faire des tests simple, quitte à en écrire beaucoup mais on ne les duplique pas
- On s’assure d’un harnais de test avant de refactorer un bout de code (voir golden master)
- Ecrire des tests maintenables et compréhensibles
- Tester les contrats et interfaces de chaque élément du système
- Opter pour une couverture progressive, avec de nouvelles fonctionnalités couvertes, plutôt que de faire des sprints uniquement “test unitaire”.

---
**Pour aller plus loins**
- [The Art of Unit Testing](https://www.manning.com/books/the-art-of-unit-testing)
- [Testing like the TSA](https://signalvnoise.com/posts/3159-testing-like-the-tsa)
- [Software Engineering - What should you test with unit tests?](https://softwareengineering.stackexchange.com/questions/750/what-should-you-test-with-unit-tests/754#754)
- [Red, Green, Refactor](https://www.codecademy.com/articles/tdd-red-green-refactor)
- [Le test unitaire et les méthodes privées](https://blog.crafting-labs.fr/2013/10/21/test-unitaire-et-methodes-privees/)
