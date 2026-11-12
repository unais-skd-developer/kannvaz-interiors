import fs from 'fs';

const html = fs.readFileSync('C:/Users/unais-work/Desktop/KANNVAS/kannvas_raw.html', 'utf-8');

function clean(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Find all headings
const headings = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => clean(m[2])).filter(Boolean);
console.log('Headings:', headings.slice(0, 30));

// Find phone and email
const phones = [...html.matchAll(/(?:\+91|0)?[6-9]\d{9}|\+91[\s-]?\d{5}[\s-]?\d{5}|\d{3}[-\s]?\d{3}[-\s]?\d{4}/g)].map(m => m[0]);
console.log('Phones found:', [...new Set(phones)]);

const emails = [...html.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)].map(m => m[0]);
console.log('Emails found:', [...new Set(emails)]);

// Find all image sources
const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Total images:', imgs.length);
fs.writeFileSync('C:/Users/unais-work/Desktop/KANNVAS/extracted_kannvas_images.json', JSON.stringify([...new Set(imgs)], null, 2));

// Search for services keywords
const servicesMatch = html.match(/service[\s\S]{1,1000}/gi);
console.log('Services mentions count:', servicesMatch?.length);

// Search for about / introduction
const aboutIdx = html.indexOf('About');
if (aboutIdx !== -1) {
  console.log('About snippet:', clean(html.slice(aboutIdx, aboutIdx + 1000)));
}

// Search for projects / portfolio
const projectIdx = html.indexOf('Project');
if (projectIdx !== -1) {
  console.log('Project snippet:', clean(html.slice(projectIdx, projectIdx + 1000)));
}

// Search for testimonial
const testiIdx = html.indexOf('Testimonial');
if (testiIdx !== -1) {
  console.log('Testimonial snippet:', clean(html.slice(testiIdx, testiIdx + 1000)));
}

