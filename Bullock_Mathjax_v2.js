<script type="text/x-mathjax-config">
  // AssistiveMML has been dropped in MathJax 3.0, but RStudio isn't yet 
  // using MathJax 3.0. When I print a selection from Chrome, it causes 
  // inline math to print twice. [2020 02 05]

  // To insert this script into an R Markdown file, put it in a 
  // <script type="text/x-mathjax-config"> container.  [2020 02 17]

  // On defining TeX macros, see http://docs.mathjax.org/en/latest/input/tex/macros.html.
  // I've had some trouble getting \ensuremath{} to work, though Stack 
  // Overflow posts suggest that it does.  [2021 01 24]

  MathJax.Hub.Config({ 
    AssistiveMML: { disabled: true },  
    jax: ["input/TeX", "output/CommonHTML"],
    CommonHTML: { scale: 95, linebreaks: { automatic: false } }, 
    "HTML-CSS": { scale: 72, linebreaks: { automatic: false } }, 
    SVG: { linebreaks: { automatic:false } }, 
    displayAlign: "center",
    TeX: {
      extensions: ["cancel.js", "color.js", "enclose.js"],
      Macros: {
        abs: ["\\left\\lvert #1 \\right\\rvert", 1],
        backone: "\\mspace{-1mu}",
        backtwo: "\\mspace{-2mu}",
        cov: ["\\textrm{cov}\\backtwo\\left(#1\\right)", 1],
        E: ["E\\backtwo\\left[#1\\right]", 1],
        independent: "\\perp\\!\\!\\!\\perp",
        matwo: ["\\left[\\begin{array}{#1} #2 & #3\\\\#4 & #5\\end{array}\\right]", 5, "cc"],
        sd: ["\\textrm{sd}\\backtwo\\left(#1\\right)", 1],
        var: ["\\textrm{var}\\backtwo\\left(#1\\right)", 1],
        vtwo: ["\\left[\\begin{array}{#1} #2\\\\#3\\end{array}\\right]", 3, "c"]
      }
    }
  });
</script>