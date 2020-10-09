---
title: "Software Craftsmanship : Qu'est-ce ?"
tags: [crafting]
date: 2018-06-19
description: Le manifeste Software Craftsmanship est sous titré par Raising the bar, élever le niveau. Partage des valeurs autour du software craftmanship
author: Allemand Sébastien
---

![crafting](./../../../assets/crafting/crating.png#banner)

>Le manifeste Software Craftsmanship est sous titré par Raising the bar, élever le niveau.

Le Software Craftsmanship réunit une communauté de développeurs passionnés. La principale motivation de ces personnes est de créer des produits logiciels d’une très haute maîtrise et qualité technique.

Il ne s’agit pas d’une méthode à mettre en place mais d’une véritable culture, qui implique des changements, dans la mentalité et dans le fonctionnement des équipes.
La communauté a repris et actualisée les principales valeurs développées dans le livre Pragmatic programmer: from journeyman to master (Andy Hunt & David Thomas – 1999).

**La notion principale du Software Craftsmanship est qu’il ne suffit pas qu’un logiciel fonctionne. Un logiciel doit être correctement conçu, avec une certaine fiabilité et facile à maintenir.**

Une seconde valeur est liée à la notion de “communauté de professionnels”,  une communauté d’humain, qui échange. Une organisation de professionnels qui partage méthodes, savoir-faire et idées, dans le but de renforcer la cohésion et la reconnaissance des professionnels en tant qu’artisans de logiciels de qualité.
La communauté promeut la culture de l’amélioration continue et la transmission du savoir par le biais de référentiels de bonnes pratiques (qui sont définies par consensus), de retours d’expérience, d’exercices pratiques réguliers comme les coding dojo avec les kata, coderetreat, 100daysofcode etc.

L’approche prônée par cette nouvelle philosophie consiste à replacer la technique, et les pratiques de développement et de conception au cœur de la production. Pratiques qui, avec l'avènement des Méthodes Agiles, avaient étés mises de côté. Une mise à l’écart justifiée par une prétendue facilité à corriger les erreurs commises dans les sprints antérieur (et des dictons comme “le seul bon code est le code en Production”).
Grâce à l’expérience des Méthodes Agiles, nous pouvons aujourd’hui nous accorder pour dire que si l’exécution de la qualité ne permet pas l’adaptation et la maintenance d’un logiciel sur le long terme, le produit final ne fonctionnera pas correctement ou qu’en apparence.

## Des valeurs et une vision de la qualité

La qualité logicielle n’est pas un nouveau sujet (la norme ISO/IEC 25062, une des premières “SQuaRE”, date de 2006), mais dans un monde où le logiciel devient omniprésent, la qualité est devenue un plus stratégique, à la fois dans la réalisation et dans la communication de ce savoir-faire. Dans notre monde numérique, il est devenu très important d’être en mesure de produire des fonctionnalités interopérables rapidement dans le but de satisfaire ses utilisateurs et ne pas se faire dépasser par ses concurrents. La qualité trouvera sa place dans un contexte où les besoins évoluent, avec une attention particulière à la stabilité. Une application stable et sécurisée est une application qui est, par exemple, en mesure d’évoluer sans subir de fortes régressions techniques (dysfonctionnements) ou fonctionnels (dégradation de l’UX, non-respect de règles métiers).

![crafting](./../../../assets/crafting/crafting3.png#banner)

La qualité peut être vu de différentes façons. Pour moi, la qualité logicielle se retrouve dans :

- Une application qui permet [la proposition de valeur](https://www.investopedia.com/terms/v/valueproposition.asp), sans que la technique devienne un frein a son développement
- Un logiciel qui répond aux besoin simplement et efficacement. Inutile de toujours bâtir une cathédrale, à l'état de l’art de toutes les nouvelles technologies ;
- Une application composé de technologies connues, qui ont fait leurs preuves et pour lesquelles une communauté existe, assurant la disponibilité d’un capital humain en mesure de la maintenir
- Maintenance qui, après formation, doit pouvoir se faire par une nouvelle équipe sans douleurs.

Je pourrais synthétiser en disant qu’un logiciel de qualité, est un logiciel équilibré entre ses qualités intrinsèques , sa correspondance aux besoins, et les méthodes d’écriture de code mises en places pour en faciliter la maintenance.

À l’inverse la non-qualité est une application contenant des bugs très difficiles à identifier, fondée sur une base technique obligeant les développeurs à connaître l’historique du projet pour faire la faire évoluer pour comprendre les solutions de contournement mises en place et les compromis réalisés . La non-qualité a un coût, financier, stratégique et surtout humain.

Selon une étude du mouvement français pour la qualité, la non qualité représenterait un cout de 15% du chiffre d’affaire des entreprises.

Travailler sur une application sans contrôle qualité et sans plan d’évolution, peut décourager un crafteur au point de lui faire envisager de quitter l’équipe, voire l’entreprise.

## Une communauté encore en construction
La communauté d’acteurs du logiciel est composée de profil très différents, certains voient les “craftsman” comme des artisans qui pourraient avoir la tentation de se comporter en diva  et de ne se concentrer uniquement  sur leur “art”.

Robert C. Martin dans Bringing Balance to the force répond à ces fausses idées, en communiquant sur le fait que la pratique technique est un bon moyen pour répondre aux problèmes d’évolution et de sécurité d’une application. Situation souvent rencontré par les équipe agiles se concentrant peut-être un peu trop sur la méthode au détriment du reste.

Des échanges et points de vues intéressant qui permettent d'établir un ensemble de valeurs humaines et compétences techniques.


## Des valeurs humaines
- Humilité : une constante remise en question et recherche d’amélioration
- Apprentissage: j’apprend en permanence de manière a mieux répondre aux besoins
- Beaucoup de partage : Je tente de partager avec mes pairs mes expériences et découvertes
- Pragmatisme : une compréhension des besoins et dans quel contexte ils s’inscrivent
- Professionnalisme : Je traite mon clients comme un pair, je sais communiquer mes points de vues quand nécessaire.

## Techniquement
- Vision de la conception juste : tiny is beautiful.
- Adhérence aux notion DDD & SOLID
- Clean code
- Refactoring
- Techniques de testing.

## Ou en sommes nous ?
En 2018, la philosophie des méthodes agile est plus présente dans les équipes. On observe globalement un changement de paradigme dans les échanges entre les acteurs projets. La culture craftsman est encore a construire et défendre au sein de ces équipes. Dans The Tragedy of Craftsmanship,  Robert C. Martin (Uncle Bob) défend l’idée que le craftman n’occupe pas la place qu’il devrait et que les esprits ont encore besoin d’évoluer.
