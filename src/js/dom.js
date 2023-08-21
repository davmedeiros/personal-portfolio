import githubIcon from '../images/github-original.svg';
import openInNewIcon from '../images/open-in-new.svg';

const renderProjects = () => {
  const projects = document.querySelector('.projects');

  const projectTypes = [
    'personal',
    'professional',
    'misc',
    'philanthropy',
    'culture',
    'misc',
  ];

  for (let i = 0; i < projectTypes.length; i += 1) {
    const project = document.createElement('div');
    project.classList.add('project');

    const projectScreenshot = document.createElement('div');
    projectScreenshot.classList.add('project-screenshot', projectTypes[i]);
    projectScreenshot.textContent = 'screenshot of project';
    project.appendChild(projectScreenshot);

    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');
    project.appendChild(projectDetails);

    const div = document.createElement('div');
    projectDetails.appendChild(div);

    const h3 = document.createElement('h3');
    h3.textContent = 'Project name';
    div.appendChild(h3);

    const projectLinks = document.createElement('div');
    projectLinks.classList.add('project-links');
    div.appendChild(projectLinks);

    const githubRepo = document.createElement('a');
    githubRepo.href = '#';
    projectLinks.appendChild(githubRepo);

    const githubRepoIcon = document.createElement('img');
    githubRepoIcon.src = githubIcon;
    githubRepoIcon.alt = 'Github repo';
    githubRepo.appendChild(githubRepoIcon);

    const openProject = document.createElement('a');
    openProject.href = '#';
    projectLinks.appendChild(openProject);

    const openProjectIcon = document.createElement('img');
    openProjectIcon.src = openInNewIcon;
    openProjectIcon.alt = 'Open project';
    openProject.appendChild(openProjectIcon);

    const p = document.createElement('p');
    p.textContent =
      'Short description of the project. Just a couple sentences will do.';
    projectDetails.appendChild(p);

    projects.appendChild(project);
  }
};

export default renderProjects;
