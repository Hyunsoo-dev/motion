import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent("Image Title", "https://picsum.photos/600/300");
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("Note Title", "Note Test");
    note.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document") as HTMLElement);
