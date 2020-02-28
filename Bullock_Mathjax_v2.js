<script type="text/x-mathjax-config">
  // AssistiveMML has been dropped in MathJax 3.0, but RStudio isn't using it
  // yet. When I print a selection from Chrome, it causes inline math to print
  // twice. [2020 02 05]

  // To insert this script into an R Markdown file, put it in a 
  // <script type="text/x-mathjax-config"> container.  [2020 02 17]

  MathJax.Hub.Config({ 
    AssistiveMML: { disabled: true },  
    jax: ["input/TeX", "output/CommonHTML"],
    CommonHTML: { scale: 95, linebreaks: { automatic: false } }, 
    "HTML-CSS": { scale: 90, linebreaks: { automatic: false } }, 
    SVG: { linebreaks: { automatic:false } }, 
    displayAlign: "center",
    TeX: {
      extensions: ["cancel.js", "color.js", "enclose.js"],
      Macros: {
        backtwo: "\\mspace{-2mu}",
        cov: ["\\textrm{cov}\\backtwo\\left(#1\\right)", 1],
        E: ["E\\backtwo\\left[#1\\right]", 1],
        independent: "\\perp\\!\\!\\!\\perp",
        var: ["\\textrm{var}\\backtwo\\left(#1\\right)", 1]
      }
    }
  });
</script>