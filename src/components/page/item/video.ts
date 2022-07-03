import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, url: string) {
    super(`
      <div class="video">
        <p class="video__title"></p>
        <video class="video_box"></video>
      </div>
    `);
  }
}
