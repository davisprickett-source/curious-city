import type { Article } from '@/types/article'

export const juicyLucy: Article = {
  slug: 'juicy-lucy-minneapolis',
  citySlug: 'minneapolis',
  title: 'The Juicy Lucy: Minneapolis\'s Cheese-Stuffed Burger That Burns Your Mouth',
  subtitle: 'The origin story, the technique, and where to get Minneapolis\'s most dangerous burger today',
  excerpt: 'The Juicy Lucy is a Minneapolis burger with the cheese inside the patty, not on top. When you bite in, molten cheese erupts and burns your mouth. Two bars claim to have invented it in the 1950s. Both are still serving them today. This is the story of how a spelling mistake became a Minneapolis institution.',
  author: {
    name: 'Maria Gonzalez',
    bio: 'Food historian and James Beard Award nominee. Traces culinary traditions from immigrant communities to modern tables.',
  },
  publishedAt: '2026-01-14T14:00:00Z',
  updatedAt: '2024-12-20T11:15:00Z',
  featuredImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Jucy_lucy_burger_%282%29.jpg',
    alt: 'Juicy Lucy burger with molten cheese oozing out from Matt\'s Bar, Minneapolis',
    credit: 'Kaszeta / Wikimedia Commons (Public Domain)',
  },
  category: 'feature',
  tags: ['food', 'minneapolis', 'burgers', 'local-traditions', 'restaurants'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'The Juicy Lucy is a burger with the cheese inside the meat instead of on top. When you bite in, molten American cheese — heated to roughly the temperature of volcanic lava — erupts and burns the roof of your mouth. Everyone who eats a Juicy Lucy for the first time burns their mouth. The bartender warns you. The menu warns you. You ignore both warnings because you\'re hungry and it\'s just a burger. Then you bite, and you learn.',
        },
        {
          type: 'paragraph',
          content: 'This is Minneapolis\'s signature food: a burger that attacks you.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Origin Story (Two Versions)',
        },
        {
          type: 'paragraph',
          content: 'Two South Minneapolis bars claim to have invented the Juicy Lucy in the 1950s, and both are still operating today. The dispute is friendly but unresolved.',
        },
        {
          type: 'paragraph',
          content: '**Matt\'s Bar version:** In the late 1950s, a customer at Matt\'s Bar asked if they could put cheese inside a burger instead of on top. The cooks tried it. When the customer bit in, molten cheese exploded everywhere. \"That\'s one juicy Lucy!\" the customer supposedly said. Matt\'s spells it \"Jucy Lucy\" (no \"i\" in Jucy) and has been serving them since.',
        },
        {
          type: 'paragraph',
          content: '**5-8 Club version:** Around the same time, a regular at the 5-8 Club wanted a burger with cheese in the middle. The kitchen obliged. The customer burned his mouth and exclaimed about how juicy it was. 5-8 Club spells it \"Juicy Lucy\" (with the \"i\") and also claims to be the originator.',
        },
        {
          type: 'paragraph',
          content: 'Both stories are plausible. Both bars have been making them the same way for 70 years. The truth is probably that the idea emerged in South Minneapolis bar culture in the 1950s, and multiple places were experimenting with it simultaneously. What matters is that both versions survive today.',
        },
        {
          type: 'quote',
          content: 'You can\'t trademark a burger. We\'ve been doing this since the \'50s, they\'ve been doing it since the \'50s. Let people decide which one they like better.',
          attribution: 'Scott Nelson',
          role: 'Owner of Matt\'s Bar',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Technique',
        },
        {
          type: 'paragraph',
          content: 'Making a Juicy Lucy is simple in theory: take two thin burger patties, put cheese between them, seal the edges, and cook. In practice, it\'s harder. The cheese wants to escape. If you don\'t seal the patties properly, molten cheese leaks out during cooking and you\'re left with a regular cheeseburger with less cheese. If you overcook it trying to melt the cheese, the burger dries out.',
        },
        {
          type: 'paragraph',
          content: 'The ideal Juicy Lucy has a thin crust on the outside, medium-rare meat on the inside, and cheese heated to exactly the point where it\'s molten but contained. When you bite in, the cheese should flow but not explode. (It will still burn your mouth. This is unavoidable.)',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Jucy_Lucy_burger_-_5-8_Club%2C_Minneapolis%2C_Minnesota.jpg',
          alt: 'Juicy Lucy burger from 5-8 Club showing melted cheese inside',
          caption: 'A Juicy Lucy from 5-8 Club — the cheese is inside, waiting to burn your mouth',
          credit: 'Kim / Wikimedia Commons (CC BY-SA)',
        },
        {
          type: 'paragraph',
          content: 'Both Matt\'s and 5-8 use American cheese because it melts predictably and stays liquid longer. Some newer places use fancier cheeses (blue cheese, pepper jack, etc.), which misses the point. The Juicy Lucy is a working-class bar burger. American cheese is correct.',
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'The Warning',
          content: 'Every first-timer ignores the warning. The bartender will tell you to wait. You will not wait. You will bite immediately. The cheese will be 400 degrees. You will burn your mouth. This is tradition. Just accept it and move on.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Matt\'s Bar vs. 5-8 Club: The Comparison',
        },
        {
          type: 'paragraph',
          content: 'The two claimants to the Juicy Lucy throne are both worth visiting, but they\'re different experiences.',
        },
        {
          type: 'paragraph',
          content: '**Matt\'s Bar** (3500 Cedar Ave S): Smaller, divey-er, more austere. The menu has six items. The interior hasn\'t been updated since 1970 and doesn\'t need to be. The Jucy Lucy comes with nothing — no lettuce, no tomato, just burger and cheese on a bun. You can add grilled onions if you want. The fries are crinkle-cut and served in a plastic basket. This is the minimalist version: just the burger, nothing fancy.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Matt%27s_Bar_1.jpg',
          alt: 'Matt\'s Bar exterior at Cedar Avenue and East 35th Street, Minneapolis',
          caption: 'Matt\'s Bar — the no-frills home of the original "Jucy Lucy" (note the spelling)',
          credit: 'Albert Leung / Wikimedia Commons (CC BY)',
        },
        {
          type: 'paragraph',
          content: '**5-8 Club** (5800 Cedar Ave S): Bigger, slightly more polished, more menu options. The Juicy Lucy comes with pickles, and you can dress it however you want. The atmosphere is still a classic bar, but it feels less like a dive and more like a neighborhood restaurant. The fries are better. The space is more comfortable. This is the approachable version.',
        },
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/5%C2%B78ClubMPLS.jpg',
          alt: '5-8 Club Tavern and Grill exterior, 5800 Cedar Avenue South, Minneapolis',
          caption: '5-8 Club — the other contender for Juicy Lucy originator',
          credit: 'Jonathunder / Wikimedia Commons (CC BY-SA)',
        },
        {
          type: 'paragraph',
          content: 'Which is better? It depends on what you want. Matt\'s is the purist experience — minimal, uncompromising, exactly what it\'s been for 70 years. 5-8 is more welcoming to people who want options and atmosphere. Both make excellent Juicy Lucys.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Pro Tip',
          content: 'Go to both. Order the burger, fries, and a beer at each place. Form your own opinion. This is the Minneapolis rite of passage. Choose a side and defend it at parties.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Where Else to Get One',
        },
        {
          type: 'paragraph',
          content: 'The Juicy Lucy has spread beyond its originators. Most Minneapolis bars now serve a version. Quality varies wildly.',
        },
        {
          type: 'paragraph',
          content: '**Blue Door Pub** (multiple locations): The best non-original version. They stuff the burger with fancy cheeses (blue cheese and bacon is excellent) and actually nail the technique. The \"Blucy\" with blue cheese is worth trying.',
        },
        {
          type: 'paragraph',
          content: '**The Nook** (St. Paul): Technically not Minneapolis, but too good to skip. They make a version called the Nookie Supreme with multiple cheese options. The wait is long but worth it.',
        },
        {
          type: 'paragraph',
          content: '**Crooked Pint Ale House** (multiple locations): Solid chain version. Not as good as the originals, but reliable and consistent across locations.',
        },
        {
          type: 'paragraph',
          content: 'Skip the versions at trendy gastropubs that try to reinvent it with wagyu beef and truffle cheese. The Juicy Lucy is bar food. Treat it accordingly.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Why It Matters',
        },
        {
          type: 'paragraph',
          content: 'The Juicy Lucy is Minneapolis\'s food. Not Minnesota\'s — Minneapolis specifically. It emerged from South Minneapolis bar culture in the 1950s, when working-class neighborhoods had corner bars where regulars ate, drank, and experimented with food. The burger represents that culture: unpretentious, functional, slightly dangerous.',
        },
        {
          type: 'paragraph',
          content: 'It\'s also democratic. You can\'t improve a Juicy Lucy by making it fancier. The expensive versions aren\'t better. The technique matters more than the ingredients, and the technique is simple enough that neighborhood bars can nail it. This is food that doesn\'t benefit from gentrification.',
        },
        {
          type: 'paragraph',
          content: 'When Barack Obama visited Minneapolis in 2014, he went to Matt\'s Bar and ordered a Jucy Lucy. The owner, Scott Nelson, served him personally and told him to wait before biting. Obama waited. (He\'s probably the only first-timer who actually listened to the warning.) The president ate his burger, paid his bill, and left. Matt\'s didn\'t change the menu or raise prices or put up a plaque. They just kept making burgers the same way they\'ve made them since the 1950s.',
        },
        {
          type: 'paragraph',
          content: 'That\'s Minneapolis: quietly proud of what it does, uninterested in making a big deal about it.',
        },
        {
          type: 'divider',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'How to Order Your First Juicy Lucy',
          content: 'Go to Matt\'s Bar on a weekday afternoon (weekends are packed). Order a Jucy Lucy with grilled onions and a basket of fries. Get a Grain Belt Premium beer. When the burger arrives, wait 90 seconds for it to cool slightly. Bite carefully. Accept that you will burn your mouth anyway. Enjoy Minneapolis\'s signature food.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'The Juicy Lucy is Minneapolis\'s cheese-stuffed burger. Two South Minneapolis bars claim to have invented it. Here\'s the origin story and where to get one today.',
  },
}
