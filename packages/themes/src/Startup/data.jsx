import { smoothLinkProps } from '@pagerland/common/src/utils';
import { Link } from 'react-scroll';

import textToMultiline from '@pagerland/common/src/utils/textToMultiline';

import MapMarker from '@pagerland/icons/src/monochrome/MapMarker';
import MobilePhone from '@pagerland/icons/src/monochrome/MobilePhone';
import PaperAirplane from '@pagerland/icons/src/monochrome/PaperAirplane';

import FacebookF from '@pagerland/icons/src/monochrome/FacebookF';
import Instagram from '@pagerland/icons/src/monochrome/Instagram';
import Twitter from '@pagerland/icons/src/monochrome/Twitter';
import Linkedin from '@pagerland/icons/src/monochrome/Linkedin';

import * as Yup from 'yup';
//import Welcome from './assets/welcome.jpg';
//import Welcome2x from './assets/welcome@2x.jpg';
import AboutUs from './assets/about.jpeg';
import AboutUs2x from './assets/about.jpeg';
import LandingImage from './assets/landing_image.jpeg'



import Avatar1 from './assets/avatars/avatar_gustin.jpeg';
import Avatar12x from './assets/avatars/avatar_gustin.jpeg';
import Avatar2 from './assets/avatars/avatar_backer.jpeg';
import Avatar22x from './assets/avatars/avatar_backer.jpeg';
import Avatar3 from './assets/avatars/avatar_berhin.jpeg';
import Avatar32x from './assets/avatars/avatar_berhin.jpeg';
import Avatar4 from './assets/avatars/avatar_mars.jpeg';
import Avatar42x from './assets/avatars/avatar_mars.jpeg';
import Avatar5 from './assets/avatars/avatar_losson.jpeg';
import Avatar52x from './assets/avatars/avatar_losson.jpeg';
import Avatar6 from './assets/avatars/avatar_salva.jpeg';
import Avatar62x from './assets/avatars/avatar_salva.jpeg';
import Avatar7 from './assets/avatars/avatar_sarah.png';
import Avatar72x from './assets/avatars/avatar_sarah.png';

// import Estimations from './assets/estimation.svg';
// mport Ecommerce from './assets/ecommerce.svg';
import AnimationsImage from './assets/AnimationsImage.jpeg';
import ComicImage from './assets/ComicImageAndTeam.png';
import AppMockup from './assets/app_DECIDE-min.gif';
import NudgeImage from './assets/NudgeImage.jpeg'

// import Support from './assets/support.svg';

import PricingBasic from './assets/pricing/basic.svg';
import PricingAdvanced from './assets/pricing/advanced.svg';
import PricingExpert from './assets/pricing/expert.svg';

import Article1 from './assets/articles/article-1.jpg';
import Article12x from './assets/articles/article-1@2x.jpg';
import Article2 from './assets/articles/article-2.jpg';
import Article22x from './assets/articles/article-2@2x.jpg';
import Article3 from './assets/articles/article-3.jpg';
import Article32x from './assets/articles/article-3@2x.jpg';
import Article4 from './assets/articles/article-4.jpg';
import Article42x from './assets/articles/article-4@2x.jpg';
import Article5 from './assets/articles/article-5.jpg';
import Article52x from './assets/articles/article-5@2x.jpg';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default {
  title: 'DEC!DE & Vous',
  navbar: {
    links: [
      {
        to: '',
        label: 'Accueil',
      },
      {
        to: 'services',
        label: 'Activit??s',
      },
      {
        to: 'about',
        label: '?? propos',
      },
      {
        to: 'team',
        label: 'L\'??quipe',
      },
      /*{
        to: 'pricing',
        label: 'Pricing',
      },*/
      // {
      //   to: 'blog',
      //   label: 'Actus',
      // },
      {
        to: 'contact',
        label: 'Contact',
      },


      /*{
        to: 'contact',
        label: 'Contact',
      },*/
    ],
    actions: [
      {
        /*href:
          'https://themeforest.net/item/pagerland-react-and-gatsby-landing-page-templates/26548567',*/
        label: 'Faire un don',
        href: 'https://fr.tipeee.com/decide-et-vous'
      },
    ],
  },
  welcome: {
    title: 'DEC!DE: Le coup de pouce dont l?????cologie a besoin',
    text: 'DEC!DE propose un programme d?????ducation ?? l???environnement qui a pour objectif d???induire des changements de comportement au travers d???une d??marche transm??dia.',
    actions: [
      {
        label: 'Voir nos activit??s',
        to: 'services',
        as: Link,
        ...smoothLinkProps,
        variant: 'secondary',
      },
    ],
    img: {
      src: LandingImage,
      srcSet: `${LandingImage} 1x, ${LandingImage} 2x`,
    },
    avatars: [
      {
        src: Avatar1,
        srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
      },
      {
        src: Avatar2,
        srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
      },
      {
        src: Avatar3,
        srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
      },
      {
        src: Avatar4,
        srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
      }
    ],
  },
  services: {
    title: 'Activit??s',
    text:
      'DEC!DE a pris le parti de d??velopper une approche transm??dia dans le but de cr??er une exp??rience p??dagogique unique, immersive et ludique. Chaque m??dia pourra ??tre utilis?? de mani??re autonome et constituer un point d???entr??e vers l???information. Des ???ponts narratifs??? pourront ??tre faits, d???un m??dia ?? l???autre, pour renforcer l???objet de la communication et la diffusion de contenus.',
    services: [
      {
        icon: AnimationsImage,
        title: 'Animations de sensibilisation et de solutions',
        text:
          "Chez DEC!DE, nous sommes convaincu.es que des changements de comportements ne peuvent s'op??rer que si les enjeux li??s ?? ces comportements sont correctement compris. C'est pourquoi nous accordons une place primordiale ?? la sensibilisation et ?? l'information de nos publics ainsi qu????? la cocr??ation de solutions.",
        buttonText: 'En savoir plus',
        buttonLink: 'https://decideetvous.medium.com/dec-de-nos-animations-de-sensibilisation-et-de-solutions-d68acb57ab54'
      },
      {
        icon: AppMockup,
        title: 'App Mobile - "Duolingo de l\'??cologie"',
        text:
          'L???objectif de l???application est d???offrir un parcours ludique d???apprentissage autour des principaux enjeux de la transition ??cologique. L???application sera d??velopp??e dans une approche transm??dia et ???serious game???, principalement ?? destination des ??coles secondaires et des jeunes parents, mais sera ??galement accessible et d??clinable pour les  entreprises.',
        buttonText: 'En savoir plus',
        buttonLink: 'https://decideetvous.medium.com/app-mobile-duolingo-de-l%C3%A9cologie-33af392a0eed'
      },
      {
        icon: ComicImage,
        title: 'Bande Dessin??e',
        text:
          'Anissa, adolescente de 14 ans, est embarqu??e par G??rard le f??e, moustachu gentleman, dans des aventures ??cologiques et loufoques.',
        buttonText: 'En savoir plus',
        buttonLink: 'https://decideetvous.medium.com/bande-dessin%C3%A9e-dec-de-8f5ca267c35b'
      },
      {
        icon: NudgeImage,
        title: 'Outils Nudge',
        text: 'Le nudge, coup de pouce en fran??ais, est une m??thode communicationnelle utilis??e afin d???orienter un comportement pr??cis sans pour autant les y contraindre. Nous proposons d???installer des nudges pour motiver les comportements respectueux pour l???environnement dans les ??coles et les entreprises.',
        buttonText: 'En savoir plus',
        buttonLink: 'https://decideetvous.medium.com/cet-article-est-en-cours-de-r%C3%A9daction-abonnez-vous-et-revenez-tr%C3%A8s-bient%C3%B4t-780463b2e3b2'
      },
    ],
    /* cta: {
       label: 'En savoir plus',
       href:
         'To Do',
     }, */
  },
  about: {
    img: {
      src: AboutUs,
      srcSet: `${AboutUs} 1x, ${AboutUs2x} 2x`,
    },
    title: '?? propos',
    text:
      'Le projet DEC!DE et vous est n?? de l???envie de Marion de combiner ses connaissances des outils nudges et sa volont?? de faire face ?? la crise environnementale et climatique. Entre septembre 2018 et octobre 2020, Marion travaille seule ?? l?????laboration de son projet. Elle en imagine les lignes directrices et cr??e, en collaboration avec Plumea, l???identit?? graphique de DEC!DE et vous. ???Seul on va plus vite, ensemble on va plus loin???, ??a Marion l???a bien compris ! C???est pourquoi, en octobre 2020, Manon et Guillaume rejoignent l???aventure. Fort.es de leurs exp??riences personnelles et compl??mentaires, iels red??finissent et compl??tent le projet DEC!DE. En d??cembre 2020, l???asbl est cr????e. Six mois apr??s la cr??ation de l???asbl, la petite ??quipe s???agrandit avec l???arriv??e de Marceline dans l?????quipe.',
    /*cta: {
      label: 'En savoir plus',
      href:
        'To Do',
    }, */
  },
  team: {
    title: "L'??quipe",
    text:
      { __html: "<h3 style='text-align:center;color: #aebdb4'> <b>L?????quipe de DEC!DE est constitu??e de quatre membres aux profils divers et compl??mentaires. Fort de leurs comp??tences diversifi??es, chaque membre met ses savoir-faire et ses exp??riences au service du projet. </b></h3> </br> Avec un bachelier en sciences ??conomiques et de gestion et un master en communication, <b style='color:#f2931d'> Marion </b> met son expertise au service du d??veloppement des outils nudges et de la communication de l???association. Apr??s avoir travaill?? cinq ans et demi aux ??ditions Dupuis, <b style='color:#f2931d'> Manon </b> entame une reconversion professionnelle et devient ??co-conseill??re. Forte de ces deux exp??riences, elle peut apporter son expertise lors du d??veloppement de la bande dessin??e tout en se focalisant sur la cr??ation de contenu ainsi que sur le d??veloppement d'animations. <b style='color:#f2931d'> Guillaume </b> est l???ing??nieur civil de l?????quipe. Sp??cialis?? en d??veloppement logiciel, il jongle avec les codes et l???univers transm??dia. Sur le c??t??, il se forme ??galement en tant qu???animateur des Fresque du Climat et du Num??rique. <b style='color:#f2931d'> Marceline</b>, elle, est designeuse industrielle et sociale. Ce qui l'int??resse, c???est le processus global de fabrication des objets, de l???extraction de la mati??re jusqu????? sa fin de vie. Elle met ses comp??tences organisationnelles et cr??atrices au service du d??veloppement global de l???association." },
    // cta: {
    //   label: 'Contactez nous',
    //   to: 'contact'
    // },
    people: [
      {
        avatar: {
          src: Avatar1,
          srcSet: `${Avatar1} 1x, ${Avatar12x} 2x`,
        },
        name: 'Guillaume Gustin',
        position: "D??veloppeur Full-Stack",
        desc: "Web - App Mobile",
        social: {
          linkedin: 'https://www.linkedin.com/in/guillaume-gustin/'
        },
      },
      {
        avatar: {
          src: Avatar2,
          srcSet: `${Avatar2} 1x, ${Avatar22x} 2x`,
        },
        name: 'Marion De Backer',
        position: "Co-fondatrice & Eco-conseill??re",
        desc: "Conception Nudges",
        social: {
          linkedin: 'https://www.linkedin.com/in/marion-de-backer1618/'
        },
      },
      {
        avatar: {
          src: Avatar3,
          srcSet: `${Avatar3} 1x, ${Avatar32x} 2x`,
        },
        name: 'Manon Berhin',
        position: 'Co-fondatrice & Eco-conseill??re',
        desc: "Animations",
        social: {
          linkedin: 'https://www.linkedin.com/in/manon-berhin-0aa82154/'
        },
      },
      {
        avatar: {
          src: Avatar4,
          srcSet: `${Avatar4} 1x, ${Avatar42x} 2x`,
        },
        name: 'Marceline Prevost',
        position: 'Designeuse industrielle et sociale',
        desc: "Conception Nudges",
        social: {
          linkedin: 'https://www.linkedin.com/in/marceline-prevost-770537b8/'
        },
      },
    ],
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: '$',
      sections: [
        {
          icon: PricingBasic,
          title: 'Basic',
          price: '9.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '2',
            },
            {
              text: 'estimates per month',
              prefix: '10',
            },
            {
              text: 'invoices per month',
              prefix: '10',
            },
            {
              text: 'support',
              prefix: 'Basic',
            },
          ],
          button: {
            text: 'Buy basic plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          icon: PricingAdvanced,
          title: 'Advanced',
          price: '19.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '5',
            },
            {
              text: 'estimates per month',
              prefix: '20',
            },
            {
              text: 'invoices per month',
              prefix: '20',
            },
            {
              text: 'support',
              prefix: 'Basic',
            },
          ],
          button: {
            text: 'Buy advanced plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          icon: PricingExpert,
          title: 'Expert',
          price: '29.99',
          period: 'month',
          features: [
            {
              text: 'users',
              prefix: '10',
            },
            {
              text: 'estimates per month',
              prefix: 'Unlimited',
            },
            {
              text: 'invoices per month',
              prefix: 'Unlimited',
            },
            {
              text: 'support',
              prefix: 'Priority',
            },
          ],
          button: {
            text: 'Buy expert plan',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  blog: {
    title: 'Actus',
    text: 'TO DO: s??lectionner posts insta (Marion ? :))',
    articles: [
      {
        url: '#',
        src: Article1,
        srcSet: `${Article1} 1x, ${Article12x} 2x`,
        date: 'Today',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        text:
          'Nullam sed tellus nec arcu mollis iaculis. Aliquam eget velit a libero suscipit tempor eget at leo. Vestibulum commodo tempor gravida. Donec dictum nunc at lorem euismod, et faucibus ante consectetur. Nullam porttitor eros in ligula posuere dignissim.',
      },
      {
        url: '#',
        src: Article2,
        srcSet: `${Article2} 1x, ${Article22x} 2x`,
        date: 'Yesterday',
        title: 'Ut ornare augue quis diam vehicula, vitae vulputate mauris',
      },
      {
        url: '#',
        src: Article3,
        srcSet: `${Article3} 1x, ${Article32x} 2x`,
        date: 'Last week',
        title: 'Pellentesque finibus porttitor mauris, nec tempor nulla',
      },
      {
        url: '#',
        src: Article4,
        srcSet: `${Article4} 1x, ${Article42x} 2x`,
        date: '2 weeks ago',
        title: 'Phasellus ornare metus sit amet luctus bibendum',
      },
      {
        url: '#',
        src: Article5,
        srcSet: `${Article5} 1x, ${Article52x} 2x`,
        date: 'Last month',
        title: 'Donec auctor ante sit amet elit pretium condimentum',
      },
    ],
    cta: {
      label: 'Voir toutes les publications',
      href:
        'https://www.instagram.com/decide_etvous/',
    },
  },
  contact: {
    title: 'Contact',
    sections: [
      {
        icon: MapMarker,
        text: textToMultiline`Avenue de la Charmille 10/34\n1200 Woluwe-Saint-Lambert\nBelgique`,
      },
      {
        icon: MobilePhone,
        text: '(0) 478 48 53 02',
      },
      {
        icon: PaperAirplane,
        text: 'contact@decideetvous.com',
      },
    ],
    socialLinks: [
      {
        icon: FacebookF,
        href: 'https://www.facebook.com/decideetvous',
        title: 'Facebook',
      },
      {
        icon: Instagram,
        href: 'https://www.instagram.com/decide_etvous/',
        title: 'Instagram',
      },
      /*{
        icon: Twitter,
        href: 'https://mypags.app',
        title: 'Twitter',
      },*/
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/company/dec-de/',
        title: 'Linkedin',
      },
    ],
    mailer: {
      title: 'Envie de nous contacter ?',
      cta: 'Envoyer',
      validationSchema: Yup.object({
        name: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
        // Message
        message: Yup.string().required('Required'),
        email: Yup.string().email('Must be an email').required('Required'),
        // date: Yup.string().required('Required'),
      }),
      // eslint-disable-next-line no-undef
      onSubmit: (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values })
        })
          .then(() => {
            alert("DEC!DE vous remercie de ce message! A bient??t.");
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))

        values.preventDefault();

      },
      //values => window.alert(`Form sent with values ${JSON.stringify(values)}`),
      fields: [
        {
          name: 'name',
          label: 'Nom',
          placeholder: 'Martine Dupont',
          initialValue: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          placeholder: 'martine.dupont@email.com',
          type: 'email',
          initialValue: '',
        },
        /* {
           name: 'date',
           label: 'Date and time',
           placeholder: 'Choose',
           type: 'datetime-local',
           initialValue: '',
         },*/
      ],
    },
  },
  footer: {
    links: [
      {
        label: '', // Politique de confidentialit??
        href:
          '',
      },
      {
        label: 'Engineered by G. Gustin',
        href:
          'https://guillaumegustin.com/',
      },
    ],
  },
  copyright: '?? DEC!DE ASBL',
};