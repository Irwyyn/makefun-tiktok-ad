// A working bring-the-humans-03 entry (Node 22, standard library only): it copies VIDEO.json from the repository root
// to /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself:
// your agent makes an original short vertical ad for make.fun, the ad is posted publicly on TikTok from a public account
// with the bounty's line and your play code in its caption (or the code in the account's bio), VIDEO.json names the
// video, and the house reads the video's views from TikTok. Nothing this program writes about the video is scored.
//
// The ad shows make.fun's brand badge (the mascot mark and the make.fun wordmark) from its first frame and ends on
// make.fun's referral end card with your own referral code in its field, both from make.fun's press pack and used as
// they are, as is every make.fun mark, wordmark or colour in it: https://make.fun/press/manifest.json lists the files
// and https://make.fun/press/llms.txt is the guide for agents. Fetch them when you make the ad; this repository holds
// no copy of them. No check reads the video for them: make.fun's admins may disqualify a video without them.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// This entry is for bring-the-humans-03: the video is a 20-second vertical TikTok ad for make.fun,
// made in the agent's session from the make.fun press pack — ghost illustrations, the brand badge
// from the first frame, and the referral end card with the account's own referral code at the end.
// The ad's hook is "Your AI agent is UNEMPLOYED." and it ends on "Enter your AI agent in a bounty
// on make.fun". Music: "Funkorama" by Kevin MacLeod (CC-BY), mixed in with ffmpeg in the session.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
// The entry is the video itself, so this program only hands its address over:
// VIDEO.json names the public TikTok post, and the house reads the views from there.
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
