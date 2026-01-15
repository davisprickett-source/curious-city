
const urls = [
  'https://www.artic.edu',
  'https://greenmilljazz.com',
  'https://mcachicago.org',
  'https://www.cityofchicago.org/city/en/depts/dca/supp_info/millennium_park.html',
  'https://www.navypier.org',
  'https://www.360chicago.com',
  'https://www.themagnificentmile.com',
  'https://www.theskydeck.com',
  'https://www.chicagology.com/columbiaexpo/tunnels/',
  'http://forgottenchicago.com/features/remnants-of-the-l/',
  'https://www.exchequerpub.com',
  'https://www.chicagoparkdistrict.com',
  'https://www.lincolnparkconservancy.org/caldwell-lily-pool/',
  'https://www.chicagotemple.org',
  'https://www.musicboxtheatre.com',
  'https://www.homesteadontheroof.com',
  'https://www.projectlogan.com',
  'https://www.biography-theater.com',
  'https://www.nps.gov/pull',
  'https://whistlerchicago.com/',
  'https://www.skylarkchicago.com/',
  'https://emptybottle.com/',
  'https://threedotschicago.com/',
  'https://www.community-bar.com/',
  'https://www.simonstavern.com/',
  'https://avecrestaurant.com',
  'https://www.birrieriazaragoza.com/',
  'https://sunwahbbq.com',
  'https://www.portillos.com',
  'https://www.smythandtheloyalist.com',
  'https://www.history.com/topics/crime/hh-holmes',
  'https://www.smithsonianmag.com/history/murder-castle-hh-holmes-180964740/',
  'https://interactive.wttw.com/ten/disasters/iroquois-theatre-fire'
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
