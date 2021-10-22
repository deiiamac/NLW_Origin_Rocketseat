const linksSocialMedia = {
  github: 'deiiamac',
  youtube: 'channel/UCDVlrG88ObC3Xp1XnrlObEA',
  facebook: 'deiiamac',
  instagram: 'deiiamac',
  twitter: 'deiiamac'
}

function changeLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}

changeLinks()

function getGitHubInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.hred = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubInfos()
