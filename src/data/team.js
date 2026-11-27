// `focus` sets the object-position so each face sits well inside the portrait crop;
// `crop` zooms past a border baked into the source photo.
export const leadership = [
  { slug: 'sagar', name: 'Sagar', role: 'Chief Executive Officer', bio: 'Working for the past 10 years in IT and Business Development fields.', photo: '/team-sagar.jpg', focus: 'center 20%' },
  { slug: 'kunal-kurmi', name: 'Kunal Kurmi', role: 'Chief Operating Officer', bio: 'B.Tech graduate of Thakur College of Engineering and Technology. Experienced with Spectrum, driving OnAssist and VWarranty.', photo: '/team-kunal.jpg', focus: 'center 25%' },
  { slug: 'ketan', name: 'Ketan', role: 'Chief Strategy Officer', bio: 'Worked with Onsitego, bringing 8 years of deep expertise in the extended warranty field.', photo: '/team-ketan.jpg', focus: 'center 20%', crop: 1.07 },
  { slug: 'vivek-gupta', name: 'Vivek Gupta', role: 'Lead Software Developer', bio: 'The architect behind the tech — driving digital platforms, web systems, and engineering infrastructure.', photo: '/team-vivek.jpg', focus: 'center 18%' },
  { slug: 'ashish', name: 'Ashish', role: 'Chief Financial Officer / Advisor', bio: 'Our dedicated financial advisor, ensuring robust economic growth and stability.', photo: '/team-ashish.jpg', focus: 'center 25%' },
  { slug: 'janak-shah', name: 'Janak Shah', role: 'Investor', bio: 'Strategic investor backing our vision for the future of IT and EMI security.', photo: '/team-janak.jpg', focus: 'center 20%' },
].filter(record => record.published !== false);

