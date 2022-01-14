let lireData = {
    "facile": [
            {
                "type":"QCM",
                "question": "Combien j'ai de de doigts ?",
                "possibilite" : ["3", "4", "5"],
                "nbPoss" : "3",
                "reponse": "5",
                "correction" : "Je suis un humain normalement constitué !"
            },
            {
                "type":"QCM",
                "question": "Pourquoi la vie ?",
                "nbPoss" : "4",
                "possibilite" : ["Parce que", "Euh...", "42", "Je ne sais pas"],
                "reponse": "42",
                "correction" : "C'est évident pourtant"
            },
            {
                "type":"QCM",
                "question": "C'est qui le plus fort des YATA ?",
                "nbPoss" : "4",
                "possibilite" : ["Axel", "Aurelien", "Thomas", "Yannis"],
                "reponse": "Axel",
                "correction" : "Réfléchis bien..."
            },
            {
                "type":"PAT",
                "nb" : "5",
                "tab" : ["J'ai ", "VIDE", " (Manger) ta mère, c'était", "VIDE", "(bon)"],
                "reponse": ["mangé", "bon"]
            },
            {
                "type":"PAT",
                "nb" : "3",
                "tab" : ["Il n'a pas ", "VIDE", "bonjour. (dire)"],
                "reponse": ["dit"]
            },
            {
                "type":"QAS",
                "question": "5 * 2",
                "reponse": "10"
            }
        ],
    }

//Variable contenant les questions concernant les calcus pour l'aide à domicile
let aideDomicileCalculData = {
    "facile": [
            {
                "type":"QCM",
                "question": "Lilie a 7 euros dans sa tirelire, sa grand-mère lui donne 6 euros. Combien d'argent a désormais Lilie dans sa tirelire ?",
                "possibilite" : ["13", "14", "15"],
                "nbPoss" : "3",
                "reponse": "13",
                "correction" : "Il faut calculer 7 + 6 . Le total est 13." 
            },
            {
                "type":"QCM",
                "question": "La maman de Jessica entre dans un supermarché avec 25 euros dans son porte-monnaie. Elle dépense 17 euros. Combien d'argent lui reste-t-il ? ",
                "possibilite" : ["7", "8", "10"],
                "nbPoss" : "3",
                "reponse": "8",
                "correction" : "Il faut calculer la différence entre 25 et 17. Il faut calculer 25-17. Il reste 8 € à la maman de Jessica." 
            },
            {
                "type":"QCM",
                "question": "Laure possède 35 euros. Une place de cinéma coûte 5 euros. Elle voudrait aller 7 fois au cinéma cette semaine. Aura-t-elle assez d'argent ?",
                "possibilite" : ["oui", "non"],
                "nbPoss" : "2",
                "reponse": "oui",
                "correction" : "5*7 = 35" 
            },
            {
                "type":"QAS",
                "question": "Le papa d'Antoine entre dans un supermarché avec 50 euros. Il achète 2 livres à 11 euros chacun et 2 cassettes vidéo à 12 euros chacune. Il donne à la caissière son billet de 50 euros, combien la caissière doit-elle lui rendre ?",
                "reponse": "4",
                "correction" : "2*11 (22) + 2*12 (24) = 46. Il reste 50-46 = 4" 
            }
        ],
    "moyen": [
            {
                "type":"QCM",
                "question": "Laure se rend à la boulangerie. Elle a un billet de 20 euros. A la fin, la boulangère lui rend 7€50. Combien Laure a-t-elle dépensée ?",
                "possibilite" : ["8,50€", "10,50€", "12,50€"],
                "nbPoss" : "3",
                "reponse": "12,50€",
                "correction" : "20 - 7,50 = 12,50€" 
            },
            {
                "type":"QAS",
                "question": "Benoît rentre dans un magasin de jouet avec un billet de 20 euros. Il veut acheter une peluche qui coûte 16,25€. Combien le caissier va-t-il lui rendre ?",
                "reponse": "3,75",
                "correction" : "20 - 16,25 = 3,75" 
            },
            {
                "type":"QCM",
                "question": "Etienne posséde 1 billet de 20€, 2 billet de 10€ et 1 billet de 5€. Pourra-t-il acheter une chaise qui coûte 46€ ?",
                "possibilite" : ["oui", "non"],
                "nbPoss" : "2",
                "reponse": "non",
                "correction" : "20+10+10+5 = 45. Il manque donc 1€ à Etienne pour acheter la chaise." 
            }
        ],
    "difficile": [
            {
                "type":"QCM",
                "question": "Bernard a un billet de 50€. Il achéte un pull à 13€, un jean à 16,45€ et des chaussettes à 6,15€. Combien va-t-il lui rester ?",
                "possibilite" : ["14,40€", "12,60€", "19,80€"],
                "nbPoss" : "3",
                "reponse": "14,40€",
                "correction" : "13 + 16,45 + 6,15 = 35,60€ et 50 - 35,60 = 14,40" 
            },
            {
                "type":"QAS",
                "question": "Gerard veut acheter une gomme qui coûte 0,37€. Il donne une piéce de 1€. Combien lui reste-t-il ?",
                "reponse": "0,63",
                "correction" : "1-0,37 = 0,63" 
            },
            {
                "type":"QCM",
                "question": "Etienne posséde 1 billet de 20€, 2 billet de 10€ et 1 billet de 5€. Pourra-t-il acheter une chaise qui coûte 46€ ?",
                "possibilite" : ["oui", "non"],
                "nbPoss" : "2",
                "reponse": "non",
                "correction" : "20+10+10+5 = 45. Il manque donc 1€ à Etienne pour acheter la chaise." 
            }
        ] 
    }
//Variable contenant les questions concernant la lecture pour l'aide à domicile
let aideDomicileLectureData = {
    "facile": [
            {
                "type":"QCM",
                "question": "Quand vous serez en mission chez une personne, lorsque vous faites du nettoyage, faites très attention lorsque vous manipulez des produits types javel,acide  ",
                "possibilite" : ["13", "14", "15"],
                "nbPoss" : "3",
                "reponse": "13",
                "correction" : "Il faut calculer 7 + 6 . Le total est 13." 
            },
            {
                "type":"QCM",
                "question": "La maman de Jessica entre dans un supermarché avec 25 euros dans son porte-monnaie. Elle dépense 17 euros. Combien d'argent lui reste-t-il ? ",
                "possibilite" : ["7", "8", "10"],
                "nbPoss" : "3",
                "reponse": "8",
                "correction" : "Il faut calculer la différence entre 25 et 17. Il faut calculer 25-17. Il reste 8 € à la maman de Jessica." 
            },
            {
                "type":"QCM",
                "question": "Laure possède 35 euros. Une place de cinéma coûte 5 euros. Elle voudrait aller 7 fois au cinéma cette semaine. Aura-t-elle assez d'argent ?",
                "possibilite" : ["oui", "non"],
                "nbPoss" : "2",
                "reponse": "oui",
                "correction" : "5*7 = 35" 
            },
            {
                "type":"QAS",
                "question": "Le papa d'Antoine entre dans un supermarché avec 50 euros. Il achète 2 livres à 11 euros chacun et 2 cassettes vidéo à 12 euros chacune. Il donne à la caissière son billet de 50 euros, combien la caissière doit-elle lui rendre ?",
                "reponse": "4",
                "correction" : "2*11 (22) + 2*12 (24) = 46. Il reste 50-46 = 4" 
            }
        ],
    "moyen": [
            {
                "type":"QCM",
                "question": "Laure se rend à la boulangerie. Elle a un billet de 20 euros. A la fin, la boulangère lui rend 7€50. Combien Laure a-t-elle dépensée ?",
                "possibilite" : ["8,50€", "10,50€", "12,50€"],
                "nbPoss" : "3",
                "reponse": "12,50€",
                "correction" : "20 - 7,50 = 12,50€" 
            },
            {
                "type":"QAS",
                "question": "Benoît rentre dans un magasin de jouet avec un billet de 20 euros. Il veut acheter une peluche qui coûte 16,25€. Combien le caissier va-t-il lui rendre ?",
                "reponse": "3,75",
                "correction" : "20 - 16,25 = 3,75" 
            },
            {
                "type":"QCM",
                "question": "Etienne posséde 1 billet de 20€, 2 billet de 10€ et 1 billet de 5€. Pourra-t-il acheter une chaise qui coûte 46€ ?",
                "possibilite" : ["oui", "non"],
                "nbPoss" : "2",
                "reponse": "non",
                "correction" : "20+10+10+5 = 45. Il manque donc 1€ à Etienne pour acheter la chaise." 
            }
        ],
    "difficile": [
            {
                "type":"QCM",
                "question": "Bernard a un billet de 50€. Il achéte un pull à 13€, un jean à 16,45€",
                "possibilite" : ["8,50€", "10,50€", "12,50€"],
                "nbPoss" : "3",
                "reponse": "12,50€",
                "correction" : "20 - 7,50 = 12,50€" 
            },
            {
                "type":"QAS",
                "question": "Gerard veut acheter une gomme qui coûte 0,37€. Il donne une piéce de 1€. Combien lui reste-t-il ?",
                "reponse": "0,63",
                "correction" : "1-0,37 = 0,63" 
            },
            {
                "type":"QCM",
                "question": "Etienne posséde 1 billet de 20€, 2 billet de 10€ et 1 billet de 5€. Pourra-t-il acheter une chaise qui coûte 46€ ?",
                "possibilite" : ["oui", "non"],
                "nbPoss" : "2",
                "reponse": "non",
                "correction" : "20+10+10+5 = 45. Il manque donc 1€ à Etienne pour acheter la chaise." 
            }
        ] 
    }

