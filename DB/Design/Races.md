# DB Races

## Entities

### races **(ED)**

- race_id **_(PK)_**
- race_type **_(FK)_**
- country **_(FK)_**
- name
- date
- time
- high
- place
- picture

### types_races **(CE)**
- programming_languages_id **_(PK)_**
- description
- distance

### countries **(CE)**
- country_id **_(PK)_**
- name

## Relations 
1. A **race** begins a one type of race _1 to 1_
2. A **race** is in one country _1 to one_

