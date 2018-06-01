var questions = [{
        question: "Un microcontrôleur, pour fonctionner, a besoin au minimum:",
        answers: [
            ["D'une unité centrale", 1],
            ["De mémoire morte pour le programme (PROM, EPROM, …)", 1],
            ["De mémoire vive, pour les calculs ou pour stocker temporairement les données", 1],
            ["De capteurs analogiques", 0],
            ["De circuits d'interface d'E/S", 1],
            ["D'un CAN", 0]
        ]
    },
    {
        question: "De combien de bus est équipé le microcontrôleur?",
        answers: [
            ["1 bus", 0],
            ["2 bus", 0],
            ["3 bus", 1]
        ]
    },
    {
        question: "Par les bus équipant le microcontrôleur, figurent:",
        answers: [
            ["Le bus de données", 1],
            ["Le bus d'adressage", 1],
            ["Le bus d'instruction", 0],
            ["Le bus de contrôle", 1]
        ]
    },
    {
        question: "Le chien de garde est un périphérique qui a pour rôle:",
        answers: [
            ["De fournir le signal d'horloge de synchronisation de la CPU", 0],
            ["De surveiller le temps d'exécution du programme et de réinitialiser la CPU en cas de blocage", 1],
            ["De contrôler les flux d'entrée/sorties de l'interface parallèle", 0]
        ]
    },
    {
        question: "Parmi les périphériques du microcontrôleur, CAN signifie:",
        answers: [
            ["Controller Area Network", 0],
            ["Convertisseur Analogique-Numérique (Analogic Digital interface)", 1],
            ["Capteur Analogique ou Numérique", 0]
        ]
    },
    {
        question: "Le prix du microcontrôleur est aussi élevé que la somme des parties qui le constitue?",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Le microcontrôleur trouve des applications:",
        answers: [
            ["En Médecine (commande d'une pompe à insuline, pacemaker,…)", 1],
            ["En électronique embarquée (robotique, modélisme, téléphonie mobile…)", 1],
            ["Dans l'industrie manufacturière, pour le pilotage de processus industriels complexes", 0],
            ["Dans les centres de calculs météorologiques, pour prévoir le temps qu'il fera.", 0],
            ["En micro-informatique, pour la réalisation de périphériques tels que les souris, les tablettes graphique, …", 1]
        ]
    },
    {
        question: "Le marché du microcontrôleur continue à progresser dans le monde, entre autres, pour les raisons suivantes:",
        answers: [
            ["Les constructeurs adaptent leur offre à la demande en développant toute une gamme de microcontrôleurs allant du plus basique (technologie 4 bits) au plus performant (technologie 32 bit)", 1],
            ["Les innovations de synthèse dans les équipements électroniques « grand public » créent un besoin supplémentaire.", 1],
            ["L'intégration et la miniaturisation continue pour le moment à suivre la loi de Moore, offrant davantage de performances pour un prix plus faible.", 1]
        ]
    },
    {
        question: "Lorsque plusieurs entrées/sorties logiques sont associées matériellement, on dit qu'elles forment un port.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Les entrées logiques associées à un port peuvent être dans certains cas assimilées à un mot binaire codé sur 8 bits (octet ou byte).",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Les broches RA0/AN0 et RA1/AN1 du PIC16F87 peuvent être raccordées à:",
        answers: [
            ["Un détecteur de mouvement", 1],
            ["Un capteur analogique de température", 1],
            ["Un codeur absolu de position", 0],
            ["Un étage de puissance pour la commande en TOR d'un moteur", 1],
            ["Une LED", 1]
        ]
    },
    {
        question: "Les DSP (Digital Signal Processor) sont des microcontrôleurs dédiées à des tâches spécialisées de traitement numérique de signaux analogiques (ex. Gestion des entrées d'une carte son).",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Un microcontrôleur de 4, 8, 16 ou 32 bits dispose d'un bus de données de 4, 8, 16 ou 32 lignes.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Si l'Unité Centrale (CPU) du microcontrôleur est en technologie RISC, cela signifie que:",
        answers: [
            ["Le microcontrôleur est optimisé pour n'effectuer qu'une instruction par cycle d'horloge interne", 1],
            ["Elle utilise un jeu étendu d'instructions en langage machine", 0],
            ["Elle permet une meilleure exploitation des ressources matérielles du microcontrôleur", 1],
            ["Le travail du compilateur des langages de haut niveau est simplifié.", 0]
        ]
    },
    {
        question: "Si l'Unité Centrale (CPU) du microcontrôleur est construite suivant une architecture de Von Neumann, cela signifie que:",
        answers: [
            ["Elle communique avec un seul bloc mémoire à l'aide d'un bus sur 12, 14 ou 16 bits", 0],
            ["Elle communique avec un seul bloc mémoire à l'aide d'un bus sur 8 bits", 1],
            ["Elle communique avec deux mémoires à l'aide d'un bus sur 12, 14 ou 16 bits", 0],
            ["Elle communique avec deux mémoires à l'aide d'un bus de 12, 14 ou 16 bits et un autre de 8 bits", 0]
        ]
    },
    {
        question: "Si l'Unité Centrale (CPU) du microcontrôleur est construite suivant une architecture HARVARD, cela signifie que:",
        answers: [
            ["Elle communique avec un seul bloc mémoire à l'aide d'un bus sur 12, 14 ou 16 bits", 0],
            ["Elle communique avec un seul bloc mémoire à l'aide d'un bus sur 8 bits", 0],
            ["Elle communique avec deux mémoires à l'aide d'un bus sur 12, 14 ou 16 bits", 0],
            ["Elle communique avec deux mémoires à l'aide d'un bus de 12, 14 ou 16 bits et un autre de 8 bits", 1]
        ]
    },
    {
        question: "Dans l'architecture HARVARD, sile bus provenant de la mémoire morte (ROM) contient 14 bits, cela signifie que:",
        answers: [
            ["8 bits sont allouées à la donnée", 1],
            ["8 bits sont allouées à l'adressage", 0],
            ["6 bits sont allouées à la donnée", 0],
            ["6 bits sont allouées à l'adressage", 1]
        ]
    },
    {
        question: "La technologie CISC tend à disparaître au profit de la technologie RISC car elle est trop complexe à programmer et qu'elle revient trop chère en prototypage.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "L'intérêt de l'utilisation du microcontrôleur dans les systèmes embarqués par rapport à un microprocesseur ou à toute autre unité de traitement numérique programmable est:",
        answers: [
            ["Qu'on peut réduire considérablement le nombre de composants sur le circuit électronique et diminuer ainsi l'encombrement", 1],
            ["Qu'on a une fiabilité accrue de l'automatisme", 1],
            ["Que les coûts sont très fortement réduits notamment pour les moyennes et grandes séries", 1],
            ["Que son autonomie énergétique est élevé en raison de ses modes de veille", 1]
        ]
    },
    {
        question: "Ce qui différencie les microcontrôleur de même gamme commercialisés par des constructeus différents, c'est:",
        answers: [
            ["Leur boîtier", 0],
            ["Leur système de refroidissement", 0],
            ["Leur langage assembleur", 1],
            ["Le nombre de périphériques de liaison série qu'ils intègrent", 0]
        ]
    },
    {
        question: "Le loi de Moore est une loi physique décrivant l'évolution technologique des composants informatiques dans le temps.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Le microcontrôleur peut convenir pour la commande des petits automatismes car:",
        answers: [
            ["Sa puissance bien qu'étant plus faible que celle du µP est suffisante", 1],
            ["La taille de sa mémoire est relativement faible et il ne peut manipuler de grands volumes de données", 1],
            ["Il ne sait pas faire de surveillance de signaux en temps réel", 0],
            ["Son coût est moindre que celui des autres solutions programmables.", 1]
        ]
    },
    {
        question: "Le microcontrôleur offre une alternative intéressante à la logique câblée parce que:",
        answers: [
            ["Il est plus rapide à mettre en œuvre", 0],
            ["Il peut être reprogrammé et exécuter des séquences différentes sans modifier le câblage.", 1],
            ["Son coût est moindre dans la mesure où le nombre d'entrées/sorties est faible.", 0]
        ]
    },
    {
        question: "Les constructeurs ont choisi la technologie TTL plutôt que la technologie CMOS afin de réduire la consommation énergétique du microcontrôleur.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: " Pour réduire la consommation d'énergie électrique, on a plutôt intérêt à faire travailler le microcontrôleur à la fréquence la plus élevée.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Un microcontrôleur est un composant satique qui peut fonctionner sans perte de données et sans dysfonctionnement jusqu'à une fréquence d'horloge nulle (arrêt complet).",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Pour réduire davantage la consommation énergétique, les constructeurs ont introduits dans certains modèles récents de microcontrôleur un embryon de système d'exploitation pour permettre aux développeurs de mieux gérer les modes de veilles.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Le schéma bloc représenté ci-dessous montre que le microcontrôleur PIC 16F87/88 dispose:",
        answers: [
            ["2 ports d'E/S logiques", 1],
            ["5 entrées analogiques", 0],
            ["1 ROM et 1 RAM sur des bus de taille différente", 1],
            ["1 mémoire FLASH", 1],
            ["1 périphérique I²C", 0],
            ["3 Timers", 1]
        ]
    },
    {
        question: "Pour un microcontrôleur de la série PIC16 de Microchip, lorsque la fréquence d'horloge externe imposée par le quartz est de 20 MHz, on obtient une puissance de traitement égale à:",
        answers: [
            ["20 MIPS", 0],
            ["10 MIPS", 0],
            ["5 MIPS", 1],
            ["2 MIPS", 0]
        ]
    },
    {
        question: "La broche /MCLR doit être maintenue au niveau logique 1 afin de permettre la réinitialisation du microcontrôleur.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "La résistance de tirage (pull up ou pull down) permet de fixer le potentiel d'une entrée et éviter de la laisser à un potentiel flottant.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "La RAM (Random Access Memory) est une mémoire volatile utilisée pour le stockage temporaire de données. Ces données disparaissent en cas de coupure de l'alimentation.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "La ROM (Read Only Memory) est une mémoire de masse utilisée pour le stockage du programme. Ces données sont conservées même en cas de coupure de l'alimentation.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "L'utilisation d'une EPROM dans un microcontrôleur signifie que la programmation de l'unité de traitement est entièrement et définitivement dédiée à l'application qu'elle contrôle. Il n'y a plus de modification possible ultérieurement.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "L’utilisation d’une EEPROM dans un microcontrôleur signifie que la programmation de l’unité de traitement est entièrement et définitivement dédiée à l’application qu’elle contrôle. Il n’y a plus de modification possible ultérieurement.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "La taille du bus de données est différente d'une famille de microcontrôleur à l'autre. Elle est de 8 lignes pour le microcontrôleur à 8 bits et de 32 lignes pour celui à 32 bits.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Le microcontrôleur est équipé de périphériques de liaison série et parallèle pour:",
        answers: [
            ["Lui relier un clavier et un écran de micro-ordinateur", 0],
            ["Assurer la communication avec son environnement matériel", 1],
            ["Pour sa programmation à l'aide d'un module externe équipé d'une liaison série/parallèle", 0]
        ]
    },
    {
        question: "Le rôle des timers dans le microcontrôleur est de:",
        answers: [
            ["Créer des temporisations (délai entre 2 évènements)", 1],
            ["De compter des évènements (exemple: le nombre d'instructions exécutées dans le programme)", 1],
            ["Mesurer le temps entre 2 évènements distincts", 1],
            ["De générer en collaboration avec le mode CCP1 des signaux PWM", 1]
        ]
    },
    {
        question: "Les interruptions sont un mode de fonctionnement prioritaire qui se superpose au mode de fonctionnement habituel, séquence par séquence, afin de prendre en compte les évènements extérieurs imprévisibles. Les interruptions permettent par conséquent au microcontrôleur d'être utilisé dans les applications en « temps réel ».",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "La tension d'alimentation du microcontrôleur est une tension alternative dont la valeur efficace est comprise entre 4,5V et 5,5V.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "On prend une tension d'alimentation de 5V continu car pour cette valeur la combinaison tension/fréquence est acceptable pour le bon fonctionnement du microcontrôleur.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Le potentiel VDD sur les schémas électriques de raccordement désigne le potentiel de 0 V tandis que VSS désigne le potentiel de +5V.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Dans les schémas électriques,suivant la norme américaine, la masse est désignée par GND (pour Ground) et porte le même symbole que celui de la terre dans la norme européenne.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "On peut se passer d'une stabilisation locale par un oscillateur à quartz et utiliser un oscillateur externe pour cadencer l'horloge du microcontrôleur.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Il est possible de faire fonctionner un microcontrôleur en dessous de la fréquence donnée par le constructeur.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Un circuit résonant RC peut être utilisé à la place d'un oscillateur à quartz lorsque la contrainte en précision sur le temps est faible dans l'application.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Dans le schéma électrique suivant, montrant les différentes adaptations d'entrées logiques qu'on peut utiliser, on peut remplacer les interrupteurs par:",
        answers: [
            ["Un détecteur de luminosité", 1],
            ["Un capteur piézoélectrique de pression", 0],
            ["Un bouton poussoir CMS", 1],
            ["Un interrupteur bipolaire", 1],
            ["Un interrupteur à glissière", 1],
            ["Un ILS (Interrupteur à Lame Souple)", 1]
        ]
    },
    {
        question: "Dans un optocoupleur, lorsque la base du phototransistor est illuminée par la led, on peut considérer que le phototransistor se comporte comme un interrupteur ouvert.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Il est nécessaire de placer une résistance en série avec la LED infrarouge de l'optocoupleur afin de limiter le courant la traversant et faire chuter la tension à ses bornes aux alentours de sa tension de seuil.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "La valeur de la résistance placée en série de LED de signalisation dépend de:",
        answers: [
            ["La couleur de la LED", 1],
            ["La température de couleur du spectre d’émission", 0],
            ["De la température ambiante", 1],
            ["Du courant limite traversant la LED", 1]
        ]
    },
    {
        question: "L'optocouplage permet:",
        answers: [
            ["Transmettre une information d'un circuit vers un autre sans liaison physique", 1],
            ["Diminuer les coûts d'exploitation de l'application", 0],
            ["D'augmenter la vitesse de traitement des informations", 0]
        ]
    },
    {
        question: "Dans le raccordement d'un clavier à 12 touches, le réseau de colonnes et de ligne utilisé permet à toutes les touches d'être identifiables au même instant.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Un calibration des signaux analogiques en entrée ANX du microcontrôleur est nécessaire si on souhaite avoir une mesure qualitative de la grandeur physique.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "La sortie du microcontrôleur peut débiter un courant suffisant pour permettre la rotation d'un moteur à courant continu et à aimant permanent.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "La sortie du microcontrôleur peut débiter directement un courantsuffisant pour permettre d'actionner un buzzer (ronfleur).",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "L'utilisation d'un étage de puissance à transistor MOSFET de puissance nécessite que la broche de sortie permette de débiter un courant de quelques mA.",
        answers: [
            ["Vrai", 0],
            ["Faux", 1]
        ]
    },
    {
        question: "Pour utiliser un afficheur à 7 segments avec un microcontrôleur, il n'est pas nécessaire d'utiliser un décodeur 4511B. Les 7 segments peuvent être raccordés à 7 broches de sortie du microcontrôleur.",
        answers: [
            ["Vrai", 1],
            ["Faux", 0]
        ]
    },
    {
        question: "Les sorties PWM permettent:",
        answers: [
            ["Produire des sons dans un haut-parleur", 1],
            ["Faire varier la vitesse de rotation d'un moteur à courant continu", 1],
            ["Alimenter une batterie d'accumateur Li-Po pour la recharger", 0]
        ]
    },
    {
        question: "Qu'est-ce qu'un WatchDog Timer (chien de garde)?",
        answers: [
            ["Un dispositif de correction d'erreur (comme le CRC).", 0],
            ["Un dispositif réagissant au plantage du µC", 1],
            ["un programme de radio-réveil digital", 0]
        ]
    },
    {
        question: "Qu'est-ce que le pointeur d'instruction?",
        answers: [
            ["Le registre contenant l'instruction en cours.", 0],
            ["Le registre contenant l'adresse de l'instruction en cours.", 0],
            ["Le registre contenant l'adresse de l'instruction suivante.", 1]
        ]
    },
    {
        question: "De combien de bus externes est composé un microprocesseur?",
        answers: [
            ["1", 0],
            ["2", 0],
            ["3", 1]
        ]
    },
    {
        question: "Un microcontrôleur disposant d'un bus d'adresse de 16 bits aura accès à:",
        answers: [
            ["64ko de mémoire.", 1],
            ["128ko de mémoire.", 0],
            ["256ko de mémoire.", 0]
        ]
    },
    {
        question: "Un microprocesseur dit RISC a pour principales caractéristiques:",
        answers: [
            ["Un set d'instructions étendu et un nombre de cycles par instruction élevé", 0],
            ["Des set d'instructions et nombre de cycles par instruction réduits", 1],
            ["Un set d'instructions réduit et un nombre de cycles par instruction élevé", 0]
        ]
    },
    {
        question: "À quoi sert le signal ALE d'un microprocesseur?",
        answers: [
            ["À signaler à la circuiterie périphérique qu'une adresse est présente.", 1],
            ["À lire la mémoire.", 0],
            ["À écrire la mémoire.", 0]
        ]
    },
    {
        question: "Quand doit-on mettre des résistances de pull-up sur les E/S d'un microprocesseur?",
        answers: [
            ["Lorsque le µC est alimenté en 5V", 0],
            ["Lorsqu'on utilise une RAM dynamique", 0],
            ["Lorsque ces dernières sont à drain/collecteur ouvert", 1]
        ]
    },
    {
        question: "Problème: Votre montage à microcontrôleur doit réagir à un événement. Toutefois, il dure beaucoup trop peu de temps que pour être détecté par le µC. Qu'utilisez-vous?",
        answers: [
            ["Une bascule monostable.", 1],
            ["Une bascule bistable.", 0],
            ["Une bascule tristable.", 0]
        ]
    },
    {
        question: "Que sont les condensateurs de découplage?",
        answers: [
            ["Des réserves en cas de baisse de tension", 0],
            ["Des filtres anti-parasites placés en parallèle sur l'alimentation des circuits intégrés", 1],
            ["Des composants anti-surtension (électricité statique, ...)", 0]
        ]
    },
    {
        question: "Que représente le bit Carry du Status Register?",
        answers: [
            ["Division par zéro.", 0],
            ["Interruption.", 0],
            ["Report d'addition", 1]
        ]
    }
]
