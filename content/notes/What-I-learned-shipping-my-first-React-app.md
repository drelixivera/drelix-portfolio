  ---
title: "What I learned shipping my first React app"
date: "2026-10-09"
tag: "Engineering"
summary: "Tutorials teach you syntax. Shipping your first real application teaches you how software actually behaves."
---

Tutorials give you a false sense of security. Everything is scoped, edge cases are ignored, and third-party dependencies always cooperate.

Then you ship your first actual application to real users, and the real education begins.

## 1. State management is about ownership, not storage

When I started out, I treated state like global variables — throwing `useState` hooks everywhere without asking who truly owned the data.

I quickly discovered that half of the bugs in React come from duplicate state falling out of sync. Lifting state up, keeping components dumb, and deriving values instead of synchronizing them with unnecessary effects solved more issues than any debugger ever did.

## 2. Fast UI is thoughtful UI

Performance isn't just about micro-optimizing re-renders. It's about perceived speed:
- Optimistic updates so buttons feel instant
- Skeleton loaders instead of jarring layout shifts
- Handling latency and error states gracefully

A fast UI is one that respects the user's focus and time.

## 3. Shipping is the only test that counts

You can refactor a codebase ten times in private, but until a client clicks a button on mobile or a bot fills out your contact form, you don't actually know what you've built.

Shipping isn't the finish line. It's the starting gun for real feedback.
