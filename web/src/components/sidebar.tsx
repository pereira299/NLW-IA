import { FileVideoIcon, UploadIcon, Wand2Icon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Slider } from "./ui/slider";

const Sidebar = () => {
    return (
        <aside className="w-72 spacey-y-6">
          <form>
            <label
              htmlFor="video"
              className="border w-full flex rounded-md aspect-video gap-2 cursor-pointer border-dashed text-sm flex-col justify-center items-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideoIcon className="w-4 h-4" />
              Carregar video
            </label>
            <input
              type="file"
              id="video"
              className="sr-only"
              accept="video/mp4"
            />
            <Separator className="mt-4 mb-1"/>
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="resize-none h-20 leading-relaxed"
                placeholder="Inclua palavras-chave do video separadas por vírgula..."
              />
              <Button type="submit" className="w-full">
                <UploadIcon className="w-4 h-4 ml-2" />
                Carregar video
              </Button>
            </div>
          </form>
          <Separator className="mt-4 mb-1"/>
          <form>
          <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..."/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="titulo">Titulo do YouTube</SelectItem>
                  <SelectItem value="descricao">Descrição do YouTube</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator className="mt-4 mb-1"/>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator className="mt-4 mb-1"/>
            <div className="space-y-4">
              <Label className="">Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              ></Slider>
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Valores mais altos tedem a gerar textos mais criativos, mas com menor coerência
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Executar
              <Wand2Icon className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
    )
}

export default Sidebar;