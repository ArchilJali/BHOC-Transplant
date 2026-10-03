# BHOC Transplant

This repository publishes the [BHOC Transplant website](https://bhoctransplant.com/) from `main` through GitHub Pages. The public site presents the research journey from donor to recovery, scientific concepts, news, partners and contact.

## Evidence architecture

- [BHOC Transplant evidence platform](https://archiljali.github.io/BHOC-Transplant-platform/) is the separate home for new transplant-related evidence records, source-linked research summaries and methodology. The site’s Evidence page links there.
- [BHOC Platform transplant catalogue](https://bhoctherapeutics.com/evidence/library/transplant/Transplant-index.html) keeps the historical/direct HBOC and oxygen-carrier publications. It is the source catalogue, not a second editable copy of the new related-evidence collection.
- Studies about organ preservation or perfusion are scientific context; they do not establish BHOC transplant efficacy, safety or an approved indication.

The canonical public URL for this repository is `https://bhoctransplant.com/`. Internal network links should use that domain rather than a repository-name-dependent GitHub Pages project URL.


## News navigation

Every news article must include a visible breadcrumb above its heading: BHOC Transplant → News → current article. The first two levels link to `/` and `/news.html`; the current article is plain text with `aria-current="page"`. The News listing uses BHOC Transplant → News.

Use the shared `/assets/news-navigation.css` stylesheet and `.news-breadcrumbs` markup. Keep this navigation in the HTML so it works without JavaScript, and keep its labels and destinations consistent with the page's `BreadcrumbList` structured data. Check the breadcrumb links and wrapping on desktop and mobile before publishing a new article.
