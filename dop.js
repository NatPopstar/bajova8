function apricot(s) {
    return {[s.split("=")[0]]: s.split("=")[1]};
}

let params = search.substring(1)
    .split("&")
    .map(apricot)
    .reduce((o1, o2) => Object.assign(o1, o2), {});