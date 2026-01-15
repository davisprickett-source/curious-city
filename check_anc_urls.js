
const urls = [
  'https://anchoragemuseum.org',
  'https://www.muni.org/parks',
  'https://foast.org/museum',
  'https://anchorageparkfoundation.org/indigenous-placemaking',
  'https://midnightsunbrewing.com',
  'https://alaskawildlife.org',
  'http://williwawsocial.com/',
  'https://www.49thstatebrewing.com/',
  'https://www.glacierbrewhouse.com/',
  'http://darwinstheoryalaska.com/',
  'https://www.simonandseaforts.com/',
  'https://www.moosestoothak.com/',
  'https://www.snowcitycafe.com/',
  'https://www.spenardroadhouse.com/',
  'https://www.kinleysrestaurant.com/',
  'https://kaladi.com',
  'https://steamdot.com',
  'https://www.amazon.com/American-Predator-Meticulous-Serial-Century/dp/1101984430',
  'https://www.cbsnews.com/news/israel-keyes-serial-killer-48-hours/',
  'https://www.adn.com/alaska-news/crime-courts/israel-keyes/',
  'https://podcasts.apple.com/us/podcast/true-crime-bullsh/id1470519390',
  'https://www.fbi.gov/news/stories/serial-killer-israel-keyes',
  'https://earthquake.usgs.gov/earthquakes/events/alaska1964/',
  'https://ready.alaska.gov/plans/1964-earthquake',
  'https://www.alaskaexperiencetheatre.com/',
  'https://www.anchoragemuseum.org/exhibits/good-friday-earthquake/',
  'https://www.amazon.com/Great-Quake-Earthquake-Understanding-Planet/dp/1101904119',
  'https://www.amazon.com/Butcher-Baker-Account-Alaskan-Serial/dp/0451403711',
  'https://www.imdb.com/title/tt2005374/',
  'https://www.aetv.com/shows/mind-of-a-monster/season-1/episode-1',
  'https://allthatsinteresting.com/robert-hansen',
  'https://open.spotify.com/episode/butcher-baker',
  'https://www.cdc.gov/suicide/facts/disparities-in-suicide.html',
  'https://health.alaska.gov/dph/Chronic/Pages/sad.aspx',
  'https://vpc.org/revealing-the-impacts-of-gun-violence/alaska/',
  'https://www.npr.org/alaska-winter-darkness',
  'https://podcasts.apple.com/podcast/alaska-public-media',
  'https://www.anchoragemuseum.org/exhibits/pipeline/',
  'https://www.alaskapublic.org/fourth-avenue-anchorage-history/',
  'https://www.uihi.org/resources/missing-and-murdered-indigenous-women-girls/',
  'https://www.aknwrc.org/mmip',
  'https://www.mtv.com/shows/somebodys-daughter',
  'https://dps.alaska.gov/MMIP',
  'https://podcasts.apple.com/us/podcast/missing-in-alaska/id1461759061',
  'https://dps.alaska.gov/AST/ABI/ColdCase',
  'https://www.adn.com/alaska-news/crime-courts/fandell-siblings/',
  'https://podcasts.apple.com/podcast/alaska-unsolved-fandell',
  'https://www.historicanchoragehotel.com/',
  'https://usghostadventures.com/alaska/haunted-places/historic-anchorage-hotel/',
  'https://www.alaskasnewssource.com/anchorage-hotel-ghosts/',
  'https://www.adn.com/alaska-news/crime-courts/2020/07/21/alaskas-eklutna-annie-remains-unidentified-40-years-later/',
  'https://www.nbcnews.com/news/us-news/dna-identifies-horseshoe-harriet-alaska-serial-killer-victim-rcna39829',
  'https://podcasts.apple.com/podcast/alaska-unsolved',
  'https://www.captaincook.com/',
  'https://www.hauntedrooms.com/alaska/anchorage/hotel-captain-cook',
  'https://www.alaskamagazine.com/haunted-hotels/',
  'https://www.muni.org/departments/police/',
  'https://usghostadventures.com/alaska/haunted-places/ship-creek/',
  'https://www.adn.com/alaska-news/crime-courts/ship-creek/',
  'https://www.adn.com/alaska-news/article/alaska-underworld-more-than-5-years-after-torsos-wash-anchorage-cases-remain-unsolved/2009/01/22/',
  'https://truecrimediva.com/the-dark-side-of-anchorage-alaska-part-ii-unsolved-murders-1991-2003/',
  'https://www.ktoo.org/2022/02/20/history-of-racial-segregation-in-alaska/',
  'https://www.ktoo.org/2020/03/05/illegal-for-decades-many-anchorage-homes-still-have-covenants-that-prohibit-sale-to-blacks-and-alaska-natives/',
  'https://www.anchoragemuseum.org/exhibits/black-lives-in-alaska-journey-justice-joy/',
  'https://anchoragemuseum.org',
  'https://www.muni.org/parks',
  'https://foast.org/museum',
  'https://anchorageparkfoundation.org/indigenous-placemaking',
  'https://midnightsunbrewing.com',
  'https://alaskawildlife.org',
  'https://anchorageplanetwalk.org',
  'https://akwildberry.com',
  'https://www.alaska.org/advice/alaska-bore-tide',
  'https://www.alaska.org/detail/salmon-viewing-at-ship-creek',
  'https://blackcupcoffee.com'
];

async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (response.ok) {
        console.log(`[OK] ${url}`);
    } else {
         const getResponse = await fetch(url);
        if (getResponse.ok) {
            console.log(`[OK] ${url}`);
        } else {
            console.log(`[FAIL] ${url} (Status: ${getResponse.status})`);
        }
    }
  } catch (error) {
    console.log(`[ERROR] ${url} (${error.message})`);
  }
}

async function checkAll() {
  for (const url of urls) {
    await checkUrl(url);
  }
}

checkAll();
