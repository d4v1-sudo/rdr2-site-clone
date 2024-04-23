# rdr2-2023-site-clone
Well... basically, I decide to, at least try, use [Way Back Machine](https://web.archive.org) to recreate the Red Dead Redemption 2 website in 2023 (currently it is ugly compared to 2023). Why? Because I liked it.

I know, it's a mess but I'm going to try to fix it little by little.

# Notes
- Remember, I used web.archive.org to get all the files and codes. More specificlly, in ```https://web.archive.org/web/20230815011942cs_/https://www.rockstargames.com/reddeadredemption2``` at the most.

- No, the [main html code](./index.html) is not the original, I had to change some things, remove some and add [important javascript](./assets/js/script.js)

- What remains to be done
  - Download more images which are called in the [main css](./assets/css/2455f5211be05b218519.css) (just search "/web/20200524223229im_" in the main css)
  - Somehow obtain the code from the sub-sites ```https://www.rockstargames.com/reddeadredemption2/features/weaponry```, ```https://www.rockstargames.com/reddeadredemption2/features/wildlife``` and so on in [Way Back Machine](https://web.archive.org), so far, only definitive There's [```https://www.rockstargames.com/reddeadredemption2 of 2023```](./index.html). To check what's left, just explore ```https://www.rockstargames.com/reddeadredemption2``` in your browser to find more directories on different things about RDR2.
  - Fix the links called in [main html code](./index.html), in [main css](./assets/css/2455f5211be05b218519.css) and in [script.js](./assets/js/d0f410feafebf36c8443.js) and probably a few more, either to download the file and put it in ```assets```, or to remove it as it has no function or fix the alternation of languages in navbar, etc.

## Contributions

Contributions are welcome! Feel free to open issues or send pull requests to enhance this project.

<a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fd4v1-sudo%2Frdr2-2023-site-clone"><img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fd4v1-sudo%2Frdr2-2023-site-clone&label=Thanks%20for%20dropping%20in&labelColor=%23000000&countColor=%23FFFFFF" /></a>