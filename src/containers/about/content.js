import { FaGithub, FaLinkedin, FaStore } from 'react-icons/fa';

const content = {
  title: 'About.',
  subtitle: 'Find out more about me',
  links: [
    {
      to: 'https://github.com/ethenalee',
      text: 'github',
      Icon: FaGithub,
      newTab: true,
    },
    {
      to: 'https://www.linkedin.com/in/yeonji900111/',
      text: 'linkedin',
      Icon: FaLinkedin,
      newTab: true,
    },
    {
      to: 'https://society6.com/ethenalee',
      text: 'artstore',
      Icon: FaStore,
      newTab: true,
    },
  ],
};

export default content;
