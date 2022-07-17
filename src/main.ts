import { PageComponent } from "./components/page/page.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { Composable } from "./components/page/page.js";
import { Component } from "./components/component.js";
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const note = new NoteComponent("Note Title", "Note Test");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("todo test", "go home");
    todo.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Music video",
      // "https://www.youtube.com/embed/_--SVJhQzx8"
      "https://www.youtube.com/watch?v=_--SVJhQzx8"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document") as HTMLElement);
