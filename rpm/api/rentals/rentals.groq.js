export const RENTALS = {
  ALL: `* [_type == 'rental'] {
    _id,
    "apartmentName": apartmentName[$lang],
    streetAddress,
    "image": imageFront.asset-> url,
    price,
    video,
    availability
 
  }`,
  ITEM: `
    *[_type == 'rental' && ($id == _id)] {
      "apartmentName": apartmentName[$lang],
      streetAddress,
      "imageFront": imageFront.asset-> url,
      "images": images[]{
        "url": image.asset->url,
        "description": image.asset->description[$lang]
      },
      price,
      video,
      availability,

      
    }[0]
  `,
};
