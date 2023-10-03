<script>
  // Created by the MathJax v2 to v3 converter at 
  // https://mathjax.github.io/MathJax-demos-web/convert-configuration/convert-configuration.html.
  // [2021 04 09]

  // This script works, more or less. But I am sticking with MathJax v2 and
  // Bullock_MathJax_v2.js for now because using MathJax v3 has a few 
  // quirks and no obvious advantages. In particular, there still doesn't 
  // seem to be a good way to scale inline and display equations at 
  // different rates: there still seems to be only a single "scale" 
  // parameter. (See https://stackoverflow.com/questions/8544333/ for a
  // hacky workaround from 2011.)  [2021 04 09]

  // To insert this script into an R Markdown file, put it in a 
  // <script type="text/x-mathjax-config"> container.  [2020 02 17]

  // On defining TeX macros, see http://docs.mathjax.org/en/latest/input/tex/macros.html.
  // I've had some trouble getting \ensuremath{} to work, though Stack 
  // Overflow posts suggest that it does.  [2021 01 24]

  window.MathJax = {
    chtml: {
      scale: 0.85,
      displayAlign: "center"
    },
    tex: {
      macros: {
        backtwo: "\\mspace{-2mu}",
        cov: ["\\textrm{cov}\\backtwo\\left(#1\\right)", 1],
        E: ["E\\backtwo\\left[#1\\right]", 1],
        independent: "\\perp\\!\\!\\!\\!\\!\\!\\perp",
        matwo: ["\\left[\\begin{array}{#1} #2 & #3\\\\#4 & #5\\end{array}\\right]", 5, "cc"],
        sd: ["\\textrm{sd}\\backtwo\\left(#1\\right)", 1],
        var: ["\\textrm{var}\\backtwo\\left(#1\\right)", 1],
        vtwo: ["\\left[\\begin{array}{#1} #2\\\\#3\\end{array}\\right]", 3, "c"]
      },
      packages: {'[+]': ['noerrors', 'cancel', 'color', 'enclose']}
    },
    options: {
      ignoreHtmlClass: 'tex2jax_ignore',
      processHtmlClass: 'tex2jax_process'
    },
    loader: {
      load: ['input/asciimath', '[tex]/noerrors', '[tex]/cancel', '[tex]/color', '[tex]/enclose']
    }
  };

</script>