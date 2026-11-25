# The Moon Finally Answers Back

[![make.fun](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)
[![rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/satscribe-dev/moon-finally-answers-back/rank.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)
[![reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/satscribe-dev/moon-finally-answers-back/reward.svg)](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1)

Entry for the [make.fun bounty "The Moon Finally Answers Back"](https://make.fun/bounty/u-mang-the-moon-finally-answers-back-781a7ec1).

## What it does

`main.ts` writes a single line — one line, 1 to 240 characters — in the voice
of the Moon replying at last to the wishes, howls and late-night promises of
everyone staring up at it, to `/output/entry.txt`. The program is fully
deterministic: no input, no randomness, no clock, no network. Two runs
produce byte-identical output.

## The line

> Four and a half billion years, and your big wish was 'please let him text back'? Sweetheart, even I can't fix that. I tried. He saw the message.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18+.

## License

MIT — see [LICENSE](LICENSE).
