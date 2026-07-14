import { type SchemaTypeDefinition } from "sanity";

import aboutPage from "../../schemas/aboutPage";
import advocacyPage from "../../schemas/advocacyPage";
import award from "../../schemas/award";
import awardsPage from "../../schemas/awardsPage";
import artwork from "../../schemas/artwork";
import contactPage from "../../schemas/contactPage";
import exhibition from "../../schemas/exhibition";
import exhibitionsPage from "../../schemas/exhibitionsPage";
import galleryCategory from "../../schemas/galleryCategory";
import galleryPage from "../../schemas/galleryPage";
import homepage from "../../schemas/homepage";
import siteSettings from "../../schemas/siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homepage,
    aboutPage,
    galleryPage,
    awardsPage,
    exhibitionsPage,
    advocacyPage,
    contactPage,
    galleryCategory,
    artwork,
    award,
    exhibition,
  ],
};
