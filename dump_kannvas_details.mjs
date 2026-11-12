import fs from 'fs';

const html = fs.readFileSync('C:/Users/unais-work/Desktop/KANNVAS/kannvas_raw.html', 'utf-8');

function clean(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

// Services details
const servStart = html.indexOf('SERVICES WE offer');
const servEnd = html.indexOf('Centrio- 2 BHK');
if (servStart !== -1 && servEnd !== -1) {
  console.log('--- SERVICES FULL TEXT ---');
  console.log(clean(html.slice(servStart, servEnd)));
}

// Why choose us full text
const whyStart = html.indexOf("Trust Your Vision to Mumbai's Finest");
const whyEnd = html.indexOf('Book Your Design Consultation');
if (whyStart !== -1 && whyEnd !== -1) {
  console.log('--- WHY CHOOSE US FULL TEXT ---');
  console.log(clean(html.slice(whyStart, whyEnd)));
}

// Contact full text
const contactStart = html.indexOf('Book Your Design Consultation Today');
if (contactStart !== -1) {
  console.log('--- CONTACT FULL TEXT ---');
  console.log(clean(html.slice(contactStart, contactStart + 2500)));
}

// Testimonials details
const testiMatches = [...html.matchAll(/(?:men1\.png|female1\.png)[\s\S]{1,1000}/gi)].map(m => clean(m[0]));
console.log('--- TESTIMONIALS ---');
console.log(testiMatches);

