import RssFeedEmitter from 'rss-feed-emitter';
import { newItemHandler } from './handlers/news-handler';
import * as rssList from './rss-list.json';

(async function main() {
  

const feeder = new RssFeedEmitter({ skipFirstLoad: true });
const rssListConfiguration:any[]= rssList.x;
rssListConfiguration.forEach((rssItemConfiguration)=>{
  feeder.add(rssItemConfiguration)
 } );
// feeder.on('new-item')=>newItemHandler(item)
feeder.on('new-item', newItemHandler);
feeder.on('error', console.error);
})();



