import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "../App";
import { projectsData } from "../data/projects";
import { singleProjectDataArray } from "../data/singleProjectDataArray";

// Render the whole app at a given URL. App uses BrowserRouter, which reads
// window.location, so we change the URL with the History API before rendering.
// HelmetProvider is required because every page renders <SEO /> (react-helmet-async).
const renderAt = (path) => {
  window.history.pushState({}, "", path);
  return render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
};

// jsdom does not implement window.scrollTo (used by ScrollToTop on every
// route change), so stub it to keep the test output clean.
beforeEach(() => {
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("routing", () => {
  test("renders the home page at /", async () => {
    renderAt("/");
    // Pages are lazy-loaded, so wait for them with findBy* (async) instead of getBy*
    expect(await screen.findByText(/Hi, I am Taylor/i)).toBeInTheDocument();
  });

  test("renders the matching project detail from the URL id", async () => {
    renderAt("/projects/single-project/3");
    const titles = await screen.findAllByText("RTSP ABSA Industrial");
    expect(titles.length).toBeGreaterThan(0);
  });

  test("shows NotFound for an unknown route", async () => {
    renderAt("/this-route-does-not-exist");
    expect(await screen.findByText(/Page Not Found/i)).toBeInTheDocument();
  });

  test("shows NotFound for a project id that does not exist", async () => {
    renderAt("/projects/single-project/999");
    expect(await screen.findByText(/Page Not Found/i)).toBeInTheDocument();
  });
});

describe("project data", () => {
  // SingleProjectContext looks up the detail by array position
  // (singleProjectDataArray[id - 1]), not by id. If the two data files get out
  // of order, a card would open another project's detail page without any error.
  test.each(projectsData.map((p) => [p.id, p.title]))(
    "project %i (%s) links to its own detail page",
    (id, title) => {
      const detail = singleProjectDataArray[id - 1];
      expect(detail).toBeDefined();
      expect(detail.ProjectHeader.title).toBe(title);
    }
  );
});
