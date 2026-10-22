# pak_zipcodes

Pakistan Postal Codes.

An interactive map of **estimated** delivery areas for Pakistan's 5-digit postcodes, with a form the public can use to send corrections.

Pakistan Post doesn't publish postcode boundaries. These areas were modelled by placing each delivery post office and giving every union council to its nearest located office. They are **not official boundaries**. Use the confidence grade on each area to judge how far to trust it.

| | |
|---|---|
| Postcodes in the official directory | 2,560 |
| With a modelled area | 1,640 |
| Not located (no area yet) | 650 |
| Institutions with no area of their own | 171 |
| Merged into another office's area | 99 |

## Confidence grades

| Grade | Meaning |
|---|---|
| A | Office name matched a place, and an independent coordinate agrees |
| B | Office name matched a union council or town |
| C | Placed from a coordinate only |
| D | Weak match (similar spelling, or tehsil name only) |

`gpo_offices_located` shows what share of the same GPO's offices could be placed. Where it's low, the areas around it are probably too big, because they cover for offices that couldn't be placed.

## Sources and credits

- Postcode list: Pakistan Post, *Post Code Directory* (delivery and non-delivery post offices).
- Union council, tehsil and district boundaries: ALHASAN Systems (2017), via the Humanitarian Data Exchange. Check its licence terms before publishing derived data.
- Coordinates and town locations: [GeoNames](https://www.geonames.org/), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- Urban extents: [Natural Earth](https://www.naturalearthdata.com/) (public domain).
- Basemap: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, © [CARTO](https://carto.com/attributions).
- Map library: [Leaflet](https://leafletjs.com/).

## Known limits

- Edges follow union council lines, not real delivery routes.
- Central Islamabad has no union councils in the source data, so its sector postcodes (44xxx) aren't located yet.
- Several big Karachi, Lahore and Rawalpindi codes aren't located yet, so some city areas are too large.
- City and town outlines come from 2017-or-earlier sources and may miss newer housing schemes.
