import Sidebar from "./sidebar";
import { Textarea } from "./ui/textarea";

const Content = () => {
    return (
        <main className="flex-1 flex gap-6 p-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              placeholder="Inclua o prompt data a IA..."
              className="resize-none p-4 leading-relaxed"
            ></Textarea>
            <Textarea
              placeholder="Resultado da IA..."
              readOnly
              className="resize-none p-4 leading-relaxed"
            ></Textarea>
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável{" "}
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteúdo da transcrição do video
            selecionado.
          </p>
        </div>
        <Sidebar />
      </main>
    )
}

export default Content;