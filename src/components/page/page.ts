import { BaseComponent, Component } from "../component.js";
export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

class PageItemComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class='page-item'>
            <section class='page-item__body'></section>      
            <div class='page-item__control'>
              <button class='close'>X</button>
            </div>
          </li>`);
    const closeButton = this.element.querySelector(".close") as HTMLElement;
    closeButton.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }

  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    ) as HTMLElement;
    child.attachTo(container, "beforeend");
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    const htmlString = `<ul class="page"></ul>`;
    super(htmlString);
  }

  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
