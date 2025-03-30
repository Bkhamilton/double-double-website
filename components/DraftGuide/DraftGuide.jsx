import React from 'react';
import client from '@/lib/contentful'; // Adjust path as needed
import DraftGuideList from './DraftGuideList/DraftGuideList';

export default async function DraftGuide () {
      // Fetch data directly in the component (server component)
    const res = await client.getEntries({
        content_type: 'draftGuide', // Make sure this matches exactly what's in Contentful
        select: 'sys.id,fields'
    });

    const players = res.items.map((item) => {
        const fields = item.fields;
        return {
          rank: fields.rank,
          name: fields.name,
          height: fields.height,
          weight: fields.weight,
          position: fields.position,
          team: fields.team,
          description: fields.description,
          stats: fields.stats,
          percentages: fields.percentages,
          advanced: fields.advanced
        };
    });
    
    return (
        <div>
            <h1>Draft Guide</h1>
            <DraftGuideList players={players}/>
        </div>
    );
};