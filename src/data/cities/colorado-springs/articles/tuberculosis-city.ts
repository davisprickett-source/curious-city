import type { Article } from '@/types/article'

export const tuberculosisCity: Article = {
  slug: 'tuberculosis-city',
  citySlug: 'colorado-springs',
  title: 'The City Built on Dying Lungs',
  subtitle: 'In the early 1900s, one-third of Colorado Springs\' population had tuberculosis. They came to die in the mountain air. The city built an entire economy around their illness. When antibiotics cured TB, Colorado Springs had to reinvent itself entirely.',
  excerpt: 'Colorado Springs wasn\'t built on gold or railroads. It was built on tuberculosis. By 1900, one-third of the city\'s residents were infected. Sanitariums lined the foothills. "Lungers" filled the boarding houses. The city marketed itself as a place to die slowly and comfortably — and it worked. Then antibiotics cured TB, the sanitariums closed, and Colorado Springs had to find a new reason to exist. The military-evangelical city you know today rose from the ruins of a tuberculosis resort.',
  author: {
    name: 'The Curious City',
    bio: 'Stories of strange economies',
  },
  publishedAt: '2025-01-11T12:00:00Z',
  featuredImage: {
    src: '/colorado-springs/articles/tuberculosis-city.png',
    alt: 'Cragmor Sanitarium in Colorado Springs, circa 1920',
    credit: 'Pikes Peak Library District Special Collections',
  },
  category: 'history',
  tags: ['colorado-springs', 'tuberculosis', 'medicine', 'history', 'sanitarium', 'transformation'],
  formats: {
    longform: {
      enabled: true,
      blocks: [
        {
          type: 'paragraph',
          content: 'In 1900, if you were diagnosed with tuberculosis — "consumption," they called it, because it seemed to consume the body from within — your doctor might have given you a choice. You could stay home and die in a year or two. Or you could move to Colorado Springs and maybe live a little longer. The mountain air, they said, would ease your breathing. The sunshine would strengthen your blood. And if nothing else, you could die in comfort, in a city built specifically for people like you.',
        },
        {
          type: 'paragraph',
          content: 'Colorado Springs was America\'s tuberculosis capital. At the turn of the twentieth century, roughly one-third of the city\'s population was infected with TB. They called them "lungers" — thousands of sick people who had come west to breathe, to rest, and ultimately to die. The city built an entire economy around their illness: sanitariums, boarding houses, special restaurants, tuberculosis huts, and an elaborate social hierarchy based on how sick you were.',
        },
        {
          type: 'paragraph',
          content: 'This is the story of how Colorado Springs became a city of the dying — and what happened when the dying stopped coming.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The White Plague',
        },
        {
          type: 'paragraph',
          content: 'Tuberculosis was the greatest killer of the nineteenth century. It killed more people than any other disease — more than smallpox, more than cholera, more than war. In 1900, TB was responsible for one in four deaths in the United States. It was everywhere, and it was merciless.',
        },
        {
          type: 'paragraph',
          content: 'The disease attacked the lungs. Victims coughed blood, lost weight, developed fevers that came and went. The progression was slow — months or years of gradual decline, punctuated by periods of seeming recovery that always proved false. There was no cure. Doctors could only try to slow the disease and make patients comfortable as they died.',
        },
        {
          type: 'paragraph',
          content: 'The leading theory of the era held that fresh air, sunshine, and rest could help TB patients. High altitude was considered especially beneficial — the thin air forced deeper breathing, which supposedly cleared the lungs. This theory, while scientifically dubious, created an industry: tuberculosis resorts in mountain towns across the American West.',
        },
        {
          type: 'quote',
          content: 'The consumptive who goes to Colorado does not go there to be cured. He goes there to live longer and to die more pleasantly. This is what Colorado offers, and it delivers admirably.',
          attribution: 'Medical journal',
          role: '1895',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Sanitarium City',
        },
        {
          type: 'paragraph',
          content: 'Colorado Springs had the perfect combination: 6,000 feet of elevation, over 300 days of sunshine per year, dry air, and spectacular mountain scenery. General William Jackson Palmer, who founded the city in 1871, actively marketed it as a health destination. By the 1880s, tuberculosis patients were arriving by the trainload.',
        },
        {
          type: 'paragraph',
          content: 'Sanitariums multiplied across the city and its foothills. The most famous was Cragmor, founded in 1905 on a bluff overlooking the city. Cragmor was designed specifically for TB treatment: its buildings faced south to maximize sunlight, with large porches where patients could rest outdoors. The architecture was beautiful, almost resort-like. It was a place to die in luxury.',
        },
        {
          type: 'paragraph',
          content: 'Other sanitariums followed. The Glockner, the Woodmen, the Swedish National — at one point, Colorado Springs had over twenty tuberculosis facilities. The Union Printers Home, founded in 1892, served as the world\'s largest care facility for union printers suffering from TB and "black lung." The industry employed thousands: doctors, nurses, cooks, housekeepers, groundskeepers.',
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'The Numbers',
          content: 'By 1900, tuberculosis patients and their caregivers made up roughly one-third of Colorado Springs\' population. The city had more sanitariums per capita than any other place in America. TB treatment was the primary economic driver — more important than mining, tourism, or any other industry.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Lungers',
        },
        {
          type: 'paragraph',
          content: 'The patients were called "lungers" — a term used matter-of-factly, without the stigma it might carry today. They came from across America: factory workers from New England, office clerks from Chicago, farmers from the Midwest. TB didn\'t discriminate by class, though the quality of your care certainly did.',
        },
        {
          type: 'paragraph',
          content: 'Wealthy lungers stayed at places like Cragmor, with private rooms, fine dining, and attentive staff. Middle-class patients filled the boarding houses that proliferated across the city, paying weekly rates for a bed and meals. The poor lived in "tent cities" on the outskirts of town, where canvas shelters provided the fresh air treatment without any of the comfort.',
        },
        {
          type: 'paragraph',
          content: 'A social hierarchy developed. "Chasers" were patients who had come early, while their disease was still manageable. "Lungers" were more advanced cases. "Last-ditchers" were the dying, those who had come too late for the mountain air to help. Everyone knew where they stood. Everyone knew the progression.',
        },
        {
          type: 'paragraph',
          content: 'The treatment regimen was oddly leisurely. Patients were expected to rest, breathe deeply, eat well, and avoid exertion. They sat on porches for hours, wrapped in blankets, watching the mountains. They walked short distances, then rested again. They wrote letters home, describing the scenery and their health in equal measure. Time moved slowly in the sanitariums.',
        },
        {
          type: 'quote',
          content: 'We are all dying here, but we are dying beautifully. The mountains are spectacular, the air is clean, and the staff treats us with kindness. There are worse places to end one\'s time on Earth.',
          attribution: 'TB patient letter',
          role: 'Cragmor Sanitarium, 1912',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Huts',
        },
        {
          type: 'paragraph',
          content: 'One of the strangest artifacts of the tuberculosis era still survives in Colorado Springs: the TB hut. These were tiny structures — typically 8 by 10 feet — designed to provide fresh-air sleeping quarters for tuberculosis patients. They were essentially three-walled shacks with the fourth side open to the elements.',
        },
        {
          type: 'paragraph',
          content: 'The theory was that sleeping outdoors, even in winter, was beneficial for TB patients. The huts provided minimal shelter while maximizing exposure to fresh air. Patients slept in them year-round, bundled in blankets and sleeping bags, breathing the cold mountain air as treatment for their diseased lungs.',
        },
        {
          type: 'paragraph',
          content: 'Architect Charles Fox Gardiner designed a distinctive style of TB hut with dual windows for ventilation. These "Gardiner huts" were built across Colorado Springs, in backyards and on sanitarium grounds. Many survive today, converted to garden sheds or storage buildings. Most homeowners don\'t know what they originally were — or what suffering occurred inside them.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Finding the Huts',
          content: 'Original TB huts can still be found in older Colorado Springs neighborhoods, particularly near downtown and in the Old North End. They\'re typically small outbuildings with distinctive window configurations. Some have been preserved; most have been converted to other uses. The Pioneers Museum has exhibits about the tuberculosis era.',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Cure',
        },
        {
          type: 'paragraph',
          content: 'In 1943, a Rutgers University researcher named Selman Waksman discovered streptomycin — the first antibiotic effective against tuberculosis. Within a decade, TB was no longer a death sentence. Patients who would have been sent to Colorado to die could now be cured with pills.',
        },
        {
          type: 'paragraph',
          content: 'The effect on Colorado Springs was immediate and devastating. The sanitariums began to empty. Cragmor, which had been expanding, suddenly found itself with more beds than patients. The boarding houses lost their tenants. The tent cities disappeared. Within a few years, the industry that had sustained Colorado Springs for half a century was simply gone.',
        },
        {
          type: 'paragraph',
          content: 'The city had to reinvent itself completely. The sanitariums were converted to other uses — Cragmor became part of the University of Colorado system. Some facilities became regular hospitals. Others were simply demolished. The economy that had been built on dying lungs had to find something else to sustain it.',
        },
        {
          type: 'ad',
          size: 'rectangle',
        },
        {
          type: 'heading',
          level: 2,
          content: 'The Transformation',
        },
        {
          type: 'paragraph',
          content: 'What Colorado Springs became after tuberculosis is its own strange story. The military arrived first — the Air Force Academy was established in 1954, followed by NORAD, Fort Carson, and Peterson Air Force Base. The defense industry brought jobs, stability, and a conservative culture that would define the city for generations.',
        },
        {
          type: 'paragraph',
          content: 'Then came the evangelicals. Focus on the Family moved its headquarters to Colorado Springs in 1991, followed by dozens of other Christian organizations. The city became known as the "evangelical Vatican" — a center of conservative Christian political power. The transformation from tuberculosis resort to evangelical stronghold took barely forty years.',
        },
        {
          type: 'paragraph',
          content: 'The TB era left physical traces. Some sanitarium buildings survive, repurposed as apartments, offices, or university facilities. TB huts dot older neighborhoods. The wide porches and south-facing windows of early twentieth-century homes reflect an architecture designed for sick people chasing the sun. But the culture of the tuberculosis era — the transience, the intimacy with death, the strange beauty of a city built for the dying — has vanished completely.',
        },
        {
          type: 'quote',
          content: 'Nobody remembers what we were. They see the megachurches and the military bases and they think that\'s always been Colorado Springs. But for fifty years, this was a city of invalids. We were built on disease.',
          attribution: 'Local historian',
          role: 'Pikes Peak Library District',
        },
        {
          type: 'divider',
        },
        {
          type: 'paragraph',
          content: 'Colorado Springs was built on tuberculosis. For half a century, the city\'s economy depended on sick people coming west to die. The sanitariums were its factories. The lungers were its workforce. The product was a comfortable death in beautiful surroundings.',
        },
        {
          type: 'paragraph',
          content: 'Then science made tuberculosis curable, and the whole system collapsed. The city that had been built around dying had to find a new purpose. It found the military and the evangelical movement — institutions as different from sanitariums as anything could be. The transformation was so complete that most residents today have no idea what their city used to be.',
        },
        {
          type: 'paragraph',
          content: 'But the TB era left its marks. The huts in the backyards. The south-facing porches. The old sanitarium buildings, converted to new uses but still carrying the ghosts of the lungers who died there. Colorado Springs is a city built on dying lungs. It just doesn\'t remember anymore.',
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Exploring TB History',
          content: 'The Colorado Springs Pioneers Museum (215 S. Tejon Street) has exhibits on the tuberculosis era. The former Cragmor Sanitarium is now part of the University of Colorado Colorado Springs campus — the main building survives as Cragmor Hall. TB huts can be found throughout older neighborhoods. The Union Printers Home building still stands on Union Boulevard (hence the name).',
        },
      ],
    },
  },
  defaultFormat: 'longform',
  seo: {
    metaDescription: 'In the early 1900s, one-third of Colorado Springs\' population had tuberculosis. The city built an economy on their illness. When antibiotics cured TB, everything changed.',
  },
}
