import { getOpenPRs, type PullRequest } from "@/lib/github";
import { PRListClient } from "./PRListClient";

export async function PRList() {
  let prs: PullRequest[] | null = null;
  let error: string | null = null;

  try {
    prs = await getOpenPRs();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch PRs";
  }

  return <PRListClient prs={prs ?? []} error={error} />;
}
