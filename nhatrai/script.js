const cover = document.getElementById('cover');
const openButton = document.getElementById('openInvite');
openButton.addEventListener('click', () => {
  cover.hidden = true;
  document.getElementById('main').focus();
});

const guest = new URLSearchParams(location.search).get('guest');
if (guest && guest.trim()) {
  const line = document.createElement('p');
  line.className = 'cover-guest';
  line.textContent = `Kính mời ${guest.trim()}`;
  document.querySelector('.cover-rule').after(line);
}

const eventStart = '20270102T113000';
const eventEnd = '20270102T143000';
const calendar = document.getElementById('calendarLink');
calendar.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Tiệc cưới Văn Tâm & Thanh Tuấn - Nhà trai')}&dates=${eventStart}/${eventEnd}&ctz=Asia%2FHo_Chi_Minh&details=${encodeURIComponent('Trân trọng kính mời chung vui cùng gia đình chúng tôi.')}&location=${encodeURIComponent('Thôn Thanh Bình, Bảo Lâm 3, Lâm Đồng')}`;
calendar.target = '_blank';
calendar.rel = 'noopener noreferrer';

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');
let previousFocus;
document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => {
  const img = button.querySelector('img');
  previousFocus = button;
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightbox.hidden = false;
  closeLightbox.focus();
}));
function closePhoto() { lightbox.hidden = true; lightboxImage.removeAttribute('src'); previousFocus?.focus(); }
closeLightbox.addEventListener('click', closePhoto);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closePhoto(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) closePhoto(); });
