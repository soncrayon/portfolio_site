const projectLinks = {
    ori: {
        project_name: 'ORI Tarot',
        hosted_site:"https://soncrayon.github.io/tarot-frontend/",
        github: "https://github.com/soncrayon/tarot-frontend"
    }, 
    manage_lex: {
        project_name: 'ManageLex -- this project is still under construction--check back soon',
        hosted_site:"",
        github: ""
    }, 
    stylex: {
        project_name: 'StyleX',
        github: "https://github.com/soncrayon/StyleX"
    }, 
    voyager_game: {
        project_name: 'Voyager Game -- this project is still under construction--check back soon',
        github: ""
    }, 
    matching_game: {
        project_name: 'Matching Game Aero',
        hosted_site:"https://soncrayon.github.io/matching_game_aero/",
        github: "https://github.com/soncrayon/matching_game_aero"
    }, 
    dreamjot: {
        project_name: 'DreamJot',
        github: "https://github.com/soncrayon/DreamJot"
    }
}


showDetails = (id) => {
    debugger
    document.getElementById('modal_container').style.display = 'flex'
 
    if (id === 'ori' || id === 'matching_game'){
        document.getElementById('project_modal_1').style.display = 'flex'
        document.getElementById('project_name_1').innerHTML = `<h2>${projectLinks[id].project_name}</h2>`
        document.getElementById('hosted_site_1').href = projectLinks[id].hosted_site
        document.getElementById('github_link_1').href = projectLinks[id].github
    } else {
        document.getElementById('project_modal_2').style.display = 'flex'
        document.getElementById('project_name_2').innerHTML = `<h2>${projectLinks[id].project_name}</h2>`
        document.getElementById('github_link_2').href = projectLinks[id].github
    }
 
}

hideDetails = () => {
    document.getElementById('modal_container').style.display = 'none'
    Array.from(document.getElementsByClassName('project_modal')).forEach((modal) => {
        modal.style.display = 'none'
    })
    document.getElementById('project_name_1').innerHTML = ``
    document.getElementById('hosted_site_1').href = '#'
    document.getElementById('github_link_1').href = '#'
    document.getElementById('project_name_2').innerHTML = ``
    document.getElementById('github_link_2').href ='#'
}

const addClickListenerToModals = () => {
    Array.from(document.getElementsByClassName('modal_close')).forEach((close) => {
        close.addEventListener('click', () => {
            hideDetails()
        })
    })
}

const addClickListenerToThumbnails = () => {
    Array.from(document.getElementsByClassName('portfolio_img')).forEach((img) => {
        img.addEventListener('click', () => {
            showDetails(img.id)
        })
    })
    addClickListenerToModals()
}

const main = () => {
    document.addEventListener('DOMContentLoaded', () => {
       addClickListenerToThumbnails()
    })
}

main()