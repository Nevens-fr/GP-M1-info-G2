let lireData = {
    "facile": [
        {
            "type":"QCM",
            "question": "Cherche l'intrus dans cette liste de synonymes du nom \"bruit\".",
            "nbPoss" : "3",
            "possibilite" : ["Murmure", "Vacarme", "Vacances"],
            "reponse": "Vacances",
            "correction" : "\"Vacances\" n'est pas un synonyme du nom \"bruit\" car il n'a pas la même signification."
        },
        {
            "type":"QCM",
            "question": "Choisis le bon mot homonyme dans cette phrase : \"Le ... de confiture est vide\".",
            "nbPoss" : "3",
            "possibilite" : ["Peau", "Pot", "Pau"],
            "reponse": "Pot",
            "correction" : "La bonne réponse est Pot. Il ne faut pas confondre le \"pot\", le récipient, la \"peau\", qui est l'organe le plus grand du corps humain et la ville de Pau."
        },
        {
            "type":"QCM",
            "question": "Trouve le champ lexical de cette liste de mots : \"Pas - Chaussons - Classique - Geste - Tutu\".",
            "nbPoss" : "3",
            "possibilite" : ["Danse", "Théatre", "Cinéma"],
            "reponse": "Danse",
            "correction" : "Ces mots appartiennent à un même champ lexical qui constitue un ensemble de mots se rapportant à une idée ou un même thème. Ici, leur point commun est l'évocation de l'univers de la danse."
        },
    ],    
    "moyen": [
        {
            "type":"QCM",
            "question": "Qu'est-ce qu'un pêcheur accroche sur son hameçon pour attirer les poissons ? Pour répondre à cette question, trouve le bon homonyme.",
            "nbPoss" : "3",
            "possibilite" : ["Un vert de terre", "Un verre de terre", "Un ver de terre"],
            "reponse": "Un ver de terre",
            "correction" : "Un ver de terre. Les homonymes sont des mots qui se prononcent de la même façon mais n'ont pas le même sens. Un ver est un petit lombric. \"Vert\" est un adjectif ou un nom désignant une couleur. \"Verre\" est le récipient avec lequel on boit."
        },
        {
            "type":"QCM",
            "question": "Trouve le champ lexical de cette liste de mots : \"Page - Lire - Passionnant - Auteur - Fantastique\". ",
            "nbPoss" : "3",
            "possibilite" : ["Journal", "Livre", "Dictionnaire"],
            "reponse" : "Livre",
            "correction" : "Tous ces mots ont un point commun : ils évoquent l'univers du livre."
        },
        {
            "type":"QCM",
            "question": "Trouve l'antonyme (l'opposé) du mot entre crochets  \"Un travail \[soigné\]\"",
            "nbPoss" : "3",
            "possibilite" : ["Bâclé", "Terminé", "Malade"],
            "reponse" : "Bâclé",
            "correction" : "\"bâclé\" (fait rapidement, avec négligence) est l'antonyme, le contraire du mot \"soigné\" qui signifie fait avec soins."
        },
        {
            "type":"QCM",
            "question": "Trouve le champs lexical de cette liste de mots : \"Lion - Otarie - Agile - Saut - Ballon - Chapiteau\".",
            "nbPoss" : "3",
            "possibilite" : ["Cinéma", "Forêt", "Cirque"],
            "reponse" : "Cirque",
            "correction" : "Tous ces mots ont un point commun : ils évoquent l'univers du cirque."
        }
    ],
    "difficile":[
        {
            "type":"QCM",
            "question": "Cherche l'intrus dans cette liste de synonymes du nom \"habitation\"",
            "nbPoss" : "3",
            "possibilite" : ["Demeure", "Logement", "Habitude"],
            "reponse": "Habitude",
            "correction" : "Le mot \"habitude\" a un sens différent et évoque la manière usuelle d'agir et de se comporter d'une personne."
        },
        {
            "type":"QCM",
            "question": "\"Amer - Délicieux - Langue - Papille - Palais - Vision\". Dans cette liste de mots, \"vision\" est-il un intrus ?",
            "nbPoss" : "2",
            "possibilite" : ["Vrai", "Faux"],
            "reponse": "Vrai",
            "correction" : "Le mot \"vision\" n'appartient pas au champ lexical du goût. C'est un autre de nos cinq sens."
        }
    ],
    "nbF" : 4,
    "nbM" : 4,
    "nbD" : 2
}

let compterData =
{
    "facile" : [
        {
            "type":"QAS",
            "question": "5 * 2 ?",
            "reponse": "10",
            "correction" : "5 * 2 = 10."
        },
        {
            "type":"QAS",
            "question": "Quel est le double de 7 ?",
            "reponse": "14",
            "correction" : "7 + 7 = 14."
        },
        {
            "type":"QCM",
            "question": "8 * 2 ?",
            "nbPoss" : "3",
            "possibilite" : ["15", "16", "17"],
            "reponse": "16",
            "correction" : "8 * 2 = 16."
        },
        {
            "type":"QAS",
            "question": "Quel est le double de 9 ?",
            "reponse": "18",
            "correction" : "9 + 9 = 18."
        },
        {
            "type":"QCM",
            "question": "9 * 7 ?",
            "nbPoss" : "3",
            "possibilite" : ["63", "68", "59"],
            "reponse": "63",
            "correction" : "9 * 7 = 63."
        },
        {
            "type":"QCM",
            "question": "Un papa et son fils ont 36 ans à eux deux. Le papa à 30 ans de plus que son fils. Quel est âge à l’enfant ?",
            "nbPoss" : "3",
            "possibilite" : ["1 an", "3 ans", "6 ans"],
            "reponse": "6 ans",
            "correction" : "30 ans plus 6 ans = 36, soit l'âge total du père et de son fils."
        }
    ],
    "moyen" : [
        {    
            "type":"QCM",
            "question": "Combien font 66 + 66 ?",
            "nbPoss" : "3",
            "possibilite" : ["112", "121", "132"],
            "reponse": "132",
            "correction" : "On peut décomposer le calcul ainsi : 60 + 60 et 6 + 6. 60 + 60 = 120 et 6 + 6 = 12, donc 120 + 12 = 132."
        },
        {
            "type":"QCM",
            "question": "Combien font 55 + 55 ?",
            "nbPoss" : "3",
            "possibilite" : ["100", "110", "120"],
            "reponse": "110",
            "correction" : "On peut décomposer le calcul ainsi : 50 + 50 et 5 + 5. 50 + 50 = 100 et 5 + 5 = 10, donc 100 + 10 = 110."
        },
        {
            "type":"QCM",
            "question": "Léo avait rendez-vous chez son dentiste. Il est arrivé à 15 h 09 avec 24 minutes de retard. À quelle heure avait-il rendez-vous ?",
            "nbPoss" : "4",
            "possibilite" : ["14h40", "14h45", "15h34", "15h45"],
            "reponse": "14h45",
            "correction" : "On peut retirer 9 minutes aux 24 minutes de retard de Léo, on atteint ainsi 15h. Il ne reste plus que 15 minutes de retard et on passe à 14h45 avec 15h - 15 minutes."
        },
        {
            "type":"QAS",
            "question": "130 + 57 ?",
            "reponse": "187",
            "correction" : "130 + 57 = 187."
        },
        {
            "type":"QAS",
            "question": "348 - 100 ?",
            "reponse": "248",
            "correction" : "348 - 100 = 248."
        },
        {
            "type":"QAS",
            "question": "176 - 23 ?",
            "reponse": "153",
            "correction" : "176 - 23 = 153."
        }
    ],
    "difficile" : [
        {
            "type":"QCM",
            "question": "Quel est le résultat de 4 x 6 ?",
            "nbPoss" : "3",
            "possibilite" : ["24", "39", "28"],
            "reponse": "24",
            "correction" : "4 * 6 = 24."
        },
        {
            "type":"QCM",
            "question": "Quel est le résultat de 3 x 9 ?",
            "nbPoss" : "3",
            "possibilite" : ["36", "27", "29"],
            "reponse": "27",
            "correction" : "3 * 9 = 27."
        },
        {
            "type":"QCM",
            "question": "Avant de faire sa séance de sport, Léo s'est pesé : 52 kg. Juste après cette séance, il se pèse à nouveau : 50,750 kg. Combien de poids Léo a-t-il perdu pendant sa séance de sport ?",
            "nbPoss" : "4",
            "possibilite" : ["1,250 kg", "1,50 kg", "2,250 kg", "2,50 kg"],
            "reponse": "1,250 kg",
            "correction" : "On enlève 1kg aux 52kg de départ, on arrive à 51kg. De 51kg à 50,750 il reste donc 250 grammes. Soit un total de 1,250kg."
        },
        {
            "type":"QCM",
            "question": "M. Durand possède 250 euros. Il veut s'acheter des paires de chaussettes à 6 euros la paire. Combien de paires de chaussettes pourrait-il s'acheter ?",
            "nbPoss" : "4",
            "possibilite" : ["39", "40", "41", "42"],
            "reponse": "41",
            "correction" : "250 / 6 donne 41.6. Mais on ne peut pas acheter la 42 ème paire, donc 41."
        },
        {
            "type":"QAS",
            "question": "24 * 5 ?",
            "reponse": "120",
            "correction" : "24 * 5 = 120."
        },
        {
            "type":"QAS",
            "question": "38 * 2 ?",
            "reponse": "76",
            "correction" : "38 * 2  = 76."
        }
    ],
    "nbF" : 6,
    "nbM" : 6,
    "nbD" : 6
}


let ecrireData = {
    "facile" : [
        {
            "type":"PAT",
            "nb" : "3",
            "tab" : ["C'est toi qui nous (devoir / présent) ", "VIDE", " des excuses pour nous avoir fait attendre. (Conjuguez le verbe au bon temps)"],
            "reponse": ["doit"],
            "correction" : "La bonne réponse est \"doit\". Ici nous utilisons la deuxiéme personne du singuler au présent du verbe Devoir."
        },
        {
            "type":"QAS",
            "question": "Deux hectares échapp(e/ent/es) à la hache dévastatrice. (Choisissez la bonne terminaison et écrivez le mot en entier)",
            "reponse": "échappent",
            "correction" : "La bonne réponse est \"échappent\". Ici il y a plusieurs hectares (2) donc il faut utiliser la troisiéme personne du pluriel."
        },
        {
            "type":"PAT",
            "nb" : "3",
            "tab" : ["Super ! Les vacances (approcher / présent) ", "VIDE", " à grand pas ! (Conjuguez le verbe au bon temps)"],
            "reponse": ["approchent"],
            "correction" : "La bonne réponse est \"approchent\". Les vacances sont plusieurs, donc nous utilisons la troisiéme personne du pluriel."
        },
        {
            "type":"QCM",
            "question": "Un chauffard a renversé une vieille dame. \"une vieille dame\" est un :",
            "nbPoss" : "2",
            "possibilite" : ["COD", "COI"],
            "reponse": "COD",
            "correction" : "Pour retrouver le COD d'un verbe, il suffit le plus souvent de se poser la question 'qui ou quoi ?' après ce verbe."
        },
        {
            "type":"PAT",
            "nb" : "3",
            "tab" : ["Marie et Claire (manger / présent) ", "VIDE", "  dans le même restaurant tous les midis. (Conjuguez le verbe au bon temps)"],
            "reponse": ["mangent"],
            "correction" : "La bonne réponse est \"mangent\" du présent au pluriel car elles sont deux à allez au restaurant"
        },
        {
            "type":"QCM",
            "question": "Mon frère a pardonné à son ami. » ' son ami ' est un :",
            "nbPoss" : "2",
            "possibilite" : ["COD", "COI"],
            "reponse": "COI",
            "correction" : "Pour retrouver le COI d'un verbe, il suffit de se poser la question \"à qui, de qui, à quoi ou de quoi ?\" après ce verbe."
        }
    ],
    "moyen" : [
        {
            "type":"QAS",
            "question": "Ils courent les fêtes foraines et les égay(e/ent/es) de leurs farces. (Choisissez la bonne terminaison et écrivez le mot en entier)",
            "reponse": "égayent",
            "correction" : "La bonne réponse est \"égayent\"."
        },
        {
            "type":"QAS",
            "question": "Tu as repéré les chevreuils et tu les pourchass(e/ent/es). (Choisissez la bonne terminaison et écrivez le mot en entier)",
            "reponse": "pourchasses",
            "correction" : "La bonne réponse est \"pourchasses\"."
        },
        {
            "type":"PAT",
            "nb" : "7",
            "tab": ["Je ne sais pas s'il vous (entendre / présent) ", "VIDE" , ", les livres qu'il (recevoir / passé composé) ", "VIDE",  " le (captiver/présent) ", "VIDE", " depuis ce matin. (Conjuguez les verbes au bon temps)"],
            "reponse": ["entend", "a reçus", "captivent"],
            "correction" : "Les bonnnes réponses sont \"entend\", \"a reçus\" et \"captivent\"."
        },
        {
            "type":"QCM",
            "question": "Mon père a rencontré ma mère à un cocktail. \"Ma mère\" est un :",
            "nbPoss" : "2",
            "possibilite" : ["COD", "COI"],
            "reponse": "COD",
            "correction" : "Pour retrouver le COD d'un verbe, il suffit le plus souvent de se poser la question \"Qui ou quoi ?\" après ce verbe."
        },
        {
            "type":"QCM",
            "question": "Le livre que ma soeur m'a offert est un roman de science-fiction. \"M'\" est un :",
            "nbPoss" : "2",
            "possibilite" : ["COD", "COI"],
            "reponse": "COI",
            "correction" : "Pour retrouver le COI d'un verbe, il suffit de se poser la question \"à qui, de qui, à quoi ou de quoi ?\" après ce verbe."
        }
    ],
    "difficile" : [
        {
            "type":"QAS",
            "question": "Il les élèv(e/ent/es) avec amour. (Choisissez la bonne terminaison et écrivez le mot en entier)",
            "reponse": "élèvent",
            "correction" : "La bonne réponse est \"élèvent\"."
        },
        {
            "type":"PAT",
            "nb" : "5",
            "tab" : ["Toi et tes frères qui (voler / présent) ", "VIDE", " près du soleil, (pouvoir / conditionnel présent) ", "VIDE", "-vous lui demander s'il fera beau demain. (Conjuguez les verbes au bon temps)"],
            "reponse": ["volent", "pouvez"],
            "correction" : "Les bonnes réponses sont \"volent\" et \"pouvez\"."
        },
        {
            "type":"PAT",
            "nb" : "5",
            "tab" : ["Elles ne nous (croire / futur) ", "VIDE", " pas si nous leur (dire / présent du subjonctif) ", "VIDE", " que l’on ne s'est pas bagarré. (Conjuguez les verbes au bon temps)"],
            "reponse": ["croiraient", "disons"],
            "correction" : "Les bonnes réponses sont \"croiraient\" et \"disons\"."
        },
        {
            "type":"PAT",
            "nb" : "3",
            "tab" : ["Le chien bondit, ", "VIDE", " (aboyer / présent) et court dans tous les sens car il est heureux de voir son maître. (Conjuguez le verbe au bon temps)"],
            "reponse": ["aboie"],
            "correction" : "La bonne réponse est \"aboie\"."
        },
        {
            "type":"QCM",
            "question": "Mon père l'aime de tout son cœur. » ' l' ' est un :",
            "nbPoss" : "2",
            "possibilite" : ["COD", "COI"],
            "reponse": "COD",
            "correction" : "Pour retrouver le COD d'un verbe, il suffit le plus souvent de se poser la question \"Qui ou quoi ?\" après ce verbe."
        },
    ],
    "nbF" : 6,
    "nbM" : 5,
    "nbD" : 5
}

let utilisateurs = {
    "users" : [
        {
            "name" : "JeanPascal",
            "notesLecture" : ["10", "10", "10"],
            "notesEcriture" : ["10", "10", "10"],
            "notesCompter" : ["10", "10", "10"],
        }
    ],
    "nb":0
}
