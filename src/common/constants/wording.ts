/** @format */

import {
  BACKGROUND_LOGIN,
  BACKGROUND_LOGIN_A,
  BACKGROUND_LOGIN_B,
  BACKGROUND_LOGIN_C,
  BACKGROUND_LOGIN_D,
  BACKGROUND_REGISTER_A,
  BACKGROUND_REGISTER_B,
  BACKGROUND_REGISTER_C,
  BACKGROUND_REGISTER_D
} from "../../assets/images";

export const WORDS = {
  shared: {},
  header: {
    nav_items: [
      {
        label: "Accueil",
        to: "/accueil"
      },
      {
        label: "Histoire",
        to: "/histoire"
      },
      {
        label: "Patrimoine & tourisme",
        to: "/site-touristique"
      },
      {
        label: "Culture & gastronomie",
        to: "/culture-gastronomie"
      },/* 
      {
        label: "Evènements",
        to: "/evenement"
      }, */
      {
        label: "Guide touristique",
        to: "/guide-touristique" /* ,
        dropdown: [
          { label: "Blog Details", to: "#" },
          { label: "Pricing", to: "#" },
          { label: "Destination details", to: "#" },
          { label: "Tour details", to: "#" },
          { label: "Terms & Conditions", to: "#" },
          { label: "Privacy Policy", to: "#" }
        ] */
      }
    ],
    login_button: {
      label: "Connexion",
      to: "/connexion"
    }
  },
  footer: {
    brand: {
      logo_alt: "Watountotche - Logo",
      tagline:
        "Explorez le Bénin — culture, gastronomie et patrimoine avec Watountotche."
    },

    navigation: {
      title: "Explorer",
      links: [
        { label: "Accueil", to: "/accueil" },
        { label: "Histoire", to: "/histoire" },
        { label: "Sites touristiques", to: "/sites-touristiques" },
        { label: "Culture et Gastronomie", to: "/culture-gastronomie" },
        // { label: "Guide touristique", to: "/guided-tours" },
        { label: "Evènements", to: "/evenement" },
        { label: "Guide touristique", to: "/guide-touristique" }
      ]
    },

    contact: {
      title: "Contact",
      email_label: "Email:",
      email_value: "contact@watountotche.bj",
      phone_label: "Téléphone:",
      phone_value: "+229 21 00 00 00",
      address_label: "Adresse:",
      address_value: "Cotonou, Bénin"
    },

    newsletter: {
      title: "Restez informé",
      placeholder_email: "Votre adresse e-mail",
      button_subscribe: "S'abonner",
      social: {
        facebook_aria: "Facebook",
        youtube_aria: "YouTube",
        instagram_aria: "Instagram"
      }
    },

    bottom: {
      copyright: "© 2025 Watountotche. Tous droits réservés."
    }
  },
  auth: {
    auth_slider: [
      {
        id: 1,
        title: "Lagune Ébrié Mood",
        description:
          "Respirez l'air doux, contemplez les reflets dorés et préparez votre prochaine échappée dans les paysages apaisants du Bénin.",
        location: "Cotonou, Benin",
        image: BACKGROUND_LOGIN_A
      },
      {
        id: 2,
        title: "Terres de Voyance",
        description:
          "Entre traditions et modernité, laissez-vous guider par les rencontres, les marchés et les saveurs authentiques.",
        location: "Ouidah, Benin",
        image: BACKGROUND_LOGIN_B
      },
      {
        id: 3,
        title: "Escapades Littorales",
        description:
          "Les plages préservées et le sable ivoire dessinent un itinéraire tout en douceur pour les voyageurs contemplatifs.",
        location: "Grand-Popo, Benin",
        image: BACKGROUND_LOGIN_C
      },
      {
        id: 4,
        title: "Rythmes & Lumières",
        description:
          "Laissez les festivals vous guider vers une immersion culturelle vibrante et lumineuse à chaque pas.",
        location: "Porto-Novo, Benin",
        image: BACKGROUND_LOGIN_D
      },
      {
        id: 5,
        title: "Pistes Sauvages",
        description:
          "Entre parcs, forêts et chemins secrets, explorez un Benin sauvage tout en restant connecté à une douceur moderne.",
        location: "Parc national, Benin",
        image: BACKGROUND_LOGIN
      }
    ],
    auth_slider_login: [
      {
        id: 1,
        title: "Lagune Ébrié Mood",
        description:
          "Respirez l'air doux, contemplez les reflets dorés et préparez votre prochaine échappée dans les paysages apaisants du Bénin.",
        location: "Cotonou, Benin",
        image: BACKGROUND_LOGIN_A
      },
      {
        id: 2,
        title: "Terres de Voyance",
        description:
          "Entre traditions et modernité, laissez-vous guider par les rencontres, les marchés et les saveurs authentiques.",
        location: "Ouidah, Benin",
        image: BACKGROUND_LOGIN_B
      },
      {
        id: 3,
        title: "Escapades Littorales",
        description:
          "Les plages préservées et le sable ivoire dessinent un itinéraire tout en douceur pour les voyageurs contemplatifs.",
        location: "Grand-Popo, Benin",
        image: BACKGROUND_LOGIN_C
      },
      {
        id: 4,
        title: "Rythmes & Lumières",
        description:
          "Laissez les festivals vous guider vers une immersion culturelle vibrante et lumineuse à chaque pas.",
        location: "Porto-Novo, Benin",
        image: BACKGROUND_LOGIN_D
      },
      {
        id: 5,
        title: "Pistes Sauvages",
        description:
          "Entre parcs, forêts et chemins secrets, explorez un Benin sauvage tout en restant connecté à une douceur moderne.",
        location: "Parc national, Benin",
        image: BACKGROUND_LOGIN
      }
    ],
    auth_slider_register: [
      {
        id: 1,
        title: "Portes d'Entrée",
        description:
          "Créez votre compte et ouvrez les portes de toutes les expériences Watountotche en un seul espace.",
        location: "Abomey, Benin",
        image: BACKGROUND_REGISTER_A
      },
      {
        id: 2,
        title: "Carnet de Route",
        description:
          "Enregistrements, favoris, parcours guidés : commencez votre carnet de voyage numérique dès maintenant.",
        location: "Cotonou, Benin",
        image: BACKGROUND_REGISTER_B
      },
      {
        id: 3,
        title: "Rencontres & Histoires",
        description:
          "Votre profil vous connecte à une communauté de voyageurs et de conteurs du Bénin.",
        location: "Ouidah, Benin",
        image: BACKGROUND_REGISTER_C
      },
      {
        id: 4,
        title: "Explorations Douces",
        description:
          "Un compte unique pour réserver, écouter, explorer et partager vos découvertes.",
        location: "Parc national, Benin",
        image: BACKGROUND_REGISTER_D
      }
    ],
    login: {
      title: "Connexion",
      subtitle: "Reprenez vos explorations en toute fluidité.",
      brand: {
        logo_alt: "Watountotche - Logo"
      },

      welcome: {
        title: "Bienvenue",
        subtitle: "Reprenez vos explorations en toute fluidité."
      },

      form: {
        email_label: "Adresse e-mail",
        email_placeholder: "email@exemple.com",
        errFormatEmail: "Veuillez renseigner une adresse e-mail valide.",
        errEmailVide: "Ce champs est obligatoire.",
        emailInfo: "Veuillez entrer une addresse email valide",

        password_label: "Mot de passe",
        password_placeholder: "••••••••",
        passwordInfo: "Mot de passe requis",
        errPasswordVide: "Ce champs est obligatoire.",

        remember_me: "Se souvenir de moi",
        forgot_password: "Mot de passe oublié ?",

        submit_button: "Se connecter",
        switchToRegister: "Pas encore de compte ?",

        no_account_text: "Pas encore de compte ?",
        register_link: "Créer un compte"
      },
      footer_paragraph: {
        text: "Vous avez déja un compte ?",
        link_text: "Créer un compte"
      },
      btn_checkbox: "Se souvenir de moi",
      btn_submit: "Se connecter",
      link_forgot_password: "Mot de passe oublié ?"
    },
    register_page: {
      title: "Créer un compte",
      subtitle: "Rejoignez la plateforme",

      welcome: {
        title: "Bienvenue",
        subtitle: "Inscrivez-vous sur la palteforme"
      },
      form: {
        firstname_label: "Nom",
        firstname_placeholder: "Votre nom",
        firstname_info: "Veuillez entrer votre nom",
        err_firstname_min: "Ce champs est obligatoire.",

        lastname_label: "Prenoms",
        lastname_placeholder: "Vos prenoms",
        lastname_info: "Veuillez entrer votre nom de famille.",
        err_lastname_min: "Ce champs est obligatoire.",

        country_origin_label: "Pays d'origine",
        country_origin_placeholder: "Votre pays d'origine",
        country_origin_info: "Veuillez entrer votre pays d'origine.",
        err_country_origin_min: "Ce champs est obligatoire.",

        country_residence_label: "Pays de résidence",
        country_residence_placeholder: "Votre pays de résidence",
        country_residence_info: "Veuillez entrer votre pays actuelle.",
        err_country_residence_min: "Ce champs est obligatoire.",

        language_label: "Langue préférée",
        language_placeholder: "Sélectionnez votre langue",
        language_info:
          "Veuillez entrer votre la langue dans laquelle vous naviguez.",
        err_language_required: "Ce champs est obligatoire.",

        email_label: "Adresse e-mail",
        email_placeholder: "email@exemple.com",
        email_info: "Veuillez entrer votre adresse email.",
        err_email_required: "Ce champs est obligatoire.",
        err_email_format: "Veuillez entrer une adresse email valide.",

        phone_label: "Numéro de téléphone",
        phone_info: "Veuillez entrer votre numéro de téléphone.",
        err_phone_required: "Ce champs est obligatoire.",
        err_phone_min:
          "Numéro Bénin invalide (attendu: 10 chiffres après +229).",

        password_label: "Mot de passe",
        password_placeholder: "••••••••",
        password_info:
          "Mot de passe très sécurisé : au moins 12 caractères, avec une majuscule, une minuscule, un chiffre et un caractère spécial.",
        err_password_required: "Ce champs est obligatoire.",
        err_password_strength:
          "Votre mot de passe doit contenir au moins 12 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.",

        confirm_password_label: "Confirmer le mot de passe",
        confirm_password_placeholder: "Retapez votre mot de passe",
        confirm_password_info:
          "Veuillez a ce que le mot de passe soit identique.",
        err_confirm_required: "Ce champs est obligatoire.",
        err_confirm_mismatch: "Le mot de passe ne correspond pas.",
        toggle_password_show: "Afficher le mot de passe",
        toggle_password_hide: "Masquer le mot de passe",
        toggle_confirm_show: "Afficher la confirmation du mot de passe",
        toggle_confirm_hide: "Masquer la confirmation du mot de passe",

        terms_text_prefix: "J'accepte les ",
        terms_link_label: "conditions d'utilisation",
        err_terms_required: "Validez pour finaliser votre inscription.",

        helper_text_prefix: "Vous avez déja un compte ?",
        helper_text_link: "Connectez-vous ici",

        submit_btn: "S'inscrire",
        next_step_btn: "Étape suivante",
        prev_step_btn: "Retour",
        already_have_account: "Vous avez déjà un compte ?",
        login_link: "Connexion",

        step_identity_label: "Profil explorateur",
        step_contact_label: "Coordonnées",
        step_security_label: "Sécurité"
      }
    },
    forgotPassword: {
      welcome: {
        title: "Mot de passe oublié ?",
        subtitle: "Entrez votre email pour recevoir le lien de réinitialisation"
      },

      title: "Réinitialisation du mot de passe",
      subtitle: "Recevez un lien sécurisé et redémarrez vos explorations.",

      form: {
        email_label: "Votre adresse email",
        emailInfo: "Saisissez l’adresse liée à votre compte Watountotche.",
        errEmailVide: "L'adresse email est requise.",
        errFormatEmail: "Veuillez entrer une adresse email valide."
      },

      button: {
        submit: "Envoyer le lien de réinitialisation",
        switchToLogin: "Se connecter"
      },

      footer_paragraph: {
        text: "Vous vous souvenez de votre mot de passe ?",
        link_text: "Revenir à la connexion"
      }
    }
  },
  home_page: {
    history_section: {
      title: "Chronologie & Histoire",
      subtitle: "Explorez les grandes ères qui ont forgé la nation béninoise."
    },
    destinations_section: {
      title: "Destinations Incontournables"
    },
    culture_section: {
      title: "Culture & Traditions"
    },
    search_section: {
      destination_label: "Destination",
      destination_placeholder: "Ville ou Hôtel...",
      type_label: "Type",
      type_options: ["Hôtel", "Chambre Meublée", "Résidence"],
      budget_label: "Budget Max",
      budget_options: ["Économique", "Confort", "Luxe"],
      submit_label: "Rechercher"
    },
    call_to_action_section: {
      text: "Transformez votre voyage de rêve en réalité — explorez les trésors du Bénin avec Watountotche.",
      cta_label: "Commencer l'aventure",
      image_alt: "Voyageur découvrant les trésors du Bénin"
    },
    hero_section: {
      title: "Découvrez le Bénin Authentique"
    },
    OurExperienceSection: {
      title: "Notre Mission",
      subtitle:
        "Découvrez l'âme du Bénin à travers ses histoires et ses trésors",
      description:
        "Watountotche vous invite à explorer le patrimoine culturel, gastronomique et touristique du Bénin. Avec des guides audio immersifs, des itinéraires personnalisés et une communauté de voyageurs passionnés, nous transformons chaque visite en une expérience inoubliable.",
      happy_travelers: "Voyageurs Heureux",
      tourist_sites: "Sites Touristiques",
      available_languages: "Langues Disponibles"
    },
    cultural_events_section: {
      title: "Événements Culturels ",
      subtitle: "Plongez dans les Festivités et Traditions Béninoises",
      description:
        "Découvrez les événements culturels incontournables du Bénin avec Watountotche. Des festivals vibrants aux célébrations traditionnelles, vivez l'authenticité et la richesse culturelle du pays à travers des expériences uniques et immersives.",
      button_text: "Voir tous les événements"
    },
    gastronomy_section: {
      title: "Culture & Gastronomie",
      subtitle: "Goûtez au Bénin — Saveurs, Marchés & Traditions",
      description:
        "Parcourez des expériences culinaires authentiques : dégustations de spécialités locales, ateliers de cuisine traditionnelle et marchés où rencontrer les artisans de la table.",
      card1: {
        slug: "Dégustation",
        title: "Street Food Locale",
        description:
          "Savourez les spécialités de rue : plats traditionnels préparés devant vous par des maîtres locaux.",
        price: "À partir de Gratuit / Donation",
        link: "/culture-gastronomie/street-food",
        link_text: "Découvrir"
      },
      card2: {
        slug: "Atelier",
        title: "Atelier de Cuisine",
        description:
          "Apprenez à préparer des plats béninois classiques avec un chef local — techniques et recettes partagées.",
        price: "À partir de 10 000 XOF",
        link: "/culture-gastronomie/workshops",
        link_text: "S'inscrire"
      },
      card3: {
        slug: "Marché",
        title: "Marchés & Produits Locaux",
        description:
          "Explorez les marchés pour découvrir épices, poissons fumés, tubercules et artisans du goût.",
        price: "Visite libre",
        link: "/culture-gastronomie/markets",
        link_text: "Voir"
      },
      card4: {
        slug: "Dégustation",
        title: "Desserts & Boissons",
        description:
          "Dégustez des douceurs locales et découvrez les boissons traditionnelles du Bénin.",
        price: "À partir de Gratuit / Achat",
        link: "/culture-gastronomie/desserts",
        link_text: "Réserver"
      },
      link: "/culture-gastronomie",
      link_text: "Voir plus"
    },
    tourist_sites_section: {
      title: "Sites Touristiques à Découvrir",
      subtitle: "Explorez les Trésors du Bénin — Histoire, Culture & Nature",
      description:
        "Parcourez les sites les plus remarquables du Bénin : palais historiques, routes spirituelles, plages paradisiaques et parcs naturels. Chaque destination raconte une histoire unique et authentique du patrimoine béninois.",
      button_text: "Voir tous les sites touristiques"
    },
    testimonial_section: {
      title: "Témoignages",
      subTitle: "Ce que disent nos voyageurs",
      description:
        "Découvrez les expériences authentiques de voyageurs qui ont exploré le Bénin avec Watountotche.",
      card1: {
        comment:
          "Une expérience inoubliable au Bénin ! Les guides audio de Watountotche m'ont permis de découvrir l'histoire fascinante des Palais Royaux d'Abomey. Chaque détail était parfaitement organisé et les recommandations culinaires étaient délicieuses.",
        name: "Marie Dupont",
        location: "Paris, France"
      },
      card2: {
        comment:
          "J'ai adoré mon voyage au Bénin grâce à Watountotche. Les itinéraires personnalisés m'ont permis de découvrir des joyaux cachés et de vivre des expériences culturelles authentiques. Le service client était exceptionnel du début à la fin.",
        name: "John Smith",
        location: "New York, USA"
      },
      card3: {
        comment:
          "Watountotche rend l'exploration du Bénin accessible à tous. Les cartes interactives, les événements culturels et les ateliers gastronomiques ont donné à notre famille des souvenirs précieux.L'équipe du chatbot IA a répondu à toutes nos questions !",
        name: "Aïcha Kone",
        location: "Abidjan, Côte d'Ivoire"
      },
      card4: {
        comment:
          "Grâce à Watountotche, j'ai pu planifier un voyage sur mesure au Bénin qui correspondait parfaitement à mes intérêts. Les guides audio étaient informatifs et engageants, et j'ai particulièrement apprécié les recommandations locales pour manger et explorer.",
        name: "Léa Martin",
        location: "Lyon, France"
      }
    },
    guided_tours_section: {
      title: "Visites Guidées",
      subtitle: "Parcours guidés & itinéraires immersifs",
      button_text: "Voir toutes les visites guidées"
    }
  },
  gastronomy_detail_page: {
    hero_section: {
      title: "Détails de l'expérience gastronomique",
      description:
        "Découvrez les saveurs authentiques du Bénin à travers nos expériences culinaires soigneusement sélectionnées. Que vous soyez amateur de street food, passionné de cuisine traditionnelle ou curieux des marchés locaux, chaque expérience est conçue pour vous offrir un aperçu unique de la richesse gastronomique du pays."
    },
    details: {
      overview: {
        title: "Overview",
        heading: "3-Day Mountain Adventure",
        description:
          "Experience the thrill of mountain climbing with our expertly guided 3-day adventure. This tour combines challenging hikes, breathtaking scenic views, and peaceful camping under a canopy of stars. Perfect for adventurers seeking to disconnect from city life and reconnect with nature's raw beauty.",
        included_title: "What's Included:",
        included_items: [
          "Professional mountain guide",
          "Camping equipment & meals",
          "Transportation to base camp",
          "Safety equipment & first aid",
          "Photography spots guidance",
          "Certificate of completion"
        ]
      },
      booking_card: {
        price_from_label: "From",
        price_amount: "$540",
        price_suffix: "per person",
        rating_text: "4.9 (127 reviews)",
        details: [
          {
            icon: "#calendar-days",
            text: "Duration: 3 Days"
          },
          {
            icon: "#map-marker-5",
            text: "Location: Rocky Mountains"
          },
          {
            icon: "#user-multiple-4",
            text: "Group Size: Max 12 people"
          },
          {
            icon: "#arrow-angular-top-right",
            text: "Difficulty: Intermediate"
          }
        ],
        cta_label: "Book This Tour"
      },
      itinerary: {
        title: "Itinerary",
        subtitle: "Day by Day Schedule",
        days: [
          {
            day_number: "1",
            title: "Base Camp & Trail Introduction",
            time: "8:00 AM - 6:00 PM",
            description:
              "Meet at the designated pickup point and travel to base camp. Equipment check, safety briefing, and first hiking trail to acclimatize. Set up camp and enjoy a group dinner under the stars.",
            highlights: [
              "Equipment Check",
              "Safety Briefing",
              "3km Hiking Trail"
            ]
          },
          {
            day_number: "2",
            title: "Summit Challenge & Scenic Views",
            time: "6:00 AM - 7:00 PM",
            description:
              "Early morning start for the main summit challenge. Navigate rocky terrain, cross mountain streams, and reach the peak for panoramic views. Afternoon photography session and wilderness survival skills workshop.",
            highlights: [
              "Summit Climb",
              "Photography Session",
              "Survival Skills"
            ]
          },
          {
            day_number: "3",
            title: "Nature Exploration & Return",
            time: "7:00 AM - 5:00 PM",
            description:
              "Final day exploring hidden waterfalls, wildlife spotting, and nature meditation. Break camp, final group photo, and return journey with stops at scenic viewpoints for last-minute photos.",
            highlights: [
              "Waterfall Visit",
              "Wildlife Spotting",
              "Scenic Return"
            ]
          }
        ]
      },
      services: {
        included: {
          title: "Services Included",
          items: [
            {
              title: "Expert Guides",
              description: "Certified mountain guides with 10+ years experience"
            },
            {
              title: "All Meals",
              description: "Breakfast, lunch, dinner & snacks for 3 days"
            },
            {
              title: "Equipment",
              description:
                "Tents, sleeping bags, climbing gear & safety equipment"
            },
            {
              title: "Transportation",
              description: "Round trip transportation from meeting point"
            }
          ]
        },
        bring: {
          title: "What to Bring",
          items: [
            "Sturdy hiking boots",
            "Weather-appropriate clothing",
            "Personal water bottle",
            "Sunscreen & sunglasses",
            "Personal medications",
            "Camera for memories"
          ]
        }
      },
      gallery: {
        title: "Gallery",
        subtitle: "Tour Highlights",
        images: [
          { alt: "Mountain Peak View" },
          { alt: "Camping Under Stars" },
          { alt: "Hiking Trail" },
          { alt: "Mountain Stream" },
          { alt: "Summit Achievement" },
          { alt: "Group Adventure" }
        ]
      },
      pricing: {
        title: "Pricing",
        subtitle: "Choose Your Package",
        packages: [
          {
            name: "Standard Package",
            price: "$540",
            per: "per person",
            features: [
              "3-day mountain adventure",
              "Professional guide",
              "All meals included",
              "Basic camping equipment",
              "Transportation"
            ],
            cta_label: "Select Package"
          },
          {
            name: "Premium Package",
            price: "$720",
            per: "per person",
            badge: "Most Popular",
            features: [
              "Everything in Standard",
              "Premium camping gear",
              "Professional photography",
              "Gourmet trail meals",
              "Personalized certificate",
              "Digital photo album"
            ],
            cta_label: "Select Package"
          },
          {
            name: "VIP Package",
            price: "$950",
            per: "per person",
            features: [
              "Everything in Premium",
              "Private guide (groups 4+)",
              "Luxury camping setup",
              "Spa treatment post-tour",
              "Custom itinerary options",
              "Priority booking"
            ],
            cta_label: "Select Package"
          }
        ]
      }
    }
  },
  tourist_site_page: {
    title: "Patrimoine et tourisme",
    subTitle: "Filtres touristiques",
    description:
      "Affinez les résultats par région, budget ou type de visite pour trouver des parcours adaptés à vos envies.",
    container: {
      load_more_button: "Voir tous les sites touristiques",
      load_more_text: "Afficher 12 à 45+ site touristique"
    }
  },
  tour_guide_page: {
    title: "Guide touristique",
    subTitle: "Filtres touristiques",
    description:
      "Affinez les résultats par région, budget ou type de visite pour trouver des parcours adaptés à vos envies.",
    container: {
      load_more_button: "Voir tous les sites touristiques",
      load_more_text: "Afficher 12 à 45+ site touristique"
    }
  },
  guided_tour_page: {},
  visite: {
    title: "Connexion",
    description: "Adresse email",
    content: "Mot de passe"
  },
  event_page: {
    list: {
      cards: {
        card1: {
          alt: "Best Travel Destinations 2025",
          category: "Travel Tips",
          date: "September 20, 2025",
          read_time: "5 min read",
          title: "10 Hidden Travel Destinations You Must Visit in 2025",
          link: "/evenement/tabar",
          excerpt:
            "Discover breathtaking locations that are still off the beaten path. From secluded beaches in Croatia to mountain villages in Nepal, these destinations offer authentic experiences away from crowds.",
          author: {
            name: "Amanda Wilson"
          },
          stats: {
            likes: "24",
            comments: "12"
          }
        },
        card2: {
          alt: "Budget Travel Tips",
          category: "Budget Travel",
          date: "September 19, 2025",
          read_time: "6 min read",
          title: "How to Travel Europe on $50 a Day: A Complete Guide",
          link: "/evenement/tabar",
          excerpt:
            "Explore Europe without breaking the bank. Discover budget accommodations, cheap transportation options, and free activities in major European cities.",
          author: {
            name: "James Wilson"
          },
          stats: {
            likes: "156",
            comments: "42"
          }
        },
        card3: {
          alt: "Sustainable Travel Guide",
          category: "Eco Travel",
          date: "September 18, 2025",
          read_time: "7 min read",
          title:
            "Sustainable Travel: How to Reduce Your Carbon Footprint While Exploring",
          link: "/evenement/tabar",
          excerpt:
            "Learn practical ways to travel responsibly without sacrificing adventure. From eco-friendly accommodations to carbon offset programs, discover how to make your journeys more sustainable.",
          author: {
            name: "David Thompson"
          },
          stats: {
            likes: "67",
            comments: "28"
          }
        }
      },
      load_more_button: "Load More News"
    },
    sidebar: {
      search: {
        title: "Search Articles",
        placeholder: "Search travel tips..."
      },
      categories: {
        title: "Categories",
        items: [
          { name: "Travel Tips", count: "24", href: "/category/travel-tips" },
          { name: "Destinations", count: "18", href: "/category/destinations" },
          {
            name: "Budget Travel",
            count: "15",
            href: "/category/budget-travel"
          },
          { name: "Adventure", count: "12", href: "/category/adventure" },
          {
            name: "Food & Culture",
            count: "10",
            href: "/category/food-culture"
          },
          { name: "Eco Travel", count: "8", href: "/category/eco-travel" }
        ]
      },
      recent_posts: {
        title: "Recent Posts",
        items: [
          {
            title: "10 Hidden Travel Destinations You Must Visit in 2025",
            date: "September 20, 2025",
            alt: "10 Hidden Travel Destinations",
            link: "/evenement/tabar"
          },
          {
            title: "How to Travel Europe on $50 a Day: A Complete Guide",
            date: "September 19, 2025",
            alt: "How to Travel Europe on $50 a Day",
            link: "/evenement/tabar"
          },
          {
            title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
            date: "September 18, 2025",
            alt: "Sustainable Travel",
            link: "/evenement/tabar"
          }
        ]
      },
      tags: {
        title: "Popular Tags",
        items: [
          "Adventure",
          "Budget",
          "Europe",
          "Solo Travel",
          "Beach",
          "Backpacking",
          "Photography",
          "Food",
          "Culture",
          "Asia",
          "Luxury",
          "Eco-Friendly"
        ]
      },
      newsletter: {
        title: "Newsletter",
        description: "Get travel tips and inspiration delivered to your inbox.",
        placeholder: "Your email",
        submit: "Subscribe"
      },
      social: {
        title: "Follow Us"
      }
    }
  },
  tour_guide_detail_page: {
    hero: {
      image_alt: "Tour guide detailed view",
      category: "Visite Guidée",
      date: "December 16, 2025",
      read_time: "15 min",
      title: "Exploration culturelle complète de la ville historique",
      author: {
        name: "Amanda Wilson",
        bio: "Guide touristique certifiée avec 10+ ans d'expérience"
      }
    },

    content: {
      lead_paragraph:
        "Découvrez les secrets et histoires fascinantes de notre ville historique à travers une visite guidée complète.",
      paragraphs: [
        "Cette visite guidée complète vous permettra de découvrir les monuments les plus importants et les histoires les plus intéressantes de notre belle ville.",
        "Notre guide expert vous accompagnera à travers les rues pavées de la vieille ville et vous révélera des anecdotes historiques fascinantes."
      ],
      sections: [
        {
          title: "Ce que vous verrez",
          text: "Le château médiéval, la cathédrale du 12ème siècle, les anciens remparts et les musées historiques."
        },
        {
          title: "Ce qui est inclus",
          text: "Guide professionnel, accès aux monuments, cartes de la ville et collations."
        }
      ],
      highlights: [
        {
          icon: "🏛️",
          title: "Monuments historiques",
          description: "Découvrez les monuments les plus importants de la ville"
        },
        {
          icon: "🎭",
          title: "Culture locale",
          description: "Explorez la riche culture et traditions locales"
        },
        {
          icon: "🍽️",
          title: "Gastronomie",
          description: "Goûtez aux spécialités culinaires locales"
        },
        {
          icon: "📸",
          title: "Photos",
          description: "Capturez les moments inoubliables"
        }
      ],
      itinerary: [
        {
          day: 1,
          title: "Exploration du centre historique",
          activities: [
            "Rendez-vous à la Place Centrale (10h00)",
            "Visite du Château Médiéval (10h30-11h30)",
            "Pause café à la terrasse historique (11h45-12h15)",
            "Lunch gratuit au restaurant local (12h15-13h00)"
          ],
          duration: "3 heures"
        },
        {
          day: 2,
          title: "Découverte des musées",
          activities: [
            "Visite du Musée d'Art (09h00-10h30)",
            "Musée Historique (10h45-12h15)",
            "Déjeuner libre (12h15-13h30)",
            "Exploration du quartier artistique (14h00-16h00)"
          ],
          duration: "7 heures"
        }
      ]
    },

    reactions: {
      liked_text: "24 people liked this article",
      buttons: {
        like_text: "Like",
        share_text: "Share",
        like_count: "24"
      }
    },

    comments: {
      title: "Comments (3)",
      form: {
        placeholder: "Share your thoughts about these destinations...",
        submit: "Post Comment",
        avatar_alt: "Current user avatar"
      },

      list: [
        {
          author: "Mark Stevens",
          time: "2 hours ago",
          text: "This list is incredible! I'm particularly interested in the Faroe Islands. Do you have any specific recommendations for accommodations there? I'm planning a trip for this summer and would love some insider tips.",
          likes: "3",
          reply: "Reply"
        },
        {
          author: "Amanda Wilson",
          badge: "Author",
          time: "1 hour ago",
          text: "Hi Mark! For the Faroe Islands, I highly recommend staying in Tórshavn at Hotel Føroyar - it has stunning harbor views. If you're looking for something more authentic, try the guesthouses in Gásadalur village. The summer months are perfect for hiking, and don't miss the Múlafossur waterfall! Let me know if you need more specific recommendations.",
          likes: "1",
          reply: "Reply"
        },
        {
          author: "Mark Stevens",
          time: "30 min ago",
          text: "Thank you so much, Amanda! This is exactly the kind of insider information I was hoping for. I'll definitely look into Hotel Føroyar and the Gásadalur guesthouses. Really appreciate you taking the time to share these detailed recommendations!",
          likes: "2",
          reply: "Reply"
        }
      ],

      load_more: "Load More Comments"
    }
  },
  event_detail_page: {
    hero: {
      category: "Travel Tips",
      date: "March 15, 2025",
      read_time: "5 min read",
      title: "10 Hidden Travel Destinations You Must Visit in 2025",
      image_alt: "Hidden travel destinations blog hero image",
      author: {
        name: "Amanda Wilson",
        bio: "Travel Writer & Adventure Enthusiast"
      }
    },

    content: {
      lead_paragraph:
        "Discover breathtaking locations that are still off the beaten path. From secluded beaches in Croatia to mountain villages in Nepal, these destinations offer authentic experiences away from crowds.",

      paragraphs: [
        "As travel slowly returns to normal, many adventurous souls are seeking destinations that offer tranquility, authenticity, and natural beauty without the overwhelming presence of mass tourism. After extensive research and personal travels throughout 2024, I've compiled a list of ten extraordinary destinations that remain relatively undiscovered."
      ],

      sections: [
        {
          title: "1. Faroe Islands, Denmark",
          text: "The Faroe Islands continue to be one of Europe's best-kept secrets. With dramatic cliffs, grass-roof houses, and some of the most pristine hiking trails you'll ever encounter, this Nordic archipelago offers an otherworldly experience. The locals are incredibly welcoming, and you'll find that tourism infrastructure is well-developed without being overwhelming."
        },
        {
          title: "2. Raja Ampat, Indonesia",
          text: "Known as the 'Four Kings,' Raja Ampat is a diver's paradise that remains largely untouched by mass tourism. The marine biodiversity here is unparalleled, with over 1,500 fish species and 600 coral species. Even if you're not a diver, the pristine beaches and crystal-clear waters make it worth the journey."
        },
        {
          title: "3. Salar de Uyuni, Bolivia",
          text: "While not entirely unknown, Bolivia's salt flats remain far less crowded than other South American highlights. The best time to visit is during the rainy season (December to April) when the flats become a giant mirror reflecting the sky. It's truly one of the most surreal landscapes on Earth."
        },
        {
          title: "Planning Your Trip",
          text: "When planning visits to these hidden gems, remember that part of their charm lies in their remoteness. This means you'll need to be more flexible with your travel dates and prepared for basic accommodations in some locations. However, the reward is an authentic travel experience that few others will have."
        },
        {
          title: "",
          text: "I recommend booking accommodations well in advance, as options can be limited. Also, consider traveling during shoulder seasons to avoid the few crowds these places do get while still enjoying favorable weather conditions."
        },
        {
          title: "Responsible Travel",
          text: "As we explore these pristine destinations, it's crucial to travel responsibly. Respect local customs, minimize your environmental impact, and consider how tourism affects local communities. The goal is to ensure these places remain beautiful and authentic for future generations of travelers."
        },
        {
          title: "",
          text: "Remember, the best travel experiences often come from embracing the unexpected and being open to new cultures and ways of life. These hidden destinations offer exactly that – a chance to step outside your comfort zone and discover something truly extraordinary."
        }
      ]
    },

    reactions: {
      liked_text: "24 people liked this article",
      buttons: {
        like_text: "Like",
        share_text: "Share",
        like_count: "24"
      }
    },

    comments: {
      title: "Comments (3)",
      form: {
        placeholder: "Share your thoughts about these destinations...",
        submit: "Post Comment",
        avatar_alt: "Current user avatar"
      },

      list: [
        {
          author: "Mark Stevens",
          time: "2 hours ago",
          text: "This list is incredible! I'm particularly interested in the Faroe Islands. Do you have any specific recommendations for accommodations there? I'm planning a trip for this summer and would love some insider tips.",
          likes: "3",
          reply: "Reply"
        },
        {
          author: "Amanda Wilson",
          badge: "Author",
          time: "1 hour ago",
          text: "Hi Mark! For the Faroe Islands, I highly recommend staying in Tórshavn at Hotel Føroyar - it has stunning harbor views. If you're looking for something more authentic, try the guesthouses in Gásadalur village. The summer months are perfect for hiking, and don't miss the Múlafossur waterfall! Let me know if you need more specific recommendations.",
          likes: "1",
          reply: "Reply"
        },
        {
          author: "Mark Stevens",
          time: "30 min ago",
          text: "Thank you so much, Amanda! This is exactly the kind of insider information I was hoping for. I'll definitely look into Hotel Føroyar and the Gásadalur guesthouses. Really appreciate you taking the time to share these detailed recommendations!",
          likes: "2",
          reply: "Reply"
        }
      ],

      load_more: "Load More Comments"
    }
  },
  contact: {},
  success: {},
  errors: {}
};

export const ERROR = {
  NOT_FOUND: {
    CODE: "404",
    TITLE: "Page Non Trouvée",
    DESCRIPTION:
      "La page que vous cherchez n'existe pas ou a été déplacée. Nous vous proposons de retourner à l'accueil ou de consulter notre support.",
    BUTTON: "Retour à l'Accueil"
  },
  SERVER_ERROR: {
    CODE: "500",
    TITLE: "Une Erreur est Survenue",
    DESCRIPTION:
      "Nous rencontrons un souci temporaire. Notre équipe technique travaille pour le résoudre. Réessayez dans quelques instants.",
    BUTTON: "Réessayer"
  },
  UNAUTHORIZED: {
    CODE: "401",
    TITLE: "Accès Non Autorisé",
    DESCRIPTION:
      "Vous devez vous connecter à votre portefeuille pour accéder à cette page.",
    BUTTON: "Se Connecter"
  },
  FORBIDDEN: {
    CODE: "403",
    TITLE: "Accès Refusé",
    DESCRIPTION:
      "Vous n'avez pas les permissions nécessaires pour accéder à cette ressource. Contactez notre support si vous croyez qu'il s'agit d'une erreur.",
    BUTTON: "Contacter le Support"
  },
  CONTACT_SUPPORT: "Contacter le Support"
};