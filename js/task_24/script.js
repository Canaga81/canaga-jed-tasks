function add(ed1, ed2, callback) {
    callback(ed1 + ed2)
}

add(3, 5, console.log)
add(3, 5, alert)