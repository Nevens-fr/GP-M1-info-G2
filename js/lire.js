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
                "correction" : "13 + 16,45 + 6,15 = 35,60€ et 50 - 35,60 = 14,40€" 
            },
            {
                "type":"QAS",
                "question": "Gerard veut acheter une gomme qui coûte 0,37€. Il donne une piéce de 1€. Combien lui reste-t-il ?",
                "reponse": "0,63",
                "correction" : "1-0,37 = 0,63" 
            },
            {
                "type":"QCM",
                "question": "Ginette se rend au marché. Elle achète une courge a 1,50€, trois carottes à 2,30€ chacune et deux aubergines a 4,05€ chacune. Elle possède un billet de 10€, un billet de 5€, une pièce de 1€ et une pièce de 50 centimes. Combien va t-elle lui rester après avoir payer ? ",
                "possibilite" : ["3,30€", "1,32€","0€","2,09€","1,18€"],
                "nbPoss" : "5",
                "reponse": "0€",
                "correction" : "Au total Ginette devra payer 16,5€ (1,50€+(3*2,30€)+(2*4,05€)) et elle possède 16,5€ (10€+5€+1€+0,50€). Il lui reste donc au final 0€." 
            }
        ],
        "nbF" : 4,
        "nbM" : 3,
        "nbD" : 3 
    }


//Variable contenant les questions concernant la lecture pour l'aide à domicile
let aideDomicileLectureData = {
    "facile": [
            {
                "type":"QCM",
                "question": "Quand vous serez en mission chez une personne, lorsque vous faites du nettoyage, faites très attention lorsque vous manipulez des produits types javel,acide ou d'autres types de détergeants. Veuillez vous protéger avec des gants, un masque et des lunettes de protection. Lorsque vous manipulez des produits dangereux avec le masque et les gants, de quoi devez vous vous munir ?",
                "possibilite" : ["des lunettes de protection", "des lunettes de soleil", "un bout de tissu"],
                "nbPoss" : "3",
                "reponse": "des lunettes de protection",
                "correction" : "Il faut bien utiliser des lunettes de protection pour éviter des projections." 
            },
            {
                "type":"QCM",
                "question": "Cette semaine vous êtes chez madame Martin. Elle se lève à 7H30 tous les jours. Mercredi vous devrez faire des courses pour elle. On vous fournit votre emploi du temps. Elle a un rendez-vous au coiffeur vers 15h vendredi. A quelle heure vous devez lever Madame Martin cette semaine ?  ",
                "possibilite" : ["7h", "7h30", "8h"],
                "nbPoss" : "3",
                "reponse": "8h",
                "correction" : "Elle doit se lever à 7h30. Quand vous lisez un texte, essayez de récupérer les infos clé de chaque phrase." 
            },
            {
                "type":"QAS",
                "question": "Bernard a un billet de 50 euros. Il veut acheter des lunettes de protection en plastique pour le travail. Le problème c'est quand allant à la caisse, il perd son billet. Paniqué, il demande à la caissière de l'aider à retrouver son billet. Quel était le montant de son billet (en euros) ? ",
                "reponse": "50 euros",
                "correction" : "Et oui son billet était de 50€. Quand vous lisez un texte, essayez de récupérer les infos clé de chaque phrase." 
            },
        ],
    "moyen": [
            {
                "type":"QCM",
                "question": "Laure vient de se brûler avec de l'acide en voulant déboucher l'évier de Madame Martin. Elle commence à paniqué et se passe la main sous l'eau pour limiter les dégâts. Pourquoi Laure s'est elle brûlée la main ? ",
                "possibilite" : ["car elle voulait allumer la cheminée", "car elle faisait à manger pour Madame Martin", "car elle était entrain de déboucher l'évier avec de l'acide"],
                "nbPoss" : "3",
                "reponse": "car elle était entrain de déboucher l'évier avec de l'acide€",
                "correction" : "En effet, le texte dit bien que Laure se brûle avec de l'acide au début du texte. Quand vous lisez un texte, essayez de récupérer les infos clé de chaque phrase." 
            },
            {
                "type":"QAS",
                "question": "Viviane est dans la société Maisonménage depuis 5 ans. Elle a à charge deux patient régulier Monsieur Raymond et Madame Martine. Pour les activités, Viviane joue au échec avec Madame Martine et emmène Monsieur Raymond chaque Mercredi au cinéma dans sa voiture rouge. Viviane s'ocuppe de combien de patient ?",
                "reponse": "deux",
                "correction" : "Elle a deux patient à charge." 
            },
            {
                "type":"QAS",
                "question": "Etienne utilise un aspirateur de la marque Viteck chez Madame Robert. Cet aspirateur correspond aux normes conseillé par la société où travaille Raymond. En effet, il est silencieux, il accroche bien les sols et il est sans fil. De quel marque est l'aspirateur ?",
                "reponse": "Viteck",
                "correction" : "La marque de l'aspirateur d'Etienne est bien Viteck." 
            }
        ],
    "difficile": [
            {
                "type":"QCM",
                "question": "Madame Joubert possède trois chats, deux chiens et un perroquet. La semaine dernière Sabrina a retrouvé un chat et un chien de Madame Joubert devant la maison de celle-ci. Ils étaient décédés. Pour la consoler, Sabrina emmena Madame Joubert à l'animalerie. Combien Madame Joubert a d'animaux lorsque Sabrina l'emmène à l'animalerie.",
                "possibilite" : ["4", "3", "2"],
                "nbPoss" : "3",
                "reponse": "4",
                "correction" : "Et oui elle possède que 4 animaux car un des ses chats et un de ses chiens sont décédés." 
            },
            {
                "type":"QAS",
                "question": "Gérard est dans le rayon ménager. Il veut acheter du détergent, du désodorisants et du produit pour la vaisselle. Il achète d'abord trois produits pour la vaisselle. Ensuite, il prend deux désodorisants. Puis il va à la boucherie acheter un steak. Et enfin, il retourne dans le rayon ménager pour acheter quatre bouteilles de détergent. Combien de produit ménager a-t-il acheté au total ?",
                "reponse": "9",
                "correction" : "Et oui, Gérard achète 9 produits ménager." 
            }
        ],
        "nbF" : 3,
        "nbM" : 3,
        "nbD" : 2 
    }

//Variable contenant les questions concernant l'écriture pour l'aide à domicile
let aideDomicileEcritureData = {
    "facile": [
            {
                "type":"QAS",
                "question": "Vous devez nettoyer et aspirer de la poussiére chez quelqu'un, quel machine utilisez-vous ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "aspirateur",
                "correction" : "L'aspirateur est la machine la plus efficace pour nettoyer et aspirer la poussiére." 
            },
            {
                "type":"QAS",
                "question": "Vous renversez un verre de jus par terre, le sol est sale. Quel instrument utilisez-vous ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "serpillère",
                "correction" : "La serpillère est l'instrument le plus efficace pour nettoyer le sol." 
            },
            {
                "type":"QAS",
                "question": "Vous devez nettoyer de la poussiére sur des meubles. Qu'utilisez-vous pour nettoyer ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "chiffon",
                "correction" : "Le chiffon sert à enlever la poussiére des meubles." 
            },
        ],
    "moyen": [
            {
                "type":"QAS",
                "question": "Vous devez nettoyer le sol avec une serpillère, que mettez vous dans l'eau ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "savon",
                "correction" : "Le savon permet de laver le sol de toute ses saletés." 
            },
            {
                "type":"QAS",
                "question": "Vous devez nettoyer les toilettes. Quel détergent utilisez-vous ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "produit wc",
                "correction" : "Le produit wc permet de laver les toilettes." 
            },
            {
                "type":"QAS",
                "question": "La personne que vous aidez se sent mal, où l'allongez-vous aprés avoir appelé les urgences ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "lit",
                "correction" : "Le lit est confortable et permet de ne pas stresser la personne." 
            },
        ],
    "difficile": [
            {
                "type":"QAS",
                "question": "Vous vous blessez ou la personne que vous aidez se blesse et saigne, que lui mettez vous pour arreter le saignement ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "pansement",
                "correction" : "Le pansement permet d'arreter le saignement." 
            },
            {
                "type":"QAS",
                "question": "La personne que vous aidez n'a plus rien à manger dans son frigo, où allez vous prendre acheter de la nourriture ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "supermarché",
                "correction" : "Le supermarché est l'endroit où vous pouvez acheter de la nourriture." 
            },
            {
                "type":"QAS",
                "question": "Vous devez cuisinez pour la personne, quel ustensile utilisez-vous pour épluchez les légumes ? (Ecrivez juste le nom, sans rien devant)",
                "reponse": "économe",
                "correction" : "L'économe vous permet d'éplucher facilement les légumes." 
            },
        ],
        "nbF" : 3,
        "nbM" : 3,
        "nbD" : 3 
    }