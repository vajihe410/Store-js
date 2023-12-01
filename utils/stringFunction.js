const shortTitle = (title) => {
    const newTitle = title.split(" ").slice(0,3).join(" ")
    return newTitle
}
export {shortTitle}