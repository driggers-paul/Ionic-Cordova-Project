import {routes} from './src/app/app-routing.module';

const fs = require('fs');

const result = routes.reduce((urls, item) => {
  const segments = item.path.split('/');
  const url = segments.reduce((segmentCarry: string, segment: string) => {

    // if the segment is dynamic part with :
    if (segment.indexOf(':') === 0) {
      segment = segment.replace(':', '');
      segmentCarry = `${segmentCarry}/{${segment}}`;
    } else {
      segmentCarry = `${segmentCarry}/${segment}`;
    }
    return segmentCarry;
  }, '');

  urls.push(url);

  return urls;
}, []);

fs.writeFile('./routes.json', JSON.stringify(result), (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('routes file updated');
  }
});
