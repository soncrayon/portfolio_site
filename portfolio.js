showDetails = (id) => {
    // gray out the background
    // display a modal in a black-outlined white box, containing project title and two links--
    // one link to hosted site
    // one link to github repository 
}

hideDetails = (id) => {
    // search the DOM to find the element id that currently shown as the modal
    // toggle visibility back to hidden and de-gray out the background
}

const main = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementsByClassName('portfolio_img').forEach((img) => {
            img.addEventListener('onclick', () => {
                showDetails(img.id)
            })
        })
    })
}

main()