import { History } from '@/types/content'

export const minneapolis_premium_history: Record<string, History> = {
  'meeting-of-waters': {
    slug: 'meeting-of-waters',
    citySlug: 'minneapolis',
    title: 'Meeting of Waters',
    subtitle: 'A city built on confluence, power, and the quiet work of survival',
    author: 'Curious City',
    publishedAt: '2024-12-15',
    premium: {
      isPremium: true,
      estimatedReadTime: '12 min',
    },
    blocks: [
      // Video 1: Intro/Waters
      {
        id: 'video1',
        type: 'video-sequence',
        videoPath: '/minn-history-videos/Minn-1.mp4',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p1',
            type: 'paragraph',
            dropcap: true,
            content: 'The city rises from the meeting of waters with the modesty of the Midwest, which is to say it announces nothing while accomplishing everything. Two rivers converge here—the Mississippi driving south with glacial authority, the Minnesota arriving from the west like an afterthought—and at their confluence the Ojibwe and Dakota peoples understood what the millers would later discover: that falling water is power made visible.',
          },
        ],
      },
      {
        id: 'break1',
        type: 'break',
        style: 'dots',
      },
      // Video 2: Beginning of Falls
      {
        id: 'video2',
        type: 'video-sequence',
        videoPath: '/minn-history-videos/minn-2.mp4',
        scrollHeight: 150,
        textBlocks: [
          {
            id: 'p3-intro',
            type: 'paragraph',
            content: 'St. Anthony Falls was the only significant waterfall on the entire navigable length of the Mississippi, and this accident of geology determined everything. The falls meant power—first for sawmills that turned the white pine forests of Minnesota into the lumber that built the Great Plains, then for flour mills that ground the wheat of the same plains into the flour that fed the cities of the East.',
          },
        ],
      },
      // Video 3: Milling History
      {
        id: 'video3',
        type: 'video-sequence',
        videoPath: '/minn-history-videos/minn-3.mp4',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p3-continued',
            type: 'paragraph',
            content: 'By the 1880s Minneapolis was the flour milling capital of the world, the epicenter of an industry built on the simple physics of water dropping twenty feet through mill races and turning wheels. Pillsbury and General Mills and Gold Medal—these were not brands but geographies made corporate, the transformation of rivers and wheat fields into products that could be shipped in bags and boxes to places that had forgotten what grain looked like growing.',
          },
        ],
      },
      // Video 4: Winter
      {
        id: 'video4',
        type: 'video-sequence',
        videoPath: '/minn-history-videos/minn-4.mp4',
        scrollHeight: 180,
        textBlocks: [
          {
            id: 'p6',
            type: 'paragraph',
            content: 'Winter here is not a season but a test. January means weeks when the high temperature never reaches zero Fahrenheit, when the cold is so absolute it becomes almost abstract.',
          },
        ],
      },
      // Video 5: George Floyd / Social Issues
      {
        id: 'video5',
        type: 'video-sequence',
        videoPath: '/minn-history-videos/minn-5.mp4',
        scrollHeight: 200,
        textBlocks: [
          {
            id: 'p7',
            type: 'paragraph',
            content: 'The progressive reputation is real but complicated. This is the city where George Floyd was murdered in 2020, where the police officer knelt on his neck for nine minutes while he begged for breath. The protests that followed burned a police precinct, turned Lake Street into a corridor of broken glass and boarded windows.',
          },
        ],
      },
      // Video 6: Culture/Conclusion
      {
        id: 'video6',
        type: 'video-sequence',
        videoPath: '/minn-history-videos/minn-6.mp4',
        scrollHeight: 220,
        textBlocks: [
          {
            id: 'p12',
            type: 'paragraph',
            content: 'The city sits at the northwestern edge of the agricultural and industrial Midwest, a final outpost before the Great Plains begin their long emptiness westward. Now it succeeds by being livable, which is a quieter kind of victory but perhaps a more durable one. The rivers still converge. The falls still drop.',
          },
        ],
      },
    ],
  },
}
