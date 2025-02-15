import angularSvg from '../icons/angular.svg';
import authSvg from '../icons/auth.svg';
import browserSvg from '../icons/browser.svg';
import businessSvg from '../icons/business.svg';
import communicationSvg from '../icons/communication.svg';
import cssSvg from '../icons/css3.svg';
import dbSvg from '../icons/db.svg';
import dockerSvg from '../icons/docker.svg';
import expressSvg from '../icons/express.svg';
import firebaseSvg from '../icons/firebase.svg';
import gitSvg from '../icons/git.svg';
import cicdSvg from '../icons/githubactions.svg';
import htmlSvg from '../icons/html5.svg';
import httpSvg from '../icons/http.svg';
import jsSvg from '../icons/javascript.svg';
import mongoSvg from '../icons/mongodb.svg';
import mysqlSvg from '../icons/mysql.svg';
import nodeSvg from '../icons/nodedotjs.svg';
import phpSvg from '../icons/php.svg';
import planningSvg from '../icons/planning.svg';
import postgresSvg from '../icons/postgres.svg';
import productDesignSvg from '../icons/product-design.svg';
import reactSvg from '../icons/react.svg';
import researchSvg from '../icons/research.svg';
import slackSvg from '../icons/slack.svg';
import socketioSvg from '../icons/socketdotio.svg';
import sqlSvg from '../icons/sql.svg';
import synthesisSvg from '../icons/synthesis.svg';
import userCentricitySvg from '../icons/user-centricity.svg';
import uxSvg from '../icons/ux.svg';
import vueSvg from '../icons/vuedotjs.svg';
import wordpressSvg from '../icons/wordpress.svg';

const learningObjectivesIcons = {
  angular: {
    color: '#DD0031',
    svg: angularSvg,
  },
  auth: {
    color: 'gold',
    svg: authSvg,
  },
  browser: {
    color: '#000000',
    svg: browserSvg,
  },
  business: {
    color: '#000000',
    svg: businessSvg,
  },
  communication: {
    color: '#000000',
    svg: communicationSvg,
  },
  css: {
    color: '#1572B6',
    svg: cssSvg,
  },
  db: {
    color: 'gray',
    svg: dbSvg,
  },
  webops: {
    color: '#2496ED',
    svg: dockerSvg,
  },
  express: {
    color: '#000000',
    svg: expressSvg,
  },
  firebase: {
    color: '#FFCA28',
    svg: firebaseSvg,
  },
  scm: {
    color: '#F05032',
    svg: gitSvg,
  },
  cicd: {
    color: '#2088FF',
    svg: cicdSvg,
  },
  html: {
    color: '#E34F26',
    svg: htmlSvg,
  },
  http: {
    color: '#000000',
    svg: httpSvg,
  },
  js: {
    color: '#F7DF1E',
    svg: jsSvg,
  },
  mongodb: {
    color: '#47A248',
    svg: mongoSvg,
  },
  mysql: {
    color: '#4479A1',
    svg: mysqlSvg,
  },
  node: {
    color: '#339933',
    svg: nodeSvg,
  },
  php: {
    color: '#777BB4',
    svg: phpSvg,
  },
  planning: {
    color: '#000000',
    svg: planningSvg,
  },
  postgres: {
    color: '#4169E1',
    svg: postgresSvg,
  },
  'product-design': {
    color: '#000000',
    svg: productDesignSvg,
  },
  react: {
    color: '#61DAFB',
    svg: reactSvg,
  },
  research: {
    color: '#000000',
    svg: researchSvg,
  },
  slack: {
    color: '#4A154B',
    svg: slackSvg,
  },
  'socket-io': {
    color: '#010101',
    svg: socketioSvg,
  },
  sql: {
    color: '#000000',
    svg: sqlSvg,
  },
  synthesis: {
    color: '#000000',
    svg: synthesisSvg,
  },
  'user-centricity': {
    color: '#000000',
    svg: userCentricitySvg,
  },
  ux: {
    color: '#56f89a',
    svg: uxSvg,
  },
  vue: {
    color: '#4FC08D',
    svg: vueSvg,
  },
  wordpress: {
    color: '#21759B',
    svg: wordpressSvg,
  },
};

export const learningObjectiveToIcon = (key) => {
  return learningObjectivesIcons[key] || {};
};