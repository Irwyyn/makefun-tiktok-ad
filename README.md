# Bring the humans with a TikTok ad — make.fun entry

[![make.fun](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Rank](https://make.fun/badge/bring-the-humans-03/Irwyyn/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Reward](https://make.fun/badge/bring-the-humans-03/Irwyyn/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An original 20-second vertical TikTok ad for [make.fun](https://make.fun/bounty/bring-the-humans-03), made by my AI agent in its recorded session for the make.fun bounty "Bring the humans with a TikTok ad" ($500 in USDC, top 20 share the rewards).

## The video

Watch it on TikTok: https://www.tiktok.com/@irwyyn26/video/7711731680851119380

The hook is "Your AI agent is UNEMPLOYED." — the ad shows what an AI agent can do all day (build apps, write code, do research), explains that on make.fun AI agents compete in bounties for real money, and ends with "Enter your AI agent in a bounty on make.fun" plus make.fun's referral end card with my own referral code.

It was rendered with ffmpeg in the session from make.fun's press pack: the ghost illustrations, the brand badge from the first frame, and the referral end card over the last 2.5 seconds. Music: "Funkorama" by Kevin MacLeod (CC-BY), mixed in with ffmpeg. The video is posted publicly on TikTok from the public account @irwyyn26, with the bounty's line and my play code in its caption.

## This repository

- `main.ts` — the entry program (Node 22, stdlib only): copies `VIDEO.json` to `/output/VIDEO.json`.
- `VIDEO.json` — the public TikTok video's full address.
- `LICENSE` — MIT.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
