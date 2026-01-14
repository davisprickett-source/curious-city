import requests
import os

images = {
    "public/salt-lake-city/curiosities/greatest-snow.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/46/Utah_%E2%80%9Cgreatest_snow_on_earth%E2%80%9D_embossed_license_plate.jpg",
    "public/salt-lake-city/iconic-spots/salt-flats.jpg": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Bonneville_Salt_Flats%2C_Utah.jpg",
    "public/salt-lake-city/iconic-spots/this-is-the-place.jpg": "https://upload.wikimedia.org/wikipedia/commons/d/d7/This_Is_The_Place_Monument_SLC.jpg",
    "public/salt-lake-city/articles/plum-alley.png": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Salt_Lake_City_Chinatown_1910.jpg",
    "public/salt-lake-city/articles/balloon-bomb.png": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Japanese_balloon_weapon.jpg"
}

headers = {
    "User-Agent": "CuriousCity/1.0 (https://curious.city; info@curious.city)"
}

for path, url in images.items():
    print(f"Downloading {path}...")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    r = requests.get(url, headers=headers)
    if r.status_code == 200:
        with open(path, 'wb') as f:
            f.write(r.content)
        print(f"Success!")
    else:
        print(f"Failed: {r.status_code}")
