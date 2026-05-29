const navigationList = [
    "/projects/my-blog",
    "/projects/semantic-email",
    "/projects/terminal-browser",
    "/projects/luma",
    "/projects/resume-roaster",
    "/projects/acm-hackathon",
    "/projects/craftr-docs",
    "/projects/portfolios",
    "/coding/focus-fuel",
    "/coding/codedex-wrapped",
    "/coding/semantic-parser"
];

const allProjects = [
  { href: "/projects/my-blog" },
  { href: "/projects/semantic-email" },
  { href: "/projects/terminal-browser" },
  { href: "/projects/luma" },
  { href: "/projects/resume-roaster" },
  { href: "/projects/acm-hackathon" },
  { href: "/projects/portfolios" },
  { href: "/coding/focus-fuel", locked: true },
  { href: "/coding/codedex-wrapped" },
  { href: "/coding/semantic-parser", locked: true },
];

let currentIndex = navigationList.indexOf("/projects/portfolios");

let nextIndex = (currentIndex + 1) % navigationList.length;
let nextHref = navigationList[nextIndex];
let nextProjectCard = allProjects.find(p => p.href === nextHref);
let nextLimit = navigationList.length;

while (nextProjectCard?.locked && nextLimit > 0) {
  nextIndex = (nextIndex + 1) % navigationList.length;
  nextHref = navigationList[nextIndex];
  nextProjectCard = allProjects.find(p => p.href === nextHref);
  nextLimit--;
}

console.log("Next from portfolios:", nextHref, nextProjectCard);

let prevIndex = (currentIndex - 1 + navigationList.length) % navigationList.length;
let prevHref = navigationList[prevIndex];
let prevProjectCard = allProjects.find(p => p.href === prevHref);
let prevLimit = navigationList.length;
while (prevProjectCard?.locked && prevLimit > 0) {
  prevIndex = (prevIndex - 1 + navigationList.length) % navigationList.length;
  prevHref = navigationList[prevIndex];
  prevProjectCard = allProjects.find(p => p.href === prevHref);
  prevLimit--;
}
console.log("Prev from portfolios:", prevHref, prevProjectCard);
