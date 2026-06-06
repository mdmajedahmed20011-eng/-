import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "আচার বাড়ি - Achar Bari | ঘরে তৈরি ১০০% খাঁটি ও সুস্বাদু আচার" },
      { name: "description", content: "আচার বাড়ি (Achar Bari) দিচ্ছে ১০০% খাঁটি ও ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু আচার। আমের আচার, জলপাই আচার, রসুনের আচার, তেঁতুলের আচারসহ বিভিন্ন স্বাদের জিভে জল আনা আচার অর্ডার করুন এখনই!" },
      { name: "author", content: "আচার বাড়ি - Achar Bari" },
      { property: "og:title", content: "আচার বাড়ি - Achar Bari | ঘরে তৈরি ১০০% খাঁটি ও সুস্বাদু আচার" },
      { property: "og:description", content: "আচার বাড়ি (Achar Bari) দিচ্ছে ১০০% খাঁটি ও ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু আচার। আমের আচার, জলপাই আচার, রসুনের আচার, তেঁতুলের আচারসহ বিভিন্ন স্বাদের জিভে জল আনা আচার অর্ডার করুন এখনই!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@AcharBari21" },
      { name: "twitter:title", content: "আচার বাড়ি - Achar Bari" },
      { name: "twitter:description", content: "আচার বাড়ি (Achar Bari) দিচ্ছে ১০০% খাঁটি ও ঘরোয়া পদ্ধতিতে তৈরি সুস্বাদু আচার।" },
      { property: "og:image", content: "/assets/hero-banner.png" },
      { name: "twitter:image", content: "/assets/hero-banner.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
