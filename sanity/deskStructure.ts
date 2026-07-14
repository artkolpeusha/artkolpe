import type { StructureResolver } from "sanity/desk";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Gallery Page")
        .id("galleryPage")
        .child(S.document().schemaType("galleryPage").documentId("galleryPage")),
      S.listItem()
        .title("Awards Page")
        .id("awardsPage")
        .child(S.document().schemaType("awardsPage").documentId("awardsPage")),
      S.listItem()
        .title("Exhibitions Page")
        .id("exhibitionsPage")
        .child(S.document().schemaType("exhibitionsPage").documentId("exhibitionsPage")),
      S.listItem()
        .title("Advocacy Page")
        .id("advocacyPage")
        .child(S.document().schemaType("advocacyPage").documentId("advocacyPage")),
      S.listItem()
        .title("Contact Page")
        .id("contactPage")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      S.documentTypeListItem("galleryCategory").title("Gallery Categories"),
      S.documentTypeListItem("artwork").title("Artworks"),
      S.documentTypeListItem("award").title("Awards"),
      S.documentTypeListItem("exhibition").title("Exhibitions"),
    ]);
