import * as prismic from "@prismicio/client"
import * as prismicNext from "@prismicio/next"

export const repositoryName = "easy-sprayaway"

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 */
export function createClient({ previewData, req, ...config }: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient(repositoryName, {
    routes: [
      {
        type: "homepage",
        path: "/",
      },
      {
        type: "services",
        path: "/services",
      },
      {
        type: "about",
        path: "/about",
      },
      {
        type: "reviews",
        path: "/reviews",
      },
      {
        type: "gallery",
        path: "/gallery",
      },
      {
        type: "contact",
        path: "/contact",
      },
      {
        type: "page",
        path: "/:uid",
      },
    ],
    ...config,
  })

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}
