<div id="languages"> </div>

<script>
    let languages = ["Java", "Python", "C++", "C"]

    let createElements = item => "<li>" + item + "</li>"

    document.getElementById("languages").innerHTML = languages.map(createElements).join("\n")
</script>
