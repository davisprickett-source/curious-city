import type { Article } from '@/types/article'

export const northLoopGuide: Article = {
  slug: 'north-loop-neighborhood-guide',
  citySlug: 'minneapolis',
  title: 'North Loop: Minneapolis\'s Warehouse District Turned Design Hub',
  subtitle: 'What you need to know about North Loop — the cobblestone streets, the converted warehouses, and the spots that make it Minneapolis\'s coolest neighborhood',
  excerpt: 'A comprehensive guide to North Loop, from its flour mill past to today\'s design-forward restaurants and boutiques. Everything you need to know about one of Minneapolis\'s most transformed neighborhoods.',
  author: {
    name: 'Jennifer Wu',
    bio: 'Local business journalist and neighborhood expert. Covers hidden gems, small businesses, and community anchors.',
  },
  publishedAt: '2026-01-11T10:00:00Z',
  updatedAt: '2025-01-15T14:30:00Z',
  featuredImage: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Minneapolis_Warehouse_District.jpg',
    alt: 'View of the Warehouse District in Minneapolis along 1st Avenue North',
    credit: 'Mulad via Wikimedia Commons (Public Domain)',
  },
  category: 'guide',
  tags: ['neighborhoods', 'minneapolis', 'north-loop', 'warehouse-district', 'dining', 'local-guide'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'Walk down Washington Avenue on a Saturday morning, and you\'ll immediately understand why North Loop is Minneapolis\'s most transformed neighborhood. Cobblestone streets. Converted warehouses with 20-foot ceilings. Coffee shops in former loading docks. This is what happens when a century of industrial infrastructure gets reimagined by designers, chefs, and boutique owners with taste and ambition.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'How North Loop Became What It Is',
        },
        {
          type: 'paragraph',
          content: 'For most of the 20th century, North Loop was the Warehouse District — literally. Flour from the mills moved through these buildings on its way to railroads. Wholesale distributors operated out of the brick warehouses. It was industrial, utilitarian, and largely empty at night.',
        },
        {
          type: 'paragraph',
          content: 'The transformation started in the late 1990s when artists and loft-dwellers discovered the cheap rent and interesting bones. Target opened its headquarters on Nicollet Mall in the early 2000s, bringing workers downtown. By 2010, restaurants started filling the ground floors. Today, it\'s the city\'s design and dining epicenter — industrial history meets modern Minneapolis.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Where It Is',
        },
        {
          type: 'paragraph',
          content: 'North Loop runs roughly from the river (North 1st Street) to I-394, between Hennepin Avenue and the railroad tracks. The heart of the action is along Washington Avenue between 2nd and 5th Avenue North. That\'s where you\'ll find the cobblestones, the restaurants, and the people.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Best Places to Eat',
        },
        {
          type: 'paragraph',
          content: '**Spoon and Stable** — Chef Gavin Kaysen\'s flagship in a restored 1900s stable. French technique, Midwest ingredients, impeccable execution. Expensive but worth it. **Bachelor Farmer** — Nordic-inspired food in a Marvel Bar-connected space. The brunch is legendary. Go for the cardamom rolls. **Red Rabbit** — Italian comfort food in a former warehouse. The pizza comes from a wood-fired oven, and the pasta is made in-house. Cozy without trying too hard. **Bar La Grassa** — Still the best pasta in Minneapolis after 15 years. No reservations for parties under six, so go early or prepare to wait.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Best Places to Drink',
        },
        {
          type: 'paragraph',
          content: '**Marvel Bar** — Craft cocktails in a dark, intimate basement. No menus, just tell the bartender what you like and trust them. **Modist Brewing** — Warehouse brewery with excellent IPAs and a rotating food truck situation. The patio is prime in summer. **Parlour Bar** — Attached to Cosmos. Great cocktails, booth seating, exposed brick. Classic North Loop.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Don\'t Miss',
        },
        {
          type: 'paragraph',
          content: '**Askov Finlayson** — Menswear shop that feels like a Scandinavian cabin. Buy a wool blanket and immediately feel more sophisticated. **Parc Boutique** — Women\'s clothing from designers you won\'t find at the mall. The staff actually helps. **Lofte** — Vintage furniture and oddities in a massive warehouse space. You could spend an hour here. **The cobblestones themselves** — They\'re original, dating to when this was actually the warehouse district. Walk slowly and appreciate the texture.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'Getting There',
        },
        {
          type: 'paragraph',
          content: 'North Loop is walkable from downtown (10 minutes from Nicollet Mall). The Green Line light rail stops at Target Field Station, which puts you at the edge of the neighborhood. Parking is metered on the street and expensive in lots ($10-20). Your best bet: park at a ramp on Hennepin or take transit.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Insider Tip',
          content: 'Go on a weekday morning. The Saturday brunch crowd makes everything crowded and slow. Tuesday at 10am? You\'ll have the whole neighborhood to yourself, and the coffee shops are at their best.',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'North Loop works because it doesn\'t try too hard. The buildings are old, the streets are cobblestone, and the new businesses respect that history instead of fighting it. It\'s Minneapolis at its best — forward-thinking without forgetting where it came from.',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'Your complete guide to Minneapolis\'s North Loop neighborhood: restaurants, bars, shops, and cobblestone streets in the city\'s transformed warehouse district.',
  },
}
