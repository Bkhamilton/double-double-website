# Documentation for The Double Double Podcast Website

This documentation folder contains plans, technical specifications, and implementation guides for future features and improvements to The Double Double Podcast website.

---

## Future Development Plans

### 1. Real-Time Podcast Integration (Priority: HIGH)

#### Current State

**Problem:** Episode data is currently hardcoded in the website:
- **Latest Episode**: Hardcoded in `data/episodes.js` as `testEpisode`
  - Manually updated episode information
  - Static episode name, description, release date, and duration
  - Episode URLs point to specific episode pages
  
- **Featured Episode**: Uses placeholder lorem ipsum data in `data/episodes.js` as `featuredEpisode`
  - Dummy description text
  - Outdated episode information
  - Links to generic podcast pages

**Impact:**
- Website shows stale episode information
- Requires manual code updates for each new episode release
- Poor user experience as visitors don't see the actual latest content
- Featured episode doesn't showcase real content

#### Desired Future State

Automatically fetch and display the latest podcast episodes from streaming platforms:
- Pull latest episode data from Spotify and/or Apple Podcasts APIs
- Display accurate episode titles, descriptions, release dates, and durations
- Provide direct links to episodes on each platform
- Update automatically when new episodes are published

---

## Implementation Strategy

### Phase 1: API Research & Proof of Concept

#### Spotify API Integration

**Spotify for Developers API:**
- **Documentation**: https://developer.spotify.com/documentation/web-api
- **Relevant Endpoints**:
  - `GET /shows/{id}` - Get show information
  - `GET /shows/{id}/episodes` - Get show episodes
  - **Show ID**: `6HKVei1HZ3XodZkO5KkEK3` (from existing URLs)

**Authentication:**
- Requires Spotify app registration
- Uses OAuth 2.0 Client Credentials Flow for server-to-server requests
- Need to store `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` as environment variables

**Data Available:**
- Episode name
- Episode description (HTML formatted)
- Release date
- Duration (milliseconds)
- Episode URL
- Audio preview URL (30 second clips)
- Images/artwork

**Example Request:**
```javascript
// Get latest episodes from Spotify
const response = await fetch(
  'https://api.spotify.com/v1/shows/6HKVei1HZ3XodZkO5KkEK3/episodes?limit=10',
  {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }
);
```

**Rate Limits:**
- Rate limiting applies, but typically generous for read operations
- Implement caching to minimize API calls
- Consider using Next.js ISR (Incremental Static Regeneration) or caching strategies

#### Apple Podcasts API Integration

**Apple Podcasts API:**
- **Documentation**: https://developer.apple.com/documentation/applemusicapi
- **Alternative**: RSS Feed parsing (more accessible)

**Challenges:**
- Apple Podcasts Connect API is primarily for podcast creators
- No public REST API for fetching episode data like Spotify
- Apple Podcasts uses RSS feeds for podcast distribution

**RSS Feed Approach (RECOMMENDED):**
- Most podcasts on Apple Podcasts have an RSS feed
- Can parse RSS feed to get episode information
- **Podcast ID from URL**: `1555765326`
- Need to find the RSS feed URL for "The Chase Down" podcast

**Finding RSS Feed:**
1. Use Apple Podcasts Lookup API: `https://itunes.apple.com/lookup?id=1555765326&entity=podcast`
2. Extract `feedUrl` from response
3. Parse RSS/XML feed to get episodes

**Data Available from RSS:**
- Episode title
- Episode description
- Publication date
- Duration
- Episode URL (web player link)
- Enclosure URL (audio file)

**Example Implementation:**
```javascript
// Fetch podcast info to get RSS feed URL
const lookupResponse = await fetch(
  'https://itunes.apple.com/lookup?id=1555765326&entity=podcast'
);
const data = await lookupResponse.json();
const rssFeedUrl = data.results[0].feedUrl;

// Parse RSS feed (requires XML parser library)
const rssResponse = await fetch(rssFeedUrl);
const rssText = await rssResponse.text();
// Parse XML to extract episode data
```

---

### Phase 2: Technical Implementation

#### Architecture Options

**Option A: Server-Side Fetching (RECOMMENDED)**
- Create API routes in Next.js (`app/api/episodes/route.ts`)
- Fetch episode data server-side on request
- Use Next.js caching and revalidation
- Keep API keys secure on server

**Pros:**
- Secure API key storage
- Better SEO (episodes rendered server-side)
- Reduced client bundle size
- Built-in Next.js caching mechanisms

**Cons:**
- Slightly slower initial page load
- Depends on server availability

**Option B: Build-Time Static Generation**
- Fetch episode data at build time using Next.js generateStaticParams
- Rebuild site when new episodes are published (via webhook or scheduled builds)
- Fastest page loads for visitors

**Pros:**
- Fastest page load times
- No runtime API calls needed
- Works with static hosting

**Cons:**
- Requires rebuild for updates
- May need webhook integration from podcast host
- Slightly stale data between builds

**Option C: Client-Side Fetching**
- Fetch episode data in React components
- Use React hooks (useEffect, SWR, or React Query)

**Pros:**
- Simple implementation
- No server-side logic needed

**Cons:**
- API keys exposed to client (security risk)
- Worse SEO
- Slower perceived load time
- More client-side JavaScript

#### Recommended Implementation: Hybrid Approach

1. **Create API Route**: `/app/api/episodes/latest/route.ts`
   - Fetches data from Spotify API (primary source)
   - Falls back to RSS feed if Spotify fails
   - Implements caching (revalidate every 1 hour)
   - Returns normalized episode data

2. **Update Episode Data Structure**: `data/episodes.js`
   - Keep existing structure as fallback
   - Export episode schema/type

3. **Update Home Component**: `components/Home/Home.tsx`
   - Fetch episodes server-side using Next.js Server Components
   - Pass data to existing EpisodeNode and FeaturedEpisode components
   - Maintain existing UI/UX

4. **Environment Variables**: Add to `.env.local`
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   NEXT_PUBLIC_APPLE_PODCAST_ID=1555765326
   NEXT_PUBLIC_SPOTIFY_SHOW_ID=6HKVei1HZ3XodZkO5KkEK3
   ```

---

### Phase 3: Implementation Steps

#### Step 1: Set Up Spotify API Access
1. Create Spotify Developer account
2. Create new app in Spotify Dashboard
3. Get Client ID and Client Secret
4. Add credentials to environment variables
5. Test authentication flow

#### Step 2: Create API Utilities
1. Create `/lib/spotify.ts` - Spotify API client
   - Authentication helper
   - Token management and caching
   - Episode fetching functions

2. Create `/lib/rss-parser.ts` - RSS feed parser
   - Fetch and parse podcast RSS feeds
   - Transform RSS data to standard format

3. Create `/lib/episode-fetcher.ts` - Unified episode fetcher
   - Try Spotify first
   - Fallback to RSS if needed
   - Data normalization
   - Error handling

#### Step 3: Create API Route
1. Create `/app/api/episodes/latest/route.ts`
   - GET endpoint for latest episodes
   - Query parameters for limit, offset
   - Caching with Next.js revalidation
   - Return JSON with episode data

#### Step 4: Update Components
1. Convert `app/page.tsx` to async Server Component (if not already)
2. Fetch episodes data server-side
3. Pass to `Home` component
4. Update `Home` component to accept episodes as props
5. Keep existing UI components unchanged

#### Step 5: Handle Fallbacks & Errors
1. Keep hardcoded episodes as fallback
2. Graceful degradation if API fails
3. Loading states (optional for Server Components)
4. Error boundaries for better UX

#### Step 6: Add Caching Strategy
1. Use Next.js built-in caching: `{ next: { revalidate: 3600 } }`
2. Cache Spotify access tokens (expires in 1 hour)
3. Consider adding Redis or in-memory cache for production

---

### Phase 4: Testing & Deployment

#### Testing Checklist
- [ ] Test Spotify API integration with valid credentials
- [ ] Test RSS feed parsing for Apple Podcasts
- [ ] Test fallback mechanism when APIs fail
- [ ] Test with rate limiting scenarios
- [ ] Verify episode data displays correctly in existing components
- [ ] Test on mobile and desktop viewports
- [ ] Check accessibility
- [ ] Performance testing (Lighthouse scores)

#### Deployment Considerations
1. Add environment variables to Vercel
2. Test in preview deployment first
3. Monitor API usage and costs (Spotify API is free but has rate limits)
4. Set up error monitoring (Sentry, LogRocket, etc.)
5. Configure appropriate cache headers

---

## Alternative Approaches

### Approach 1: Podcast Hosting Platform Integration

If the podcast is hosted on a platform like Anchor, Buzzsprout, or Libsyn:
- Use their API directly (often more reliable)
- May have webhooks for new episode notifications
- Usually simpler authentication

### Approach 2: Manual CMS Integration

Leverage existing Contentful CMS:
- Create new content model for episodes
- Manually update episode data in Contentful
- Fetch from Contentful like draft guide data
- More control, but still requires manual updates

### Approach 3: Scheduled Rebuilds

If full API integration is too complex initially:
- Keep hardcoded episodes
- Set up automated script to fetch latest episodes
- Run script weekly/daily to update `episodes.js`
- Commit and deploy automatically
- Uses GitHub Actions or similar CI/CD

### Approach 4: Simple Link Updates Only

Minimal implementation:
- Keep episode structure mostly hardcoded
- Only update `external_urls` to link to latest episodes
- Use platform APIs to get latest episode URLs
- Update buttons to link to latest episode instead of show page

---

## Dependencies & Libraries

### Required for Full Implementation

1. **Spotify Integration:**
   - No additional npm packages needed (use native fetch)
   - Or use: `spotify-web-api-node` for easier integration

2. **RSS Parsing:**
   - `rss-parser` - Simple RSS/Atom parser
   - `xml2js` - XML to JavaScript object converter
   - `fast-xml-parser` - Fast and lightweight XML parser

3. **Caching (Optional):**
   - `node-cache` - Simple in-memory caching
   - `@vercel/kv` - Vercel KV storage for serverless
   - `ioredis` - Redis client for production caching

4. **HTTP Client (Optional):**
   - Native `fetch` API is sufficient
   - `axios` - Promise-based HTTP client (if preferred)

### Installation Commands

```bash
# For RSS parsing (required for Apple Podcasts)
npm install rss-parser

# Optional: For Spotify SDK (makes API calls easier)
npm install spotify-web-api-node

# Optional: For caching
npm install node-cache
```

---

## Security Considerations

1. **API Keys:**
   - Never commit API keys to repository
   - Use environment variables for all secrets
   - Add `.env.local` to `.gitignore`
   - Document required environment variables in README

2. **Rate Limiting:**
   - Implement request caching to reduce API calls
   - Add retry logic with exponential backoff
   - Monitor API usage to avoid hitting limits

3. **Error Handling:**
   - Don't expose API error messages to users
   - Log errors server-side for debugging
   - Always have fallback data ready

4. **CORS:**
   - API routes automatically handle CORS in Next.js
   - Keep external API calls server-side only

---

## Success Metrics

After implementation, measure success by:
- [ ] Latest episode updates automatically without code changes
- [ ] Page load time remains under 2 seconds
- [ ] Episode data accuracy (matches Spotify/Apple Podcasts)
- [ ] Zero API-related errors in production
- [ ] Positive user feedback on up-to-date content
- [ ] Reduced maintenance time for content updates

---

## Timeline Estimate

**Phase 1 - Research & POC**: 2-4 hours
- API testing and experimentation
- Choose best approach

**Phase 2 - Core Implementation**: 6-8 hours
- API client development
- API routes
- Component updates

**Phase 3 - Testing & Refinement**: 3-4 hours
- Error handling
- Fallbacks
- Performance optimization

**Phase 4 - Deployment**: 1-2 hours
- Environment configuration
- Production testing
- Monitoring setup

**Total Estimated Time**: 12-18 hours

---

## Getting Started

To begin implementation:

1. **Immediate Next Steps:**
   - Register for Spotify Developer account
   - Find Apple Podcasts RSS feed URL
   - Set up local environment variables
   - Create proof of concept API route

2. **Test Locally:**
   ```bash
   # Create .env.local file
   echo "SPOTIFY_CLIENT_ID=your_client_id_here" >> .env.local
   echo "SPOTIFY_CLIENT_SECRET=your_client_secret_here" >> .env.local
   
   # Install dependencies
   npm install rss-parser
   
   # Run dev server
   npm run dev
   ```

3. **Resources:**
   - [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api)
   - [Apple Podcasts RSS Specification](https://help.apple.com/itc/podcasts_connect/#/itcb54353390)
   - [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
   - [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)

---

## Questions & Decisions Needed

Before starting implementation, decide on:

1. **Which API to prioritize?** 
   - Spotify (easier, better documented)
   - Apple Podcasts (via RSS, more universal)
   - Both (redundancy, but more complexity)

2. **Caching strategy?**
   - How often should episode data refresh? (Suggested: 1 hour)
   - Where to cache? (Memory, Redis, Next.js native)

3. **Featured episode selection?**
   - Always second-most-recent?
   - Manual curation field in CMS?
   - Random from recent episodes?
   - Editor's pick?

4. **Fallback behavior?**
   - Keep current hardcoded data?
   - Show error message?
   - Fetch from alternative source?

5. **Budget considerations?**
   - Spotify API is free but rate-limited
   - RSS parsing is free and unlimited
   - Need caching service? (Vercel KV, Redis Cloud)

---

## Contact & Collaboration

For questions about this implementation:
- Review existing codebase: `data/episodes.js`, `components/Home/Home.tsx`
- Check Spotify show: https://open.spotify.com/show/6HKVei1HZ3XodZkO5KkEK3
- Check Apple Podcasts: https://podcasts.apple.com/us/podcast/the-chase-down/id1555765326

---

*Last Updated: 2025*
*Status: Planning Phase*
*Priority: High*
