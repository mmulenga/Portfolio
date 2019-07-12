import byAccidentBotImage from './images/reddit-hd.jpg';
import preopImage from './images/preoper-hd.jpg';
import volunteerImage from './images/volunteer-hd.jpg';

export const byAccidentBot = {
  name: 'By-Accident-Bot',
  src: byAccidentBotImage,
  description: `By-Accident-Bot is a reddit bot that "corrects" the usage of the
    phrase "on accident". Using Python, PRAW, and Firebase, it continually searches
    for instances of the phrase and replies to them. This project also helped me learn the
    basics of testing and continuous integration.`,
  href: 'https://www.reddit.com/user/by-accident-bot',
};

export const preop = {
  name: 'Pre-Op Testing App',
  src: preopImage,
  description: `Built with VueJS, Bootstrap, and Python. This was an application
  designed and implemented for the Division of Oncology at the Univeristy of Saskatchewan.
  It allows doctors to see which tests they need to run for patients with certain co-morbidities,
  before surgery.`,
  href: 'https://github.com/mmulenga/POTA',
};

export const volunteerize = {
  name: 'Volunteerize',
  src: volunteerImage,
  description: `Volunteerize was a university group project aimed at delivering a
  volunteer scheduling and recruiting solution for volunteering organizations around
  Saskatoon. It was built using Java, JavaFX, and PostgreSQL.`,
  href: 'https://github.com/mmulenga/Volunteerize',
};
