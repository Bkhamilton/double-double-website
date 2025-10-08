# Top 50 Player Rankings - Data Structure

## Overview

The Top 50 NBA player rankings are now structured to eliminate data duplication and make it easier to update rankings throughout the season.

## File Structure

### `topPlayers.json`
Contains all unique player data (biographical info, stats, etc.) without any ranking information. Each player has a unique `id` field derived from their name.

**Player fields:**
- `id`: Unique identifier (lowercase, alphanumeric only)
- `name`: Player's full name
- `height`: Height (e.g., "76\"")
- `weight`: Weight (e.g., "226 lbs")
- `position`: Position (e.g., "C", "PG", "PF")
- `team`: Current team
- `description`: Player description/bio
- `stats`: Season statistics
- `percentages`: Shooting percentages
- `advanced`: Advanced statistics
- `imageUrl`: Optional player image URL

### `benTop50Rankings.json`
Contains only Ben's rankings - maps player IDs to their ranks.

**Structure:**
```json
[
  {
    "playerId": "nikolajokic",
    "rank": 1
  }
]
```

### `jpTop50Rankings.json`
Contains only JP's rankings - maps player IDs to their ranks.

**Structure:** Same as `benTop50Rankings.json`

### `benTop50.js` and `jpTop50.js`
JavaScript modules that merge player data with rankings at runtime. These files export the complete player objects with ranks and cross-references to the other person's rankings.

## How to Update Rankings

### Changing a Player's Rank

To change a player's rank in Ben's or JP's list:

1. Open `benTop50Rankings.json` or `jpTop50Rankings.json`
2. Find the player by their `playerId`
3. Update their `rank` value
4. Save the file

**Example:** To move Nikola Jokic from rank 1 to rank 2 in Ben's list:
```json
{
  "playerId": "nikolajokic",
  "rank": 2
}
```

### Adding a New Player

To add a player to the rankings:

1. **First, add the player to `topPlayers.json`:**
   - Generate a unique ID (lowercase name with no spaces or special characters)
   - Add all player data fields
   - Insert in alphabetical order by name (optional, for readability)

2. **Then, add the ranking:**
   - Add an entry to `benTop50Rankings.json` or `jpTop50Rankings.json`
   - Use the same `playerId` you created
   - Assign the desired `rank`

**Example:**
```json
// In topPlayers.json
{
  "id": "lebronjames",
  "name": "LeBron James",
  "height": "81\"",
  "weight": "250 lbs",
  "position": "SF",
  "team": "Los Angeles Lakers",
  "description": "...",
  "stats": "...",
  "percentages": "...",
  "advanced": "...",
  "imageUrl": null
}

// In benTop50Rankings.json
{
  "playerId": "lebronjames",
  "rank": 15
}
```

### Removing a Player from Rankings

To remove a player from a ranking list:

1. Open `benTop50Rankings.json` or `jpTop50Rankings.json`
2. Remove the player's entry
3. **Do NOT remove the player from `topPlayers.json`** - they might still be in the other person's list

### Updating Player Stats or Bio

To update a player's statistics or biographical information:

1. Open `topPlayers.json`
2. Find the player by name
3. Update the relevant fields (`stats`, `percentages`, `advanced`, `description`, etc.)
4. Save the file

This change will automatically reflect in both Ben's and JP's lists if the player appears in them.

## Benefits of This Structure

1. **No Data Duplication**: Player stats and bio are stored once in `topPlayers.json`
2. **Easy Rank Updates**: Change rankings without touching player data
3. **Consistent Stats**: When you update a player's stats, it updates in both lists automatically
4. **Flexible Rankings**: Each person can independently maintain their rankings
5. **Cross-References**: The system automatically shows each person's rank on the other's list

## Validation

After making changes, you can verify the data structure by running:
```bash
npm run lint
```

The application will fail to load if:
- A ranking references a non-existent `playerId`
- Required player fields are missing
- JSON syntax is invalid
