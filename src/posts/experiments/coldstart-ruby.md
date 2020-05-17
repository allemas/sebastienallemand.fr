---
title: "Coldstart Ruby / RubyOnRails en 2019"
tags: [crafting , experiments]
date: 2019-06-18
author: Allemand Sébastien
---

Il y a plusieurs semaines j’ai fait le choix de découvrir l'écosystème Ruby. N’utilisant pas cette technologie dans mon quotidien professionnel, j’ai choisi de pratiquer pendant mon temps libre.

Avec maintenant un peu de recul je souhaiterais vous partager une liste de ressources et vous aider à pratiquer le plus rapidement possible avec Ruby et Ruby On Rails.

Ruby est une technologie plutôt accessible, il ne sera pas nécessaire d’investir une grande quantité de temps pour commencer à voir ses premières pages et avancer sur un side project. La documentation est globalement de bonne qualitée et il n’est pas difficile de trouver réponse à ses questions.

Je dirais que la principale difficulté qu’on peut rencontrer serait de ne pas oublier qu’on travaille avec un langage tout objet et que sortir de cette approche sera vite douloureux. Le design du langage ne permettra peut être pas de faire ce que vous faites avec d’autres langage, comme PHP par exemple qui lui est plus permissif pour tout ce qui est typage et structure de données.

## Mon side projet
Pour la pratique, j’ai fait le choix de développer un outil de suivi d’activité pour un jeu en ligne de conquête spatiale. Dans un premier temps l’objectif sera de proposer aux utilisateurs un rapport détaillé sur les combats qu’ils ont mené in-game.

Les données seront récupérées via une API, l’application traitera les données et produira un rapport de combat détaillant les joueurs, les vaisseaux engagés, les gains et les pertes.

Actuellement le projet n’est pas terminé, j’ai fait le choix de reprendre entièrement l’application pour piloter le développement par les tests et produire dans le temps un harnais de sécurité face aux régressions.

Les ressources
Voici une liste des ressources qui m'ont permis de prendre la techno en mains, j'espère quelles vous aideront autant qu'elles mont aidées.

## Ruby
- Installer Ruby
- Structures
  - Arrays - Sort
  - Ruby arrays insert append length index remove
  - Create a JSON object
  - Présentation des Hash
  - Fusion de hashs
- Conception
  - DDD - Entités et valeurs

## RubyOnRails (ROR)
- Présentation & installation
- Présentation & Installation ROR
- Installation sqlite
  - Installation de gem
- Concept Modèle-Vue-Controller & organisation projet
  - Concept MVC
  - Les bases MVC avec Rails
  - Model view controller - en details
  - RAD - Create Read Update Delete
- Routing / Construction URL
  - Basics - Les routes qu'est-ce ? comment ca fonctionne?
  - Comprendre les routes et le design RestFull

Construction de routes pour API

[FR] - Description d'URL avec ROR

Controller

Basics - les controllers

Persistance de données

Basics - Active record qu'est-ce ?

Requêtes avancés avec ActiveRecord

Modèle de données

Schéma de donnée : Construction / maintenance

Les migrations Rails

Migration - Evolution & maintenance de schémas rails

Theming

Creating views in ruby on rails

The Beginner's Guide to Rails Helpers

API

How to configure your first rails rest API

ROR Configuration

Class Autoloading

How to safely store API keys in Rails apps

Tests unitaires

Test unitaire avec ROR

How to Properly Test a Rails API with Rspec