const sitePath = "react-github-pages-test";

const prependSitePath = (slug) => {
  if (!slug) return `/${sitePath}`;
  return `/${sitePath}/${slug}`;
};

const Urls = {
  homepage: "",
  about: "about",
};

const RouteUrls = {};
Object.keys(Urls).forEach((key) => {
  RouteUrls[key] = prependSitePath(Urls[key]);
});

export default RouteUrls;
