const url = require('url');

const exampleurl = 'https://www.example.com:8080/path/name?query=123#fragment';
const parsedurl = url.parse(exampleurl);

console.log('parsed URL Components :');
console.log(parsedurl.protocol);
console.log('Host :', parsedurl.host);
console.log('Port :', parsedurl.hostname);
console.log('Pathname :', parsedurl.pathname);
console.log('Search :', parsedurl.search);
console.log('Query :', parsedurl.query);

const newUrl = url.format({
    protocol: 'https:',
    hostname: 'www.example.com',
    port :3000,
    query:{
        name: 'John',
        age: 30
    }
})