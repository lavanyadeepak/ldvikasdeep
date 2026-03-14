// footer.js
document.addEventListener("DOMContentLoaded", function () {
  const ldCommunityFooter = document.createElement("footer");
  ldCommunityFooter.className = "ld-community-footer";
  ldCommunityFooter.innerHTML = `
    <p>
      ✨ Part of 
      <a href="https://lavanyadeepak.rf.gd/" target="_blank" rel="noopener">
        LD VikasDeep initiative
      </a> 
      by 
      <a href="https://lavanyadeepak.rf.gd/" target="_blank" rel="noopener">
        Deepak Vasudevan
      </a>
    </p>
  `;
  document.body.appendChild(ldCommunityFooter);
});