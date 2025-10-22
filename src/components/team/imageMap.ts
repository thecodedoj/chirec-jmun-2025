// This file statically imports all images located in this folder and
// exposes a resolver that maps various filename variants to the imported
// asset. This helps when `teamData` contains snake_case filenames but the
// actual files are named in CamelCase/TitleCase.

import AadhyaPanchal from './AadhyaPanchal.png';
import AditiSandeep from './AditiSandeep.png';
import AishaJain from './AishaJain.png';
import AnikaKruthiventi from './AnikaKruthiventi.png';
import AnushaAnchlia from './AnushaAnchlia.png';
import AnwithaVeldanda from './AnwithaVeldanda.png';
import ArnavReddyJakka from './ArnavReddyJakka.png';
import ArnavSumitLahoti from './ArnavSumitLahoti.png';
import AryaShiralkar from './AryaShiralkar.png';
import DakshitaReddy from './DakshitaReddy.png';
import DevAgarwal from './DevAgarwal.png';
import DhirenSaiVollala from './DhirenSaiVollala.png';
import HansiniDantaluri from './HansiniDantaluri.png';
import HiteshVallabhaneni from './HiteshVallabhaneni.png';
import IyraReddy from './IyraReddy.png';
import LaasyaVemuri from './LaasyaVemuri.png';
import NandithaRao from './NandithaRao.png';
import NeelYalamanchili from './NeelYalamanchili.png';
import NishantGottumukala from './NishantGottumukala.png';
import SharvinaSrivatsava from './SharvinaSrivatsava.png';
import SourabhiSomani from './SourabhiSomani.png';
import VihaanPaidi from './VihaanPaidi.png';

// Build a map of normalized keys -> imported image module
const imports = {
  AadhyaPanchal,
  AditiSandeep,
  AishaJain,
  AnikaKruthiventi,
  AnushaAnchlia,
  AnwithaVeldanda,
  ArnavReddyJakka,
  ArnavSumitLahoti,
  AryaShiralkar,
  DakshitaReddy,
  DevAgarwal,
  DhirenSaiVollala,
  HansiniDantaluri,
  HiteshVallabhaneni,
  IyraReddy,
  LaasyaVemuri,
  NandithaRao,
  NeelYalamanchili,
  NishantGottumukala,
  SharvinaSrivatsava,
  SourabhiSomani,
  VihaanPaidi,
};

function normalizeKey(name: string) {
  // remove extension, lower-case, remove non-alphanumeric
  const base = name.replace(/\.[^.]+$/, '');
  return base.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

const map = new Map<string, string | { src?: string }>();
for (const [key, val] of Object.entries(imports)) {
  const norm = normalizeKey(key);
  map.set(norm, val as any);
  // also map common variants: underscore and lowercase with underscores
  const underscore = norm.replace(/([a-z])([0-9])/g, '$1$2');
  map.set(underscore, val as any);
}

export function resolveLocalImage(filename: string): string | undefined {
  if (!filename) return undefined;
  const norm = normalizeKey(filename);
  const found = map.get(norm);
  if (!found) return undefined;
  // imported image may be a string URL or object with src
  // @ts-ignore
  return typeof found === 'string' ? found : found?.src ?? (found as any)?.default?.src;
}

export default resolveLocalImage;
