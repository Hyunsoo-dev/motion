import { BaseComponent } from "../../component.js";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(
      `<section class="note">
        <p class="note__title"></p>
        <div class="note__content"><div>
      </section>`
    );

    const titleElement = this.element.querySelector(".note__title") as HTMLElement;
    titleElement.textContent = title;

    const contentElement = this.element.querySelector(".note__content") as HTMLElement;
    contentElement.textContent = content;
  }
}
