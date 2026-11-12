import fs from 'fs';

const html = fs.readFileSync('C:/Users/unais-work/Desktop/KANNVAS/kannvas_raw.html', 'utf-8');

function clean(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#8211;/g, '-').replace(/\s+/g, ' ').trim();
}

// 1. Logo
const logos = [...html.matchAll(/<img[^>]*class=["'][^"']*logo[^"']*["'][^>]*src=["']([^"']+)["']/gi)].map(m => m[1]);
const allLogos = [...html.matchAll(/<img[^>]*src=["']([^"']*(?:logo|kannvas)[^"']*)["']/gi)].map(m => m[1]);
console.log('Logo candidates:', [...new Set([...logos, ...allLogos])]);

// 2. About section text
const welcomeIdx = html.indexOf('welcome to kannvas');
if (welcomeIdx !== -1) {
  console.log('Welcome section:');
  console.log(clean(html.slice(welcomeIdx, welcomeIdx + 1500)));
}

// 3. Services descriptions
const servicesIdx = html.indexOf('SERVICES WE offer');
if (servicesIdx !== -1) {
  console.log('Services section:');
  console.log(clean(html.slice(servicesIdx, servicesIdx + 2000)));
}

// 4. Projects with images
const projectMatches = [...html.matchAll(/<(?:h3|h4|h5)[^>]*>([\s\S]*?)<\/(?:h3|h4|h5)>/gi)].map(m => clean(m[1]));
console.log('All project titles or h3-h5:', projectMatches);

// Find project image cards
const cardRegex = /<(?:div|article)[^>]*class=["'][^"']*(?:portfolio|project|jet-listing|elementor-post|elementor-card|swiper-slide)[^"']*["'][\s\S]*?<\/(?:div|article)>/gi;
const cards = [];
let cm;
while ((cm = cardRegex.exec(html)) !== null && cards.length < 15) {
  const content = cm[0];
  const title = content.match(/<(?:h2|h3|h4|h5)[^>]*>([\s\S]*?)<\/(?:h2|h3|h4|h5)>/i)?.[1];
  const img = content.match(/src=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/i)?.[1];
  if (title && img) {
    cards.push({ title: clean(title), img });
  }
}
console.log('Project cards found:', cards);

// 5. Why Choose Us / Trust Vision
const trustIdx = html.indexOf("Trust Your Vision to Mumbai's Finest");
if (trustIdx !== -1) {
  console.log('Why choose us text:');
  console.log(clean(html.slice(trustIdx, trustIdx + 1500)));
}

// 6. Testimonials
const testiSearch = html.match(/(?:testimonial|client says|review)[\s\S]{1,1500}/gi);
console.log('Testimonials search results count:', testiSearch?.length);
if (testiSearch) {
  console.log('Testimonial snippet:', clean(testiSearch[0]));
}

// 7. Contact Info & Address
const contactIdx = html.indexOf('Book Your Design Consultation Today');
if (contactIdx !== -1) {
  console.log('Contact snippet:');
  console.log(clean(html.slice(contactIdx, contactIdx + 1500)));
}

// Let's also look for address
const addrMatches = html.match(/Mumbai[^\.\n<]{1,100}/gi);
console.log('Address mentions in Mumbai:', addrMatches);

