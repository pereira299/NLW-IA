import { Button } from "./components/ui/button";
import { GithubIcon } from "lucide-react";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤ no NLW da Rocketseat
          </span>
          <Separator  orientation="vertical" className="h-6"/>
          <Button variant="outline">
            <GithubIcon className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </header>
      <main className="w-screen">
        
      </main>
    </div>
  );
}

export default App;
