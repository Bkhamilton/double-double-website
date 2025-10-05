import React from 'react';
import TopFiftyList from './TopFiftyList/TopFiftyList';

// Generate mock player data with randomized stats
function generateMockPlayers() {
    const firstNames = ['Marcus', 'Jordan', 'Tyler', 'Kevin', 'Anthony', 'Brandon', 'Chris', 'James', 'Isaiah', 'Jaylen', 
                       'Devin', 'Donovan', 'Damian', 'Stephen', 'Kawhi', 'Paul', 'Joel', 'Giannis', 'Nikola', 'Luka',
                       'Trae', 'Zion', 'Ja', 'LaMelo', 'Cade', 'Evan', 'Scottie', 'Franz', 'Paolo', 'Victor',
                       'Jalen', 'Tyrese', 'Desmond', 'RJ', 'Mikal', 'Darius', 'De\'Aaron', 'Shai', 'Jaren', 'Bam',
                       'Julius', 'Tobias', 'CJ', 'DeMar', 'Khris', 'Fred', 'Kyle', 'Russell', 'Bradley', 'Kristaps'];
    
    const lastNames = ['Williams', 'Johnson', 'Davis', 'Brown', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas',
                      'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez',
                      'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'King', 'Wright', 'Lopez', 'Hill',
                      'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner',
                      'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Morris', 'Rogers', 'Reed'];
    
    const teams = ['Los Angeles Lakers', 'Golden State Warriors', 'Boston Celtics', 'Miami Heat', 'Milwaukee Bucks',
                  'Phoenix Suns', 'Denver Nuggets', 'Philadelphia 76ers', 'Dallas Mavericks', 'Brooklyn Nets',
                  'Memphis Grizzlies', 'Cleveland Cavaliers', 'New York Knicks', 'Atlanta Hawks', 'Toronto Raptors',
                  'Chicago Bulls', 'Sacramento Kings', 'New Orleans Pelicans', 'Minnesota Timberwolves', 'LA Clippers',
                  'Portland Trail Blazers', 'Utah Jazz', 'Oklahoma City Thunder', 'San Antonio Spurs', 'Orlando Magic',
                  'Charlotte Hornets', 'Indiana Pacers', 'Washington Wizards', 'Detroit Pistons', 'Houston Rockets'];
    
    const positions = ['PG', 'SG', 'SF', 'PF', 'C', 'G', 'F', 'G-F', 'F-C'];
    
    const players = [];
    
    for (let i = 1; i <= 50; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const name = `${firstName} ${lastName}`;
        
        // Generate random stats
        const gp = Math.floor(Math.random() * 30) + 50; // 50-80 games
        const pts = (Math.random() * 15 + 10).toFixed(1); // 10-25 points
        const reb = (Math.random() * 6 + 3).toFixed(1); // 3-9 rebounds
        const ast = (Math.random() * 5 + 2).toFixed(1); // 2-7 assists
        const stl = (Math.random() * 1.5 + 0.5).toFixed(1); // 0.5-2 steals
        const blk = (Math.random() * 1.5 + 0.3).toFixed(1); // 0.3-1.8 blocks
        const tov = (Math.random() * 2 + 1).toFixed(1); // 1-3 turnovers
        
        // Generate percentages
        const fgPct = (Math.random() * 0.15 + 0.40).toFixed(3); // 40-55%
        const threePct = (Math.random() * 0.15 + 0.30).toFixed(3); // 30-45%
        const ftPct = (Math.random() * 0.15 + 0.70).toFixed(3); // 70-85%
        
        // Generate advanced stats (PER, ORTG, DRTG, USG)
        const per = (Math.random() * 10 + 15).toFixed(1); // 15-25
        const ortg = (Math.random() * 20 + 100).toFixed(1); // 100-120
        const drtg = (Math.random() * 20 + 95).toFixed(1); // 95-115
        const usg = (Math.random() * 10 + 20).toFixed(1); // 20-30%
        
        players.push({
            rank: i,
            name: name,
            height: `${Math.floor(Math.random() * 8) + 74}"`, // 6'2" to 6'9"
            weight: `${Math.floor(Math.random() * 40) + 180} lbs`, // 180-220 lbs
            position: positions[Math.floor(Math.random() * positions.length)],
            team: teams[Math.floor(Math.random() * teams.length)],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            stats: `${gp} ${(pts * gp).toFixed(0)} ${(reb * gp).toFixed(0)} ${(ast * gp).toFixed(0)} ${(stl * gp).toFixed(0)} ${(blk * gp).toFixed(0)} ${(tov * gp).toFixed(0)}`,
            percentages: `${(pts * gp * 0.45).toFixed(0)} ${(pts * gp).toFixed(0)} ${(pts * gp * 0.35).toFixed(0)} ${(pts * gp).toFixed(0)} ${(pts * gp * 0.20).toFixed(0)} ${(pts * gp * 0.25).toFixed(0)}`,
            advanced: `${per}PER ${ortg}ORTG ${drtg}DRTG ${usg}%USG`,
            imageUrl: null // Placeholder for now
        });
    }
    
    return players;
}

export default function TopFifty() {
    const players = generateMockPlayers();
    
    return (
        <div>
            <h1 className="text-center text-4xl md:text-5xl font-bold text-white py-12
                    [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
            >
                Top 50 NBA Players
            </h1>
            <TopFiftyList players={players}/>
        </div>
    );
}
