import React from 'react';
import client from '@/lib/contentful'; // Adjust path as needed
import DraftGuideList from './DraftGuideList/DraftGuideList';

export default async function DraftGuide () {
      // Fetch data directly in the component (server component)
    const res = await client.getEntries({
        content_type: 'draftGuide' // Make sure this matches exactly what's in Contentful
    });

    const players = res.items.map((item) => ({
        rank: item.fields.rank,
        name: item.fields.name,
        height: item.fields.height,
        weight: item.fields.weight,
        position: item.fields.position,
        team: item.fields.team,
        description: {
        content: item.fields.description?.content || ''
        },
        stats: {
        content: item.fields.stats?.content || ''
        },
        percentages: {
        content: item.fields.percentages?.content || ''
        },
        advanced: {
        content: item.fields.advanced?.content || ''
        }
    }));

    return (
        <div>
            <h1>Draft Guide</h1>
            <DraftGuideList players={players}/>
        </div>
    );
};