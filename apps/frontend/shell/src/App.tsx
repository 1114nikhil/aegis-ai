import { lazy, Suspense } from "react";

const WorkspaceApp = lazy(() => import("workspace/App"));

function App() {
  return (
    <main>
      <h1>Aegis AI</h1>

      <Suspense fallback={<p>Loading workspace...</p>}>
        <WorkspaceApp />
      </Suspense>
    </main>
  );
}

export default App;