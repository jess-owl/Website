---
title: "Structural Support Coordination for Drones using LLMs"
abstract: "Autonomous drones that reinforce unstable structures by measuring what's actually standing, not what a blueprint says should be there — using an LLM to decide where help is needed most, tested on Jenga towers as a stand-in for real damaged structures."
thumbnail: /assets/images/project-one/thumbnail.jpg
order: 1
videos:
  - id: "YOUTUBE_VIDEO_ID"
    caption: "Demo 1a: Jenga-H 2 drone support."
  - id: "YOUTUBE_VIDEO_ID"
    caption: "Demo 1b: Mission plan for Jenga-H 2 drone support."
  - id: "YOUTUBE_VIDEO_ID"
    caption: "Demo 2a: Jenga-H 4 drone support."
  - id: "YOUTUBE_VIDEO_ID"
    caption: "Demo 3a: Jenga-T 2 drone support."
---

A Jenga tower missing a few blocks is a small, controllable stand-in for a
bigger problem: a structure that's been damaged or has drifted out of shape
and needs to be reinforced before anyone can trust it again. In a disaster
response or construction setting, nobody hands you the original blueprint —
you have to work from what's actually standing right now. This project
builds that pipeline end to end, with drones doing the reinforcing:

1. **Snapshot.** Capture the live pose of every block in the structure.
2. **Measure, don't assume.** Gap detection looks only at current, measured
   geometry — what's touching what, right now, and where an unsupported
   void actually is — never at a stored "ideal" layout. A block pulled
   cleanly from a known grid and a block that simply drifted into an
   unsupported position look identical to this step, and get the same
   treatment. On purpose.
3. **Select, don't generate.** An LLM decides which drone goes to which
   gap — but it only ever picks from a short list of pre-computed,
   physically-validated candidate positions; it never outputs raw flight
   coordinates itself. Letting it generate numbers directly was tried and
   failed fast, sending a drone clipping into the tower on the first
   attempt. Keeping the LLM to a selection role, with the geometry computed
   independently, is what makes this safe enough to run on real hardware.
4. **Reinforce, then re-check.** The drone flies to the chosen gap and
   becomes the missing support. Feeding a failed reinforcement back to the
   LLM — the reason it failed, alongside its own prior reasoning — so it
   can retry instead of repeating the same mistake, is the piece currently
   being built out.

Jenga is the testbed because it's cheap, physical, and fails in exactly the
ways a real structure does — but nothing above is Jenga-specific. The
detection and selection logic never see a block grid, a known layer height,
or a "correct" tower shape, only raw object geometry. That's deliberate:
the actual goal is reinforcing structures that don't come with a
known-correct answer at all.

