import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent<HTMLLIElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
              <div class="video__player">
                <iframe class="video__iframe"></iframe>
              </div>
              <h3 class="video__title"></h3>
            </section>`);
    const iframe = this.element.querySelector(
      ".video__iframe"
    ) as HTMLIFrameElement;

    const embedUrl = url.replace("watch?v=", "embed/");
    iframe.src = embedUrl;

    const titleElement = this.element.querySelector(
      ".video__title"
    ) as HTMLHeadingElement;
    titleElement.textContent = title;
    // <iframe
    //   width="1280"
    //   height="720"
    //   src="https://www.youtube.com/embed/_--SVJhQzx8"
    //   title="[6 Hours] 뉴욕 재즈카페에서 피아니스트 사장님이 틀어주는 감성재즈 Playlist / 카페, 매장음악 / 공부, 독서, 힐링, 커피, 병원, 수면, 재택 / 중간광고 없음"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowfullscreen
    // ></iframe>;
  }
}
