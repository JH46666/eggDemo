'use strict';
const Service = require('egg').Service;

class NewsService extends Service {
  list(page) {
    console.log('page: ', page);
    return {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
  }
}

module.exports = NewsService;
