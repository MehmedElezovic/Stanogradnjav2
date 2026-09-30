export const site = {
  name: 'Stanogradnja d.o.o. Sarajevo',
  tagline: 'Građevinarstvo, inžinjering, trgovina i usluge. Investitor stambenih objekata od 2008.',
  address: { street: 'Stupska 19 b-1', city: '71210 Ilidža', full: 'Stupska 19 b-1, 71210 Ilidža' },
  phones: [
    { label: '+387 62 386 733', href: 'tel:+38762386733' },
    { label: '+387 33 435 597', href: 'tel:+38733435597' },
  ],
  email: 'info@stanogradnja.ba',
  hours: '[Pon–Pet, 08–16h]', // TODO: potvrditi radno vrijeme
  idBroj: '[ID broj]', // TODO
  pdvBroj: '[PDV broj]', // TODO
  mapEmbed: 'https://www.google.com/maps?q=Stupska+19,+71210+Ilid%C5%BEa&output=embed',
  // Endpoint za kontakt formu (npr. Formspree: https://formspree.io/f/xxxxxx ili Web3Forms).
  // Ako je prazno, forma otvara e-mail klijent sa popunjenom porukom.
  formEndpoint: '',
  banks: [
    { name: 'Bosna Bank International d.d.', account: '[broj računa]' },
    { name: 'ASA Banka d.d.', account: '[broj računa]' },
    { name: 'Intesa Sanpaolo banka d.d.', account: '[broj računa]' },
    { name: 'Addiko Bank d.d.', account: '[broj računa]' },
  ],
};

export const nav = [
  { href: '/o-nama', label: 'O nama' },
  { href: '/aktuelni-projekat', label: 'Aktuelni projekat' },
  { href: '/zavrseni-projekti', label: 'Završeni projekti' },
];

export const project = {
  name: 'Bella Vita',
  location: 'Bulevar na Stupu',
  units: 80,
  commercial: 4,
  completion: 'Kraj 2027.',
};

export const specs = [
  { value: '10', unit: 'cm', label: 'Termo fasada EPS-F' },
  { value: '7', unit: 'komora', label: 'PVC prozorski profili' },
  { value: '3', unit: 'sloja', label: 'Troslojno staklo' },
  { value: '10', unit: 'cm', label: 'Plivajući podovi' },
  { icon: 'heat', label: 'Podno grijanje' },
  { icon: 'bath', label: 'Prvoklasne sanitarije, termo blok' },
];

export const team = [
  { name: '[Ime Prezime]', role: 'Direktor', photo: '/slike/tim/1.jpg' },
  { name: '[Ime Prezime]', role: 'Rukovodilac projekata', photo: '/slike/tim/2.jpg' },
  { name: '[Ime Prezime]', role: 'Nadzorni inženjer', photo: '/slike/tim/3.jpg' },
  { name: '[Ime Prezime]', role: 'Prodaja stanova', photo: '/slike/tim/4.jpg' },
];
