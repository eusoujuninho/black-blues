interface PageViewRest {
  [key: string]: any;
}

export const gtmPageView = (rest: PageViewRest) => {
  window.dataLayer?.push({
    event: "page_view",
    url: window.location.href,
    ...rest,
  });
};
