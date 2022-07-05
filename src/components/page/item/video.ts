import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, url: string) {
    super(`
      <div class="video">
        <p class="video__title"></p>
        <video class="video__box">
          <source>
        </video>
      </div>
    `);

    const titleElement = this.element.querySelector(
      ".video__title"
    ) as HTMLVideoElement;
    titleElement.textContent = title;

    const videoElement = this.element.querySelector(
      ".video__box"
    ) as HTMLElement;
    const sourceElement = videoElement.children[0] as HTMLSourceElement;

    console.log("this.element :", this.element);
    console.log("titleElement :", titleElement);
    sourceElement.src = url;
  }
}
