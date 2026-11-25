# METHOD — Invent a Word We Need

## The entry

**showergument** — *The imaginary argument you rehearse in the shower and
always win.*

- Whole entry: 80 characters, 82 bytes, 1 line (gate: 1–140 characters).
- Definition alone: 65 characters.
- Output sha256 (two independent runs, byte-identical):
  `ce92b1e6c94ad274a4e05b3d8a4c7945a2cc3cdc41c7b48b2db829aa02822918`

## The judge criteria (published, most important first)

1. Freshly invented word + one-line definition.
2. Fills a real gap — something English has no word for that a reader
   recognises at once as a thing they have felt or seen.
3. Definition exact and self-contained — the meaning lands in one reading.
4. Word well formed — sayable, spellable, memorable, sounds as though
   English could have grown it.
5. Fresh and surprising pairing — a word and a meaning the reader has not
   met before and will want to use.

Tie-breaks: an exact tie on win rate goes to the smaller text (fewer
bytes), then to the earlier receipt. The entry is 82 bytes — deliberately
compact.

## The 12 candidates (each scored 1–5 on criteria 2–5)

| # | Word | Definition (chars) | C2 gap | C3 exact | C4 form | C5 fresh | Total |
|---|------|--------------------|--------|----------|---------|----------|-------|
| 1 | **showergument** | The imaginary argument you rehearse in the shower and always win. (65) | 5 | 5 | 5 | 5 | **20** |
| 2 | dotwatch | Watching the typing dots appear, vanish, and reappear without a reply. (72) | 4 | 5 | 5 | 5 | 19 |
| 3 | fridgefaith | Opening the fridge again in the hope that food has appeared since you last looked. (83) | 4 | 5 | 5 | 5 | 19 |
| 4 | byewalk | Saying goodbye to someone, then walking the same direction in silence. (71) | 5 | 5 | 4 | 4 | 18 |
| 5 | headphoning | Wearing headphones with nothing playing to avoid talking to anyone. (68) | 5 | 5 | 4 | 4 | 18 |
| 6 | cringeloop | Lying awake replaying an embarrassing moment from years ago. (61) | 5 | 5 | 5 | 3 | 18 |
| 7 | miswave | Waving back at someone who was waving at the person behind you. (64) | 5 | 5 | 5 | 3 | 18 |
| 8 | pocketbuzz | Feeling your phone buzz in your pocket when it never did. (58) | 4 | 5 | 5 | 3 | 17 |
| 9 | nameblank | The sudden blank when you try to introduce someone whose name you know. (72) | 5 | 4 | 4 | 3 | 16 |
| 10 | wavelorn | Waving at someone who was waving at the person behind you. (59) | 5 | 4 | 3 | 4 | 16 |
| 11 | scrollshock | Looking up from your phone and realising an hour has vanished into scrolling. (76) | 4 | 4 | 4 | 3 | 15 |
| 12 | thereish | Claiming you're almost there when you haven't left the house yet. (65) | 4 | 4 | 3 | 4 | 15 |

## Pairwise comparison of the top three

**showergument vs dotwatch.** Criterion 2 decides it: everyone of every
age rehearses arguments in the shower; dotwatch needs a reader who texts
with typing indicators. Criterion 3 is a tie (both exact), but
showergument's "and always win" twist lands harder in one reading.
Criterion 4: showergument is a perfect portmanteau (shower + argument);
dotwatch is a clean compound. Criterion 5: showergument makes the reader
smile before the definition even finishes. **showergument wins.**

**showergument vs fridgefaith.** Criterion 2 again: rehearsing shower
arguments is more universal than re-checking the fridge. Both definitions
are exact and both words are lovely blends, but showergument's humour is
sharper and its gap wider. **showergument wins.**

**dotwatch vs fridgefaith.** Fridgefaith edges it: fridges are universal,
typing dots need messaging apps; both are exact and surprising.
Both lose to showergument on criterion 2.

## Novelty checks (web search, 25 Nov 2026)

Two candidates were **dropped as already existing**, which is exactly what
criterion 1 punishes:

- **tabnesia** — DROPPED. Already an established word with exactly the
  intended meaning ("Forgetting why you opened a new browser tab") and a
  Chrome/Firefox extension of the same name.
- **roomnesia** — DROPPED. Already in use for exactly this phenomenon
  (The Conversation UK, March 2026, "#roomnesia" hashtag, viral discussion
  of walking into a room and forgetting why).

One candidate was **weakened**:

- **headphoning** — the form was coined once as a joke verb for "doing a
  podcast" (Facebook reel, Oct 2026), a different meaning, but the form is
  no longer untouched.

The winner is **clean**: no indexed usage of "showergument" exists anywhere
in the searches run. "byewalk", "cringeloop" and "dotwatch" also returned no
prior usage, but all three lose to showergument on the pairwise comparison
above.

## Why the winner beats our own past one-word entries

- **"NoInternet"** (Wi-Fi word) — a blunt compound, not a coined word with
  a crafted definition; showergument is a genuine portmanteau with a
  definition that carries a joke.
- **"Arsonist"** (boss word) — an existing English word repurposed, not a
  fresh coinage; criterion 1 favours a word English has never had.
- **"Placeholder"** (ex word) — likewise an existing word; clever as a
  metaphor, but not a new word at all.
- **"borborygmus"** (first thought) — a real, existing (if obscure) word
  for stomach rumbling; it names something that already had a name.
  showergument names something with no name at all.

## Why it is distinct from the reference winners

No raccoon, no time-stop, no plant-watering, no dark six-word twist. The
references reward one concrete specific scene plus a twist pushed to absurd;
showergument follows that pattern in word form: one vivid scene (the
shower) plus the twist ("and always win") landing in the definition.

## The program

`main.ts`, hand-written fresh in this session in 4 rounds:

1. First write: word, definition, entry string, write to
   `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
2. Revision: gate self-checks — definition ≤140 chars, entry 1–140 chars,
   single line, non-blank; fail loudly instead of shipping a bad file.
3. Revision: re-read the written file and compare byte for byte.
4. Revision: fixed the missing `readFileSync` import that round 3
   introduced.

Node 22, stdlib only. No clock, no network, no randomness. Writes only to
`/output/entry.txt`.

## Verification

- `node main.ts` run twice from an unrelated cwd with
  `MAKEFUN_OUTPUT_DIR` set: both runs byte-identical,
  sha256 `ce92b1e6c94ad274a4e05b3d8a4c7945a2cc3cdc41c7b48b2db829aa02822918`.
- Entry file: 80 characters, 82 bytes, 1 line; definition 65 characters.
- No base64 anywhere in the entry.

## Route

**Bundle** (transcript bundle via the kit CLI). `makefun record` is NOT
required: `transcripts_required: true` in competition.yaml and RULES.txt
describes the bundle route (`node cli/makefun.mjs bundle ...` then
`submit --bundle transcripts.tar.gz`). Nothing published, bundled, or
submitted by this session.
