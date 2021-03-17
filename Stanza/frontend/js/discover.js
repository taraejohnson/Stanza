import { clearChildren } from "./app.js";

const discoverElement = function () {
  const discoverElement = document.querySelector(".main-content");
  clearChildren(discoverElement);

  const discoverMainDiv = document.createElement("div");
  discoverMainDiv.classList.add("discover-div-main");
  discoverElement.appendChild(discoverMainDiv);

  const discoverContainer = document.createElement("div");
  discoverContainer.classList.add("discover-container");
  discoverMainDiv.appendChild(discoverContainer);

  const discoverHeader = document.createElement("h1");
  discoverHeader.classList.add("discover-header");
  discoverHeader.innerText = "Discover & Explore";
  discoverMainDiv.prepend(discoverHeader);

  const discoverDiv1 = document.createElement("div");
  discoverDiv1.classList.add("discover-div-1");
  discoverContainer.appendChild(discoverDiv1);
  const disDiv1Header = document.createElement("h2");
  disDiv1Header.classList.add("discover-div1-header");
  disDiv1Header.innerText = "Read Poems Online";
  discoverDiv1.appendChild(disDiv1Header);
  const disDiv1P = document.createElement("p");
  disDiv1P.classList.add("discover-div1-p");
  disDiv1P.innerHTML = `
    <a href="https://theadroitjournal.org/">The Adroit Journal</a><br>
    <a href="https://www.boaatpress.com/boaat/">BOAAT Journal</a><br>
    <a href="https://bwr.ua.edu/boyfriend-village/">BWR Online: Boyfriend Village</a><br>
    <a href="https://thediagram.com/">DIAGRAM</a><br>
    <a href="https://thefigureone.com/5a">Figure 1</a><br>
    <a href="https://www.foundryjournal.com/">Foundry Journal</a><br>
    <a href="https://www.guesthouselit.com/">Guesthouse</a><br>
    <a href="https://as.vanderbilt.edu/nashvillereview/">Nashville Review</a><br>
    <a href="https://www.natbrut.com/">Nat. Brut</a><br>
    <a href="http://notokensjournal.com/">No Tokens</a><br>
    <a href="http://www.oversoundpoetry.com/">Oversound</a><br>
    <a href="http://www.theshallowends.com/">The Shallow Ends</a>
    `;
  discoverDiv1.appendChild(disDiv1P);

  const discoverDiv2 = document.createElement("div");
  discoverDiv2.classList.add("discover-div-2");
  discoverContainer.appendChild(discoverDiv2);
  const disDiv2Header = document.createElement("h2");
  disDiv2Header.classList.add("discover-div2-header");
  disDiv2Header.innerText = "Learn About Poetry";
  discoverDiv2.appendChild(disDiv2Header);
  const disDiv2P = document.createElement("p");
  disDiv2P.classList.add("discover-div2-p");
  disDiv2P.innerHTML = `
    <a href="https://www.poetryfoundation.org/learn/glossary-terms/">Glossary of Poetry Terms</a><br>
    <a href="https://bookriot.com/different-types-of-poems/">A Beginner's Guide to Different Types of Poems</a><br>
    <a href="https://www.thebalancecareers.com/best-online-poetry-classes-5081985/">Online Poetry Classes</a><br>
    <a href="https://www.masterclass.com/classes/billy-collins-teaches-reading-and-writing-poetry/">MasterClass</a><br>
    <a href="https://www.masterclass.com/articles/how-to-write-poetry#11-rules-for-writing-good-poetry/">11 Rules For Writing Good Poetry</a><br>
    <a href="https://lithub.com/30-poets-you-should-be-reading/">30 Poets You Should Be Reading</a><br>
    <a href="https://www.thebalancecareers.com/best-online-poetry-classes-5081985/">Online Poetry Classes</a><br>
    `;
  discoverDiv2.appendChild(disDiv2P);

  const discoverDiv3 = document.createElement("div");
  discoverDiv3.classList.add("discover-div-3");
  discoverContainer.appendChild(discoverDiv3);
  const disDiv3Header = document.createElement("h2");
  disDiv3Header.classList.add("discover-div3-header");
  disDiv3Header.innerText = "Poetry Events in Ohio";
  discoverDiv3.appendChild(disDiv3Header);
  const disDiv3P = document.createElement("p");
  disDiv3P.classList.add("discover-div3-p");
  disDiv3P.innerHTML = `
    <a href="https://sites.google.com/a/ohiopoetryassn.com/the-ohio-poetry-association/upcoming-seminars/">Ohio Poetry Association Events</a><br>
    <a href="http://daytonpoetryslam.com/events">Dayton Poetry Slam Events</a><br>
    <a href="https://www.facebook.com/wbpoetry/">Writers Block Poetry Night</a><br>
    <a href="https://lityoungstown.org/category/events/">Lit Youngstown</a><br>
    <a href="https://donkeycoffee.com/?page_id=15">Donkey Coffee Designated Space</a><br>
    `;
  discoverDiv3.appendChild(disDiv3P);

  const discoverDiv4 = document.createElement("div");
  discoverDiv4.classList.add("discover-div-4");
  discoverContainer.appendChild(discoverDiv4);
  const disDiv4Header = document.createElement("h2");
  disDiv4Header.classList.add("discover-div4-header");
  disDiv4Header.innerText = "Poetry News";
  discoverDiv4.appendChild(disDiv4Header);
  const disDiv4P = document.createElement("p");
  disDiv4P.classList.add("discover-div4-p");
  disDiv4P.innerHTML = `
    <a href="https://poems.com/news/">Poetry Daily</a><br>
    <a href="https://www.poetryfoundation.org/harriet/category/poetry-news">Poetry Foundation: Harriet</a><br>
    <a href="https://www.pw.org/daily_news">Daily News from Poets & Writers</a><br>
    `;
  discoverDiv4.appendChild(disDiv4P);

  return discoverElement;
};

export { discoverElement };
