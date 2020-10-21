let paths = document.querySelectorAll('#logo path')

paths.forEach((path, i) => {
    console.log(path.getTotalLength())
    path.style.strokeDasharray = `${path.getTotalLength()}px`
    path.style.strokeDashoffset = `${path.getTotalLength()}px`
    path.style.animationDelay = `${i * 3 / 10}s`
})