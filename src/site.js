// One place for the business details, so a change here updates every page.
export const SITE = {
  name: 'Swastik Electrotech Automation',
  phones: ['9112233188', '9112233177'],
  email: 'swastikelectrotech.pune@gmail.com',
  address:
    'SURVEY NO. 36 1/2/4 Narhe Industrial Area, Near Canara Bank, NARHE, PUNE -411041, MAHARASHTRA, INDIA.',
  gstin: '27ABNPI2487BIZN',
  waNumber: '919112233188',
  mapsQuery: 'Swastik Electrotech Automation Narhe Pune',
};

export const waLink = (lines) =>
  `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(lines.join('\n'))}`;

export const DEFAULT_WA = waLink([
  'Hello Swastik Electrotech Automation,',
  'I would like a PCB quote.',
]);

export const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
