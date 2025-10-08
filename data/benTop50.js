import topPlayersData from './topPlayers.json' with { type: 'json' };
import benRankingsData from './benTop50Rankings.json' with { type: 'json' };
import jpRankingsData from './jpTop50Rankings.json' with { type: 'json' };

// Create a map of players by ID for quick lookup
const playersMap = new Map(topPlayersData.map(player => [player.id, player]));

// Create a map of JP's rankings by player ID
const jpRankingsMap = new Map(jpRankingsData.map(ranking => [ranking.playerId, ranking.rank]));

// Merge Ben's rankings with player data
export const benTop50 = benRankingsData.map(ranking => {
    const player = playersMap.get(ranking.playerId);
    if (!player) {
        throw new Error(`Player with ID ${ranking.playerId} not found in topPlayers`);
    }
    
    // Get JP's rank for this player if it exists
    const jpRank = jpRankingsMap.get(ranking.playerId);
    
    return {
        rank: ranking.rank,
        name: player.name,
        height: player.height,
        weight: player.weight,
        position: player.position,
        team: player.team,
        description: player.description,
        stats: player.stats,
        percentages: player.percentages,
        advanced: player.advanced,
        imageUrl: player.imageUrl,
        ...(jpRank !== undefined && { jpRank })
    };
});
