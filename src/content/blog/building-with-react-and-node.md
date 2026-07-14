---
title: Building With React and Node — Lessons From My Volunteer App
date: 2026-06-15
excerpt: Notes from building a full-stack volunteer management app — what worked, what I'd change, and a few gotchas with PostgreSQL.
tags: [React, Node.js, PostgreSQL]
---

Building the Volunteer Web App taught me a lot about connecting a React frontend to a real backend with a proper database. Here are a few takeaways.

## Structuring the API

I kept the Express routes thin and pushed logic into service functions:

```js
// routes/events.js
router.get("/events", async (req, res) => {
  const events = await eventService.getUpcoming();
  res.json(events);
});
```

This made it much easier to test the business logic separately from the HTTP layer.

## Working with PostgreSQL

A few things I'd tell past-me:

1. Always index columns you filter on — I learned this the hard way once the events table grew.
2. Use `Prisma` migrations instead of hand-writing SQL for schema changes.
3. Seed data early so you're not testing against an empty database.

## Wrapping up

> "Simple, boring code that works is almost always better than clever code that's hard to maintain."

That mindset shift — favoring clarity over cleverness — has made the biggest difference in how maintainable my projects are.

Check out the [project itself](https://nfm-volunteer.vercel.app/) if you want to see it in action.
